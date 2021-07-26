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
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListComponent } from './components/admin/post-list/post-list.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DetailComponent,
    PostListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MyPrimeNgComponentsModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    SliderModule,
    DropdownModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [HttpConfigService, ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
