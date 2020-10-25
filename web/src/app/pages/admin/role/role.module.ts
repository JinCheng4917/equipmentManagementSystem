import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FuncModule } from '../../../func/func.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';

@NgModule({
  declarations: [RoleComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RoleRoutingModule,
    FuncModule
  ]
})
export class RoleModule {
}
