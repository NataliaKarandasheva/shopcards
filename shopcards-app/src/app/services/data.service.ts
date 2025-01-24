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
      code: '77300007009584686',
      country: Country.GREECE,
      isFavorite: true
    },
    {
      img: 'masoutis',
      title: 'Masoutis',
      code: '1049567520',
      country: Country.GREECE
    },
    {
      img: 'ab',
      title: 'AB',
      code: '0479900934270',
      country: Country.GREECE
    },
    {
      img: 'ikea',
      title: 'IKEA',
      code: '2300000237528',
      country: Country.GREECE
    },
    {
      img: 'leteatbe',
      title: 'LetEatBe',
      code: '20223063',
      country: Country.GREECE
    },
    {
      img: 'auchan',
      title: 'Auchan',
      code: '0491369902447',
      country: Country.FRANCE
    },
    {
      img: 'migros',
      title: 'Migros',
      code: '05353894600',
      country: Country.TURKEY
    },
    {
      img: 'hm',
      title: 'H&M',
      code: '102112461180629',
      country: Country.GREECE
    },
    {
      img: 'public',
      title: 'Public',
      code: '2801419593',
      country: Country.GREECE
    },
    {
      img: 'lidl_old',
      title: 'Lidl Old version',
      code: '77300007009584686',
      country: Country.GREECE,
    },
  ];
}
