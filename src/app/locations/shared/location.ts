import {Category} from '../../categories/shared/category';

export class Location {
  name: string;
  address: string;
  coordinates: string;
  category: Category;
  private readonly locations: number[];

  constructor(data: Partial<Location>) {
    Object.assign(this, data);
    this.locations = data.coordinates.split(',').map(l => +l);
  }

  get latitude(): number {
    return this.locations[0];
  }

  get longitude(): number {
    return this.locations[1];
  }
}
