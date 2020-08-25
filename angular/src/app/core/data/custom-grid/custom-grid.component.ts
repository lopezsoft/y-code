import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularGridInstance,
  AutocompleteOption,
  Column,
  Editors,
  EditorArgs,
  EditorValidator,
  FieldType,
  Filters,
  Formatters,
  GridOption,
  OnEventArgs,
  OperatorType,
  Sorters,
  GridOdataService,
  GraphqlService,
  GridStateChange,
  Metrics,
  OdataOption,
} from 'angular-slickgrid';

import { CustomInputEditor } from './../custom-inputEditor';
import { CustomInputFilter } from './../custom-inputFilter';
import { Subject } from 'rxjs';

declare var Slick: any;
declare var $: any;

// you can create custom validator to pass to an inline editor
const myCustomTitleValidator: EditorValidator = (value: any, args: EditorArgs) => {
  // you can get the Editor Args which can be helpful, e.g. we can get the Translate Service from it
  const grid = args && args.grid;
  const gridOptions = (grid && grid.getOptions) ? grid.getOptions() : {};
  const translate = gridOptions.i18n;

  // to get the editor object, you'll need to use "internalColumnEditor"
  // don't use "editor" property since that one is what SlickGrid uses internally by it's editor factory
  const columnEditor = args && args.column && args.column.internalColumnEditor;

  if (value == null || value === undefined || !value.length) {
    return { valid: false, msg: 'This is a required field' };
  } else if (!/^Task\s\d+$/.test(value)) {
    return { valid: false, msg: 'Your title is invalid, it must start with "Task" followed by a number' };
    // OR use the Translate Service with your custom message
    // return { valid: false, msg: translate.instant('YOUR_ERROR', { x: value }) };
  } else {
    return { valid: true, msg: '' };
  }
};

// create a custom Formatter to show the Task + value
const taskFormatter = (row, cell, value, columnDef, dataContext) => {
  if (value && Array.isArray(value)) {
    const taskValues = value.map((val) => `Task ${val}`);
    const values = taskValues.join(', ');
    return `<span title="${values}">${values}</span>`;
  }
  return '';
};

// Services
import { ApiServerService, MessagesService } from '../../../utils/index';

// Base component
import { BaseComponent } from '../../components/base/base.component';

export class CustomGridComponent extends BaseComponent {
  private _commandQueue = [];
  angularGrid: AngularGridInstance;
  columnDefinitions: Column[];
  gridColumns: any[];
  gridOptions: GridOption;
  dataset: any[];
  gridObj: any;
  isAutoEdit = true;
  alertWarning: any;
  updatedObject: any;
  selectedLanguage = 'es';
  duplicateTitleHeaderCount = 1;
  metrics: Metrics;
  defaultPageSize = 20;

  odataQuery      = '';
  processing      = true;
  status          = { text: 'processing...', class: 'alert alert-danger' };
  queryUrl: string;
  graphqlService: GraphqlService;
  gridOdataService: GridOdataService;
  constructor(public msg: MessagesService, public api: ApiServerService, public router: Router) {
    super(api, router);
    this.graphqlService = new GraphqlService();
    this.gridOdataService = new GridOdataService();
  }

  angularGridReady(angularGrid: AngularGridInstance): void {
    this.angularGrid  = angularGrid;
    this.gridObj      = angularGrid.slickGrid;
  }

  displaySpinner(isProcessing): void {
    this.processing = isProcessing;
    this.status = (isProcessing)
      ? { text: 'processing...', class: 'alert alert-danger' }
      : { text: 'done', class: 'alert alert-success' };
  }

  prepareGrid(): void {
    let columns = this.gridColumns;

    columns.push({
      id: 'edit',
      field: 'id',
      excludeFromColumnPicker: true,
      excludeFromGridMenu: true,
      excludeFromHeaderMenu: true,
      formatter: Formatters.editIcon,
      minWidth: 30,
      maxWidth: 30,
      // use onCellClick OR grid.onClick.subscribe which you can see down below
      onCellClick: (e: Event, args: OnEventArgs) => {
        this.onCellClickEdit(e, args);
      }
    },
    {
      id: 'delete',
      field: 'id',
      excludeFromColumnPicker: true,
      excludeFromGridMenu: true,
      excludeFromHeaderMenu: true,
      formatter: Formatters.deleteIcon,
      minWidth: 30,
      maxWidth: 30,
      // use onCellClick OR grid.onClick.subscribe which you can see down below
      onCellClick: (e: Event, args: OnEventArgs) => {
        this.onCellClickDelete(e, args);
      }
    });

    this.columnDefinitions = columns;

    this.gridOptions = {
      asyncEditorLoading    : false,
      enableAutoResize      : true,
      autoEdit              : this.isAutoEdit,
      autoCommitEdit        : false,
      editable              : true,
      enableCellNavigation  : true,
      enableColumnPicker    : true,
      enableExcelCopyBuffer : true,
      enableFiltering       : true,
      enableRowSelection    : true,
      showHeaderRow         : false,
      editCommandHandler: (item, column, editCommand) => {
        this._commandQueue.push(editCommand);
        editCommand.execute();
      },
      enablePagination    : true,
      autoHeight: true,
      autoResize: {
        sidePadding: 10
      },
      pagination: {
        pageSizes   : [5, 10, 15, 20, 25, 30, 40, 50, 75, 100],
        pageSize    : this.defaultPageSize,
        totalItems  : 0
      },
      backendServiceApi: {
        service: this.gridOdataService,
        options: {
          enableCount: true, // add the count in the OData query, which will return a property named "odata.count" (v2) or "@odata.count" (v4)
          version: 4       // defaults to 2, the query string is slightly different between OData 2 and 4
        } as OdataOption,
        // define all the on Event callbacks
        preProcess: () => this.displaySpinner(true),
        process: (query) => this.getData(query),
        postProcess: (response) => {
          this.metrics = response.metrics;
          this.displaySpinner(false);
          this.gridOptions.pagination.totalItems = response.total;
          if (this.metrics) {
            this.metrics.totalItemCount = response.total;
          }
          this.gridOptions = Object.assign({}, this.gridOptions);
          this.dataset  = response.records;
        }
      }
      // i18n: this.translate
    };

  }

  onCellClickEdit(e: Event, args: OnEventArgs): void {
    console.log(args);
    this.alertWarning = `Editing: ${args.dataContext.title}`;
    this.angularGrid.gridService.highlightRow(args.row, 1500);
    this.angularGrid.gridService.setSelectedRow(args.row);
  }

  onCellClickDelete(e: Event, args: OnEventArgs): void {
    console.log(args);

    this.alertWarning = `Deleting: ${args.dataContext.title}`;

  }

  // Web API call
  getData(query) {
    const queryParams = query.toLowerCase().split('&');
    let top: number;
    let skip = 0;
    let orderBy = '';
    for (const param of queryParams) {
      if (param.includes('$top=')) {
        top = +(param.substring('$top='.length));
      }
      if (param.includes('$skip=')) {
        skip = +(param.substring('$skip='.length));
      }
      if (param.includes('$orderby=')) {
        orderBy = param.substring('$orderby='.length);
      }
    }
    const extraParams = {
      limit : top,
      start : skip
    };
    return this.api.get(this.queryUrl, extraParams);
  }

  addItem(): void {
    const lastRowIndex = this.dataset.length;
    // const newRows = this.mockData(1, lastRowIndex);

    // wrap into a timer to simulate a backend async call
    setTimeout(() => {
      const requisiteColumnDef = this.columnDefinitions.find((column: Column) => column.id === 'prerequisites');
      if (requisiteColumnDef) {
        const filterCollectionAsync = requisiteColumnDef.filter.collectionAsync;
        const editorCollection = requisiteColumnDef.editor.collection;

        if (Array.isArray(editorCollection)) {
          // add the new row to the grid
          // this.angularGrid.gridService.addItem(newRows[0]);

          // Push to the Editor "collection"
          editorCollection.push({ value: lastRowIndex, label: lastRowIndex, prefix: 'Task' });

          if (filterCollectionAsync instanceof Subject) {
            filterCollectionAsync.next(editorCollection);
          }
        }
      }
    }, 250);
  }


  deleteItem(): void {
    const requisiteColumnDef = this.columnDefinitions.find((column: Column) => column.id === 'prerequisites');
    if (requisiteColumnDef) {
      const filterCollectionAsync = requisiteColumnDef.filter.collectionAsync;
      const filterCollection = requisiteColumnDef.filter.collection;

      if (Array.isArray(filterCollection)) {
        // sort collection in descending order and take out last collection option
        const selectCollectionObj = this.sortCollectionDescending(filterCollection).pop();

        if (filterCollectionAsync instanceof Subject) {
          filterCollectionAsync.next(filterCollection);
        }
      }
    }
  }

  sortCollectionDescending(collection): any {
    return collection.sort((item1, item2) => item1.value - item2.value);
  }

  onCellChanged(e, args): void {
    this.updatedObject = args.item;
  }
// este es el generico para construir los datatables
  onCellClicked(e, args): void {
    const metadata = this.angularGrid.gridService.getColumnFromEventArguments(args);
    console.log(metadata);

    if (metadata.columnDef.id === 'edit') {
      // this.alertWarning = `open a modal window to edit: ${metadata.dataContext.title}`;
      console.log( metadata.columnDef)

      this.router.navigate(['/pages/companies/branch-office/edit/' + metadata.dataContext.id]);

      // highlight the row, to customize the color, you can change the SASS variable $row-highlight-background-color
      this.angularGrid.gridService.highlightRow(args.row, 1500);

      // you could also select the row, when using "enableCellNavigation: true", it automatically selects the row
      // this.angularGrid.gridService.setSelectedRow(args.row);
    } else if (metadata.columnDef.id === 'delete') {
      if (confirm('¿Desea eliminar el registro?')) {
        console.log(`Delete ${metadata.dataContext.id}`)
        // this.api.post(`/companies/branchoffice/deleteBranchOffice/${metadata.columnDef.id}`,metadata.columnDef.id );
        // this.angularGrid.gridService.deleteDataGridItemById(metadata.dataContext.id);
      }
    }
  }

  onCellValidationError(e, args): void {
    alert(args.validationResults.msg);
  }

  changeAutoCommit(): boolean {
    this.gridOptions.autoCommitEdit = !this.gridOptions.autoCommitEdit;
    this.gridObj.setOptions({
      autoCommitEdit: this.gridOptions.autoCommitEdit
    });
    return true;
  }

  dynamicallyAddTitleHeader(): void {
    const newCol = {
      id: `title${this.duplicateTitleHeaderCount++}`,
      name: 'Title',
      field: 'title',
      editor: {
        model: Editors.text,
        required: true,
        validator: myCustomTitleValidator, // use a custom validator
      },
      sortable: true, minWidth: 100, filterable: true, params: { useFormatterOuputToFilter: true }
    };

    // you can dynamically add your column to your column definitions
    // and then use the spread operator [...cols] OR slice to force Angular to review the changes
    this.columnDefinitions.push(newCol);
    this.columnDefinitions = this.columnDefinitions.slice(); // or use spread operator [...cols]
  }

  dynamicallyRemoveLastColumn(): void {
    this.columnDefinitions.pop();
    this.columnDefinitions = this.columnDefinitions.slice();
  }

  setAutoEdit(isAutoEdit): boolean {
    this.isAutoEdit = isAutoEdit;
    this.gridObj.setOptions({ autoEdit: isAutoEdit }); // change the grid option dynamically
    return true;
  }

  undo(): void {
    const command = this._commandQueue.pop();
    if (command && Slick.GlobalEditorLock.cancelCurrentEdit()) {
      command.undo();
      this.gridObj.gotoCell(command.row, command.cell, false);
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
