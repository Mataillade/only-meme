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
import { MemeComponent } from './components/modals/meme/meme.component';
import { SearchMemeComponent } from './components/search-meme/search-meme.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { UploadComponent } from './page/upload/upload.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TagInputComponent } from './components/inputs/tag-input/tag-input.component';
import { TextInputsComponent } from './components/inputs/text-inputs/text-inputs.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { SearchLayoutBarComponent } from './components/search-layout-bar/search-layout-bar.component';
import { CustomDatePipe } from './pipe/date/custom-date.pipe';

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
    MemeComponent,
    SearchMemeComponent,
    SearchresultsComponent,
    UploadComponent,
    TagInputComponent,
    TextInputsComponent,
    ImageViewerComponent,
    SearchLayoutBarComponent,
    CustomDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  exports: [
    SidebarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
