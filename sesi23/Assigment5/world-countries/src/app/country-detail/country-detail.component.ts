import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country_name: string;
  countrydet!: Country;

  constructor(private actRoute: ActivatedRoute,private countryService: CountryService) {
      this.country_name = this.actRoute.snapshot.params.name;
   }

  ngOnInit(): void {
    this.getOneCountry(this.country_name);
    this.countrydet.population = this.numberWithCommas(this.countrydet.population);
    this.countrydet.area = this.numberWithCommas(this.countrydet.area);
    this.countrydet.GDP = this.numberWithCommas(this.countrydet.GDP);
  }

  getOneCountry(name:string) {
    this.countryService.getDetailCountry(name).subscribe(countries => this.countrydet = countries);
  }

   numberWithCommas(number:string) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

}
