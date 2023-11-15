import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameContainerComponent } from './frame-container.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { FrameTreeComponent } from '../frame-tree/frame-tree.component';
import { SharedModule } from '../../../utils';

describe('FrameContainerComponent', () => {
  let component: FrameContainerComponent;
  let fixture: ComponentFixture<FrameContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameContainerComponent, MockComponent(FrameTreeComponent)],
      imports: [
        MockModule(SharedModule),
      ],
    });
    fixture = TestBed.createComponent(FrameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
