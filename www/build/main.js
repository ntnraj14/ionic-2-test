webpackJsonp([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BecomeMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account_createAccount__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BecomeMemberPage = (function () {
    function BecomeMemberPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.signInRoot = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.signUpRoot = __WEBPACK_IMPORTED_MODULE_2__create_account_createAccount__["a" /* CreateAccountPage */];
    }
    return BecomeMemberPage;
}());
BecomeMemberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({
        name: 'become-tabs-page'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-become-member',template:/*ion-inline-start:"D:\ionic3Angular4\src\pages\become-member\become-member.html"*/'<ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Become Member</ion-title>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n    \n\n <ion-content scrollbar-y-auto>\n\n        <ion-tabs  tabsHighlight="true" tabsPlacement="top">\n\n                    <ion-tab [root]="signInRoot" tabsHideOnSubPages="true" tabTitle="Sign in" ></ion-tab>\n\n                    <ion-tab [root]="signUpRoot" tabsHideOnSubPages="true"  tabTitle="Sign up" ></ion-tab>\n\n                </ion-tabs>\n\n  </ion-content>\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"D:\ionic3Angular4\src\pages\become-member\become-member.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], BecomeMemberPage);

//# sourceMappingURL=become-member.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/become-member/become-member.module": [
		279,
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
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 157;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"D:\ionic3Angular4\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding scrollbar-y-auto>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic3Angular4\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"D:\ionic3Angular4\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scrollbar-y-auto>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic3Angular4\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\ionic3Angular4\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding scrollbar-y-auto>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\ionic3Angular4\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_create_account_createAccount__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_alert_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sharedService_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_broadcaster_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_message_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_become_member_become_member__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_validate_on_blur_validate_on_blur__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_create_account_createAccount__["a" /* CreateAccountPage */],
            __WEBPACK_IMPORTED_MODULE_18__directives_validate_on_blur_validate_on_blur__["a" /* ValidationOnBlurDirective */],
            __WEBPACK_IMPORTED_MODULE_17__pages_become_member_become_member__["a" /* BecomeMemberPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: true
            }, {
                links: [
                    { loadChildren: '../pages/become-member/become-member.module#BecomeMemberPageModule', name: 'become-tabs-page', segment: 'become-member', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_create_account_createAccount__["a" /* CreateAccountPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_become_member_become_member__["a" /* BecomeMemberPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__services_sharedService_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_14__services_broadcaster_service__["a" /* BroadcasterService */],
            __WEBPACK_IMPORTED_MODULE_15__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_12__services_alert_service__["a" /* AlertService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_create_account_createAccount__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_broadcaster_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_message_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_alert_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_sharedService_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_become_member_become_member__ = __webpack_require__(107);
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
    function MyApp(platform, statusBar, splashScreen, storage, broadcaster, sharedService, ref, messageEvent, alertService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.broadcaster = broadcaster;
        this.sharedService = sharedService;
        this.ref = ref;
        this.messageEvent = messageEvent;
        this.alertService = alertService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.accountName = "Account";
        this.userInfo = { name: '', email: '' };
        this.userLoggedIn = false;
        this.initializeApp();
    }
    MyApp.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openloginPage = function (page) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.openCreateAccountPage = function (page) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_create_account_createAccount__["a" /* CreateAccountPage */]);
    };
    MyApp.prototype.ngOnInit = function () {
        this.registerTypeBroadcast();
        this.userLogged();
    };
    MyApp.prototype.registerTypeBroadcast = function () {
        var _this = this;
        this.messageEvent.on()
            .subscribe(function (message) {
            _this.message = message;
            if (_this.message == "userLoggedIn") {
                setTimeout(function () {
                    _this.userLogged();
                }, 1000);
            }
        });
    };
    MyApp.prototype.userLogged = function () {
        if (JSON.parse(localStorage.getItem('currentUser')) != null) {
            this.accountName = (JSON.parse(localStorage.getItem('currentUser'))).name;
            this.userLoggedIn = true;
        }
        else {
            this.accountName = "Account";
            this.userLoggedIn = false;
        }
        this.ref.detectChanges();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_become_member_become_member__["a" /* BecomeMemberPage */], { index: "1" });
    };
    MyApp.prototype.logOut = function () {
        localStorage.removeItem("currentUser");
        this.userLogged();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ionic3Angular4\src\app\app.html"*/'<ion-menu [content]="nav" class="myFav1">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n        <ion-title><ion-icon name="lock"></ion-icon>{{accountName}}</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content scrollbar-y-auto>\n\n    <ion-list>\n\n         <button ion-item menuClose (click)="openCreateAccountPage(CreateAccountPage)" *ngIf="!userLoggedIn">\n\n           <ion-icon name="create"></ion-icon>Sign Up\n\n           <ion-icon name="ios-arrow-forward"></ion-icon>\n\n        </button>\n\n        <button ion-item menuClose (click)="openloginPage(LoginPage)" *ngIf="!userLoggedIn">\n\n         <ion-icon name="log-in"></ion-icon> Login\n\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n       </button>\n\n       <button class="menu-last-item " ion-item menuClose (click)="logOut()" *ngIf="userLoggedIn">\n\n        <ion-icon name="log-out"></ion-icon> Logout\n\n       <ion-icon name="ios-arrow-forward" class="logout"></ion-icon>\n\n      </button>\n\n    </ion-list>\n\n    <ion-list>\n\n\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #nav swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\ionic3Angular4\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_7__services_broadcaster_service__["a" /* BroadcasterService */], __WEBPACK_IMPORTED_MODULE_10__services_sharedService_service__["a" /* SharedService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_8__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_9__services_alert_service__["a" /* AlertService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationOnBlurDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationOnBlurDirective = (function () {
    function ValidationOnBlurDirective(formControl) {
        this.formControl = formControl;
    }
    ValidationOnBlurDirective.prototype.onFocus = function ($event) {
        this.wasChanged = false;
        this.validators = this.formControl.control.validator;
        this.asyncValidators = this.formControl.control.asyncValidator;
        this.formControl.control.clearAsyncValidators();
        this.formControl.control.clearValidators();
    };
    ValidationOnBlurDirective.prototype.onKeyup = function ($event) {
        this.wasChanged = true; // keyboard change
    };
    ValidationOnBlurDirective.prototype.onChange = function ($event) {
        this.wasChanged = true; // copypaste change
    };
    ValidationOnBlurDirective.prototype.onNgModelChange = function ($event) {
        this.wasChanged = true; // ng-value change
    };
    ValidationOnBlurDirective.prototype.onBlur = function ($event) {
        this.formControl.control.setAsyncValidators(this.asyncValidators);
        this.formControl.control.setValidators(this.validators);
        if (this.wasChanged)
            this.formControl.control.updateValueAndValidity();
    };
    return ValidationOnBlurDirective;
}());
ValidationOnBlurDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[validate-onblur]',
        host: {
            '(focus)': 'onFocus($event)',
            '(blur)': 'onBlur($event)',
            '(keyup)': 'onKeyup($event)',
            '(change)': 'onChange($event)',
            '(ngModelChange)': 'onNgModelChange($event)'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgControl */]])
], ValidationOnBlurDirective);

//# sourceMappingURL=validate-on-blur.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = (function () {
    function AlertService(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.alertPresent = false;
    }
    AlertService.prototype.alertPrompt = function (title, subTitle) {
        this.alertPopup = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
        });
        return this.alertPopup.present();
    };
    AlertService.prototype.presentToast = function (msg) {
        this.toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        return this.toast.present();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], AlertService);

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
        this.notifyUserLoggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.userLoggedIn = false;
    }
    SharedService.prototype.setUserName = function (data) {
        localStorage.setItem('currentUser', JSON.stringify({ name: data }));
        this.notifyUserLoggedIn.emit(localStorage.getItem('currentUser'));
    };
    SharedService.prototype.getUserName = function () {
        if (localStorage.getItem('currentUser') != null) {
            var userName = JSON.parse(localStorage.getItem('currentUser'));
            return userName;
        }
        return;
    };
    SharedService.prototype.setUserState = function (val) {
        this.userLoggedIn = val;
    };
    SharedService.prototype.getUserState = function () {
        return this.userLoggedIn;
    };
    return SharedService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], SharedService.prototype, "notifyUserLoggedIn", void 0);
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=sharedService.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroadcasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);



var BroadcasterService = (function () {
    function BroadcasterService() {
        this._eventBus = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    BroadcasterService.prototype.broadcast = function (key, data) {
        this._eventBus.next({ key: key, data: data });
    };
    BroadcasterService.prototype.on = function (key) {
        return this._eventBus.asObservable()
            .filter(function (event) { return event.key === key; })
            .map(function (event) { return event.data; });
    };
    return BroadcasterService;
}());

//# sourceMappingURL=broadcaster.service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(160);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ionic3Angular4\src\pages\tabs\tabs.html"*/'<ion-content scrollbar-y-auto>\n  <ion-tabs  tabsHighlight="true">\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n          </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"D:\ionic3Angular4\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sharedService_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_broadcaster_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateAccountPage = (function () {
    function CreateAccountPage(formBuilder, navCtrl, viewCtrl, storage, sharedService, broadcaster, messageEvent, alert, app) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.sharedService = sharedService;
        this.broadcaster = broadcaster;
        this.messageEvent = messageEvent;
        this.alert = alert;
        this.app = app;
        this.userInfo = { name: '', email: '', phone: '', password: '', confirmPassword: '' };
        this.loggedIn = false;
        this.sharedService = sharedService;
    }
    CreateAccountPage.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            'name': ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3), this.nameValidator.bind(this)]],
            'phone': ['', this.phoneValidator.bind(this)],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, this.passwordValidator.bind(this)]],
            'confirmPassword': ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, this.passwordValidator.bind(this)]]
        });
        if (JSON.parse(localStorage.getItem('currentUser')) != null) {
            this.loggedIn = true;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    CreateAccountPage.prototype.onSubmit = function () {
        this.alert.presentToast('Yeahh! Your account created successfully');
        console.log('submitting form');
        localStorage.removeItem("currentUser");
        this.storage.set(this.userInfo.email, this.userInfo);
        this.sharedService.setUserName(this.userInfo.email);
        this.sharedService.setUserState(true);
        this.storage.set(this.userInfo.email, this.userInfo);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
    };
    CreateAccountPage.prototype.isValid = function (field) {
        var formField = this.myForm.get(field);
        return formField.valid || formField.pristine;
    };
    CreateAccountPage.prototype.nameValidator = function (control) {
        if (control.value !== '') {
            if (!control.value.match("^[A-Za-z0-9 ]+[A-Za-z0-9\s]$")) {
                return { 'invalidName': true };
            }
        }
    };
    CreateAccountPage.prototype.phoneValidator = function (control) {
        if (control.value !== '') {
            if (!control.value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
                return { 'invalidPhone': true };
            }
        }
    };
    CreateAccountPage.prototype.emailValidator = function (control) {
        if (control.value !== '') {
            if (!control.value.toLowerCase().match('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')) {
                return { 'invalidEmail': true };
            }
        }
    };
    CreateAccountPage.prototype.passwordValidator = function (control) {
        if (control.value !== '') {
            if (!control.value.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')) {
                return { 'invalidPassword': true };
            }
        }
    };
    CreateAccountPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return CreateAccountPage;
}());
CreateAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-account',template:/*ion-inline-start:"D:\ionic3Angular4\src\pages\create-account\create-account.html"*/'<ion-header class="page-create-account">\n\n <!-- <ion-navbar>\n\n   <ion-buttons left *ngIf="loggedIn">\n\n    <button ion-button (click)="goBack()">\n\n        <ion-icon class="customIcon" name="ios-arrow-back"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n     <ion-title>\n\n       Create Account\n\n     </ion-title>\n\n </ion-navbar> -->\n\n</ion-header>\n\n<ion-content padding scrollbar-y-auto class="page-create-account-inner">\n\n <ion-list>\n\n   <form [formGroup]="myForm" (ngSubmit)="onSubmit()">\n\n     <ion-item>\n\n       <ion-label floating primary>Name</ion-label>\n\n       <ion-input [(ngModel)]="userInfo.name" formControlName="name" type="text"\n\n                  id="name" spellcheck="false" autocapitalize="off"  validate-onblur>\n\n       </ion-input>\n\n     </ion-item>\n\n     <p *ngIf="myForm.controls.name.touched && !myForm.controls.name.valid && !myForm.controls.name.pristine" danger padding-left class="create-invalid">Invalid Name</p>\n\n     <ion-item>\n\n       <ion-label floating primary>Email</ion-label>\n\n       <ion-input [(ngModel)]="userInfo.email" formControlName="email"\n\n                  type="text" id="email" spellcheck="false" autocapitalize="off" validate-onblur>\n\n       </ion-input>\n\n     </ion-item>\n\n     <p *ngIf="myForm.controls.email.touched && !myForm.controls.email.valid && !myForm.controls.email.pristine" danger padding-left class="create-invalid">Invalid Email</p>\n\n     <ion-item>\n\n       <ion-label floating primary>Phone</ion-label>\n\n       <ion-input [(ngModel)]="userInfo.phone" formControlName="phone" type="text" id="phone" validate-onblur>\n\n       </ion-input>\n\n     </ion-item>\n\n     <p *ngIf="myForm.controls.phone.touched && !myForm.controls.phone.valid && !myForm.controls.phone.pristine" danger padding-left class="create-invalid">Invalid Phone</p>\n\n     <ion-item>\n\n       <ion-label floating primary>Password</ion-label>\n\n       <ion-input [(ngModel)]="userInfo.password" formControlName="password" type="password" id="phone" validate-onblur>\n\n       </ion-input>\n\n     </ion-item>\n\n     <p *ngIf="myForm.controls.password.touched && !myForm.controls.password.valid && !myForm.controls.password.pristine" danger padding-left class="create-invalid">Invalid Password</p>\n\n     <ion-item>\n\n       <ion-label floating primary>Confirm Password</ion-label>\n\n       <ion-input [(ngModel)]="userInfo.confirmPassword" formControlName="confirmPassword" type="password" id="phone" validate-onblur>\n\n       </ion-input>\n\n     </ion-item>\n\n     <p *ngIf="myForm.controls.confirmPassword.touched && !myForm.controls.confirmPassword.valid && !myForm.controls.confirmPassword.pristine" danger padding-left class="create-invalid">Invalid Confirm Password</p>\n\n     <button ion-button type="submit" block primary [disabled]="(!myForm.valid) || (userInfo.confirmPassword !== userInfo.password) || (userInfo.password ==\'\') || (userInfo.confirmPassword ==\'\') ">Submit</button>\n\n   </form>\n\n </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic3Angular4\src\pages\create-account\create-account.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_sharedService_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_sharedService_service__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_broadcaster_service__["a" /* BroadcasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_broadcaster_service__["a" /* BroadcasterService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* App */]) === "function" && _j || Object])
], CreateAccountPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=createAccount.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__broadcaster_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = (function () {
    function MessageService(broadcaster) {
        this.broadcaster = broadcaster;
    }
    MessageService.prototype.fire = function (data) {
        this.broadcaster.broadcast(MessageEvent, data);
    };
    MessageService.prototype.on = function () {
        return this.broadcaster.on(MessageEvent);
    };
    return MessageService;
}());
MessageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__broadcaster_service__["a" /* BroadcasterService */]])
], MessageService);

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sharedService_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(formBuilder, navCtrl, viewCtrl, storage, alertService, sharedService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.alertService = alertService;
        this.sharedService = sharedService;
        this.userInfo = { email: '', password: '' };
        this.sharedService = sharedService;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, this.emailValidator.bind(this)]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, this.passwordValidator.bind(this)]]
        });
    };
    LoginPage.prototype.isValid = function (field) {
        var formField = this.myForm.get(field);
        return formField.valid || formField.pristine;
    };
    LoginPage.prototype.emailValidator = function (control) {
        if (control.value !== '') {
            if (!control.value.toLowerCase().match('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')) {
                return { 'invalidEmail': true };
            }
        }
    };
    LoginPage.prototype.passwordValidator = function (control) {
        if (control.value !== '') {
            if (!control.value.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')) {
                return { 'invalidPassword': true };
            }
        }
    };
    LoginPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.storage.get(this.userInfo.email).then(function (val) {
            console.log('data', val);
            if (val != null && val.email != null) {
                if (_this.userInfo.email == val.email) {
                    if (_this.userInfo.password == val.password) {
                        _this.sharedService.setUserName(_this.userInfo.email);
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.alertService.alertPrompt("Oops!", "incorrect password");
                    }
                }
            }
            else {
                _this.alertService.alertPrompt("Oops!", "This email is not registered with us.");
            }
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\ionic3Angular4\src\pages\login\login.html"*/' <ion-header>\n\n  <!-- <ion-navbar>\n\n    <ion-buttons left>\n\n     <button ion-button [hidden]="true" (click)="goBack()">\n\n         <ion-icon class="customIcon" name="ios-arrow-back"></ion-icon>\n\n     </button>\n\n     </ion-buttons>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar> -->\n\n</ion-header>\n\n<ion-content padding scrollbar-y-auto>\n\n  <ion-list>\n\n    <form [formGroup]="myForm" (ngSubmit)="login()">\n\n      <ion-item>\n\n        <ion-label floating primary>Email</ion-label>\n\n        <ion-input [(ngModel)]="userInfo.email" formControlName="email"\n\n                   type="text" id="email" spellcheck="false" autocapitalize="off" validate-onblur>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p  *ngIf="myForm.controls.email.touched && !myForm.controls.email.valid && !myForm.controls.email.pristine" danger padding-left>Invalid Email</p>\n\n      <ion-item>\n\n        <ion-label floating primary>Password</ion-label>\n\n        <ion-input [(ngModel)]="userInfo.password" formControlName="password" type="password" id="phone" validate-onblur>\n\n        </ion-input>\n\n      </ion-item>\n\n      <p  *ngIf="myForm.controls.password.touched && !myForm.controls.password.valid && !myForm.controls.password.pristine" danger padding-left>Invalid Password</p>\n\n      <ion-item class="list">\n\n        <label class="item item-radio">\n\n          <input type="radio" name="group">\n\n          <span class="item-content"> Remember Me </span>\n\n           <i class="radio-icon ion-checkmark"></i>\n\n        </label>\n\n        <!-- <input type="radio" name="Remember Me" value="remeberMe" checked> -->\n\n      </ion-item>\n\n      <button ion-button type="submit" [disabled]="(!myForm.valid) || (userInfo.password ==\'\') || (userInfo.password ==\'\')" block primary>Login</button>\n\n     </form>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic3Angular4\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_2__services_sharedService_service__["a" /* SharedService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map