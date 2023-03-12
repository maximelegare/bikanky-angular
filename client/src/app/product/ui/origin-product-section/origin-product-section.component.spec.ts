import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginProductSectionComponent } from './origin-product-section.component';

describe('OriginProductSectionComponent', () => {
  let component: OriginProductSectionComponent;
  let fixture: ComponentFixture<OriginProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginProductSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
