import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanListComponent } from './span-list.component';

describe('SpanListComponent', () => {
  let component: SpanListComponent;
  let fixture: ComponentFixture<SpanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpanListComponent]
    });
    fixture = TestBed.createComponent(SpanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
