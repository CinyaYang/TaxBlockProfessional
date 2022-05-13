import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { environment } from './../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})



export class ContactService {

  emailUrl = environment.emailUrl;

  constructor(private http:HttpClient) { }

  sendMessage(formData: NgForm): Observable<any> {
    return this.http.post<any>(`${this.emailUrl}`, formData, httpOptions).pipe(
      tap(
        message => console.log(message)
      ),
      catchError(this.handleError('Sending Message', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
