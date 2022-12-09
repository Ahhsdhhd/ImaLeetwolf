import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';






@Injectable({
  providedIn: 'root'
})
export class GcformService {

  constructor(

    private http:HttpClient
    ) {

    }

addGc(gc:any){

return this.http.post(`${environment.baseUrl}`+'GcForm',gc)


  }
  listGc(){

    return this.http.get<any[]>(`${environment.baseUrl}`+'GcForm')


      }
      updateGcList(){

        return this.http.get<any[]>(`${environment.baseUrl}/GcForm/$(gcNumber)`)
      }



}

