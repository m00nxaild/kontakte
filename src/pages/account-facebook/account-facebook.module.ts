import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountFacebookPage } from './account-facebook';

@NgModule({
  declarations: [
    AccountFacebookPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountFacebookPage),
  ],
})
export class AccountFacebookPageModule {}
