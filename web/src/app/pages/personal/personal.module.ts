import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { ModifyPasswordComponent } from './modify-password/modify-password.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ModifyPhoneComponent } from './modify-phone/modify-phone.component';
import { FuncModule } from '../../func/func.module';

@NgModule({
  declarations: [PersonalComponent, ModifyPasswordComponent, ModifyPhoneComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    ReactiveFormsModule,
    FuncModule
  ]
})
export class PersonalModule {
}
