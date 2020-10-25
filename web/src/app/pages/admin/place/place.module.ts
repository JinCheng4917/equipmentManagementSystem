import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FuncModule } from '../../../func/func.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {PlaceComponent} from './place.component';
import {PlaceRoutingModule} from './place-routing.module';

@NgModule({
  declarations: [PlaceComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlaceRoutingModule,
    FuncModule
  ]
})
export class PlaceModule {
}
