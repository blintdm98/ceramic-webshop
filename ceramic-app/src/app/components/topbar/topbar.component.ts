import { Component } from '@angular/core';

interface Language {
  src: string,
  alt: string,
  name: string
}

interface Currency {
  name: string
}

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  languages:Language[] = [
    {
      src: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png",
      alt:"english",
      name: 'English'
    },
    {
      src: "https://cdn.countryflags.com/thumbs/hungary/flag-square-250.png",
      alt:"hungary",
      name: 'Hungary'
    },
    {
      src: "https://cdn.countryflags.com/thumbs/romania/flag-square-250.png",
      alt:"romania",
      name: 'Romania'
    }
]

currencies: Currency[] = [
  {
    name: 'HUF'
  },
  {
    name: 'EUR'
  },
  {
    name: 'RON'
  }
]

  activeCountry: Language = this.languages[0];
  activeCurrency: Currency = this.currencies[0];
  openedDropdown: boolean = false;
  fontawe: string = "fa-euro-sign";

  setActiveCurrency(currency: Currency): void {
    this.activeCurrency = currency;
  }

  setActiveCountry(country: Language): void {
    this.activeCountry = country;
  }

  dropdownOpened(opened: boolean): void {
    this.openedDropdown = opened;
  }

}
