import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    Error404Component,
    NavComponent,
    FooterComponent
  ],
  providers: [],
  exports: [
    Error404Component,
    NavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
