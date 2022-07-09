import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCartButtonComponent } from './base-cart-button.component';

describe('BaseCartButtonComponent', () => {
  let component: BaseCartButtonComponent;
  let fixture: ComponentFixture<BaseCartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCartButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
