import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceContainerComponent } from './trace-container.component';

describe('TraceContainerComponent', () => {
  let component: TraceContainerComponent;
  let fixture: ComponentFixture<TraceContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraceContainerComponent]
    });
    fixture = TestBed.createComponent(TraceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
