import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProductSectionComponent } from './select-product-section.component';

describe('SelectProductSectionComponent', () => {
  let component: SelectProductSectionComponent;
  let fixture: ComponentFixture<SelectProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProductSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
