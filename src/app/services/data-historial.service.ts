import { Injectable } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { Asignatura } from '../models/asignatura';

@Injectable({
  providedIn: 'root'
})
export class DataHistorialService {

  historial: Asignatura[] = [];

  constructor( private emailComposer: EmailComposer ) {

  }

  guardarHistorial( text: string ) {

    const nuevoRegistro = new Asignatura( text );
    this.historial.unshift( nuevoRegistro );

  }
}
