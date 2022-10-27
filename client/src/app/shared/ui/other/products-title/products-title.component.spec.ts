import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTitleComponent } from './products-title.component';

describe('ProductsTitleComponent', () => {
  let component: ProductsTitleComponent;
  let fixture: ComponentFixture<ProductsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
