import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { DynamicTableComponent } from './Components/dynamic-table/dynamic-table.component';
import { NgContainerContentTemplateExampleComponent } from './ng-container-content-template-example/ng-container-content-template-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomePageComponent,
    LoginPageComponent,
    TableComponent,
    DynamicTableComponent,
    NgContainerContentTemplateExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatTableModule
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
