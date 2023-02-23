import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestABookComponent } from './request-a-book.component';

describe('RequestABookComponent', () => {
  let component: RequestABookComponent;
  let fixture: ComponentFixture<RequestABookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestABookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestABookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
