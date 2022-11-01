import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylismServiceComponent } from './stylism-service.component';

describe('StylismServiceComponent', () => {
  let component: StylismServiceComponent;
  let fixture: ComponentFixture<StylismServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylismServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylismServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
