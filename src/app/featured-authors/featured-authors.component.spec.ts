import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAuthorsComponent } from './featured-authors.component';

describe('FeaturedAuthorsComponent', () => {
  let component: FeaturedAuthorsComponent;
  let fixture: ComponentFixture<FeaturedAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedAuthorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
