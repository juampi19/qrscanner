import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { DataHistorialService } from '../../services/data-historial.service';

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
    private dataHistorial: DataHistorialService ) {


    }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
  }


  scan(){

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if( !barcodeData.cancelled ) {
        this.dataHistorial.guardarHistorial( barcodeData.text );

      }

     }).catch(err => {
         console.log('Error', err);
     });
  }

  mostarAyuda(){
    console.log( 'Ayuda' );
  }

  mostrarHistorial() {
    this.navCtrl.navigateRoot( '/historial', { animated: true });
  }

}