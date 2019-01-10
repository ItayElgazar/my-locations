import {Category} from '../../categories/shared/category';

export class Location {
  name: string;
  address: string;
  coordinates: string;
  category: Category;
  latitude: number;
  longitude: number;

  constructor(partial: Partial<Location>) {
    Object.assign(this, location);
    const locations = this.coordinates.split(',');
    this.latitude = Number(locations[0]);
    this.longitude = Number(locations[1]);
  }
}
