import {NgModule} from '@angular/core';
import {SexPipe} from './pipe/Sex.pipe';
import {RolePipe} from './pipe/Role.pipe';
import { DepartmentSelectorComponent } from './selector/department-selector/department-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    SexPipe,
    RolePipe,
    DepartmentSelectorComponent
  ],
  exports: [
    SexPipe,
    RolePipe,
    DepartmentSelectorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [
  ]
})
export class FuncModule {
}
