import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanSelectorComponent } from './span-selector.component';

describe('SpanSelectorComponent', () => {
  let component: SpanSelectorComponent;
  let fixture: ComponentFixture<SpanSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpanSelectorComponent]
    });
    fixture = TestBed.createComponent(SpanSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
