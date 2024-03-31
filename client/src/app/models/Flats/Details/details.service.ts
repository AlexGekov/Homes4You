import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Flat } from 'src/app/types/flat';
import { environment } from 'src/app/enviroments/enviroments';

@Injectable({
    providedIn: 'root'
})
export class DetailsService {
    private flat: Flat | undefined;

    constructor(private http: HttpClient) { }

    want(postId: string, ownerId: string) {
        return this.http.post(`${environment.apiUrl}/posts/${postId}/watch`, { postId, ownerId})
    }
}