import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

signup(data:any) :Observable<any>{



  return this.http.post(`${environment.baseUrl}`+'auth/signup', data)

}

sigin(data:any):Observable<any>{

  return  this.http.post(`${environment.baseUrl}`+'auth/login',
  data );
}

getProfile():Observable<any>{
  let headers ={
    'Authorization': "Bearer" + localStorage.getItem('token')
   }
   return this.http.get(`${environment.baseUrl}`+'auth/profile', {headers:headers})

}




}
