import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectFilterComponent } from './object-filter.component';

describe('ObjectFilterComponent', () => {
  let component: ObjectFilterComponent;
  let fixture: ComponentFixture<ObjectFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectFilterComponent]
    });
    fixture = TestBed.createComponent(ObjectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
