import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideActionsComponent } from './side-actions.component';

describe('SideActionsComponent', () => {
  let component: SideActionsComponent;
  let fixture: ComponentFixture<SideActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideActionsComponent]
    });
    fixture = TestBed.createComponent(SideActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
