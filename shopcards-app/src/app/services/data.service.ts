import { Injectable } from '@angular/core';
import { Card, Country } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getAll(): Card[] {
    return DataService.data;
  };

  static data: Card[] = [
    {
      img: 'lidl',
      title: 'Lidl',
      code: '123456789',
      country: Country.GREECE,
      isFavorite: true
    },
    {
      img: 'masoutis',
      title: 'Masoutis',
      code: '123456789',
      country: Country.GREECE
    }
  ];

}
