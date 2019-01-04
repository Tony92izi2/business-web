import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { GlobalVariable } from 'src/global';


@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(GlobalVariable.BASE_API_URL + `/users`);
    }

    getById(id: number) {
        return this.http.get(GlobalVariable.BASE_API_URL + `/users/${id}`);
    }

    register(user: User) {
        return this.http.post(GlobalVariable.BASE_API_URL  + `/users/create`, user);
    }

    update(user: User) {
        return this.http.put(GlobalVariable.BASE_API_URL + `/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(GlobalVariable.BASE_API_URL + `/users/${id}`);
    }
}
