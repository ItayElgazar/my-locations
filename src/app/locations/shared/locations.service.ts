import {Injectable} from '@angular/core';
import {Location} from './location';
import {Category} from '../../categories/shared/category';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {LocalStorageService} from '../../shared/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private locations$: BehaviorSubject<Location[]>;

  constructor(private localStorageService: LocalStorageService) {
    this.locations$ = new BehaviorSubject(localStorageService.get('locations') || []);
  }

  getLocations(): Observable<Location[]> {
    return this.locations$;
  }

  addLocation(location: Location): boolean {
    const locations: Location[] = this.getLocationsFromLocalStorage();
    locations.push(location);
    this.setLocationsToLocalStorage(locations);
    this.locations$.next(locations);
    return true;
  }

  updateRelationships(category: Category): boolean {
    const locations = this.getLocationsFromLocalStorage();
    const selectedIndexes = locations.reduce((a, e, i) => (e.category.id === category.id) ? a.concat(i) : a, []);
    if (selectedIndexes.length === 0) {
      return false;
    }
    selectedIndexes.forEach(index => locations[index].category = category);
    this.setLocationsToLocalStorage(locations);
    this.locations$.next(locations);
    return true;
  }

  deleteLocation(id: number): boolean {
    const updatedLocations: Location[] = this.locations$.value.filter(el => el.id !== id);
    const isOk = this.setLocationsToLocalStorage(updatedLocations);
    if (!isOk) {
      return false;
    }
    this.locations$.next(updatedLocations);
    return true;
  }

  deleteLocations(locationIds: number[]): boolean {
    const updatedLoations = this.locations$.value.filter(el => locationIds.indexOf(el.category.id) > -1);
    const isDeleted = this.setLocationsToLocalStorage(updatedLoations);
    if (!isDeleted) {
      return false;
    }
    this.locations$.next(updatedLoations);
    return true;
  }

  saveLocationChanges(location: Location) {
    const locations = this.getLocationsFromLocalStorage();
    const selectedIndex = locations.findIndex(el => el.id === location.id);
    if (selectedIndex === -1) {
      return false;
    }
    locations[selectedIndex] = location;
    this.setLocationsToLocalStorage(locations);
    this.locations$.next(locations);
    return true;
  }

  buildLocation(locationObject: Partial<Location>): Location {
    return new Location(locationObject);
  }

  getLocationsByCategory(category: Category): Location[] {
    const locations = this.locations$.value;
    return locations.filter(l => l.category.id === category.id);
  }

  getLocationById(id: number): Location {
    return this.locations$.value.find(location => location.id === id);
  }

  private getLocationsFromLocalStorage(): Location[] {
    return this.localStorageService.get('locations') || [];
  }

  private setLocationsToLocalStorage(locations: Location[]): boolean {
    this.localStorageService.set('locations', locations);
    return true;
  }
}

