import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProductSectionComponent } from './image-product-section.component';

describe('ImageProductSectionComponent', () => {
  let component: ImageProductSectionComponent;
  let fixture: ComponentFixture<ImageProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageProductSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
