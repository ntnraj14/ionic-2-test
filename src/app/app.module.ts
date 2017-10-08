import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CreateAccountPage } from '../pages/create-account/createAccount';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreateAccountService } from '../services/createAccount.service';
import { AlertService } from '../services/alert.service';
import { SharedService } from '../services/sharedService.service';
import { BroadcasterService } from '../services/broadcaster.service';
import { MessageService } from '../services/message.service';
import { IonicStorageModule } from '@ionic/storage';
import { BecomeMemberPage } from '../pages/become-member/become-member';
import { ValidationOnBlurDirective } from '../directives/validate-on-blur/validate-on-blur';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CreateAccountPage,
    ValidationOnBlurDirective,
    BecomeMemberPage    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true
   }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CreateAccountPage,
    BecomeMemberPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedService,
    BroadcasterService,
    MessageService,
    AlertService
  ]
})
export class AppModule {}
