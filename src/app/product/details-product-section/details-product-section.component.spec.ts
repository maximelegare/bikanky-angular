import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductSectionComponent } from './details-product-section.component';

describe('DetailsProductSectionComponent', () => {
  let component: DetailsProductSectionComponent;
  let fixture: ComponentFixture<DetailsProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsProductSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
