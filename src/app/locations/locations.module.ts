import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [LocationsComponent, LocationComponent],
  imports: [
    CommonModule
  ]
})
export class LocationsModule { }
