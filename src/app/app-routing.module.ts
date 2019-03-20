import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CreateCountryComponent } from './create-country/create-country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';

const routes: Routes = [
  {path: 'countries', component: CountryListComponent},
  {path: 'create-country' , component: CreateCountryComponent},
  {path: 'edit-country' , component: EditCountryComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
