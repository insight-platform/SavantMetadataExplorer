import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectFilterComponent } from './object-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ObjectFilterComponent', () => {
  let component: ObjectFilterComponent;
  let fixture: ComponentFixture<ObjectFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectFilterComponent],
      imports: [
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(ObjectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
