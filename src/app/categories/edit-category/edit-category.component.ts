import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../shared/category';
import {CategoriesService} from '../shared/categories.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocationsService} from '../../locations/shared/locations.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  category: Category;
  categoryForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private categoriesService: CategoriesService,
              private locationsService: LocationsService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.category = this.categoriesService.getCategoryById(Number(id));
    if (!this.category) {
       this.router.navigate(['categories']);
    } else {
      this.buildForm();
    }
  }

  buildForm(): void {
    this.categoryForm = this.formBuilder.group({
      categoryName: [this.category.name, Validators.required]
    });
  }

  saveChanges(): void {
    this.category.name = this.categoryForm.controls.categoryName.value;
    const saved = this.categoriesService.saveCategoryChanges(this.category);
    const updated = this.locationsService.updateRelationships(this.category);
    if (!saved || !updated) {
      this.categoryForm.setErrors({unexpectedError: true});
      return;
    }
    this.router.navigate(['categories']);
  }

}
