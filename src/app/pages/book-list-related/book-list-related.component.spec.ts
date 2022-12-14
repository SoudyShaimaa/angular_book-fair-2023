import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListRelatedComponent } from './book-list-related.component';

describe('BookListRelatedComponent', () => {
  let component: BookListRelatedComponent;
  let fixture: ComponentFixture<BookListRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListRelatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
