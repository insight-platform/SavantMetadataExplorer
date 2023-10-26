import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogContainerComponent } from './log-container.component';

describe('LogContainerComponent', () => {
  let component: LogContainerComponent;
  let fixture: ComponentFixture<LogContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogContainerComponent]
    });
    fixture = TestBed.createComponent(LogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
