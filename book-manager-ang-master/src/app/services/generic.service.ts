import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from 'app/model/book';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const BASE = 'http://localhost:5200';

@Injectable()
export class GenericService {
 
  private _headers = new Headers({ 'Content-Type': 'application/json' });
  id: number; 
  bookData = new Book();

  constructor(private http: Http) 
  { }

  public executeGet(): Observable<Book[]> {
    return this.http.get(`${BASE}/books`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  executeGetWithParams(id): Observable<Response> {
    return this.http.get(`${BASE}/books/${id}`)
  }

  executePost(book): Observable<Book[]> {
    this.bookData = { 
      "name": book.name,
      "author": book.author,
      "publisher": book.publisher
    }
    return this.http.post(`${BASE}/books/`, this.bookData)
    .catch(this.handleError)

  }

  executeUpdate(book, id): Observable<Book[]> {
    this.bookData = {
      name: book.name,
      author: book.author,
      publisher: book.publisher
    };
    const url = `${BASE}/books/${id}`;

    return this.http.put(url, JSON.stringify(this.bookData), { headers: this._headers })
    .catch(this.handleError)

  }

  executeDelete(id): Observable<Book[]> {
    const url = `${BASE}/books/${id}`;
    return this.http.delete(url, { headers: this._headers })
      .catch(this.handleError);
  }

  private handleError(err: any): Observable<any> {
    console.log(err);
    return Observable.throw(err.message | err);
  }

}
