import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-copyExpenditure',
  templateUrl: './copyExpenditure.component.html',
  styleUrls: ['./copyExpenditure.component.css'],
})
export class CopyExpenditureComponent implements OnInit {
  addInBulkExpenditureForm: any;

  constructor(
    private fb: FormBuilder,
    private ExpenditureFormService: ExpenditureformService,
    private http: HttpClient
  ) {
    this.addInBulkExpenditureForm = fb.group({
      startingGcNumber: [''],
      endingGcNumber: [''],
      gcType: [''],
      date: [''],
      billNoDetails: [''],
      ExpenditureAmount: [''],
      country:['']
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.addInBulkExpenditureForm.value);
this.ExpenditureFormService.addBulkExpenditureForm(this.addInBulkExpenditureForm.value).subscribe((data:any)=>{



    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'ADDED SUCCESSFULLY ! ',
      showConfirmButton: true,

    })

  })
}
}
