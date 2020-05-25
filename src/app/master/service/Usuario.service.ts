import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) {}

  obtenerUsuario() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'miguel');
    return this.http
      .get('https://reqres.in/api/users', {
        params,
      })
      .pipe(map((resp) => resp));
  }

  obtenerUsuarioWithHeader() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'miguel');
    return this.http
      .get('https://reqres.in/api/users', {
        params,
        observe: 'response',
      })
      .pipe(map((resp) => resp));
  }
}
