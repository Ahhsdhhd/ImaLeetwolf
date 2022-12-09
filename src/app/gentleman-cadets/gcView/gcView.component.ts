import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GcformService } from 'src/app/services/gcform.service';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gcView',
  templateUrl: './gcView.component.html',
  styleUrls: ['./gcView.component.css'],
})
export class GcViewComponent implements OnInit {
  Gc: any;

  searchText: any;
  gcNumber: any;
  company: any;
  dateOfJoining: any;
  course: any;
  status: any;
  remark: any;
  bankAccount: any;
  country: any;
  name: any;
  battalion: any;

  showMe: boolean = true;

  p: number = 1;

  constructor(
    private gcFormservice: GcformService,
    private routes: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadGc();
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
  onEdit(editContent: any) {
    this.modalService
      .open(editContent, { ariaLabelledBy: 'modal-basic-title' })
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

  loadGc() {
    this.gcFormservice.listGc().subscribe((data: any[]) => {
      this.Gc = data.filter((s) => s.typeOfForm == 'gc');

      //console.log ("resent " +JSON.stringify(this.Gc));
    });
  }

  togglerow() {
    this.showMe = !this.showMe;
  }
}
