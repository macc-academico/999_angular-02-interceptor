import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/Usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  constructor(private usuarioS: UsuarioService) {
    // this.obtenerUsuario();
    this.obtenerUsuarioconHeader();
  }

  ngOnInit(): void {}

  obtenerUsuario() {
    this.usuarioS.obtenerUsuario().subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  obtenerUsuarioconHeader() {
    this.usuarioS.obtenerUsuarioWithHeader().subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
