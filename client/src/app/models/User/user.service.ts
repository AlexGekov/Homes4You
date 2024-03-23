import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from 'src/app/types/user';
import { environment } from 'src/app/enviroments/enviroments';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private user: User | undefined;

    constructor(private http: HttpClient) { }

    register(email: string, username: string, password: string, repeatPassword: string) {
        return this.http.post(`${environment.apiUrl}/users/register`, { email, username, password, repeatPassword }).pipe(tap((user) => this.user = user as User))
    }

    login(email: string, password: string,) {
        console.log(email, password)
        return this.http.post(`${environment.apiUrl}/users/login`, { email, password }).pipe(tap((user) => this.user = user as User))
    }
}