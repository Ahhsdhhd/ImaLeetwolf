import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgxPopperjsModule} from 'ngx-popperjs';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AddCoursesComponent } from './add-courses/add-courses/add-courses.component';
import { BankReportComponent } from './bank-reports/bank-report/bank-report.component';
import { BillingComponent } from './billing/billing/billing.component';
import { GentlemanCadetsComponent } from './gentleman-cadets/gentleman-cadets/gentleman-cadets.component';
import { AdministratorComponent } from './administrator/administrator/administrator.component';
import { CdaComponent } from './cda/cda/cda.component';
import { ReportsComponent } from './report/reports/reports.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReceiptFormComponent } from './billing/receipt-form/receipt-form.component';

import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './add-course/menu/menu.component';
import { CopyExpenditureComponent } from './billing/billing/copyExpenditure/copyExpenditure.component';
import { CopyReceiptComponent } from './billing/billing/copyReceipt/copyReceipt.component';
import { DeleteExpenditureComponent } from './billing/billingDelete/deleteExpenditure/deleteExpenditure.component';
import { DeleteReceiptComponent } from './billing/billingDelete/deleteReceipt/deleteReceipt.component';
import { GcViewComponent } from './gentleman-cadets/gcView/gcView.component';
import { GcForeginerComponent } from './gentleman-cadets/gcForeginer/gcForeginer.component';
import { ExpenditureViewComponent } from './billing/expenditureView/expenditureView.component';
import { ReceiptViewComponent } from './billing/receiptView/receiptView.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CdaViewComponent } from './cda/cda-view/cda-view.component';

import { ReportViewComponent } from './report/report-view/report-view.component';

import { SearchByGcComponent } from './report/reports/search-by-gc/search-by-gc.component';
import { SearchByBattalionsComponent } from './report/reports/search-by-battalions/search-by-battalions.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddCoursesComponent,
    BankReportComponent,
    BillingComponent,
    GentlemanCadetsComponent,
    AdministratorComponent,
    CdaComponent,
    ReportsComponent,
    SidebarComponent,

    NavComponent,
    ReceiptFormComponent,
    MenuComponent,
    CopyExpenditureComponent,
    CopyReceiptComponent,
    DeleteExpenditureComponent,
    DeleteReceiptComponent,
    GcViewComponent,
    GcForeginerComponent,
    ExpenditureViewComponent,
    ReceiptViewComponent,
    CdaViewComponent,

    ReportViewComponent,

    SearchByGcComponent,
     SearchByBattalionsComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPopperjsModule,
    HttpClientModule,
    Ng2SearchPipeModule,

    NgxPaginationModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
