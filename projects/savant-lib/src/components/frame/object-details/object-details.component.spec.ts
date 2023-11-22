import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDetailsComponent } from './object-details.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { object } from '../../../../../../src/app/api/models/data';
import { SharedModule } from '../../../utils';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ObjectDetailsComponent', () => {
  let component: ObjectDetailsComponent;
  let fixture: ComponentFixture<ObjectDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectDetailsComponent],
      imports: [
        MatSnackBarModule,
        SharedModule,
        MatExpansionModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(ObjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.frameObject = object;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
