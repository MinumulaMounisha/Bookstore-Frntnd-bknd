import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private httpClient: HttpClient) { }

  list(): Observable<any> {
    const url = environment.basePath + '/getAll'
    return this.httpClient.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getBook(id: any): Observable<any> {
    const url = environment.basePath + '/getOne/' + id
    return this.httpClient.get(url).pipe(
      catchError(this.handleError)
    );
  }

  AddBook(data: any): Observable<any> {
    const url = environment.basePath + '/post'
    return this.httpClient.post(url, data).pipe(
      catchError(this.handleError)
    );
  }

  updateBook(id: any, data: any): Observable<any> {
    const url = environment.basePath + '/update/' + id
    return this.httpClient.patch(url, data).pipe(
      catchError(this.handleError)
    );
  }

  deleteBook(id: any): Observable<any> {
    const url = environment.basePath + '/delete/' + id
    return this.httpClient.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  

/*   filterByTitle(title: any): Observable<any> {
    const url = environment.basePath
    return this.httpClient.get(`${url}?title_like=${title}`).pipe(
      catchError(this.handleError)
    );
  }  */


  /* // Create new item
  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Edit/ Update 
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Search By Name
  filterByTitle(title: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?title_like=${title}`).pipe(
      catchError(this.handleError)
    );
  } */

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}


