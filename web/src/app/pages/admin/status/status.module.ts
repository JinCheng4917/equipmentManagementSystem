import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FuncModule } from '../../../func/func.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { StatusComponent } from './status.component';
import {StateRoutingModule} from './state-routing.module';

@NgModule({
  declarations: [StatusComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StateRoutingModule,
    FuncModule
  ]
})
export class StatusModule {
}
