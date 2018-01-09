import { DonorsStatePage } from './../pages/donors-state/donors-state';
import { StatePage } from './../pages/state/state';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RequiredPage } from '../pages/required/required';
import { ShowRequiredPage } from '../pages/show-required/show-required';
import { BloodBanksPage } from '../pages/blood-banks/blood-banks';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { DonorsPage } from '../pages/donors/donors'
import { DonorsRegisterPage } from '../pages/donors-register/donors-register';
import {NotificationsPage} from '../pages/notifications/notifications'
import {AboutPage} from '../pages/about/about';
import {ContatcUsPage} from '../pages/contatc-us/contatc-us';
import {DevelopersPage} from '../pages/developers/developers';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule , AngularFireDatabase  } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IonicStorageModule } from '@ionic/storage';
import {RegistrationPage} from '../pages/registration/registration';
import {LoginPage} from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { OneSignal } from '@ionic-native/onesignal';
import { GooglePlus } from '@ionic-native/google-plus';


const config = {
  apiKey: "AIzaSyAuIjKUArUPopixyD6NtJ334dDlf9O2pcM",
  authDomain: "blood-bank-14864.firebaseapp.com",
  databaseURL: "https://blood-bank-14864.firebaseio.com",
  projectId: "blood-bank-14864",
  storageBucket: "blood-bank-14864.appspot.com",
  messagingSenderId: "246828580001"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      RequiredPage,
      ShowRequiredPage,
      BloodBanksPage,
      SettingsPage,
      TabsPage,
      AnimatesDirective,
      DonorsPage,
      DonorsRegisterPage,
      NotificationsPage,
      DevelopersPage,
      AboutPage,
      ContatcUsPage,
      RegistrationPage,
      LoginPage,
      StatePage,
      DonorsStatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(
      MyApp, {
        backButtonText: 'رجوع'
      },
      
    
    ),
      AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    
    
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
       RequiredPage,
      ShowRequiredPage,
      BloodBanksPage,
      TabsPage,
      HomePage,
      SettingsPage,
      DonorsPage,
      DonorsRegisterPage,
      NotificationsPage,
      DevelopersPage,
      AboutPage,
      ContatcUsPage,
      RegistrationPage,
      LoginPage,
      StatePage,
      DonorsStatePage
  ],
  providers: [
    GooglePlus,
    OneSignal,
      LocalNotifications,
      Facebook,
      CallNumber,
    StatusBar,
    SplashScreen,
      AngularFireDatabase,
      AnimationService,
      AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
