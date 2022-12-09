
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GcformService } from 'src/app/services/gcform.service';
import { filter } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gcForeginer',
  templateUrl: './gcForeginer.component.html',
  styleUrls: ['./gcForeginer.component.css']
})
export class GcForeginerComponent implements OnInit {

  Gc:any;
  p:number = 1;

  searchText:any;
  gcNumber:any;
  company:any;
  dateOfJoining:any;
  course:any;
  status:any;
  remark:any;
  bankAccount:any;
  country:any;
  name:any;
  battalion:any;





  constructor(
    private gcFormservice:GcformService,
    private routes:Router,
    private modalService: NgbModal
  ) { }

  ngOnInit():void {
    this.loadGc();
  }



  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  closeResult = '';
  open(content:any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
loadGc(){

this.gcFormservice.listGc().subscribe((data:any[])=>{

//console.log(data);
this.Gc = data.filter( s => s.country != 'India').filter( s => s.typeOfForm == 'gc')
;

}
)
}
}
