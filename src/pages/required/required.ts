import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { ShowRequiredPage } from '../show-required/show-required';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Observable } from 'rxjs/Observable';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';
// import * as Parse from 'parse';

@IonicPage()
@Component({
  selector: 'page-required',
  templateUrl: 'required.html',
})
export class RequiredPage {
 required :AngularFireList<any>;
 uid;
 name=""
  bloodtype=""
  age=""
  phone=""
  location=""
  notes=""
   state=""
   logginIN= false;
   send ={
    "app_id": "64606478-d20e-4b1c-bb6b-afb62c65a945",
    "included_segments": ["Active Users"],
    "data": {"foo": "bar"},
    "contents": {"en": "English Message"}
   }
 // send
  constructor(public storage: Storage,private fb: Facebook ,public fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams , public db:AngularFireDatabase , public localNotifications:LocalNotifications) {
    fb.getLoginStatus().then(res=>{
      if(res.status==="connect"){
        this.logginIN = true;
      }else{
        this.logginIN= false;
      }
    }).catch(e =>{
      console.log('error : '+e);
    });
   
    fire.auth.onAuthStateChanged(function(user){
      if(!user){
        navCtrl.setRoot(LoginPage);
      }
      console.log(user);
       });
    this.required = db.list('/required'); 
    this.fire.authState.subscribe(auth =>{
      if (auth) {
        this.uid=auth.uid;
        console.log(auth);
      }
        
  
   })
    this.localNotifications.on("click" ,(notification ,state) =>{
      
        this.navCtrl.push(ShowRequiredPage 
        )
      })
      
      this.sendNotification();
    }


  addRequired( name , bloodtype ,age , phone , location , state , notes){
   let  d = new Date();
   let time = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
      this.required.push({
    "name":name,
    "bloodtype":bloodtype,
    "age":age,
    "phone":phone,
    "location":location,
    "notes":notes,
    "decs":0- Date.now(),
    "time":time,
    "state":state,
    "hide":"0",
    "addedby":this.uid,
  }).then(newPerson =>{
    this.navCtrl.push(ShowRequiredPage)
  },error => {
    console.log(error);
  }
)
let send ={
  "app_id": "64606478-d20e-4b1c-bb6b-afb62c65a945",
  "included_segments": ["Active Users"],
  "data": {"foo": "bar"},
  "contents": {"en": "English Message"}
 }

   this.localNotifications.schedule({
  id: 1,
    title:'مطلوب فصيلة ' +bloodtype ,
  text: 'يوجد شخص يحتاج الى التبرع بالدم يرجى التوجه الى مستشفى  ' + location,
  
});
  return send;
  }

sendNotification(){
  // this.send = function(params) {
  //    const Parse = require('parse');
    
  //   var promise = new Parse.Promise();
    
  //   var jsonBody = { 
  //     app_id: "64606478-d20e-4b1c-bb6b-afb62c65a945", 
  //     included_segments: ["Active Users"],
  //     contents: {en: "English Message"},
  //     data: {foo: "bar"}
  //   };
    
  //   Parse.Cloud.httpRequest({
  //       method: "POST",
  //       url: "https://onesignal.com/api/v1/notifications",
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //         "Authorization": "NjczMzBjMTYtNWYwNy00M2FjLTk1YTAtMjlmYjlkOGZhM2Y2"
  //       },
  //       body: JSON.stringify(jsonBody)
  //     }).then(function (httpResponse) {
  //       promise.resolve(httpResponse)
  //     },
  //     function (httpResponse) {
  //       promise.reject(httpResponse);
  //   });
    
  //   return promise;
  //   };
    
  //   exports.send = this.send; 
}
}
