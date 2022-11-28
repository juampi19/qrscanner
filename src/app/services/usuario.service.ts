import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {
    return this.http.get('https://raw.githubusercontent.com/juampi19/usuariosDB/main/db.json');
  }
}
