import { Component, OnInit } from '@angular/core';
import { DataHistorialService } from '../../services/data-historial.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor( public dataHistorial: DataHistorialService, private alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  async mostrarAsignatura( registro ){
    console.log( registro  );
    const alert = await this.alertCtrl.create({
      header: registro.asignatura,
      message: `Sigla: ${ registro.text }
                Fecha: ${ registro.fecha }`,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
