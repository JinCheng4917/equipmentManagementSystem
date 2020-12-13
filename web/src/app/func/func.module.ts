import {NgModule} from '@angular/core';
import {SexPipe} from './pipe/Sex.pipe';
import {RolePipe} from './pipe/Role.pipe';
import { DepartmentSelectorComponent } from './selector/department-selector/department-selector.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { TypeSelectorComponent } from './selector/type-selector/type-selector.component';
import {StatusPipe} from './pipe/Status.pipe';
@NgModule({
  declarations: [
    SexPipe,
    StatusPipe,
    RolePipe,
    DepartmentSelectorComponent,
    TypeSelectorComponent
  ],
    exports: [
        SexPipe,
        RolePipe,
        StatusPipe,
        DepartmentSelectorComponent,
        TypeSelectorComponent
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
