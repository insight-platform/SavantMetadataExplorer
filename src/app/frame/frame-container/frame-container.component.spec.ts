import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameContainerComponent } from './frame-container.component';

describe('FrameContainerComponent', () => {
  let component: FrameContainerComponent;
  let fixture: ComponentFixture<FrameContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameContainerComponent]
    });
    fixture = TestBed.createComponent(FrameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
