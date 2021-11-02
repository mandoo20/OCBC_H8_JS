import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffAddComponent } from './staff-add/staff-add.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffDashboardComponent,
    StaffAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
