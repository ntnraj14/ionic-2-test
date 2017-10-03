import { Component} from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { SharedService } from '../../services/sharedService.service';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { NavController,ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm: FormGroup;
    userInfo: {email: string,password: string} = {email: '',password:''};

    constructor(public formBuilder: FormBuilder, public navCtrl: NavController ,
      public viewCtrl: ViewController, public storage: Storage,public alertService: AlertService,
      public sharedService:SharedService) {
        this.sharedService=sharedService;
    }

    ngOnInit(): any {
      this.myForm = this.formBuilder.group({
        'email': ['', [Validators.required, this.emailValidator.bind(this)]],
        'password': ['', [Validators.required, this.passwordValidator.bind(this)]]
      });
    }

    isValid(field: string) {
      let formField = this.myForm.get(field);
      return formField.valid || formField.pristine;
    }

    emailValidator(control: FormControl): {[s: string]: boolean} {
      if (control.value!==''){
        if(!control.value.toLowerCase().match('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')){
          return {'invalidEmail': true};
        }
      }
    }
    passwordValidator(control: FormControl): {[s: string]: boolean} {
      if (control.value!==''){
        if(!control.value.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')){
          return {'invalidPassword': true};
        }
      }
    }

    goBack(){
     this.navCtrl.setRoot(TabsPage);
   }

  login (){
    this.storage.get(this.userInfo.email).then((val) => {
      console.log('data', val);
      if( val!=null && val.email!= null){
        if(this.userInfo.email == val.email){
          if(this.userInfo.password == val.password){
            this.sharedService.setUserName(this.userInfo.email);
            this.navCtrl.pop();
          }else{
            this.alertService.alertPrompt("Oops!","incorrect password");
          }
        }
      }
      else{
        this.alertService.alertPrompt("Oops!","This email is not registered with us.");
      }
    });
  }
}
