import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from './category/category.component';
import {AngularMaterialModule} from '../shared/angular-material/angular-material.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryDialogComponent } from './shared/delete-category-dialog/delete-category-dialog.component';

@NgModule({
  declarations: [CategoriesComponent, CategoryComponent, AddCategoryComponent, EditCategoryComponent, DeleteCategoryDialogComponent ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  entryComponents: [DeleteCategoryDialogComponent],
})
export class CategoriesModule { }
