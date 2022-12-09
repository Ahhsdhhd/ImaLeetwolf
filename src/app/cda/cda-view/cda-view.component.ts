import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdaService } from 'src/app/services/cda.service';
@Component({
  selector: 'app-cda-view',
  templateUrl: './cda-view.component.html',
  styleUrls: ['./cda-view.component.css']
})
export class CdaViewComponent implements OnInit {




  cda:any;
  searchText:any;
  showMe:boolean=true;

  p:number=1;
   constructor(

    private cdaFormService:CdaService,
    private routes:Router
   ) { }

  ngOnInit(): void {

    this.loadcda();
  }


  loadcda(){
    this.cdaFormService.listCdaForm().subscribe((data:any)=>{

this.cda=data;

    })


}
}
