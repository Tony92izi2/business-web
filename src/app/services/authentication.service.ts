import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { GlobalVariable } from 'src/global';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        // return this.http.post<any>(GlobalVariable.BASE_API_URL  + `/users/login`, { username, password })
        //     .pipe(map(user => {
        //         // login successful if there's a jwt token in the response
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //             this.currentUserSubject.next(user);
        //             location.reload();
        //         }
        //         console.log('service auth:' + user);
        //         if ( user != null) {
        //          return user;
        //         }
        //     }));
        if ( username === 'admin' && password === 'aquilam' ) {
            const user: User = new User() ;
            user.id = 1;
            user.firstName = 'Admin';
            user.lastName = 'AQUILAM';
            user.username = 'admin@aquilam.com';
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            location.reload();
            return of(user).pipe(
                map(user1 => {
                    if ( user1 != null) {
                     return user1;
                    }
                })
            );
    }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
