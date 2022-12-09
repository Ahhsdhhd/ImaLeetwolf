import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { GcformService } from 'src/app/services/gcform.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gentleman-cadets',
  templateUrl: './gentleman-cadets.component.html',
  styleUrls: ['./gentleman-cadets.component.css']
})
export class GentlemanCadetsComponent implements OnInit {

  addGc:any;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb:FormBuilder,
    private routes:Router,
    private gcFormservice:GcformService



    ) {
   this.addGc = fb.group(
    {


      gcNumber: ['',Validators.required],
      gcType :['',Validators.required],
      name :['',Validators.required],
        battalion: ['',Validators.required],
         company: ['',Validators.required],
         dateOfJoining: ['',Validators.required],
         course: ['',Validators.required],
         bankAccount: ['',Validators.required],
         country: ['',Validators.required],
         status:['',Validators.required],
         remark: ['',Validators.required]

      }
   )



    }

  ngOnInit(): void {
  }

  onSubmit(){

console.log(this.addGc.value);
this.gcFormservice.addGc(this.addGc.value).subscribe((data:any)=>{



    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'ADDED SUCCESSFULLY ! ',
      showConfirmButton: true,

    })



  this.routes.navigate(['/all'])


})
  }
}
