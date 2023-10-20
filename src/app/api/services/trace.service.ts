import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData, ITrace } from '../models/model';
import { catchError, map, Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TraceService {
  constructor(
    protected httpClient: HttpClient,
    private _snackBar: MatSnackBar,
  ) {
  }

  get(id: string): Observable<ITrace> {
    return this.httpClient.get<IData>('/api/traces/' + id)
      .pipe(
        map((data) => data.data[0]),
        catchError((data) => {
          if (data.error && data.error.errors) {
            data.error.errors.forEach(error => {
              this._snackBar.open(
                `${error.code}: ${error.msg}`,
                'Close',
                { duration: 5000 }
              );
            });
          }
          return of({ spans: [], traceID: '', processes: {} } as ITrace);
        }),
      );
  }
}