import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '../shared/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
 changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent implements OnInit {

  @Input() location: Location;
  @Output() deleteLocation: EventEmitter<number> = new EventEmitter();
  editLink: string;
  showMap = false;


  ngOnInit() {
    this.editLink = `edit/${this.location.id}`;
  }

  delete() {
    this.deleteLocation.emit(this.location.id);
  }

  mapToggle() {
    this.showMap = !this.showMap;
  }

}
