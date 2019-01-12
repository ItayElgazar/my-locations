import {Category} from '../../categories/shared/category';

export class Location {
  name: string;
  address: string;
  coordinates: string;
  category: Category;
  id: number;
  private readonly locations: number[];

  constructor(data: Partial<Location>) {
    Object.assign(this, data);
    this.id = new Date().getTime();
  }
w
  get latitude(): number {
    return Number(this.coordinates.split(',')[0]);
  }

  get longitude(): number {
    return Number(this.coordinates.split(',')[1]);
  }
}
