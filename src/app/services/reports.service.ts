import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(private http: HttpClient) {}

  listReport(gcNumber: any) {
    return this.http.get<any[]>(
      `${environment.baseUrl}` + 'reportsForm/' + 'gcNumber/' + gcNumber
    );
  }
  // listReportBycounty(gcNumber:any){

  //   return this.http.get<any[]>(`${environment.baseUrl}`+'reportsForm/'+ 'gcNumber/'+ gcNumber)
  // }
}
