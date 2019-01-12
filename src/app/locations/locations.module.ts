import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import { LocationComponent } from './location/location.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { AddLocationComponent } from './add-location/add-location.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { AgmCoreModule } from '@agm/core';
import { CategoryOrderPipe } from '../shared/category-order.pipe';

@NgModule({
  declarations: [LocationsComponent, LocationComponent, AddLocationComponent, EditLocationComponent, CategoryOrderPipe],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeOPKCv7EypAZniegDpAoqugnlRJiXX0g'
    })
  ],
  exports: [LocationsComponent],
})
export class LocationsModule { }
