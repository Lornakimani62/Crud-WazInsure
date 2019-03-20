import { Component, OnInit } from '@angular/core';
import {ApiService,CountriesData,PostCountryInterface} from '../api.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
   
  countriesData:CountriesData;
  post_country_name:string;
  post_country_code:string;
  postCountryData:PostCountryInterface;
   
  constructor(private api: ApiService) { 
   }

  ngOnInit() {
    this.getCountries();

    console.log(this.postCountryData)
  }

  getCountries(): void{
    this.api.getCountries().then(() => {
      console.log(this.api.countriesData)
      this.countriesData=this.api.countriesData;
    })
    }

  postCountry(){
    this.postCountryData={country_name:"",country_code:""};
    this.postCountryData.country_name=this.post_country_name;
    this.postCountryData.country_code=this.post_country_code;
    this.api.postCountry(this.postCountryData).then(()=>{
      console.log(this.api.postCountriesResponse)
      this.getCountries()
    })
  }
  deleteCountry(countryId:number){
    console.log(countryId)
    this.api.deleteCountry(countryId).then(()=>{
      console.log(this.api.deleteCountryResponse);
      this.getCountries()
    })
  }
  }


