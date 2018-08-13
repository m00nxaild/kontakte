import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountIosPage } from './account-ios';

@NgModule({
  declarations: [
    AccountIosPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountIosPage),
  ],
})
export class AccountIosPageModule {}
