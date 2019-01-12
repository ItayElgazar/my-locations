import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Category} from '../shared/category';
import {MatDialog} from '@angular/material';
import {DeleteCategoryDialogComponent} from '../shared/delete-category-dialog/delete-category-dialog.component';
import {LocationsService} from '../../locations/shared/locations.service';
import {CategoriesService} from '../shared/categories.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnDestroy, OnInit {

  @Input() category: Category;
  editLink: string;
  destroyed$ = new Subject();

  constructor(private readonly dialog: MatDialog,
              private locationsService: LocationsService,
              private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.editLink = `edit/${this.category.id}`;
  }

  onDelete(): void {
    const locationIds: number[] = this.locationsService.getLocationsByCategory(this.category).map(el => el.id);
    if (locationIds.length > 0) {
      // locations linked to this category, popup alert to warn the user before deleting
      this.dialog.open(DeleteCategoryDialogComponent)
        .afterClosed().pipe(takeUntil(this.destroyed$))
        .subscribe((toDelete: boolean) => {
          if (toDelete) {
            this.delete(locationIds);
          }
        });
    } else {
      this.delete();
    }
  }

  delete(locationIds?: number[]): void {
    if (locationIds) {
      this.locationsService.deleteLocations(locationIds);
      this.categoriesService.deleteCategory(this.category.id);
    } else {
      this.categoriesService.deleteCategory(this.category.id);
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.unsubscribe();
  }

}
