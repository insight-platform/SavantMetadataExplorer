import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameDetailsComponent } from './frame-details.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockComponent } from 'ng-mocks';
import { FrameTreeComponent } from '../frame-tree/frame-tree.component';
import { frame } from '../../../../../../src/app/api/models/data';
import { SharedModule } from '../../../utils';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

describe('FrameDetailsComponent', () => {
  let component: FrameDetailsComponent;
  let fixture: ComponentFixture<FrameDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameDetailsComponent, MockComponent(FrameTreeComponent)],
      imports: [
        MatSnackBarModule,
        SharedModule,
        BrowserAnimationsModule,
        MatExpansionModule,
      ]
    });
    fixture = TestBed.createComponent(FrameDetailsComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.frame = frame
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
