import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFilterComponent } from './log-filter.component';

describe('LogFilterComponent', () => {
  let component: LogFilterComponent;
  let fixture: ComponentFixture<LogFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogFilterComponent]
    });
    fixture = TestBed.createComponent(LogFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
