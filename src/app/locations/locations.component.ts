import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocationsService} from './shared/locations.service';
import {Category} from '../categories/shared/category';
import {Location} from './shared/location';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {

  locations$: Observable<Location[]>;
  destroyed$ = new Subject();

  constructor(private locationsService: LocationsService) {
  }

  ngOnInit() {
    this.locations$ = this.locationsService.getLocations().pipe(takeUntil(this.destroyed$));
  }

  add() {
    this.locationsService.addLocation(new Location({
      name: `Itay's Home`,
      address: 'Raadhuisstraat 17',
      coordinates: '52.3732327,4.8899359',
      category: new Category('Developer')
    }));
  }


  ngOnDestroy(): void {
    this.destroyed$.unsubscribe();
  }

}
