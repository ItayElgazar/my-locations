import {Injectable} from '@angular/core';
import {Category} from './category';
import {BehaviorSubject, Observable} from 'rxjs';
import {Location} from '../../locations/shared/location';
import {LocalStorageService} from '../../shared/local-storage/local-storage.service';
import {LocationsService} from '../../locations/shared/locations.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  private readonly categories$: BehaviorSubject<Category[]>;

  constructor(private localStorageService: LocalStorageService,
              private locationsService: LocationsService) {
    this.categories$ = new BehaviorSubject(localStorageService.get('categories') || []);
  }

  getCategories(): Observable<Category[]> {
    return this.categories$;
  }

  addCategory(category: Category): boolean {
    const categories = this.categories$.value;
    categories.push(category);
    this.setCategoriesToLocalStorage(categories);
    this.categories$.next(categories);
    return true;
  }

  deleteCategory(categoryId: number): boolean {
    const updatedCategories = this.categories$.value.filter(el => el.id !== categoryId);
    const isOk = this.setCategoriesToLocalStorage(updatedCategories);
    if (!isOk) {
      return false;
    }
    this.categories$.next(updatedCategories);
    return true;
  }

  saveCategoryChanges(category: Category): boolean {
    const categories = this.getCategoriesFromLocalStorage();
    const selectedIndex = categories.findIndex(c => c.id === category.id);
    if (selectedIndex === -1) {
      return false;
    }
    categories[selectedIndex] = category;
    this.setCategoriesToLocalStorage(categories);
    this.categories$.next(categories);
    return true;
  }

  getCategoryByName(categoryName: string): Category {
    return this.getCategoriesFromLocalStorage()
      .find(category => category.name.toLowerCase() === categoryName.toLowerCase());
  }

  getCategoryById(id: number): Category {
    return this.getCategoriesFromLocalStorage()
      .find(category => category.id === id);
  }

  setCategoriesToLocalStorage(categories: Category[]): boolean {
    return this.localStorageService.set('categories', categories);
  }

  getCategoriesFromLocalStorage(): Category[] {
    return this.localStorageService.get('categories') || [];
  }
}
