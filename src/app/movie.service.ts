import { Movie } from './movie';


import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const API_URL: String = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

    private accessToken;
    private headers;

    constructor( private http: Http) {
        this.init();
    }

    async init() {
        // this.accessToken ="tony";
        this.headers = new Headers({
            Authorization: 'Bearer '
        });
    }

    getMovies(): Observable<Movie[]> {
        return this.http.get(API_URL + '/movies',
            new RequestOptions({ headers: this.headers })
        ).pipe(map(res => res.json()));

    }
}