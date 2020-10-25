import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPasswordComponent } from './modify-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppComponent } from '../../../app.component';
import { FuncTestingModule } from '../../../func/testing/func-testing.module';

describe('page -> personal -> ModifyPasswordComponent', () => {
  let component: ModifyPasswordComponent;
  let fixture: ComponentFixture<ModifyPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPasswordComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        SweetAlert2Module.forRoot(),
        FuncTestingModule,
      ],
      providers: [
        {provide: AppComponent, useClass: AppComponent},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
