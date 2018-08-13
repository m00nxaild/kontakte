import { KontakteProvider } from './../../providers/kontakte/kontakte';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {
  public archivedTodos = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private KontakteProvider: KontakteProvider
    ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AccountsPage');
    this.archivedTodos = this.KontakteProvider.getArchivedTodos();
  }

}
