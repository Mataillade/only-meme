import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./page/login/login.component";
import {HomeComponent} from "./page/home/home.component";
import {DetailComponent} from "./page/home/detail/detail.component";
import {HomeFeedComponent} from "./page/home/home-feed/home-feed.component";
import {UploadComponent} from "./page/upload/upload.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component : LoginComponent },
  { path: 'home', component : HomeComponent , children: [
      {path: '', redirectTo: 'feed', pathMatch: 'full'},
      {path: 'feed', component: HomeFeedComponent},
      {path: 'detail/:id', component: DetailComponent},
    ]
  },
  { path : 'upload', component: UploadComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
