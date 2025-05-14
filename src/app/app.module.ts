import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { StateManagementComponent } from './component/state-management/state-management.component';

import { AppComponent } from './app.component';
import { DateTimeComponent } from './time/date-time/date-time.component';

@NgModule({
  declarations: [AppComponent, DateTimeComponent, StateManagementComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
