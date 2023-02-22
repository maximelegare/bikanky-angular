import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardWrapperComponent } from './product-card-wrapper.component';

describe('ProductCardWrapperComponent', () => {
  let component: ProductCardWrapperComponent;
  let fixture: ComponentFixture<ProductCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
