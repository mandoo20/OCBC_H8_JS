import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries_Pop: Country[] = [];
  countries_Area: Country[] = [];
  countries_GDP: Country[] = [];

  
  
  PopSort: Country[] = [];
  AreaSort: Country[] = [];
  GDPSort: Country[] = [];


  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountriesPOP();
    this.getCountriesArea();
    this.getCountriesGDP();

    
    this.PopSort = this.countries_Pop.map(x => Object.assign({},x));
    this.PopSort.sort((a,b) => b.population.localeCompare(a.population,undefined, {'numeric': true}))

    this.AreaSort = this.countries_Area.map(y => Object.assign({},y));
    this.AreaSort.sort((a,b) => b.area.localeCompare(a.area,undefined, {'numeric': true}))

    this.GDPSort = this.countries_GDP.map(z => Object.assign({},z));
    this.GDPSort.sort((a,b) => b.GDP.localeCompare(a.GDP,undefined, {'numeric': true}))

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
      this.PopSort[i].population = this.numberWithCommas(this.PopSort[i].population);
      this.AreaSort[i].area = this.numberWithCommas(this.AreaSort[i].area);
      this.GDPSort[i].GDP = this.numberWithCommas(this.GDPSort[i].GDP);
    }
  }

  numberWithCommas(number:string) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
