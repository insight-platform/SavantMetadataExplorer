import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TraceModule } from './trace/trace.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [TraceModule, HttpClientTestingModule,],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
