import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTreeComponent } from './frame-tree.component';

describe('FrameTreeComponent', () => {
  let component: FrameTreeComponent;
  let fixture: ComponentFixture<FrameTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameTreeComponent]
    });
    fixture = TestBed.createComponent(FrameTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
