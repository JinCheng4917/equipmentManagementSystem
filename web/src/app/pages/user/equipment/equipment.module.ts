import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FuncModule } from '../../../func/func.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {EquipmentRoutingModule} from './equipment-routing.module';
import {EquipmentComponent} from './equipment.component';
import { DetailComponent } from './detail/detail.component';
import {StatusPipe} from '../../../func/pipe/Status.pipe';

@NgModule({
  declarations: [EquipmentComponent, AddComponent, EditComponent, DetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EquipmentRoutingModule,
    FuncModule
  ]
})
export class EquipmentModule {
}
