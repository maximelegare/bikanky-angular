import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylismSectionComponent } from './stylism-section.component';

describe('StylismSectionComponent', () => {
  let component: StylismSectionComponent;
  let fixture: ComponentFixture<StylismSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylismSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylismSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
