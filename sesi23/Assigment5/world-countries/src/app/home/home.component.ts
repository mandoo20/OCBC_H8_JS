import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  countries_Pop: Country[] = [];
  countries_Area: Country[] = [];
  countries_GDP: Country[] = [];

  




  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountriesPOP();
    this.getCountriesArea();
    this.getCountriesGDP();

    this.countries_Pop.sort((a,b) => b.population.localeCompare(a.population,undefined, {'numeric': true}))
    this.countries_Area.sort((a,b) => b.area.localeCompare(a.area,undefined, {'numeric': true}))
    this.countries_GDP.sort((a,b) => b.GDP.localeCompare(a.GDP,undefined, {'numeric': true}))
    this.allnumberwithComma();
  }

  getCountriesPOP() {
    this.countryService.getCountry().subscribe(countries => this.countries_Pop = countries);
  }
  getCountriesArea() {
    this.countryService.getCountry().subscribe(countries => this.countries_Area = countries);
  }
  getCountriesGDP() {
    this.countryService.getCountry().subscribe(countries => this.countries_GDP = countries);
  }
  
  allnumberwithComma() {
    for(var i = 0;i < this.countries_Pop.length;i++) {
      this.countries_Pop[i].population = this.numberWithCommas(this.countries_Pop[i].population);
      this.countries_Area[i].area = this.numberWithCommas(this.countries_Area[i].area);
      this.countries_GDP[i].GDP = this.numberWithCommas(this.countries_GDP[i].GDP);
    }
  }

  numberWithCommas(number:string) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
