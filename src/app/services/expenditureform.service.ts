import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpenditureformService {
  constructor(private http: HttpClient) { }

  addExpenditureForm(expenditure: any) {
    return this.http.post(
      `${environment.baseUrl}` + 'ExpenditureForm',
      expenditure
    );
  }
  listExpenditureForm() {
    return this.http.get<any[]>(`${environment.baseUrl}` + 'ExpenditureForm');
  }

  addBulkExpenditureForm(bulkExpenditure: any) {
    return this.http.post(
      `${environment.baseUrl}` + 'reportsForm/' + 'bulkAdd',
      bulkExpenditure
    );
  }

  // bulkDelete(bulkDelete:any){
  //   return this.http.post(
  //     `${environment.baseUrl}` + 'ExpenditureForm/' + 'bulkDelete',
  //     bulkDelete
  //   );

  // }
}
