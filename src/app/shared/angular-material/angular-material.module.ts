import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
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
  ];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class AngularMaterialModule {
}
