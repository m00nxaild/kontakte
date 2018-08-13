
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { KontakteProvider } from '../providers/kontakte/kontakte';
//import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { SettingsPage } from "../pages/settings/settings";
import { AccountsPage } from "../pages/accounts/accounts";
import { AccountWhatsappPage } from "../pages/account-whatsapp/account-whatsapp";
import { AccountLinkedinPage } from "../pages/account-linkedin/account-linkedin";
import { AccountFacebookPage } from "../pages/account-facebook/account-facebook";
import { AccountIosPage } from "../pages/account-ios/account-ios";
import { AccountDroidPage } from "../pages/account-droid/account-droid";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SettingsPage,
    AccountsPage,
    AccountWhatsappPage,
    AccountLinkedinPage,
    AccountFacebookPage,
    AccountIosPage,
    AccountDroidPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SettingsPage,
    AccountsPage,
    AccountWhatsappPage,
    AccountLinkedinPage,
    AccountFacebookPage,
    AccountIosPage,
    AccountDroidPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KontakteProvider
  ]
})
export class AppModule {}
