import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestaBookComponent } from './requesta-book.component';

describe('RequestaBookComponent', () => {
  let component: RequestaBookComponent;
  let fixture: ComponentFixture<RequestaBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestaBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestaBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
