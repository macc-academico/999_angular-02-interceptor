import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpErrorResponse,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({ 'token-user': '123' });
    const reqClone = req.clone({ headers });
    return next.handle(reqClone).pipe(catchError(this.manejarError));
  }

  manejarError(error: HttpErrorResponse) {
    let msj: string;
    console.log(error.status);

    if (error.status === 404) {
      msj = 'Pagina no encontrada ' + error.url;
      return throwError(msj);
    }
    if (error.status === 0) {
      msj = 'Dominio no encontrado ' + error.url;
      return throwError(msj);
    }
    return throwError('Error personalizado');
  }
}
