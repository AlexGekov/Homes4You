import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from 'src/app/types/user';

@Injectable({
    providedIn: 'root'
})


export class UserService implements OnDestroy{
    private user$$ = new BehaviorSubject<User | undefined>(undefined)
    private user$ = this.user$$.asObservable()

    user: User | undefined;

    userSubscription: Subscription

    constructor(private http: HttpClient) {
        this.userSubscription = this.user$.subscribe((user) => {
            this.user = user
        })
    }

    get isLoggedIn(): boolean {
        return this.user ? true : false
    }

    // get userId(): string {
    //     return this.user.userId
    // }

    register(email: string, username: string, password: string, repeatPassword: string) {
        return this.http.post('api/users/register', { email, username, password, repeatPassword }).pipe(tap((user) => this.user$$.next(user as User)))
    }

    login(email: string, password: string) {
        return this.http.post('api/users/login', { email, password }).pipe(tap((user) => this.user$$.next(user as User)))
    }

    getUser() {
        return this.http.get('api/users/getUser').pipe(tap((user) => this.user$$.next(user as User)))
    }

    logout() {
        this.user$$.next(undefined)
        return this.http.get('api/users/logout', {})
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe()
    }
}