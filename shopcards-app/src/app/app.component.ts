import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Card } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cards: Card[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cards = this.dataService.getAll();
  }

  getImg(img: string): string {
    return `assets/img/barcode/${img}.png`;
  } 


}
