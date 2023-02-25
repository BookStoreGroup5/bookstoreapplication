import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedBookComponent } from './requested-book.component';

describe('RequestedBookComponent', () => {
  let component: RequestedBookComponent;
  let fixture: ComponentFixture<RequestedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
