import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

const TOKEN_HEADER_KEY = 'Authorization'; // Header key for JWT token in the request

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    console.log(authReq)
    const token = this.token.getToken();
    if (token) {
      // Add JWT token to the request header
      authReq = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token),
      });
    }
    console.log('Request URL:', authReq.url); // Log the request URL
    console.log('Request Headers:', authReq.headers); // Log the request headers
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
