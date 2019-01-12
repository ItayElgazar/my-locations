import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoriesService} from '../shared/categories.service';
import {Category} from '../shared/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddCategoryComponent implements OnInit {

  private categoryForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private categoriesService: CategoriesService,
              private router: Router) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required]
    });
  }

  addCategory(): void {
    const name: string = this.categoryForm.controls.categoryName.value;
    if (!this.categoryForm.valid) {
      return;
    } else if (this.categoriesService.getCategoryByName(name) === null) {
      this.categoryForm.setErrors({exists: true});
      return;
    }
    const category = new Category(name);
    this.categoriesService.addCategory(category);
    this.router.navigate(['categories']);
  }

}
