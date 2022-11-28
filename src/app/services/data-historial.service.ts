import { Injectable } from '@angular/core';
import { Asignatura } from '../models/asignatura';

@Injectable({
  providedIn: 'root'
})
export class DataHistorialService {

  historial: Asignatura[] = [];

  constructor() {

  }

  guardarHistorial( text: string ) {

    const nuevoRegistro = new Asignatura( text );
    this.historial.unshift( nuevoRegistro );

  }
}
