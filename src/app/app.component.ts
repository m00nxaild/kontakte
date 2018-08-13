import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { SettingsPage } from "../pages/settings/settings";
import { AccountsPage } from "../pages/accounts/accounts";
import { AccountWhatsappPage } from "../pages/account-whatsapp/account-whatsapp";
import { AccountLinkedinPage } from "../pages/account-linkedin/account-linkedin";
import { AccountFacebookPage } from "../pages/account-facebook/account-facebook";
import { AccountIosPage } from "../pages/account-ios/account-ios";
import { AccountDroidPage } from "../pages/account-droid/account-droid";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

