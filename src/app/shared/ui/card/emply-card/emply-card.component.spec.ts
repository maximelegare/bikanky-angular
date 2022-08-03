import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyCardComponent } from './emply-card.component';

describe('EmplyCardComponent', () => {
  let component: EmplyCardComponent;
  let fixture: ComponentFixture<EmplyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
