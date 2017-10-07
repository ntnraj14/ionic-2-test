import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/createAccount';
import { LoginPage } from '../login/login';

@IonicPage(
  {
  name:'become-tabs-page'
  }
)

@Component({
  selector: 'page-become-member',
  templateUrl: 'become-member.html'
})
export class BecomeMemberPage {

  signInRoot = LoginPage;
  signUpRoot = CreateAccountPage;


  constructor(public navCtrl: NavController) {}

}
