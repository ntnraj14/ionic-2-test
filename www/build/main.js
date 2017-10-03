webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__broadcaster_service__ = __webpack_require__(53);
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

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        selector: 'page-about',template:/*ion-inline-start:"D:\ionic2\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding scrollbar-y-auto>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic2\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        selector: 'page-contact',template:/*ion-inline-start:"D:\ionic2\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scrollbar-y-auto>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic2\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        selector: 'page-home',template:/*ion-inline-start:"D:\ionic2\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n     <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding scrollbar-y-auto>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\ionic2\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
], HomePage);

var _a;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sharedService_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(52);
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
        selector: 'page-login',template:/*ion-inline-start:"D:\ionic2\src\pages\login\login.html"*/' <ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n     <button ion-button (click)="goBack()">\n         <ion-icon class="customIcon" name="ios-arrow-back"></ion-icon>\n     </button>\n     </ion-buttons>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding scrollbar-y-auto>\n  <ion-list>\n    <form [formGroup]="myForm" (ngSubmit)="login()">\n      <ion-item>\n        <ion-label floating primary>Email</ion-label>\n        <ion-input [(ngModel)]="userInfo.email" formControlName="email"\n                   type="text" id="email" spellcheck="false" autocapitalize="off">\n        </ion-input>\n      </ion-item>\n      <p *ngIf="!isValid(\'email\')" danger padding-left>Invalid Email</p>\n      <ion-item>\n        <ion-label floating primary>Password</ion-label>\n        <ion-input [(ngModel)]="userInfo.password" formControlName="password" type="password" id="phone">\n        </ion-input>\n      </ion-item>\n      <p *ngIf="!isValid(\'password\')" danger padding-left>Invalid Password</p>\n      <button ion-button type="submit" block primary>Login</button>\n     </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic2\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */],
        __WEBPACK_IMPORTED_MODULE_2__services_sharedService_service__["a" /* SharedService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sharedService_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_broadcaster_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(52);
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
    function CreateAccountPage(formBuilder, navCtrl, viewCtrl, storage, sharedService, broadcaster, messageEvent, alert) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.sharedService = sharedService;
        this.broadcaster = broadcaster;
        this.messageEvent = messageEvent;
        this.alert = alert;
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
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
        selector: 'page-create-account',template:/*ion-inline-start:"D:\ionic2\src\pages\create-account\create-account.html"*/'<ion-header class="page-create-account">\n <ion-navbar>\n   <ion-buttons left *ngIf="loggedIn">\n    <button ion-button (click)="goBack()">\n        <ion-icon class="customIcon" name="ios-arrow-back"></ion-icon>\n    </button>\n    </ion-buttons>\n     <ion-title>\n       Create Account\n     </ion-title>\n </ion-navbar>\n</ion-header>\n<ion-content padding scrollbar-y-auto class="page-create-account-inner">\n <ion-list>\n   <form [formGroup]="myForm" (ngSubmit)="onSubmit()">\n     <ion-item>\n       <ion-label floating primary>Name</ion-label>\n       <ion-input [(ngModel)]="userInfo.name" formControlName="name" type="text"\n                  id="name" spellcheck="false" autocapitalize="off">\n       </ion-input>\n     </ion-item>\n     <p *ngIf="!isValid(\'name\')" danger padding-left class="create-invalid">Invalid Name</p>\n     <ion-item>\n       <ion-label floating primary>Email</ion-label>\n       <ion-input [(ngModel)]="userInfo.email" formControlName="email"\n                  type="text" id="email" spellcheck="false" autocapitalize="off">\n       </ion-input>\n     </ion-item>\n     <p *ngIf="!isValid(\'email\')" danger padding-left class="create-invalid">Invalid Email</p>\n     <ion-item>\n       <ion-label floating primary>Phone</ion-label>\n       <ion-input [(ngModel)]="userInfo.phone" formControlName="phone" type="text" id="phone">\n       </ion-input>\n     </ion-item>\n     <p *ngIf="!isValid(\'phone\')" danger padding-left class="create-invalid">Invalid Phone</p>\n     <ion-item>\n       <ion-label floating primary>Password</ion-label>\n       <ion-input [(ngModel)]="userInfo.password" formControlName="password" type="password" id="phone">\n       </ion-input>\n     </ion-item>\n     <p *ngIf="!isValid(\'password\')" danger padding-left class="create-invalid">Invalid Password</p>\n     <ion-item>\n       <ion-label floating primary>Confirm Password</ion-label>\n       <ion-input [(ngModel)]="userInfo.confirmPassword" formControlName="confirmPassword" type="password" id="phone">\n       </ion-input>\n     </ion-item>\n     <p *ngIf="!isValid(\'confirmPassword\')" danger padding-left class="create-invalid">Invalid Confirm Password</p>\n     <button ion-button type="submit" block primary [disabled]="!myForm.valid || (userInfo.confirmPassword !== userInfo.password)">Submit</button>\n   </form>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic2\src\pages\create-account\create-account.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_sharedService_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_sharedService_service__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_broadcaster_service__["a" /* BroadcasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_broadcaster_service__["a" /* BroadcasterService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _h || Object])
], CreateAccountPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=createAccount.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_create_account_createAccount__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_alert_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sharedService_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_broadcaster_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_message_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(52);
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
            __WEBPACK_IMPORTED_MODULE_9__pages_create_account_createAccount__["a" /* CreateAccountPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_create_account_createAccount__["a" /* CreateAccountPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__services_sharedService_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_14__services_broadcaster_service__["a" /* BroadcasterService */],
            __WEBPACK_IMPORTED_MODULE_15__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_12__services_alert_service__["a" /* AlertService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_create_account_createAccount__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_broadcaster_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_message_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_alert_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_sharedService_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(52);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_create_account_createAccount__["a" /* CreateAccountPage */];
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
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.openCreateAccountPage = function (page) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_create_account_createAccount__["a" /* CreateAccountPage */]);
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
    };
    MyApp.prototype.logOut = function () {
        localStorage.removeItem("currentUser");
        this.userLogged();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nav'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ionic2\src\app\app.html"*/'<ion-menu [content]="nav" class="myFav1">\n\n  <ion-header>\n    <ion-toolbar>\n        <ion-title><ion-icon name="lock"></ion-icon>{{accountName}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content scrollbar-y-auto>\n    <ion-list>\n         <button ion-item menuClose (click)="openCreateAccountPage(CreateAccountPage)" *ngIf="!userLoggedIn">\n           <ion-icon name="create"></ion-icon>Sign Up\n           <ion-icon name="ios-arrow-forward"></ion-icon>\n        </button>\n        <button ion-item menuClose (click)="openloginPage(LoginPage)" *ngIf="!userLoggedIn">\n         <ion-icon name="log-in"></ion-icon> Login\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n       </button>\n       <button class="menu-last-item " ion-item menuClose (click)="logOut()" *ngIf="userLoggedIn">\n        <ion-icon name="log-out"></ion-icon> Logout\n       <ion-icon name="ios-arrow-forward" class="logout"></ion-icon>\n      </button>\n    </ion-list>\n    <ion-list>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav id="nav" [root]="rootPage" #nav swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\ionic2\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_broadcaster_service__["a" /* BroadcasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_broadcaster_service__["a" /* BroadcasterService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__services_sharedService_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_sharedService_service__["a" /* SharedService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_message_service__["a" /* MessageService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_alert_service__["a" /* AlertService */]) === "function" && _k || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(200);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ionic2\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\ionic2\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
], AlertService);

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 51:
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroadcasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(276);
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

/***/ })

},[203]);
//# sourceMappingURL=main.js.map