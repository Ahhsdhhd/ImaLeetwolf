import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AddCoursesComponent } from './add-courses/add-courses/add-courses.component';
import { GentlemanCadetsComponent } from './gentleman-cadets/gentleman-cadets/gentleman-cadets.component';
import { BankReportComponent } from './bank-reports/bank-report/bank-report.component';
import { ReportsComponent } from './report/reports/reports.component';
import { CdaComponent } from './cda/cda/cda.component';
import { BillingComponent } from './billing/billing/billing.component';
import { AdministratorComponent } from './administrator/administrator/administrator.component';
import { ReceiptFormComponent } from './billing/receipt-form/receipt-form.component';
import { MenuComponent } from './add-course/menu/menu.component';
import { CopyExpenditureComponent } from './billing/billing/copyExpenditure/copyExpenditure.component';
import { CopyReceiptComponent } from './billing/billing/copyReceipt/copyReceipt.component';
import { DeleteExpenditureComponent } from './billing/billingDelete/deleteExpenditure/deleteExpenditure.component';
import { DeleteReceiptComponent } from './billing/billingDelete/deleteReceipt/deleteReceipt.component';
import { GcViewComponent } from './gentleman-cadets/gcView/gcView.component';
import { GcForeginerComponent } from './gentleman-cadets/gcForeginer/gcForeginer.component';
import { ExpenditureViewComponent } from './billing/expenditureView/expenditureView.component';
import { ReceiptViewComponent } from './billing/receiptView/receiptView.component';
import { CdaViewComponent } from './cda/cda-view/cda-view.component';

import { ReportViewComponent } from './report/report-view/report-view.component';
import { SearchByGcComponent } from './report/reports/search-by-gc/search-by-gc.component';
import { SearchByBattalionsComponent } from './report/reports/search-by-battalions/search-by-battalions.component';





const routes: Routes = [
  { path:'login',component:LoginComponent },
  { path:'signup',component:SignupComponent   },
  { path:'addcourse',component:AddCoursesComponent },

  { path:'gc',component:GentlemanCadetsComponent },

  {path:'all',component:GcViewComponent},
  {path:'foreginer',component:GcForeginerComponent},


  { path:'billing',component:BillingComponent },
  {path:'copyExpenditure',component:CopyExpenditureComponent},
  {path:'deleteExpenditure',component:DeleteExpenditureComponent},
  {path:'expenditureAll',component:ExpenditureViewComponent},

  { path:'receipt',component:ReceiptFormComponent},
  {path:'copyReceipt',component:CopyReceiptComponent},
  {path:'deleteReceipt',component:DeleteReceiptComponent},
  {path:'receiptAll',component:ReceiptViewComponent},

  { path:'cda',component:CdaComponent },
  {path:'cdaView',component:CdaViewComponent},

  { path:'admin',component:AdministratorComponent },
  { path:'bankreport',component:BankReportComponent },

  { path:'reports',component:ReportsComponent },
  { path:'bygc',component:SearchByGcComponent },
  { path:'bybattalions',component:SearchByBattalionsComponent },
  {path:'report-view',component:ReportViewComponent},

  { path:'menu' ,component:MenuComponent},

  { path:'**',component:LoginComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
