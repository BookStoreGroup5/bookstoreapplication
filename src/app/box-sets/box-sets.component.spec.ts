import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSetsComponent } from './box-sets.component';

describe('BoxSetsComponent', () => {
  let component: BoxSetsComponent;
  let fixture: ComponentFixture<BoxSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
