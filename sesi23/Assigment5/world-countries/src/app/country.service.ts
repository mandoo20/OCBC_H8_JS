import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from './country';
import { COUNTRIES } from './mock_country';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }
  
  countries = of(COUNTRIES);

  getCountry(): Observable<Country[]> {

    console.log("fetched list of countries. . .");
    return this.countries;
  }

  getDetailCountry(name:string) : Observable<Country> {
    return this.countries.pipe(map(countries => countries.filter(country => country.name === name)[0]))
  }
}
