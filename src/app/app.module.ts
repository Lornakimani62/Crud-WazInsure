import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CreateCountryComponent } from './create-country/create-country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CreateCountryComponent,
    EditCountryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
