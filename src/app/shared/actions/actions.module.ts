import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ActionsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
  ],
  exports: [ActionsComponent]
})
export class ActionsModule { }
