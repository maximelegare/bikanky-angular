import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaIconComponent } from './media-icon.component';

describe('MediaIconsComponent', () => {
  let component: MediaIconComponent;
  let fixture: ComponentFixture<MediaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
