import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('interceptado')
    const authReq = req.clone({
      setHeaders: {
        authorization: 'fakeAuth'
      }
    })
    return next.handle(authReq)
  }
}
