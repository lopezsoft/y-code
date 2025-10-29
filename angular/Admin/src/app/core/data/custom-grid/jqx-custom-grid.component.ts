import {AfterViewInit, Injectable, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// Services
import { ApiServerService, MessagesService } from '../../../utils';
// Base component
import { BaseComponent } from '../../components/base/base.component';
import {ColumnContract, ExodoGridComponent} from 'exodolibs';
@Injectable()
export class JqxCustomGridComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild('exodoGrid') exodoGrid: ExodoGridComponent;
  datafields: any = [];
  sourceColumns: any = [];
  pagesize = 10;
  showActions   = true;
  showNewButton = true;
  showRowNumber = false;
  hideEdit      = false;
  hideDelete    = false;
  public eColumns: ColumnContract[] = [
    {
      text: '#',
      dataIndex: '#',
      width: '16px',
      align: 'right',
      cellRender: (row, rowIndex): string => {
        return '<b>' + (rowIndex + 1).toString() + '</b>';
      }
    }
  ];

  public title              = 'Encabezado del grid';
  public useImport          = false;
  public useOtherButton     = false;
  public textOtherButton    = 'Texto del botón';
  public faOtherButton      = 'fa fa-upload mr-1 fas-fa-22';
  public active             = 1;
  public crudApi: {
    create: string,
    read: string,
    update: string,
    delete: string,
    params?: any
  };
  columns: ColumnContract[]      = [];
  constructor(public msg: MessagesService,
              public api: ApiServerService,
              public router: Router,
              public translate: TranslateService,
              public aRouter: ActivatedRoute,
  ) {
    super(api, router, translate);
  }
  ngOnInit(): void {
    this.combineColumns();
  }
  combineColumns() {
    if (this.showActions) {
      const editCell: any = {
        text: '',
        dataIndex: '#edit#',
        width: '16px',
        tooltip: 'Editar',
        tooltipDirection: 'left',
        cellRender: (): string => {
          return `<span class="span-button">
            <i class="fas fa-edit fa-cursor fas-fa-edit"></i>
          </span>`;
        },
        cellClick: (row: any): void => {
          this.editData(row);
        }
      };
      const deleteCell: any = {
        text: '',
        dataIndex: '#delete#',
        width: '16px',
        tooltip: 'Eliminar',
        tooltipDirection: 'left',
        cellRender: (): string => {
          return `<span class="span-button">
            <i class="fas fa-trash-alt fa-cursor fas-fa-delete"></i>
          </span>`;
        },
        cellClick: (row: any): void => {
          this.deleteData(row);
        }
      };
      if (!this.hideEdit) {
        this.eColumns.push(
          editCell,
        );
      }
      if (!this.hideDelete) {
        this.eColumns.push(
          deleteCell
        );
      }
    }
    this.eColumns = [...this.eColumns, ...this.columns];
  }
  ngAfterViewInit(): void {
    this.exodoGrid.proxy.api = {
      read: `${this.api.getUrl()}${this.crudApi.read}`,
    };
    const params = this.crudApi?.params ?? {};
    this.exodoGrid.onLoad({
      ...params
    });
  }
  editData(data: any): void {
    // Implements
    this.saveRoute();
  }
  deleteData(data: any): void {
    const ts    = this;
    const lang  = ts.translate;
    // Implements
    ts.msg.confirm(lang.instant('titleMessages.delete'), lang.instant('bodyMessages.delete'))
      .then((result) => {
        if (result.value) {
          ts.exodoGrid.isLoading = true;
          const params = this.crudApi?.params ?? {};
          ts.api.delete(`${ts.crudApi.delete}${data.uid || data.id}`, params)
            .subscribe({
              next: () => {
                ts.exodoGrid.isLoading = false;
                ts.exodoGrid.searchQuery(ts.exodoGrid.getSearchFieldValue());
              },
              error:  (err: string) => {
                ts.exodoGrid.isLoading = false;
                ts.msg.errorMessage(lang.instant('general.error'), err);
              }
            });
        }
      });
  }

  createData(): void {
    // Implements
    this.saveRoute();
  }

  importData(): void {
    // Implements
    localStorage.setItem('oldRoute', this.router.url);
  }

  onOtherButton(): void {
    // Implements
    localStorage.setItem('oldRoute', this.router.url);
  }

  saveRoute(): void {
    localStorage.setItem('oldRoute', this.router.url);
  }
  downloadFile(endPoint: string) {
    const ts = this;
    const params = this.crudApi?.params ?? {};
    ts.api.get(endPoint, params)
      .subscribe({
        next: (resp: any) => {
          ts.api.openDocument(`${ts.api.getAppUrl()}${resp.pathFile}`);
        },
        error: (err: string) => {
          ts.msg.errorMessage('Error al descargar el archivo.', err);
        }
      });
  }
  goBack(): void {
    window.history.back();
  }
  goToParent(): void {
    const currentUrl = this.router.url;
    const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
    this.router.navigateByUrl(parentUrl);
  }
}
