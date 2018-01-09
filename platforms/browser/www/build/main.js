webpackJsonp([14],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__donors_donors__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__required_required__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_required_show_required__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blood_banks_blood_banks__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__donors_register_donors_register__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(db, ev, navCtrl, navParams, storage) {
        var _this = this;
        this.db = db;
        this.ev = ev;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.x = 2;
        this.ev.subscribe('v', function (v) {
            if (v) {
                _this.x = 0;
                console.log('Your x sub is', _this.x);
            }
            else {
                _this.x = 1;
                console.log('Your x sub is', _this.x);
            }
        });
        this.storage.get('toggle01').then(function (val) {
            if (val) {
                _this.x = 0;
            }
            else {
                _this.x = 1;
            }
            console.log('Your x home is', _this.x);
        });
    }
    HomePage.prototype.request = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__required_required__["a" /* RequiredPage */]);
    };
    HomePage.prototype.showRequried = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__show_required_show_required__["a" /* ShowRequiredPage */]);
    };
    HomePage.prototype.bloodBanks = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__blood_banks_blood_banks__["a" /* BloodBanksPage */]);
    };
    HomePage.prototype.donors = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__donors_donors__["a" /* DonorsPage */]);
    };
    HomePage.prototype.addDonors = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__donors_register_donors_register__["a" /* DonorsRegisterPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/home/home.html"*/'\n<ion-header>\n  <ion-navbar color="dark-red">\n    <ion-title>الصفحة الرئيسية</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <!-- <div *ngFor="let item of state  | async " >\n    <p>{{item.key}}</p>\n    <p>{{item.state}}</p>\n  </div> -->\n   <ion-grid *ngIf="x==0">\n            \n        <ion-row style="padding-top:80px;">\n            <button ion-button color="danger" outline class="btn" col-8 offset-2 (click)="request()">\n                <img  class="btn-img" src="./assets/imgs/blood3.png"/>\n            طلب عاجل                \n           </button>\n        </ion-row>\n\n        <ion-row style="padding-top:30px;">\n\n              <button ion-button color="danger" outline class="btn" col-8 offset-2 (click)="showRequried()">\n                    <img  class="btn-img" src="./assets/imgs/blood4.png"/>\n                    تبرع الان               \n               </button>\n        </ion-row>\n\n        <!-- <ion-row style="padding-top:10px;">\n        \n            <button ion-button color="danger" outline class="btn" col-8 offset-2 (click)="bloodBanks()">\n                <img  class="btn-img" src="./assets/imgs/blood-donation33.png"/>\n                مراكز التبرع               \n           </button>\n\n        </ion-row> -->\n        <ion-row style="padding-top:30px;">\n          \n              <button ion-button color="danger" outline class="btn" col-8 offset-2 (click)="donors()">\n                  <img  class="btn-img" src="./assets/imgs/blood1.png"/>\n                  المتبرعين           \n             </button>\n  \n          </ion-row>\n          <ion-row style="padding-top:30px;">\n            \n                <button ion-button color="danger" outline class="btn" col-8 offset-2 (click)="addDonors()">\n                 <p> انضم الى المتبرعين الان</p>\n                  </button>\n    \n            </ion-row>\n    </ion-grid>\n\n  <ion-slides *ngIf="x==1" loop animates #animation="animates"   (ionSlideDidChange)="animation.start({type: \'bounceIn\', duration: \'1000\'})">\n    <ion-slide>\n      <img src="./assets/imgs/blood/blood1.jpg" class="slide-image"/>\n      <h2 class="slide-title">محتاج دم</h2>\n      <p >اكتب ما تحتاجه هنا وسيتم عرضه للجميع</p>\n      <button  ion-button large clear icon-end color="danger" (click)="request()">\n          دخول\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="./assets/imgs/blood/blood2.jpg" class="slide-image"/>\n      <h2 class="slide-title">محتاج متبرع بالدم</h2>\n      <p >ابحث هنا عن جميع المتبرعين الذين يستطيعون مساعدتك وتلبية ما تحتاج</p>\n      <button  ion-button large clear icon-end color="danger" (click)="donors()">\n          دخول\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="./assets/imgs/blood/blood4.png" class="slide-image"/>\n      <h2 class="slide-title"> تريد تتبرع الان</h2>\n      <p >يعرض هنا جميع الاشخاص الذين هم بحاجة الى تبرع دم مع بياناتهم</p>\n      <button  ion-button large clear icon-end color="danger" (click)="showRequried()">\n          دخول\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="./assets/imgs/blood/blood6.jpg" class="slide-image"/>\n      <h2  class="slide-title fon">مستعد للتبرع في اي وقت</h2>\n      <button  ion-button large clear icon-end color="danger" (click)="addDonors()">\n        سجل بياناتك\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n  \n</ion-content>'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/tabs/tabs.html"*/'<ion-tabs color="dark-red">\n    <ion-tab [root]="tab1Root" tabTitle="الرئيسية" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="الاعدادات" tabIcon="build"></ion-tab>\n  </ion-tabs>'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="dark-red">\n      <ion-title>\n        عن التطبيق\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="light" showWhen="ios">الغاء</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content padding style="direction:rtl">\n\n        \n<div class="imgdiv">\n  <img class="mg" src="./assets/imgs/blood/2.jpg"/>\n</div>\n             \n        <h2> مصرف الدم" </h2>\n          <p>\n\n              هو تطبيق لمساعدة الناس الذين هم بحاجه الى متبرع بالدم على نحو اضطراري او مستعجل. \n\n              فأذا كنت احد المحتاجين لفصيلة دم معينة او نادرة الحصول في اي وقت ، يمكنك ان تسجل طلبك وبسهولة بالغة وسوف يساعدك التطبيق على ايجاد الشخص المناسب الذي يحمل نفس الفصيلة المطلوبة او ارسال طلب اشعار طارئ لجميع المتبرعين المستعدين للتبرع بالدم. \n              \n              يتيح التطبيق ايضا التسجيل كمتبرع ، من اجل ان تكون انت احد المتبرعين بالدم من اجل مساعدة الاخرين الذين هم بحاجه لمساعدتك.\n          </p>\n      <hr>\n      <small style="color:rgb(187, 187, 187)">\n          الاصدار : 1.0\n      </small>\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodBanksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { RequiredPage } from '../required/required';
/**
 * Generated class for the BloodBanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BloodBanksPage = (function () {
    function BloodBanksPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notification = {
            id: 0,
            name: ""
        };
        this.notification.id = this.navParams.get("id");
        this.notification.name = this.navParams.get("name");
        // alert(this.notification.name);
    }
    return BloodBanksPage;
}());
BloodBanksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-blood-banks',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/blood-banks/blood-banks.html"*/'<!--\n  Generated template for the BloodBanksPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark-red">\n    <ion-title>مراكز التبرع</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<!-- <ion-content padding *ngFor="let item of notification | async">\n<ul>\n  <li>{{item.id}}</li>\n  <li>{{item.name}}</li>\n</ul>\n</ion-content> -->\n<ion-content>\n\n  <ion-card>\n    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13751.406125252275!2d47.81599561971435!3d30.496951942098555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc49778df1c5ced%3A0x428509b14379ea19!2z2YXYs9iq2LTZgdmJINin2YTYqNi12LHYqSDYp9mE2LnYp9mF!5e0!3m2!1sar!2siq!4v1513072509131" width="100%" height="300" frameborder="0" style="border:0"></iframe>\n  \n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>مستشفى البصرة العام</h2>\n      <p>البصرة - قرب ساحة سعد</p>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10085.09446905885!2d47.70658773241973!3d30.38571836166859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc4be9dcea4d2d7%3A0x71b079fc3a7f4a26!2z2YXYs9iq2LTZgdmJINin2YTYstio2YrYsSDYp9mE2LnYp9mF!5e0!3m2!1sar!2siq!4v1513073371170" width="100%W" options="zoom:15" height="300" frameborder="0" style="border:0" ></iframe>\n  \n    <ion-item>\n      <ion-icon name="pin" item-start large></ion-icon>\n      <h2>مستشفى الزبير العام</h2>\n      <p>البصرة - الزبير- </p>\n    </ion-item>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/blood-banks/blood-banks.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BloodBanksPage);

//# sourceMappingURL=blood-banks.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatcUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContatcUsPage = (function () {
    function ContatcUsPage(storage, fire, navCtrl, navParams, viewCtrl, db, alertCtrl) {
        this.storage = storage;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        fire.auth.onAuthStateChanged(function (user) {
            if (!user) {
                navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
            console.log(user);
        });
        this.newFeedback = db.list('/Feedback');
    }
    ContatcUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContatcUsPage');
    };
    ContatcUsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ContatcUsPage.prototype.sendfeedback = function (feedback_title, feedback_subject) {
        var _this = this;
        var d = new Date();
        var time = [d.getMonth() + 1,
            d.getDate(),
            d.getFullYear()].join('/') + ' ' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        this.newFeedback.push({
            feedback_title: feedback_title,
            feedback_subject: feedback_subject,
            decs: 0 - Date.now(),
            time: time
        }).then(function (newPerson) {
            _this.showAlert();
        }, function (error) {
            console.log(error);
        });
    };
    ContatcUsPage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'شكرا لك',
            subTitle: 'شاكرين تواصلك معنا وسنأخذ برأيك بعين الاعتبار',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.dismiss();
                    }
                },
            ]
        });
        alert.present();
    };
    return ContatcUsPage;
}());
ContatcUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contatc-us',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/contatc-us/contatc-us.html"*/'<!--\n  Generated template for the ContatcUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color="dark-red">\n      <ion-title >\n        تواصل معنا\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="light" showWhen="ios">الغاء</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <img src="./assets/imgs/blood/review3.png"/>\n    <ion-card-content>\n      <ion-card-title>\n        رأيك يهمنا\n        </ion-card-title>\n      <p>\n        ساعدنا بتطوير التطبيق وانطينا رآيك واكتبلنا جوه اذا كانت عندك مشكلة بالتطبيق او انطينا فكرة ممكن تطور التطبيق\n      </p>\n    </ion-card-content>\n  </ion-card>\n<ion-list >\n  <ion-item>\n    <ion-label floating>عنوان الموضوع </ion-label>\n    <ion-input type="text" [(ngModel)]="feedback_title"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label floating>التفاصيل</ion-label>\n    <ion-textarea type="textarea" [(ngModel)]="feedback_subject"></ion-textarea>\n</ion-item>\n</ion-list>\n<button side="right" color="dark-red" ion-button block (click)="sendfeedback(feedback_title,feedback_subject)">ارسال </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/contatc-us/contatc-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ContatcUsPage);

//# sourceMappingURL=contatc-us.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequiredPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_required_show_required__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RequiredPage = (function () {
    function RequiredPage(storage, fb, fire, navCtrl, navParams, db, localNotifications) {
        var _this = this;
        this.storage = storage;
        this.fb = fb;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.localNotifications = localNotifications;
        this.name = "";
        this.bloodtype = "";
        this.age = "";
        this.phone = "";
        this.location = "";
        this.notes = "";
        this.state = "";
        this.logginIN = false;
        this.send = {
            "app_id": "64606478-d20e-4b1c-bb6b-afb62c65a945",
            "included_segments": ["Active Users"],
            "data": { "foo": "bar" },
            "contents": { "en": "English Message" }
        };
        fb.getLoginStatus().then(function (res) {
            if (res.status === "connect") {
                _this.logginIN = true;
            }
            else {
                _this.logginIN = false;
            }
        }).catch(function (e) {
            console.log('error : ' + e);
        });
        fire.auth.onAuthStateChanged(function (user) {
            if (!user) {
                navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
            }
            console.log(user);
        });
        this.required = db.list('/required');
        this.fire.authState.subscribe(function (auth) {
            if (auth) {
                _this.uid = auth.uid;
                console.log(auth);
            }
        });
        this.localNotifications.on("click", function (notification, state) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__show_required_show_required__["a" /* ShowRequiredPage */]);
        });
        this.sendNotification();
    }
    RequiredPage.prototype.addRequired = function (name, bloodtype, age, phone, location, state, notes) {
        var _this = this;
        var d = new Date();
        var time = [d.getMonth() + 1,
            d.getDate(),
            d.getFullYear()].join('/') + ' ' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        this.required.push({
            "name": name,
            "bloodtype": bloodtype,
            "age": age,
            "phone": phone,
            "location": location,
            "notes": notes,
            "decs": 0 - Date.now(),
            "time": time,
            "state": state,
            "hide": "0",
            "addedby": this.uid,
        }).then(function (newPerson) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__show_required_show_required__["a" /* ShowRequiredPage */]);
        }, function (error) {
            console.log(error);
        });
        this.localNotifications.schedule({
            id: 1,
            title: 'مطلوب فصيلة ' + bloodtype,
            text: 'يوجد شخص يحتاج الى التبرع بالدم يرجى التوجه الى مستشفى  ' + location,
        });
    };
    RequiredPage.prototype.sendNotification = function () {
        return this.send;
        //   this.send = function(params) {
        //     var promise = new Parse.Promise();
        //     var jsonBody = { 
        //       app_id: "5eb5a37e-b458-11e3-ac11-000c2940e62c", 
        //       included_segments: ["Active Users"],
        //       contents: {en: "English Message"},
        //       data: {foo: "bar"}
        //     };
        //     Parse.Cloud.httpRequest({
        //         method: "POST",
        //         url: "https://onesignal.com/api/v1/notifications",
        //         headers: {
        //           "Content-Type": "application/json;charset=utf-8",
        //           "Authorization": "Basic NGEwMGZmMjItY2NkNy0xMWUzLTk5ZDUtMDAwYzI5NDBlNjJj"
        //         },
        //         body: JSON.stringify(jsonBody)
        //       }).then(function (httpResponse) {
        //         promise.resolve(httpResponse)
        //       },
        //       function (httpResponse) {
        //         promise.reject(httpResponse);
        //     });
        //     return promise;
        //     };
        //     exports.send = this.send;
        // }
    };
    return RequiredPage;
}());
RequiredPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-required',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/required/required.html"*/'<!--\n  Generated template for the RequiredPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="dark-red">\n        <ion-title>طلب دم</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list class="rightSide">\n        <!-- <div *ngFor="let item of state_table | async">\n            <p>{{item.state}}</p>\n        </div> -->\n        <ion-item>\n            <ion-label floating>اسم المريض</ion-label>\n            <ion-input type="text" [(ngModel)]="name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>فصيلة الدم </ion-label>\n\n            <ion-select [(ngModel)]="bloodtype" cancelText="الغاء" okText="اختار ">\n                <ion-option value="A+">A+</ion-option>\n                <ion-option value="A−">A-</ion-option>\n                <ion-option value="O−">O−</ion-option>\n                <ion-option value="O+">O+</ion-option>\n                <ion-option value="B−">B− </ion-option>\n                <ion-option value="B+">B+</ion-option>\n                <ion-option value="AB−">AB−</ion-option>\n                <ion-option value="AB+">AB+</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n       \n        <ion-item>\n            <ion-label floating>عمر المريض </ion-label>\n            <ion-input type="tel" [(ngModel)]="age"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>رقم الهاتف </ion-label>\n            <ion-input type="tel" [(ngModel)]="phone"></ion-input>\n        </ion-item>\n        <ion-item>\n                <ion-label floating>المحافظة </ion-label>\n    \n                <ion-select [(ngModel)]="state" cancelText="الغاء" okText="اختار ">\n                    <ion-option value="1">بغداد</ion-option>\n                    <ion-option value="2">البصرة</ion-option>\n                    <ion-option value="3">نينوى</ion-option>\n                    <ion-option value="4">لأنبار</ion-option>\n                    <ion-option value="5">أربيل </ion-option>\n                    <ion-option value="6">بابل</ion-option>\n                    <ion-option value="7">دهوك</ion-option>\n                    <ion-option value="8">القادسية</ion-option>\n                    <ion-option value="9">ديالى</ion-option>\n                    <ion-option value="10">ذي قار</ion-option>\n                    <ion-option value="11">السليمانية</ion-option>\n                    <ion-option value="12">صلاح الدين</ion-option>\n                    <ion-option value="13">كركوك</ion-option>\n                    <ion-option value="14">كربلاء</ion-option>\n                    <ion-option value="15">المثنى</ion-option>\n                    <ion-option value="16">ميسان</ion-option>\n                    <ion-option value="17">	النجف</ion-option>\n                    <ion-option value="18">واسط</ion-option>\n\n                </ion-select>\n    \n            </ion-item>\n            \n        <ion-item>\n            <ion-label floating>المستشفى </ion-label>\n            <ion-input type="text" [(ngModel)]="location"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>ملاحظات اخرى </ion-label>\n            <ion-textarea type="text" [(ngModel)]="notes"></ion-textarea>\n        </ion-item>\n\n    </ion-list>\n    <button side="right" color="dark-red" ion-button block (click)="addRequired(name , bloodtype ,age , phone , location , state , notes)">اطلب الان </button>\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/required/required.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], RequiredPage);

//# sourceMappingURL=required.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonorsRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__donors_donors__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DonorsRegisterPage = (function () {
    function DonorsRegisterPage(storage, fb, fire, navCtrl, navParams, db) {
        var _this = this;
        this.storage = storage;
        this.fb = fb;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.logginIN = false;
        this.hide = "";
        this.name = "";
        this.bloodtype = "";
        this.phone = "";
        this.location = "";
        this.note = "";
        this.state = "";
        fb.getLoginStatus().then(function (res) {
            if (res.status === "connect") {
                _this.logginIN = true;
            }
            else {
                _this.logginIN = false;
            }
        }).catch(function (e) {
            console.log('error : ' + e);
        });
        this.fire.auth.onAuthStateChanged(function (user) {
            if (!user) {
                navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
            }
            console.log(user);
        });
        this.register = db.list('/Donors');
        this.fire.authState.subscribe(function (auth) {
            if (auth) {
                _this.uid = auth.uid;
            }
        });
    }
    DonorsRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonorsRegisterPage');
    };
    DonorsRegisterPage.prototype.addDonors = function (name, bloodtype, phone, location, note, state) {
        var _this = this;
        var d = new Date();
        var time = [d.getMonth() + 1,
            d.getDate(),
            d.getFullYear()].join('/') + ' ' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
        this.register.push({
            "name": name,
            "bloodtype": bloodtype,
            "note": note,
            "phone": phone,
            "location": location,
            "state": state,
            "hide": "0",
            "decs": 0 - Date.now(),
            "time": time,
            "addedby": this.uid,
        }).then(function (newPerson) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__donors_donors__["a" /* DonorsPage */]);
        }, function (error) {
            console.log(error);
        });
    };
    return DonorsRegisterPage;
}());
DonorsRegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-donors-register',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/donors-register/donors-register.html"*/'<!--\n  Generated template for the DonorsRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark-red">\n    <ion-title>متبرع جديد</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list class="rightSide">\n            <ion-item>\n                <ion-label floating>اسم المتبرع</ion-label>\n                <ion-input type="text" [(ngModel)]="name"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n                <ion-label floating>فصيلة الدم </ion-label>\n    \n                <ion-select [(ngModel)]="bloodtype" cancelText="الغاء" okText="اختار ">\n                    <ion-option value="A+">A+</ion-option>\n                    <ion-option value="A−">A-</ion-option>\n                    <ion-option value="O−">O−</ion-option>\n                    <ion-option value="O+">O+</ion-option>\n                    <ion-option value="B−">B− </ion-option>\n                    <ion-option value="B+">B+</ion-option>\n                    <ion-option value="AB−">AB−</ion-option>\n                    <ion-option value="AB+">AB+</ion-option>\n    \n                </ion-select>\n    \n            </ion-item>\n            <ion-item>\n                <ion-label floating>رقم الهاتف </ion-label>\n                <ion-input type="tel" [(ngModel)]="phone"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>المحافظة </ion-label>\n    \n                <ion-select [(ngModel)]="state" cancelText="الغاء" okText="اختار ">\n                    <ion-option value="1">بغداد</ion-option>\n                    <ion-option value="2">البصرة</ion-option>\n                    <ion-option value="3">نينوى</ion-option>\n                    <ion-option value="4">لأنبار</ion-option>\n                    <ion-option value="5">أربيل </ion-option>\n                    <ion-option value="6">بابل</ion-option>\n                    <ion-option value="7">دهوك</ion-option>\n                    <ion-option value="8">القادسية</ion-option>\n                    <ion-option value="9">ديالى</ion-option>\n                    <ion-option value="10">ذي قار</ion-option>\n                    <ion-option value="11">السليمانية</ion-option>\n                    <ion-option value="12">صلاح الدين</ion-option>\n                    <ion-option value="13">كركوك</ion-option>\n                    <ion-option value="14">كربلاء</ion-option>\n                    <ion-option value="15">المثنى</ion-option>\n                    <ion-option value="16">ميسان</ion-option>\n                    <ion-option value="17">	النجف</ion-option>\n                    <ion-option value="18">واسط</ion-option>\n\n                </ion-select>\n    \n            </ion-item>\n            <ion-item>\n                <ion-label floating>العنوان </ion-label>\n                <ion-input type="text" [(ngModel)]="location"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>ملاحظات اخرى</ion-label>\n              <ion-input type="text" [(ngModel)]="note"></ion-input>\n          </ion-item>\n    \n        </ion-list>\n        <button side="right" color="dark-red" ion-button block (click)="addDonors(name , bloodtype , phone , location , note ,state)">تسجيل </button>\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/donors-register/donors-register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], DonorsRegisterPage);

//# sourceMappingURL=donors-register.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notifications_notifications__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contatc_us_contatc_us__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__developers_developers__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SettingsPage = (function () {
    function SettingsPage(fb, af, toastCtrl, fire, ev, navCtrl, navParams, storage, modalCtrl) {
        var _this = this;
        this.fb = fb;
        this.af = af;
        this.toastCtrl = toastCtrl;
        this.fire = fire;
        this.ev = ev;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.toggle01 = true;
        this.toggle02 = false;
        this.x = 1;
        this.signOut = false;
        this.logginIN = false;
        this.logginFb = false;
        fb.getLoginStatus().then(function (res) {
            if (res.status === "connect") {
                _this.logginIN = true;
            }
            else {
                _this.logginIN = false;
            }
        }).catch(function (e) {
            console.log('error : ' + e);
        });
        this.storage.get('toggle01').then(function (val) {
            _this.toggle01 = val;
            if (val) {
                _this.x = 0;
            }
            else {
                _this.x = 1;
            }
            console.log('Your x sittng cc is', _this.x);
        });
    }
    SettingsPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
    };
    SettingsPage.prototype.toggleOne = function () {
        var _this = this;
        this.toggle01 = !this.toggle02;
        this.storage.set('toggle01', this.toggle01);
        this.storage.get('toggle01').then(function (val1) {
            if (val1) {
                _this.x = 0;
            }
            else {
                _this.x = 1;
            }
            console.log('Your val sittng tt is', val1);
            console.log('Your x sittng  tt is', _this.x);
            _this.publishEvent(val1);
        });
    };
    SettingsPage.prototype.toggleTwo = function () {
        this.toggle02 = !this.toggle01;
    };
    SettingsPage.prototype.publishEvent = function (v) {
        this.ev.publish('v', v);
    };
    SettingsPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__notifications_notifications__["a" /* NotificationsPage */]);
        modal.present();
    };
    SettingsPage.prototype.aboutModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__about_about__["a" /* AboutPage */]);
        modal.present();
    };
    SettingsPage.prototype.contactModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__contatc_us_contatc_us__["a" /* ContatcUsPage */]);
        modal.present();
    };
    SettingsPage.prototype.developerModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__developers_developers__["a" /* DevelopersPage */]);
        modal.present();
    };
    SettingsPage.prototype.logout = function () {
        var toast = this.toastCtrl.create({
            message: 'تم تسجيل الخروج من الحساب ',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.fire.auth.signOut().then(function () {
            toast.present();
        }, function (error) {
            console.log(error);
        });
    };
    SettingsPage.prototype.logoutfb = function () {
        var _this = this;
        this.fb.logout().then(function (res) {
            _this.logginIN = false;
            _this.storage.set('logginIN', _this.logginIN);
            _this.logginFb = false;
        }).catch(function (e) {
            console.log(e);
        });
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark-red">\n    <ion-title>الاعدادات</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list no-border >\n        \n            <ion-list-header>\n              شكل الصفحة الرئيسية \n            </ion-list-header>\n      \n            <ion-item>\n              <ion-toggle color="dark-red" [(ngModel)]="toggle01" (ionChange)="toggleTwo()"></ion-toggle>\n              <ion-label>\n                قياسي\n              </ion-label>\n              <ion-icon name=\'menu\' item-start></ion-icon>\n             \n            </ion-item>\n\n            <ion-item>\n              <ion-toggle color="dark-red"  [(ngModel)]="toggle02" (ionChange)="toggleOne()"></ion-toggle>\n              <ion-label>\n               حديث\n              </ion-label>\n              <ion-icon name=\'logo-buffer\' item-start></ion-icon>\n           \n            </ion-item>\n        \n      </ion-list>\n\n   <ion-list no-border  >\n            <ion-list-header>\n              الاشعارات\n            </ion-list-header>\n            <ion-item>\n              <ion-toggle color="dark-red" checked="true"></ion-toggle>\n              <ion-label>\n                 تلقي الاشعارات\n              </ion-label>\n              <ion-icon name=\'notifications\' item-start></ion-icon>\n            </ion-item>\n \n   </ion-list>\n\n   <ion-list no-border  >\n    <ion-list-header>\n      عن التطبيق\n    </ion-list-header>\n  <button ion-item  (click)="aboutModal()">\n    معلومات التطبيق\n    <ion-icon name=\'information-circle\' item-start></ion-icon>\n  </button>   \n   <button ion-item  (click)="contactModal()">\n    تواصل معنا\n    <ion-icon name=\'mail\' item-start></ion-icon>\n  </button>  \n   <button ion-item  (click)="developerModal()">\n    مطورين التطبيق\n    <ion-icon name=\'code-working\' item-start></ion-icon>\n  </button>\n      <button ion-item *ngIf="fire.authState | async; let user; else showLogin" (click)="logout()">\n   تسجيل خروج \n    <ion-icon ios="ios-log-out" md="md-log-out" item-start></ion-icon>\n  </button>  \n  <ng-template #showLogin>\n    <button ion-item (click)="login()">\n      تسجيل الدخول \n       <ion-icon ios="ios-log-in" md="md-log-in" item-start></ion-icon>\n     </button>  \n  </ng-template>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/settings/settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notifications',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/notifications/notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color="dark-red">\n    <ion-title>\n      تخصيص الاشعارات\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="light" showWhen="ios">الغاء</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-toggle checked="false"></ion-toggle>\n    <ion-label>\n      A+\n    </ion-label>\n    <ion-icon name=\'water\' item-start></ion-icon>\n  </ion-item>\n\n  <ion-item>\n    <ion-toggle checked="false"></ion-toggle>\n    <ion-label>\n      A-\n    </ion-label>\n    <ion-icon name=\'water\' item-start></ion-icon>\n  </ion-item>\n\n  <ion-item>\n    <ion-toggle checked="false"></ion-toggle>\n    <ion-label>\n      B+\n    </ion-label>\n    <ion-icon name=\'water\' item-start></ion-icon>\n  </ion-item>\n\n  <ion-item>\n    <ion-toggle checked="false"></ion-toggle>\n    <ion-label>\n      B-\n    </ion-label>\n    <ion-icon name=\'water\' item-start></ion-icon>\n  </ion-item>\n\n  <ion-item>\n    <ion-toggle checked="false"></ion-toggle>\n    <ion-label>\n      O+\n    </ion-label>\n    <ion-icon name=\'water\' item-start></ion-icon>\n  </ion-item>\n\n  <ion-item>\n    <ion-toggle checked="false"></ion-toggle>\n    <ion-label>\n      O-\n    </ion-label>\n    <ion-icon name=\'water\' item-start></ion-icon>\n  </ion-item>\n\n  <ion-item>\n    <ion-toggle checked="false"></ion-toggle>\n    <ion-label>\n      AB+\n    </ion-label>\n    <ion-icon name=\'water\' item-start></ion-icon>\n  </ion-item>\n\n  <ion-item>\n    <ion-toggle checked="false"></ion-toggle>\n    <ion-label>\n     AB-\n    </ion-label>\n    <ion-icon name=\'water\' item-start></ion-icon>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/notifications/notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DevelopersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevelopersPage = (function () {
    function DevelopersPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    DevelopersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevelopersPage');
    };
    DevelopersPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return DevelopersPage;
}());
DevelopersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-developers',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/developers/developers.html"*/'\n<ion-header>\n    <ion-toolbar color="dark-red" class="sml">\n      <ion-title>\n        المطوريين\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="light" showWhen="ios">الغاء</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content class="arabic" padding>\n  <p>\n    تم تنفيذ هذا التطبيق بواسطة فريق Code For Basra و هو جزء من مبادره Code For Iraq\n  </p>\n    <ion-list no-border >  \n        <ion-list-header>\n          برمجة وتصميم واجهات التطبيق\n        </ion-list-header>\n        <ion-item>\n         مهند عصام جبارة\n         <ion-icon name=\'code-working\' item-start></ion-icon>\n\n        </ion-item>\n        <ion-item>\n          علاء حسن المشلب\n          <ion-icon name=\'code-working\' item-start></ion-icon>\n\n        </ion-item>\n  </ion-list>\n    <ion-list no-border >  \n        <ion-list-header>\n          تصميم شعار التطبيق\n        </ion-list-header>\n        <ion-item>\n        عمار مرتضى\n        <ion-icon name=\'brush\' item-start></ion-icon>\n\n        </ion-item>\n\n  </ion-list>\n    <ion-list no-border >  \n        <ion-list-header>\n          اشراف على التنفيذ\n        </ion-list-header>\n        <ion-item>\n          مروان سعد جليل\n          <ion-icon name=\'contacts\' item-start></ion-icon>\n        </ion-item>\n        <ion-item>\n           هبة عبدالستار\n          <ion-icon name=\'contacts\' item-start></ion-icon>\n        </ion-item>\n        <ion-item>\n           طيف خضير \n          <ion-icon name=\'contacts\' item-start></ion-icon>\n        </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/developers/developers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], DevelopersPage);

//# sourceMappingURL=developers.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrationPage = (function () {
    function RegistrationPage(toastCtrl, fire, navCtrl, navParams, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        // name="";
        this.email = "";
        this.password = "";
        this.msg = "";
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
    };
    RegistrationPage.prototype.Rgister = function () {
        var _this = this;
        var email_already_in_use = this.toastCtrl.create({
            message: 'هذا المستخدم موجود مسبقاً ..!',
            duration: 3000,
            position: 'top'
        });
        var weak_password = this.toastCtrl.create({
            message: 'كلمة المرور ضعيفة ..!',
            duration: 3000,
            position: 'top'
        });
        var invalid_email = this.toastCtrl.create({
            message: 'تأكد من البريد الالكتروني بشكل صحيح ..!',
            duration: 3000,
            position: 'top'
        });
        this.fire.auth.createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        }).catch(function (error) {
            console.log(error);
            console.log(error.code);
            if (error.code == "auth/email-already-in-use") {
                email_already_in_use.present();
            }
            if (error.code == "auth/weak-password") {
                weak_password.present();
            }
            if (error.code == "auth/invalid-email") {
                invalid_email.present();
            }
        });
        console.log(this.email + " " + this.password);
    };
    RegistrationPage.prototype.emailAlreadyInUse = function () {
        var alert = this.alertCtrl.create({
            title: 'خطأ',
            subTitle: "المستخدم موجود",
            buttons: ['حسناً']
        });
        alert.present();
    };
    return RegistrationPage;
}());
RegistrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-registration',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/registration/registration.html"*/'<!--\n  Generated template for the RegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark-red">\n      <ion-title>التسجيل</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="rit">\n\n  <ion-list>\n\n<div></div>\n    <ion-item class="rit">\n      <ion-label floating class="lb"> <ion-icon name="person" style="margin:8px"></ion-icon>البريد الالكتروني</ion-label>\n      <ion-input type="text" [(ngModel)]="email" ></ion-input>\n    </ion-item>\n    <ion-item class="rit">\n      <ion-label floating class="lb"> <ion-icon name="lock" style="margin:8px"></ion-icon>كلمة المرور</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  \n  <div padding>\n    <button ion-button  block color="dark-red" class="loginBnt" (click)="Rgister()">تسجيل</button>\n    <ion-row></ion-row>\n  </div>\n  <img src="./assets/imgs/blood/login-logo2.png" width="100%" />\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/registration/registration.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 226;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		606,
		13
	],
	"../pages/blood-banks/blood-banks.module": [
		607,
		12
	],
	"../pages/contatc-us/contatc-us.module": [
		608,
		11
	],
	"../pages/developers/developers.module": [
		609,
		10
	],
	"../pages/donors-register/donors-register.module": [
		610,
		9
	],
	"../pages/donors-state/donors-state.module": [
		611,
		8
	],
	"../pages/donors/donors.module": [
		612,
		7
	],
	"../pages/login/login.module": [
		613,
		6
	],
	"../pages/notifications/notifications.module": [
		614,
		5
	],
	"../pages/registration/registration.module": [
		615,
		4
	],
	"../pages/required/required.module": [
		616,
		3
	],
	"../pages/settings/settings.module": [
		617,
		2
	],
	"../pages/show-required/show-required.module": [
		619,
		1
	],
	"../pages/state/state.module": [
		618,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 270;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonorsStatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__donors_donors__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DonorsStatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonorsStatePage = (function () {
    function DonorsStatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonorsStatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonorsStatePage');
    };
    DonorsStatePage.prototype.selectState = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__donors_donors__["a" /* DonorsPage */], {
            id: id
        });
    };
    return DonorsStatePage;
}());
DonorsStatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-donors-state',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/donors-state/donors-state.html"*/'<!--\n  Generated template for the StatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  \n    <ion-navbar  color="dark-red">\n      <ion-title>آختر المحافظة </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-list >\n      <button ion-item  (click)="selectState(1)">\n        بغداد\n      </button> \n      <button ion-item  (click)="selectState(2)">\n        البصرة\n      </button> \n  \n      <button ion-item  (click)="selectState(3)">\n        نينوى\n      </button> \n  \n      <button ion-item  (click)="selectState(4)">\n        كركوك\n      </button> \n  \n      <button ion-item  (click)="selectState(5)">\n        ذي قار\n      </button> \n  \n      <button ion-item  (click)="selectState(6)">\n        ميسان\n      </button> \n  \n      <button ion-item  (click)="selectState(7)">\n        النجف\n      </button> \n  \n      <button ion-item  (click)="selectState(8)">\n       كربلاء\n      </button> \n  \n      <button ion-item  (click)="selectState(9)">\n        واسط\n      </button> \n  \n      <button ion-item  (click)="selectState(10)">\n        اربيل\n      </button> \n  \n      <button ion-item  (click)="selectState(11)">\n       دهوك\n      </button> \n  \n      <button ion-item  (click)="selectState(12)">\n        السليمانية\n      </button> \n  \n      <button ion-item  (click)="selectState(13)">\n        صلاح الدين\n      </button> \n      <button ion-item  (click)="selectState(14)">\n        الأنبار\n      </button> \n      <button ion-item  (click)="selectState(15)">\n        بابل\n      </button> \n      <button ion-item  (click)="selectState(16)">\n        القادسية\n      </button> \n      <button ion-item  (click)="selectState(17)">\n        المثنى\n      </button> \n      <button ion-item  (click)="selectState(17)">\n        ديالى\n      </button> \n      \n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/donors-state/donors-state.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
], DonorsStatePage);

//# sourceMappingURL=donors-state.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_required_show_required__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the StatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatePage = (function () {
    function StatePage(fire, af, navCtrl, navParams) {
        this.fire = fire;
        this.af = af;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatePage');
    };
    StatePage.prototype.selectState = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__show_required_show_required__["a" /* ShowRequiredPage */], {
            id: id
        });
    };
    return StatePage;
}());
StatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-state',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/state/state.html"*/'<!--\n  Generated template for the StatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar  color="dark-red">\n    <ion-title>آختر المحافظة </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="Gradient">\n  <h2>يرجى اختيار محافظتك</h2>\n  <ion-list >\n    <button ion-item  (click)="selectState(1)">\n      بغداد\n    </button> \n    <button ion-item  (click)="selectState(2)">\n      البصرة\n    </button> \n\n    <button ion-item  (click)="selectState(3)">\n      نينوى\n    </button> \n\n    <button ion-item  (click)="selectState(4)">\n      كركوك\n    </button> \n\n    <button ion-item  (click)="selectState(5)">\n      ذي قار\n    </button> \n\n    <button ion-item  (click)="selectState(6)">\n      ميسان\n    </button> \n\n    <button ion-item  (click)="selectState(7)">\n      النجف\n    </button> \n\n    <button ion-item  (click)="selectState(8)">\n     كربلاء\n    </button> \n\n    <button ion-item  (click)="selectState(9)">\n      واسط\n    </button> \n\n    <button ion-item  (click)="selectState(10)">\n      اربيل\n    </button> \n\n    <button ion-item  (click)="selectState(11)">\n     دهوك\n    </button> \n\n    <button ion-item  (click)="selectState(12)">\n      السليمانية\n    </button> \n\n    <button ion-item  (click)="selectState(13)">\n      صلاح الدين\n    </button> \n    <button ion-item  (click)="selectState(14)">\n      الأنبار\n    </button> \n    <button ion-item  (click)="selectState(15)">\n      بابل\n    </button> \n    <button ion-item  (click)="selectState(16)">\n      القادسية\n    </button> \n    <button ion-item  (click)="selectState(17)">\n      المثنى\n    </button> \n    <button ion-item  (click)="selectState(18)">\n      ديالى\n    </button> \n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/state/state.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
], StatePage);

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_donors_state_donors_state__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_state_state__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_required_required__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_show_required_show_required__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_blood_banks_blood_banks__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_local_notifications__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_css_animator__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_css_animator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_css_animator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_donors_donors__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_donors_register_donors_register__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_contatc_us_contatc_us__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_developers_developers__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_firestore__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_registration_registration__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_onesignal__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var config = {
    apiKey: "AIzaSyAuIjKUArUPopixyD6NtJ334dDlf9O2pcM",
    authDomain: "blood-bank-14864.firebaseapp.com",
    databaseURL: "https://blood-bank-14864.firebaseio.com",
    projectId: "blood-bank-14864",
    storageBucket: "blood-bank-14864.appspot.com",
    messagingSenderId: "246828580001"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_required_required__["a" /* RequiredPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_show_required_show_required__["a" /* ShowRequiredPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_blood_banks_blood_banks__["a" /* BloodBanksPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_16_css_animator__["AnimatesDirective"],
            __WEBPACK_IMPORTED_MODULE_17__pages_donors_donors__["a" /* DonorsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_donors_register_donors_register__["a" /* DonorsRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_developers_developers__["a" /* DevelopersPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_contatc_us_contatc_us__["a" /* ContatcUsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_registration_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_state_state__["a" /* StatePage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_donors_state_donors_state__["a" /* DonorsStatePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                backButtonText: 'رجوع'
            }, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/blood-banks/blood-banks.module#BloodBanksPageModule', name: 'BloodBanksPage', segment: 'blood-banks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contatc-us/contatc-us.module#ContatcUsPageModule', name: 'ContatcUsPage', segment: 'contatc-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/developers/developers.module#DevelopersPageModule', name: 'DevelopersPage', segment: 'developers', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donors-register/donors-register.module#DonorsRegisterPageModule', name: 'DonorsRegisterPage', segment: 'donors-register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donors-state/donors-state.module#DonorsStatePageModule', name: 'DonorsStatePage', segment: 'donors-state', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/donors/donors.module#DonorsPageModule', name: 'DonorsPage', segment: 'donors', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/required/required.module#RequiredPageModule', name: 'RequiredPage', segment: 'required', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/state/state.module#StatePageModule', name: 'StatePage', segment: 'state', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/show-required/show-required.module#ShowRequiredPageModule', name: 'ShowRequiredPage', segment: 'show-required', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_25_angularfire2_firestore__["a" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_required_required__["a" /* RequiredPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_show_required_show_required__["a" /* ShowRequiredPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_blood_banks_blood_banks__["a" /* BloodBanksPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_donors_donors__["a" /* DonorsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_donors_register_donors_register__["a" /* DonorsRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_developers_developers__["a" /* DevelopersPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_contatc_us_contatc_us__["a" /* ContatcUsPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_registration_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_state_state__["a" /* StatePage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_donors_state_donors_state__["a" /* DonorsStatePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_16_css_animator__["AnimationService"],
            __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["a" /* AngularFireAuth */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(oneSignal, platform, statusBar, splashScreen) {
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.oneSignal.startInit('64606478-d20e-4b1c-bb6b-afb62c65a945', '246828580001');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function () {
            alert("recive");
        });
        this.oneSignal.handleNotificationOpened().subscribe(function () {
            alert("Opened");
        });
        this.oneSignal.endInit();
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// import { async } from 'q';



var LoginPage = (function () {
    function LoginPage(googlePlus, fb, toastCtrl, db, alertCtrl, storage, fire, navCtrl, navParams) {
        var _this = this;
        this.googlePlus = googlePlus;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.email = "";
        this.password = "";
        this.signIN = 0;
        this.logginIN = false;
        fb.getLoginStatus().then(function (res) {
            if (res.status === "connect") {
                _this.logginIN = true;
            }
            else {
                _this.logginIN = false;
            }
        }).catch(function (e) {
            console.log('error : ' + e);
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    // fblogin(){
    //   this.fb.login(['public_profile', 'user_friends', 'email'])
    //   .then(res=>{
    //     if(res.status==="connected"){
    //       this.logginIN = true;
    //       this.storage.set('logginIN', this.logginIN);
    //       this.getDetails(res.authResponse.userID);
    //       this.navCtrl.setRoot(HomePage);
    //     }else{
    //       this.logginIN=false;
    //     }
    //   })
    //   .catch(e => console.log('Error logging into Facebook', e));
    // }
    LoginPage.prototype.Login = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'اهلا بك مجددا  ',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.fire.auth.signInWithEmailAndPassword(this.email, this.password).then(function (user) {
            toast.present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }).catch(function (error) {
            _this.showAlert();
        });
    };
    LoginPage.prototype.showAlert = function () {
        this.alert = this.alertCtrl.create({
            title: 'خطا ',
            subTitle: ' ! يرجى التاكد من الايميل و كلمة السر الخاصة بك ',
            buttons: ['حسنا ']
        });
        this.alert.present();
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registration_registration__["a" /* RegistrationPage */]);
    };
    LoginPage.prototype.skip = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.facebookLogin2 = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'اهلا بك مجددا  ',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.fire.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth.FacebookAuthProvider()).then(function (user) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        });
    };
    // logout(){
    //   this.fb.logout().then(res=>{
    //   this.logginIN=false;
    //   this.storage.set('logginIN', this.logginIN);
    //   }).catch(e=>{
    //     console.log(e);
    //   });
    // }
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'اهلا بك مجددا  ',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.googlePlus.login({})
            .then(function (res) {
            alert("success" + JSON.stringify(res));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            toast.present();
        })
            .catch(function (err) {
            alert(err);
        });
    };
    LoginPage.prototype.getDetails = function (id) {
        var _this = this;
        this.fb.api("/" + id + "/?fields=id,email,name,picture,gender", ['public_profile']).then(function (res) {
            console.log(res);
            _this.user = res;
        }).catch(function (e) {
            console.log(e);
        });
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'اهلا بك مجددا  ',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        return this.fb.login(['email'])
            .then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
            _this.fire.auth.signInWithCredential(facebookCredential)
                .then(function (success) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                alert("Firebase success: " + JSON.stringify(success));
            });
        }).catch(function (error) {
            alert("error" + error);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/login/login.html"*/'<!--\n  Generated template for the RegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="dark-red">\n        <ion-title>تسجيل الدخول</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="rit">\n\n      <img src="./assets/imgs/blood/login-logo2.png" width="100%" />\n    <ion-list>\n      <div >\n       \n      </div>\n      <ion-item class="noBackColor">\n        <ion-label floating class="lb"> <ion-icon name="person" style="margin:8px"></ion-icon>البريد الالكتروني</ion-label>\n        <ion-input type="text"[(ngModel)]="email" ></ion-input>\n      </ion-item>\n    \n      <ion-item class="noBackColor">\n        <ion-label floating class="lb"> <ion-icon name="lock" style="margin:8px"></ion-icon>كلمة المرور</ion-label>\n        <ion-input type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n  \n    </ion-list>\n    \n    <div  padding>\n      <button ion-button block outline color="dark-red" class="loginBnt" (click)="Login()">دخول</button>\n      <button ion-button color="dark-red" clear (click)="skip()">تخطي</button>\n      <button ion-button block class="callBtn" color="primary" (click)="facebookLogin()">\n          <div style="margin:8px">الدخول بـ الفيسبوك</div>\n             <ion-icon name="logo-facebook" ></ion-icon>\n        </button>\n      <button ion-button block  class="callBtn" color="dark-red" (click)="googleLogin()">\n          <div style="margin:8px">الدخول بـ كوكل بلاس</div>\n             <ion-icon name="logo-googleplus" ></ion-icon>\n        </button>\n      <button ion-button block color="dark-red" clear (click)="register()">انشاء حساب جديد</button>\n      <!-- <button ion-button (click)="logout()">logout</button> -->\n    </div>\n    \n  </ion-content>\n  '/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the DonorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonorsPage = (function () {
    function DonorsPage(fire, navCtrl, navParams, db, callNumber, storage, alertCtrl, localNotifications) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.callNumber = callNumber;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.localNotifications = localNotifications;
        this.userid = "";
        this.state = this.navParams.get("id");
        this.itemsRef = db.list('/Donors', function (ref) { return ref.orderByChild('decs'); });
        // this.itemsRef.snapshotChanges().subscribe(su=>{
        //   this.sendPush();
        // })
        this.items = this.itemsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return ({
                key: c.payload.key,
                name: c.payload.val().name,
                bloodtype: c.payload.val().bloodtype,
                note: c.payload.val().note,
                location: c.payload.val().location,
                phone: c.payload.val().phone,
                time: c.payload.val().time,
                hide: c.payload.val().hide,
                addedby: c.payload.val().addedby,
                state: c.payload.val().state,
            }); });
        });
        this.fire.authState.subscribe(function (auth) {
            if (auth) {
                _this.userid = auth.uid;
                console.log(auth);
            }
        });
    }
    DonorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonorsPage');
    };
    DonorsPage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    DonorsPage.prototype.deleteConfirm = function (id) {
        this.userData = this.db.list('/Donors');
        this.userData.update(id, {
            "hide": "1"
        });
    };
    DonorsPage.prototype.delete = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'متأكد من الحذف..؟',
            message: 'سيتم حذف البيانات التي ادخلتها هل انت متأكد',
            buttons: [
                {
                    text: 'حذف',
                    handler: function () {
                        _this.deleteConfirm(id);
                    }
                },
                {
                    text: 'الغاء',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    return DonorsPage;
}());
DonorsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-donors',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/donors/donors.html"*/'<!--\n  Generated template for the DonorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark-red">\n    <ion-title>المتبرعيين</ion-title>\n  </ion-navbar>\n \n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let item of items | async  ">\n    <ion-grid *ngIf="item.hide == 0" >\n            <ion-item  >\n                <ion-avatar item-start>\n                    <img src="http://www.ativo.co.za/wp-content/uploads/2017/06/005-profile.png">\n                </ion-avatar>\n                <h2>{{item.name}}</h2>\n                <ion-icon *ngIf="item.addedby == userid" name="trash" class="deletBtn" (click)="delete(item.key)"></ion-icon>\n\n            </ion-item>\n    \n            <ion-card-content>\n                <p>فصيلة الدم : {{item.bloodtype}}</p>\n                <p> العنوان : {{item.location}}</p>\n                <p>  ملاحظات اخرى   : {{item.note}} </p>\n               \n            </ion-card-content>\n    \n            <ion-row>\n                <ion-col>\n                    <button ion-button block class="callBtn" color="dark-green" (click)="call(item.phone)">\n                    <div style="margin:8px">  اتصل </div>\n                       <ion-icon name="call" ></ion-icon>\n                  </button>\n                </ion-col>\n    \n    \n            </ion-row>\n        </ion-grid>\n        </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/donors/donors.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], DonorsPage);

//# sourceMappingURL=donors.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowRequiredPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ShowRequiredPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowRequiredPage = (function () {
    function ShowRequiredPage(fire, navCtrl, navParams, db, callNumber, alertCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.userid = "";
        this.state = this.navParams.get("id");
        this.itemsRef = db.list('/required', function (ref) { return ref.orderByChild('decs'); });
        this.items = this.itemsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return ({
                key: c.payload.key,
                name: c.payload.val().name,
                bloodtype: c.payload.val().bloodtype,
                age: c.payload.val().age,
                notes: c.payload.val().notes,
                location: c.payload.val().location,
                phone: c.payload.val().phone,
                time: c.payload.val().time,
                addedby: c.payload.val().addedby,
                hide: c.payload.val().hide,
                state: c.payload.val().state
            }); });
        });
        this.fire.authState.subscribe(function (auth) {
            if (auth) {
                _this.userid = auth.uid;
                console.log(auth);
            }
        });
    }
    ShowRequiredPage.prototype.deleteConfirm = function (id) {
        this.userData = this.db.list('/required');
        this.userData.update(id, {
            "hide": "1"
        });
    };
    ShowRequiredPage.prototype.delete = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'متأكد من الحذف..؟',
            message: 'سيتم حذف البيانات التي ادخلتها هل انت متأكد',
            buttons: [
                {
                    text: 'حذف',
                    handler: function () {
                        _this.deleteConfirm(id);
                    }
                },
                {
                    text: 'الغاء',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    ShowRequiredPage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    return ShowRequiredPage;
}());
ShowRequiredPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-show-required',template:/*ion-inline-start:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/show-required/show-required.html"*/'<!--\n  Generated template for the ShowRequiredPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="dark-red">\n        <ion-title>تبرع الان </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card *ngFor="let item of items | async  ">\n   <ion-grid *ngIf="item.hide == 0" >\n        <ion-item >\n            <ion-avatar item-start>\n                <img src="http://www.ativo.co.za/wp-content/uploads/2017/06/005-profile.png">\n            </ion-avatar>\n            <h2>{{item.name}}</h2>\n            <ion-icon *ngIf="item.addedby == userid" name="trash" class="deletBtn" (click)="delete(item.key)"></ion-icon>\n            \n            <p style="display:inline">{{item.time}}</p>\n        </ion-item>\n\n\n\n        <ion-card-content>\n            <p>فصيلة الدم : {{item.bloodtype}}</p>\n            <p> المستشفى : {{item.location}}</p>\n            <p> عمر المريض : {{item.age}} سنة</p>\n            <p> ملاحظات اخرى:\n            </p>\n            <blockquote>{{item.notes}}</blockquote>\n        </ion-card-content>\n\n        <ion-row>\n            <ion-col>\n                <button ion-button block  class="callBtn"  color="dark-green" (click)="call(item.phone)">\n                    <div style="margin:8px">  اتصل </div>\n                    <ion-icon name="call" ></ion-icon>\n                </button>\n            </ion-col>\n\n\n        </ion-row>\n    </ion-grid>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/mohanadessam25/Desktop/ionic projects/new/src/pages/show-required/show-required.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ShowRequiredPage);

//# sourceMappingURL=show-required.js.map

/***/ })

},[384]);
//# sourceMappingURL=main.js.map