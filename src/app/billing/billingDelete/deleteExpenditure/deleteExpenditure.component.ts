import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deleteExpenditure',
  templateUrl: './deleteExpenditure.component.html',
  styleUrls: ['./deleteExpenditure.component.css'],
})
export class DeleteExpenditureComponent implements OnInit {
  expenditureDeleteForm: any;
  url = 'http://localhost:3000/expenditureForm/bulkDelete';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private bulkDeleteExpenditureService: ExpenditureformService,
    private http: HttpClient
  ) {
    this.expenditureDeleteForm = fb.group({
      startingGcNumber: ['', Validators.required],
      endingGcNumber: ['', Validators.required],
      deleteBillNoDetails: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    var body = {
      startingGcNumber: this.expenditureDeleteForm.value.startingGcNumber,
      endingGcNumber: this.expenditureDeleteForm.value.endingGcNumber,
      deleteBillNoDetails: this.expenditureDeleteForm.value.deleteBillNoDetails,
    };

    this.http
      .delete<any>('http://localhost:3000/expenditureForm/bulkDelete', { body })
      .subscribe((data) => {

       // `${environment.baseUrl}

      });
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'DELETED SUCCESSFULLY ! ',
        showConfirmButton: true,

      })

    // console.log(this.expenditureDeleteForm.value);
  }
}
