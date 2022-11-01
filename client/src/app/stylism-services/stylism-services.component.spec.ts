import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylismServicesComponent } from './stylism-services.component';

describe('StylismServicesComponent', () => {
  let component: StylismServicesComponent;
  let fixture: ComponentFixture<StylismServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylismServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylismServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
