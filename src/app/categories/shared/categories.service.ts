import {Injectable} from '@angular/core';
import {Category} from './category';
import {BehaviorSubject, Observable} from 'rxjs';
import {Location} from '../../locations/shared/location';
import {LocalStorageService} from '../../shared/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  private categories$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([new Category('Developer')]);

  constructor(private localStorageService: LocalStorageService) {
  }

  getCategories(): Observable<Category[]> {
    return this.categories$;
  }

  addCategory(category: Category): boolean {
    const categories: Category[] = this.localStorageService.get<Category[]>('categories') || [];
    categories.push(category);
    this.localStorageService.set('categories', categories);
    this.categories$.next(categories);
    return true;
  }



  /*  saveLocations(locations: Location[]): boolean {
      this.localStorageService.set<Location[]>('locations', {});
    }*/
}
