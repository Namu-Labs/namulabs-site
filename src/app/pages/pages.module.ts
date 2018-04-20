import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    ProjectComponent
  ],
  providers: [],
  exports: [
    AboutComponent,
    HomeComponent,
    ProjectComponent
  ]
})
export class PagesModule { }
