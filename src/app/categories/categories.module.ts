import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from './category/category.component';
import {AngularMaterialModule} from '../shared/angular-material/angular-material.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [CategoriesComponent, CategoryComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
  ]
})
export class CategoriesModule { }
