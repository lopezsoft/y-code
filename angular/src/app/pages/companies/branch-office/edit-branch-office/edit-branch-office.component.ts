import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServerService, MessagesService } from 'src/app/utils';
import { JsonResponse } from 'src/app/interfaces';


@Component({
  selector: 'app-edit-branch-office',
  templateUrl: './edit-branch-office.component.html',
  styleUrls: ['./edit-branch-office.component.scss']
})
export class EditBranchOfficeComponent implements OnInit {

  fields: object;
  query: string;
  id: number;
  public data: any;
  constructor(private route: ActivatedRoute,public msg: MessagesService, public api: ApiServerService, public router: Router) {
    this.fields = {};
  }

  ngOnInit(): void {
    // el super trae otro parametro ápi
    this.id = parseInt( this.route.snapshot.paramMap.get('id') )
    this.query = `/companies/branchoffice/read/${this.id}`;

    let r = this.api.get(this.query, null)
    r.subscribe( (resp: JsonResponse) => { this.data = resp.records; console.log(this.data)} )
  }


  OnSave(): void{

  }
}
