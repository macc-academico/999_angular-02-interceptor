import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class UsuarioService {
  constructor(private http: HttpClient) {}

  obtenerUsuario() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'miguel');

    return this.http
      .get('https://reqres.in/api/users', {
        params,
      })
      .pipe(
        map((resp) => resp['data']),
        catchError(this.manejarError)
      );
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
