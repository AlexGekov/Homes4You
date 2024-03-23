import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from 'src/app/types/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user: User | undefined;

    constructor(private http: HttpClient) { }

    get isLoggedIn() {
        return this.user ? true : false
    }

    register(email: string, username: string, password: string, repeatPassword: string) {
        return this.http.post('api/users/register', { email, username, password, repeatPassword }).pipe(tap((user) => this.user = user as User))
    }
}