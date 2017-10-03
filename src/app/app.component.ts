import { Component,ViewChild,OnInit,ChangeDetectorRef} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController} from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CreateAccountPage } from '../pages/create-account/createAccount';
import { BroadcasterService } from '../services/broadcaster.service';
import { MessageService } from '../services/message.service';
import { AlertService } from '../services/alert.service';
import { SharedService } from '../services/sharedService.service';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{

  rootPage:any = CreateAccountPage;
  @ViewChild('nav') nav: NavController;
  accountName:any="Account";
  subscription:any;
  message: string;
  userInfo: {name: string, email: string} = {name: '', email: ''};
  userLoggedIn:boolean=false;

  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen,public storage: Storage,
            private broadcaster: BroadcasterService,private sharedService : SharedService,
              private ref:ChangeDetectorRef,private messageEvent: MessageService,private alertService: AlertService) {
    this.initializeApp();
  }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

openloginPage(page) {
   this.nav.push(LoginPage);
 }

 openCreateAccountPage(page) {
 this.nav.push(CreateAccountPage);
}

ngOnInit(){
  this.registerTypeBroadcast();
  this.userLogged();
}

registerTypeBroadcast() {
  this.messageEvent.on()
    .subscribe(message => {
        this.message = message;
        if(this.message == "userLoggedIn"){
          setTimeout(()=>{
            this.userLogged();
          },1000);
        }
      });
}

userLogged(){
  if(JSON.parse(localStorage.getItem('currentUser')) != null){
      this.accountName= (JSON.parse(localStorage.getItem('currentUser'))).name;
      this.userLoggedIn=true;
  }else{
    this.accountName="Account";
    this.userLoggedIn=false;
  }
  this.ref.detectChanges();
}

logOut(){
  localStorage.removeItem("currentUser");
  this.userLogged();
  }
}
