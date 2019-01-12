import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule, MatSelectModule,
  MatTabsModule
} from '@angular/material';

const modules =
  [MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSelectModule,
  ];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class AngularMaterialModule {
}
