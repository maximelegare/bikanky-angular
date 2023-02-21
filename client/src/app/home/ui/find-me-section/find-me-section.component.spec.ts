import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMeSectionComponent } from './find-me-section.component';

describe('FindMeSectionComponent', () => {
  let component: FindMeSectionComponent;
  let fixture: ComponentFixture<FindMeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
