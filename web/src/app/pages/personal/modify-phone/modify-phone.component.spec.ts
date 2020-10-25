import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPhoneComponent } from './modify-phone.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('pages -> personal -> ModifyPhoneComponent', () => {
  let component: ModifyPhoneComponent;
  let fixture: ComponentFixture<ModifyPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPhoneComponent ],
      imports: [
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
