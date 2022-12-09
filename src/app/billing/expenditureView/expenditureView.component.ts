import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';

@Component({
  selector: 'app-expenditureView',
  templateUrl: './expenditureView.component.html',
  styleUrls: ['./expenditureView.component.css'],
})
export class ExpenditureViewComponent implements OnInit {
  expenditure: any;
  p: number = 1;

  name: any;
  gcNumber: any;
  gcType: any;
  recordNo: any;
  billNoDetails: any;
  date: any;
  amount: any;

  modecheque: any;

  constructor(
    private ExpenditureFormservice: ExpenditureformService,
    private routes: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadExpenditure();
  }

  displayStyle = 'none';
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  closeResult = '';
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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

  loadExpenditure() {
    this.ExpenditureFormservice.listExpenditureForm().subscribe(
      (data: any[]) => {


        this.expenditure = data.filter((s) => s.typeOfForm == 'expenditure');
        console.log(data);
      }
    );
  }
}
