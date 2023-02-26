import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOnCategoryComponent } from './order-on-category.component';

describe('OrderOnCategoryComponent', () => {
  let component: OrderOnCategoryComponent;
  let fixture: ComponentFixture<OrderOnCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOnCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderOnCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
