import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncModule } from './func/func.module';
import { PartModule } from './part/part.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {YunzhiInterceptor} from './net/yunzhi.interceptor';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuncModule,
    PartModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YunzhiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
