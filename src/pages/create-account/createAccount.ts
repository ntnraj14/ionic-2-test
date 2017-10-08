import { Component } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { SharedService } from '../../services/sharedService.service';
import { BroadcasterService } from '../../services/broadcaster.service';
import { MessageService } from '../../services/message.service';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { NavController,ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import { ValidationOnBlurDirective } from '../../directives/validate-on-blur/validate-on-blur';
import { BecomeMemberPage } from '../become-member/become-member';

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  myForm: FormGroup;
    userInfo: {name: string, email: string, phone: string, password: string, confirmPassword: string} =
    {name: '', email: '', phone: '',password:'',confirmPassword:''};
     message: string;
  loggedIn:boolean=false;

    constructor(public formBuilder: FormBuilder, public navCtrl: NavController ,
      public viewCtrl: ViewController, public storage: Storage, public sharedService: SharedService,
      private broadcaster: BroadcasterService,private messageEvent: MessageService, private alert: AlertService) {
        this.sharedService=sharedService;
    }

    ngOnInit(): any {
      this.myForm = this.formBuilder.group({
        'name': ['', [Validators.required,Validators.minLength(3),this.nameValidator.bind(this)]],
        'phone': ['', this.phoneValidator.bind(this)],
        'email': ['', [Validators.required, this.emailValidator.bind(this)]],
        'password': ['', [Validators.required, this.passwordValidator.bind(this)]],
        'confirmPassword': ['', [Validators.required, this.passwordValidator.bind(this)]]
      });
      if(JSON.parse(localStorage.getItem('currentUser')) != null){
        this.loggedIn=true;
        this.navCtrl.push(TabsPage);
      }
    }
    onSubmit() {
      this.alert.presentToast('Yeahh! Your account created successfully');
      console.log('submitting form');
      localStorage.removeItem("currentUser");
      this.storage.set(this.userInfo.email, this.userInfo);
      this.sharedService.setUserName(this.userInfo.email);
      this.sharedService.setUserState(true);
      this.storage.set(this.userInfo.email, this.userInfo);
      // this.navCtrl.pop(BecomeMemberPage);
      this.navCtrl.push(TabsPage,{index: "1"});
    }

    isValid(field: string) {
      let formField = this.myForm.get(field);
      return formField.valid || formField.pristine;
    }

    nameValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value !== '') {
      if (!control.value.match("^[A-Za-z0-9 ]+[A-Za-z0-9\s]$")) {
        return {'invalidName': true};
      }
    }
  }

    phoneValidator(control: FormControl): {[s: string]: boolean} {
      if (control.value !== '') {
        if (!control.value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
          return {'invalidPhone': true};
        }
      }
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
     this.navCtrl.pop();
  }
}
