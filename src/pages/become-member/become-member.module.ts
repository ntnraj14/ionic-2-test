import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BecomeMemberPage } from './become-member';

@NgModule({
  declarations: [
    BecomeMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(BecomeMemberPage),
  ],
  exports:[BecomeMemberPage]
})
export class BecomeMemberPageModule {}
