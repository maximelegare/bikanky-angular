import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsSectionComponent } from './stars-section.component';

describe('StarsSectionComponent', () => {
  let component: StarsSectionComponent;
  let fixture: ComponentFixture<StarsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
