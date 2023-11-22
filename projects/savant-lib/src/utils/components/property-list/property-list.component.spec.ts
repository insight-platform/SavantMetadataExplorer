import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListComponent } from './property-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

describe('PropertyListComponent', () => {
  let component: PropertyListComponent;
  let fixture: ComponentFixture<PropertyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyListComponent],
      imports: [
        MatTableModule,
        MatExpansionModule,
      ],
    });
    fixture = TestBed.createComponent(PropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
