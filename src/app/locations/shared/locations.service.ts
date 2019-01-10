import {Injectable} from '@angular/core';
import {Location} from './location';
import {Category} from '../../categories/shared/category';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {LocalStorage} from '../../shared/local-storage/local-storage.interface';
import {LocalStorageService} from '../../shared/local-storage/local-storage.service';
import {CategoriesService} from '../../categories/shared/categories.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private readonly locations$: BehaviorSubject<Location[]>;

  constructor(private localStorageService: LocalStorageService) {
    this.locations$ = new BehaviorSubject(localStorageService.get('locations') || []);
  }

  getLocations(): Observable<Location[]> {
    return this.locations$;
  }

  addLocation(location: Location): boolean {
    const locations: Location[] = this.locations$.value;
    locations.push(location);
    this.localStorageService.set('locations', locations);
    this.locations$.next(this.locations$.value);
    return true;
  }

  buildLocation(locationObject: Partial<Location>): Location {
    return new Location(locationObject);
  }

  /*  saveLocations(locations$: Location[]): boolean {
      this.localStorageService.set<Location[]>('locations$', {});
    }*/

}

