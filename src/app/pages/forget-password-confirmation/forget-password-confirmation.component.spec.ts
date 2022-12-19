import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordConfirmationComponent } from './forget-password-confirmation.component';

describe('ForgetPasswordConfirmationComponent', () => {
  let component: ForgetPasswordConfirmationComponent;
  let fixture: ComponentFixture<ForgetPasswordConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
