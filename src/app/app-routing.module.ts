import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* 현재와 같이 별도의 라우팅 모듈 사용시 app.module.ts에 적용된 PagesModule 제거 검토 */
import { HomeComponent, AboutComponent, ProjectComponent } from './pages';
import { Error404Component } from './shared/error404/error404.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }