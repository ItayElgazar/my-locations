import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocationsService} from './shared/locations.service';
import {Category} from '../categories/shared/category';
import {Location} from './shared/location';
import {Observable, Subject} from 'rxjs';
import {takeUntil, map} from 'rxjs/operators';
import {CategoriesService} from '../categories/shared/categories.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  locations$: Observable<Location[]> = this.locationsService.getLocations().pipe(takeUntil(this.destroy$));
  categories$: Observable<Category[]> = this.categoriesService.getCategories().pipe(takeUntil(this.destroy$));
  orderCategory = null;

  constructor(private locationsService: LocationsService,
              private categoriesService: CategoriesService) {
  }

  delete(id: number): void {
    this.locationsService.deleteLocation(id);
  }

  sort(): void {
    this.locations$ = this.locations$
      .pipe(map(locations =>
        locations.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))));
  }

  reset(): void {
    this.orderCategory = null;
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.next();
  }

}
