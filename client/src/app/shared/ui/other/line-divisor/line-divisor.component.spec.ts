import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDivisorComponent } from './line-divisor.component';

describe('LineDivisorComponent', () => {
  let component: LineDivisorComponent;
  let fixture: ComponentFixture<LineDivisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineDivisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineDivisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
