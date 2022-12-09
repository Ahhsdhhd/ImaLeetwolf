import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CdaService {

  constructor(
     private http:HttpClient
    ) { }




    addCdaForm(cda:any){

      return this.http.post(`${environment.baseUrl}`+'cdaForm',cda)


        }
        listCdaForm(){

          return this.http.get(`${environment.baseUrl}`+'cdaForm')


            }
      }



