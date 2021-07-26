import { BrowserModule } from '@angular/platform-browser';
// modules
import { NgModule } from '@angular/core';
import { MyPrimeNgComponentsModule } from './MyPrimeNgComponentsModule';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpConfigService } from './services/http-config.service';
import { ApiClientService } from './services/api-client.service';
import { DetailComponent } from './components/detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DetailComponent,
    AddPostComponent,
    ListPostsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MyPrimeNgComponentsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [HttpConfigService, ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
