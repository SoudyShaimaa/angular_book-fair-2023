import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreDetailsComponent } from './bookstore-details.component';

describe('BookstoreDetailsComponent', () => {
  let component: BookstoreDetailsComponent;
  let fixture: ComponentFixture<BookstoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoreDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookstoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
