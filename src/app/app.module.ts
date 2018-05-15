import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsClusterProvider } from '../providers/google-maps-cluster/google-maps-cluster';
import { Camera } from '@ionic-native/camera';
import { SymptomsPage } from '../pages/symptoms/symptoms';
import { ProvidersPage } from '../pages/providers/providers';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ContactPage,
    HomePage,
    SymptomsPage,
    ProvidersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ContactPage,
    HomePage,
    SymptomsPage,
    ProvidersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMapsProvider,
    ConnectivityProvider,
    GoogleMapsClusterProvider,
    Camera
  ]
})
export class AppModule {}
