import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UiService } from '../../services/ui.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: '',
    password: ''
  };


  constructor( private navCtrl: NavController, private uiService: UiService , private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.obtenerUsuarios()
      .subscribe( usuarios => {
        console.log( usuarios );
      } );
  }

  login( flogin: NgForm ){

    if( flogin.invalid ) {
      this.uiService.alertaInformativa( 'Todos los campos son obligatorios' );
      return;
    }

    if( this.loginUser.email !== 'cookie' ) {
      this.uiService.alertaInformativa( 'El Usuario o Contraseña son incorrectos' );
      return;
    }

    if( this.loginUser.password !== '123456' ) {
      this.uiService.alertaInformativa( 'El Usuario o Contraseña son incorrectos' );
      return;
    }

    localStorage.setItem( 'usuario', JSON.stringify( this.loginUser ) );
    localStorage.setItem( 'ingresado', 'true' );
    this.navCtrl.navigateRoot( '/menu', { animated: true });

  }

}
