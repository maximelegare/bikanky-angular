import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylismComponent } from './stylism.component';

describe('StylismComponent', () => {
  let component: StylismComponent;
  let fixture: ComponentFixture<StylismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
