import {NgModule} from '@angular/core';
import {Routes, RouterModule, RouterLinkActive} from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {LocationsComponent} from './locations/locations.component';
import {AddCategoryComponent} from './categories/add-category/add-category.component';
import {AddLocationComponent} from './locations/add-location/add-location.component';
import {EditCategoryComponent} from './categories/edit-category/edit-category.component';
import {EditLocationComponent} from './locations/edit-location/edit-location.component';

const routes: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/add', component: AddCategoryComponent},
  {path: 'categories/edit/:id', component: EditCategoryComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'locations/add', component: AddLocationComponent},
  {path: 'locations/edit/:id', component: EditLocationComponent},
  {path: '**', redirectTo: '/locations'}
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
