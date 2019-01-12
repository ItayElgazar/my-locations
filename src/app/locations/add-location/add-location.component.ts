import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LocationsService} from '../shared/locations.service';
import { Location } from '../shared/location';
import {Observable} from 'rxjs';
import {Category} from '../../categories/shared/category';
import {CategoriesService} from '../../categories/shared/categories.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  private locationForm: FormGroup;
  categories$: Observable<Category[]>;
  constructor(private formBuilder: FormBuilder,
              private locationsService: LocationsService,
              private categoriesService: CategoriesService,
              private router: Router) { }

  ngOnInit() {
    this.categories$ =  this.categoriesService.getCategories();
    // I could add more custom validators (for example for the coordinates) but for the sake of simplicity, i'll not do that.
    this.locationForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      coordinates: ['', Validators.pattern('[0-9.]+(,[0-9.]+){0,1}')],
      category: ['', Validators.required]
    });
  }

  addLocation() {
    const category: Category = this.categoriesService.getCategoryByName(this.locationForm.controls.category.value);
    if (this.locationForm.invalid || !category) {
      return;
    }
    const location: Location = this.locationsService.buildLocation({...this.locationForm.value, category});
    this.locationsService.addLocation(location);
    this.router.navigate(['locations']);
  }

}
