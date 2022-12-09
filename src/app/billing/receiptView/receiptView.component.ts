import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BillingformService } from 'src/app/services/billingform.service';

import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-receiptView',
  templateUrl: './receiptView.component.html',
  styleUrls: ['./receiptView.component.css'],
})
export class ReceiptViewComponent implements OnInit {
  Billing: any;

  gcNumber: any;
  gcType: any;
  recordNo: any;
  billNoDetails: any;
  date: any;
  amount: any;
  name: any;
  searchText: any;
  p: number = 1;


  modecheque: any;




  constructor(
    private BillingFormservice: BillingformService,
    private routes: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadBilling();
  }

  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  closeResult = '';
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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



  loadBilling() {
    this.BillingFormservice.listBillingForm().subscribe((data: any[]) => {
      //console.log(data);
      this.Billing = data.filter((s) => s.typeOfForm == 'billing');
    });
  }
}
