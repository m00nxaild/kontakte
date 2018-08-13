import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountLinkedinPage } from './account-linkedin';

@NgModule({
  declarations: [
    AccountLinkedinPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountLinkedinPage),
  ],
})
export class AccountLinkedinPageModule {}
