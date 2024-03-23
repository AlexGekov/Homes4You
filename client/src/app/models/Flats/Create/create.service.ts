import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Flat } from 'src/app/types/flat';
import { environment } from 'src/app/enviroments/enviroments';

@Injectable({
    providedIn: 'root'
})
export class CreateService {
    private flat: Flat | undefined;

    constructor(private http: HttpClient) { }

    create(name: string, kind: string, description: string, year: number, image: string) {
        return this.http.post(`${environment.apiUrl}/posts/create`, { name, kind, description, year, image }).pipe(tap((flat) => this.flat = flat as Flat))
    }
}