import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule  } from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { WebComponent } from './web/web.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { SearchComponent } from './search/search.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WebComponent,
    DashboardComponent,
    AllproductComponent,
    SearchComponent,
    MycartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
