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
import { ProductService } from './productservice';
import { HttpClientModule } from '@angular/common/http';
import { HttpConfigService } from './services/http-config.service';
import { ApiClientService } from './services/api-client.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MyPrimeNgComponentsModule,
    FormsModule,
  ],
  providers: [ProductService, HttpConfigService, ApiClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
