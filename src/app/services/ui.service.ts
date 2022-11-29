import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { Asignatura } from '../models/asignatura';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor( private alertaCrtl: AlertController, private emailComposer: EmailComposer ) { }

  async alertaInformativa( message: string ) {
    const alert = await this.alertaCrtl.create({
      backdropDismiss: false,
      header: 'Datos Incorrectos',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async mandarEmail( text: string ) {

    const asignatura = new Asignatura( text );

    const alert = await this.alertaCrtl.create({
      header: 'Mandar correo con la información',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log( 'cancel' );
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            const email = {
              to: 'jpabloamigo.m@gmail.com',
              subject: `${ asignatura.asignatura }`,
              body: `
                <h3>Registro de Asignatura</h3>
                <p>Se ha registrado la asistencia en la asignatura ${ asignatura.asignatura } ${ asignatura.text } </p>
                <p>Fecha: ${ asignatura.fecha }</p>
              `,
              isHtml: true
            };

            this.emailComposer.open(email);
          },
        },
      ],
    });

    await alert.present();

  }
}
