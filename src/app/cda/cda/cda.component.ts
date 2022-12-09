import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CdaService } from 'src/app/services/cda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cda',
  templateUrl: './cda.component.html',
  styleUrls: ['./cda.component.css']
})
export class CdaComponent implements OnInit {



  addcda:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  constructor(
    private breakpointObserver: BreakpointObserver,

    private fb:FormBuilder,
    private routes:Router,
    private cdaFormservice:CdaService

    ) {


      this.addcda = fb.group(
        {


          date: ['',Validators.required],
          course :['',Validators.required],
          amount :['',Validators.required],
          country :['',Validators.required],
          passedByCda :['',Validators.required],
          remark: ['',Validators.required]

          }
       )





    }

  ngOnInit(): void {
  }


  onSubmit(){

    console.log(this.addcda.value);
    this.cdaFormservice.addCdaForm(this.addcda.value).subscribe((data:any)=>{



    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'ADDED SUCCESSFULLY ! ',
      showConfirmButton: true,

    })
      this.routes.navigate(['/cdaView'])


    })
      }
}
