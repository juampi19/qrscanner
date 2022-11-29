import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { isPlatform, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: 'Volver',
      tabButtonLayout: 'label-hide'
    };
  };

  return {
    menuIcon: 'ellipsis-vertical'
  };
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'ios',
      backButtonText: 'volver',
      menuIcon: 'ellipsis-vertical'
  }), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, BarcodeScanner, EmailComposer],
  bootstrap: [AppComponent],
})
export class AppModule {}
