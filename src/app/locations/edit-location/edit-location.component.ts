import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../shared/locations.service';
import { Location } from '../shared/location';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../categories/shared/category';
import {Observable} from 'rxjs';
import {CategoriesService} from '../../categories/shared/categories.service';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss']
})
export class EditLocationComponent implements OnInit {

  private location: Location;
  private locationForm: FormGroup;
  categories$: Observable<Category[]>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private locationsService: LocationsService,
              private categoriesService: CategoriesService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.location = this.locationsService.getLocationById(Number(id));
    if (!this.location) {
      this.router.navigate(['locations']);
    } else {
      this.categories$ = this.categoriesService.getCategories();
      this.buildForm();
    }
  }

  buildForm(): void {
    this.locationForm = this.formBuilder.group({
      name: [this.location.name, Validators.required],
      address: [this.location.address, Validators.required],
      coordinates: [this.location.coordinates, Validators.required],
      category: [this.location.category.name, Validators.required]
    });
  }

  saveChanges(): void {
    const category: Category = this.categoriesService.getCategoryByName(this.locationForm.controls.category.value);
    if (this.locationForm.invalid || !category) {
      return;
    }
    this.location.coordinates = this.locationForm.controls.coordinates.value;
    this.location.address = this.locationForm.controls.address.value;
    this.location.name = this.locationForm.controls.name.value;
    this.location.category = category;
    this.locationsService.saveLocationChanges(this.location);
    this.router.navigate(['locations']);
  }

}
