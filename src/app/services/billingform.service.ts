import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingformService {

  constructor(

    private http:HttpClient
    ) {

    }

addBillingForm(billing:any){

return this.http.post(`${environment.baseUrl}`+'BillingForm',billing)


  }
  listBillingForm(){

    return this.http.get<any[]>(`${environment.baseUrl}`+'BillingForm')


      }
}
