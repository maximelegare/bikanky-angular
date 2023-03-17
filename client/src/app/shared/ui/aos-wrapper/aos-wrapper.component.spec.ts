import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AosWrapperComponent } from './aos-wrapper.component';

describe('AosWrapperComponent', () => {
  let component: AosWrapperComponent;
  let fixture: ComponentFixture<AosWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AosWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AosWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
