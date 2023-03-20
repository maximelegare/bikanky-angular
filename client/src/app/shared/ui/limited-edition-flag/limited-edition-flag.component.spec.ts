import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedEditionFlagComponent } from './limited-edition-flag.component';

describe('LimitedEditionFlagComponent', () => {
  let component: LimitedEditionFlagComponent;
  let fixture: ComponentFixture<LimitedEditionFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitedEditionFlagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedEditionFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
