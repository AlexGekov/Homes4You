import { Injectable, Provider } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
class AppInterceptor implements HttpInterceptor {
    API: string = 'api'

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (request.url.startsWith(this.API)) {
            request = request.clone({
                url: request.url.replace(this.API, 'http://localhost:3030'),
                withCredentials: true
            });
        };

        return next.handle(request);
    }
}

export const appInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS,
}   