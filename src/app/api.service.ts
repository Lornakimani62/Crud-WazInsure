import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { resolve } from 'url';
import { reject } from 'q';

export interface Country {
  country_id: number;
  country_code: string;
  country_name: string;
}

export interface CountriesData {
  status: string;
  data: Country[];
  message: string;
}

export interface PostCountryInterface {
  country_code: string;
  country_name: string;
}

export interface PostCountryInterfaceResponse {
  status: string;
  message: string;
}

export interface DeleteCountryInterfaceResponse {
  status: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://demo.wazinsure.com:3002/api/countries'
  countriesData:CountriesData;
  postCountriesResponse:PostCountryInterfaceResponse;
  deleteCountryResponse:DeleteCountryInterfaceResponse;

  constructor(private httpClient: HttpClient) {}
    getCountries(){
      let promise= new Promise((resolve,reject)=>{
        this.httpClient.get<CountriesData>(this.API_URL).toPromise().then(
          res=>{
            this.countriesData=res;
            resolve();
          },
          error=>{
            console.log(error)
            reject();
          }
        );
      })
      return promise;
    }

    postCountry(data:PostCountryInterface){
      console.log(data)
      let promise= new Promise((resolve,reject)=>{
        this.httpClient.post<PostCountryInterfaceResponse>(this.API_URL,data).toPromise().then(
          res=>{
            this.postCountriesResponse=res;
            resolve();
          },
          error=>{
            console.log(error)
            reject();
          }
        );
      })
      return promise;
    }

    deleteCountry(countryId:number){
      let promise= new Promise((resolve,reject)=>{
        this.httpClient.delete<DeleteCountryInterfaceResponse>(this.API_URL+"/"+countryId).toPromise().then(
          res=>{
            this.deleteCountryResponse=res;
            resolve();
          },
          error=>{
            console.log(error)
            reject();
          }
        );
      })
      return promise;
    }
}




