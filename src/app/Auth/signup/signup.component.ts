import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm! :FormGroup ;
  constructor(
    private fb:FormBuilder,
    private auth:AuthService

    ) {

    this.signupForm = this.fb.group({
'username': ['',Validators.required],
'password': ['',Validators.required]

    })
  }


  ngOnInit(): void {
  }
  signup(){

    const data = this.signupForm.value;
    delete data ['confirm']
    this.auth.signup(data).subscribe(res=>{

      alert('success');

    },err =>{
      alert('error');
    })

  }

}
