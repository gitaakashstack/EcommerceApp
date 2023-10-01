import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let modifiedReq;
    if (req.headers.has('skip')) {
      modifiedReq = req.clone({
        headers: req.headers.delete('skip')
      })
      return next.handle(modifiedReq);

    }

    const accessToken = this.authService.authToken;

    modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
    });

    return next.handle(modifiedReq);
  }
}
