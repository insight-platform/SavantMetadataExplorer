import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideActionsComponent } from './side-actions.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('SideActionsComponent', () => {
  let component: SideActionsComponent;
  let fixture: ComponentFixture<SideActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideActionsComponent],
      imports: [
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
      ],
    });
    fixture = TestBed.createComponent(SideActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
