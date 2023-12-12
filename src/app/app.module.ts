import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import {SearchbarComponent} from "./components/inputs/searchbar/searchbar.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import { HeaderComponent } from './components/header/header.component';
import { ListIconsComponent } from './components/list-icons/list-icons.component';
import {NgOptimizedImage} from "@angular/common";
import { MemeButtonComponent } from './components/inputs/meme-button/meme-button.component';
import { FeedComponent } from './components/feed/feed.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SvgIconsComponent } from './components/svg-icons/svg-icons.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { DetailComponent } from './page/home/detail/detail.component';
import { HomeFeedComponent } from './page/home/home-feed/home-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    SearchbarComponent,
    HeaderComponent,
    ListIconsComponent,
    MemeButtonComponent,
    FeedComponent,
    ProfileComponent,
    SvgIconsComponent,
    SvgIconsComponent,
    HomeLayoutComponent,
    DetailComponent,
    HomeFeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [],
  exports: [
    SidebarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
