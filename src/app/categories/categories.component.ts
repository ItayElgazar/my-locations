import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Category} from './shared/category';
import {CategoriesService} from './shared/categories.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories$: Observable<Category[]>;
  destroyed$ = new Subject();
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories$ = this.categoriesService.getCategories().pipe(takeUntil(this.destroyed$));
  }

  ngOnDestroy(): void {
    this.destroyed$.unsubscribe();
  }
}
