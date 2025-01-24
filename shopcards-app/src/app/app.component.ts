import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Card, Country } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cards: Card[] = [];
  countries: Country[] = [
    Country.ALL,
    Country.GREECE,
    Country.FRANCE,
    Country.TURKEY,
    Country.ITALY,
    Country.RUSSIA
  ]

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cards = this.dataService.getAll();
  }

  getImg(img: string): string {
    return `assets/img/barcode/${img}.png`;
  } 


}
