import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BannerComponent,
    AboutComponent
  ],
  providers: [],
  exports: [
    BannerComponent,
    AboutComponent
  ]
})
export class ViewsModule { }
