import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(public http: HttpClient) {

  }
  SharedHttpPost(url: string, body: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json')
    headers = headers.append('Authorization', 'Token')
    let options = { headers: headers }
    return this.http.post(url, body, options).pipe(map(res => res))
  }
}
