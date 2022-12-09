import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  addExpenditureForm:any;



  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb:FormBuilder,
    private routes:Router,
    private ExpenditureFormservice:ExpenditureformService


    ) {
   this.addExpenditureForm = fb.group(
    {

         recordNumber: ['',Validators.required],
         gcNumber: ['',Validators.required],
         gcType :['',Validators.required],
         name :['',Validators.required],
         battalion: ['',Validators.required],
         company: ['',Validators.required],
         date: ['',Validators.required],
         billNoDetails: ['',Validators.required],
         ExpenditureAmount: ['',Validators.required]


      }
   )



    }

  ngOnInit(): void {
  }

  onSubmit(){

console.log(this.addExpenditureForm.value);
this.ExpenditureFormservice.addExpenditureForm(this.addExpenditureForm.value).subscribe((data:any)=>{

  Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'ADDED SUCCESSFULLY ! ',
    showConfirmButton: true,

  })



})
  }
}
