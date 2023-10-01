import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { filter, tap } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  activeRequests = 0;

  constructor(private loadingService: LoadingService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.activeRequests === 0)
      // this.loadingService.setLoadingState = true;

      this.activeRequests++;

    return next.handle(request).pipe(
      filter(event => event instanceof HttpResponse),
      tap(() => {
        this.activeRequests--;
        // if (this.activeRequests === 0)
        // this.loadingService.setLoadingState = false;
      })
    );
  }
}
