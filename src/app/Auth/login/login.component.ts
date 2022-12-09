import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  responsedata:any;

  loginForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private route:Router
    ) {
      localStorage.clear();

    this.loginForm = this.fb.group({
'username': ['',Validators.required],
'password': ['',Validators.required]

    })
  }

  ngOnInit(): void {
  }
  get loginFormControl() { return this.loginForm.controls }

  login(){
    const data = this.loginForm.value;
    this.auth.sigin(data)

      .subscribe(
        result => {
         if(result!=null){
          this.responsedata = result;
          localStorage.setItem('token',this.responsedata.token);
          this.route.navigate(['addcourse']);

         }else{
          alert(result.message)
         }
        },
       err =>{
        alert("account login failed")
       }

      );

  }

}
