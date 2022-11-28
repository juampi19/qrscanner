import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {
    return this.http.get('https://juampi19.github.io/apiUsuarios/db.json');
  }
}
