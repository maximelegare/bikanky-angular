import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMeCardComponent } from './find-me-card.component';

describe('FindMeCardComponent', () => {
  let component: FindMeCardComponent;
  let fixture: ComponentFixture<FindMeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
