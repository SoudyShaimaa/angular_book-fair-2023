import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreListingComponent } from './bookstore-listing.component';

describe('BookstoreListingComponent', () => {
  let component: BookstoreListingComponent;
  let fixture: ComponentFixture<BookstoreListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoreListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookstoreListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
