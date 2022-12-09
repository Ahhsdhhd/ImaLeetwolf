import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteReceipt',
  templateUrl: './deleteReceipt.component.html',
  styleUrls: ['./deleteReceipt.component.css']
})
export class DeleteReceiptComponent implements OnInit {
  DeleteReceiptForm:any;

  constructor(

    private fb:FormBuilder,
    private http:HttpClient

  ) {


    this.DeleteReceiptForm = fb.group(
      {
        startingGcType : ['',Validators.required],
       startingGcNumber : ['', Validators.required],
       endingGcType : ['', Validators.required],
       endingGcNumber : ['', Validators.required],
      deleteBillNoDetails : ['', Validators.required],
    }
    );
  }

  ngOnInit() {
  }

  onSubmit(){
    var body = {
      startingGcNumber: this.DeleteReceiptForm.value.startingGcNumber,
      endingGcNumber: this.DeleteReceiptForm.value.endingGcNumber,
      deleteBillNoDetails: this.DeleteReceiptForm.value.deleteBillNoDetails,
    };

    this.http
      .delete<any>('http://localhost:3000/billingForm/bulkDelete', { body })
      .subscribe((data) => {



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

