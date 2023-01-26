import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaIconsComponent } from './media-icons.component';

describe('MediaIconsComponent', () => {
  let component: MediaIconsComponent;
  let fixture: ComponentFixture<MediaIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
