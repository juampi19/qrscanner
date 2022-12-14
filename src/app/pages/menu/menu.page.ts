import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { DataHistorialService } from '../../services/data-historial.service';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNex: false,

  };

  usuario = '';

  constructor(
    private barcodeScanner: BarcodeScanner,
    private navCtrl: NavController,
    private dataHistorial: DataHistorialService,
    private emailComposer: EmailComposer,
    private uiService: UiService  ) {
    }

  ngOnInit() {
    this.usuario = JSON.parse( localStorage.getItem('usuario') ).email;
  }


  scan(){

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if( !barcodeData.cancelled ) {
        this.dataHistorial.guardarHistorial( barcodeData.text );

        this.uiService.mandarEmail( barcodeData.text );

      }

     }).catch(err => {
         console.log('Error', err);
     });
  }

  mostarAyuda(){
    this.navCtrl.navigateRoot( '/ayuda', { animated: true });
  }

  mostrarHistorial() {
    this.navCtrl.navigateRoot( '/historial', { animated: true });
  }

  cerrarSesion() {
    localStorage.clear();
    this.navCtrl.navigateRoot( '/login', { animated: true });
  }

}
