import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvancefilterService {

  constructor(     private http:HttpClient    ) { }



  advanceFilterSearch(){

    return this.http.get<any[]>(`${environment.baseUrl}`+'report')


  }

  gcAdvanceFilter(){

    return this.http.get<any[]>('${environment.baseUrl}' +'filter' )
  }
}
