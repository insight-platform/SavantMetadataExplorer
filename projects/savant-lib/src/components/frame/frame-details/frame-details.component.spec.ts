import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameDetailsComponent } from './frame-details.component';

describe('FrameDetailsComponent', () => {
  let component: FrameDetailsComponent;
  let fixture: ComponentFixture<FrameDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameDetailsComponent]
    });
    fixture = TestBed.createComponent(FrameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
