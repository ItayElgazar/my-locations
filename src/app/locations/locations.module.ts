import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import { LocationComponent } from './location/location.component';
import {AngularMaterialModule} from '../shared/angular-material/angular-material.module';
import { AddLocationComponent } from './add-location/add-location.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [LocationsComponent, LocationComponent, AddLocationComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  exports: [LocationsComponent],
})
export class LocationsModule { }
