import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http:HttpClient) { }


    addCourses(courses:any){

      return this.http.post(`${environment.baseUrl}`+'Courses',courses)


        }
        listCourses(){

          return this.http.get(`${environment.baseUrl}`+'courses')


            }
}


