webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts",
		"admin.module"
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
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/_auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('infosUtilisateur')) {
            // logged in so return true
            return true;
        }
        console.log('not logged in');
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/_directives/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_directives/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'alert',
            template: __webpack_require__("../../../../../src/app/_directives/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_directives/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/admin-header/admin-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/admin-header/admin-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"topbar\">\r\n    <nav class=\"navbar top-navbar navbar-toggleable-sm navbar-light\">\r\n        <!-- ============================================================== -->\r\n        <!-- Logo -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" routerLink=\"/\" style=\"color: white; font-size: 30px;\">\r\n                <!-- Logo icon -->\r\n                <img \r\n                    src=\"assets/images/logo_bo-40.png\" \r\n                    alt=\"homepage\" \r\n                    class=\"light-logo\" style=\"display: none;\" \r\n                />\r\n                <b>\r\n                    <span class=\"light-logo\">\r\n                        Mille sabords\r\n                    </span>\r\n                    <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n                    \r\n                    <!-- Light Logo icon -->\r\n                </b>\r\n                <!--End Logo icon -->\r\n                <!-- Logo text -->\r\n             </a>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- End Logo -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"navbar-collapse\">\r\n            <!-- ============================================================== -->\r\n            <!-- toggle and nav items -->\r\n            <!-- ============================================================== -->\r\n            <ul class=\"navbar-nav mr-auto mt-md-0\">\r\n                <!-- This is  -->\r\n                <li class=\"nav-item\"> \r\n                    <a \r\n                        class=\"nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"\r\n                        (click)=\"menuShowHide()\"\r\n                    >\r\n                        <i class=\"mdi mdi-menu\"></i>\r\n                    </a> \r\n                </li>\r\n                <!-- ============================================================== -->\r\n                <!-- Search -->\r\n                <!-- ============================================================== -->\r\n                <!-- \r\n                    <li class=\"nav-item hidden-sm-down search-box\"> <a class=\"nav-link hidden-sm-down text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"ti-search\"></i></a>\r\n                        <form class=\"app-search\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search & enter\"> <a class=\"srh-btn\"><i class=\"ti-close\"></i></a> \r\n                        </form>\r\n                    </li>\r\n                -->\r\n            </ul>\r\n            <!-- ============================================================== -->\r\n            <!-- User profile and search -->\r\n            <!-- ============================================================== -->\r\n            <ul class=\"navbar-nav my-lg-0\">\r\n                <!-- ============================================================== -->\r\n                <!-- Profile -->\r\n                <!-- ============================================================== -->\r\n                <li class=\"nav-item dropdown\">\r\n                    <a \r\n                        class=\"nav-link dropdown-toggle text-muted waves-effect waves-dark\" \r\n                        data-toggle=\"dropdown\" \r\n                        aria-haspopup=\"true\" \r\n                        aria-expanded=\"false\"\r\n                    >\r\n                        <img \r\n                            src=\"assets/images/profil.png\" \r\n                            alt=\"utilisateur\" \r\n                            class=\"profile-pic m-r-10\"\r\n                        />\r\n                        Bonjour {{ user.prenom }}\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/_layout/admin-header/admin-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent() {
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem('infosUtilisateur'));
        this.user = user.user;
    };
    AdminHeaderComponent.prototype.menuShowHide = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("body").toggleClass("show-sidebar");
    };
    AdminHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'admin-header',
            template: __webpack_require__("../../../../../src/app/_layout/admin-header/admin-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/admin-header/admin-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/admin-layout/admin-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/admin-layout/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\">\r\n\t<admin-header></admin-header>\r\n\t<admin-sidebar></admin-sidebar>\r\n\r\n\t<div class=\"page-wrapper\">\r\n\t    <!-- ============================================================== -->\r\n\t    <!-- Container fluid  -->\r\n\t    <!-- ============================================================== -->\r\n\t    <div class=\"container-fluid\">\r\n\t        <!-- ============================================================== -->\r\n\t        <!-- Bread crumb and right sidebar toggle -->\r\n\t        <!-- ============================================================== -->\r\n\t        <div class=\"row page-titles\" style=\"background: none !important;\">\r\n\t            <div class=\"col-md-5 col-8 align-self-center\">\r\n\t                <h3 class=\"text-themecolor\" style=\"color: #dddee0 !important;\">Tableau de bord</h3>\r\n\t                <ol class=\"breadcrumb\">\r\n\t                    <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Accueil</a></li>\r\n\t                    <li class=\"breadcrumb-item active\">Tableau de bord</li>\r\n\t                </ol>\r\n\t            </div>\r\n\t        </div>\t\r\n\t\t\r\n\t\t\t<router-outlet></router-outlet>\r\n\r\n\t    </div>\r\n\t    <!-- ============================================================== -->\r\n\t    <!-- End Container fluid  -->\r\n\t    <!-- ============================================================== -->\r\n\t    <!-- ============================================================== -->\r\n\t    <!-- footer -->\r\n\t    <!-- ============================================================== -->\r\n\t    <!-- <footer class=\"footer\">\r\n\t\t\t<p style=\"text-align: center;\">\r\n\t\t\t\t<a href=\"https://www.kook-agency.fr/\" target=\"blank\"> \r\n\t\t\t\t\t© {{currentYear}} KOOK AGENCY \r\n\t\t\t\t</a>\r\n\t\t\t\t<a routerLink=\"/admin/dashboard\"> Ma carte </a>\r\n\t\t\t</p>\t    \t\r\n\t    </footer> -->\r\n\t    <!-- ============================================================== -->\r\n\t    <!-- End footer -->\r\n\t    <!-- ============================================================== -->\r\n\t</div>\t\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_layout/admin-layout/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.currentYear = date.getFullYear();
    };
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-layout',
            template: __webpack_require__("../../../../../src/app/_layout/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/admin-layout/admin-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"left-sidebar\">\r\n    <!-- Sidebar scroll-->\r\n    <div class=\"scroll-sidebar\">\r\n        <!-- Sidebar navigation-->\r\n        <nav class=\"sidebar-nav\">\r\n            <ul id=\"sidebarnav\">\r\n                <li> \r\n                \t<a \r\n                \t\tclass=\"waves-effect waves-dark\" \r\n                \t\trouterLink=\"/admin\"\r\n                \t\taria-expanded=\"false\"\r\n                \t>\r\n                \t\t<i class=\"mdi mdi-gauge\"></i><span class=\"hide-menu\">Tableau de bord</span>\r\n                \t</a>\r\n                </li>\r\n                <li> \r\n                    <a \r\n                        class=\"waves-effect waves-dark\" \r\n                        routerLink=\"/admin/utilisateur\"\r\n                        aria-expanded=\"false\"\r\n                    >\r\n                        <i class=\"mdi mdi-account-check\"></i><span class=\"hide-menu\">Profil</span>\r\n                    </a>\r\n                </li>\r\n                <!-- <li>\r\n                    <a class=\"waves-effect waves-dark\" routerLink=\"/admin/platdujour/liste\" aria-expanded=\"false\">\r\n                        <i class=\"mdi mdi-file-powerpoint-box\"></i>\r\n                        <span class=\"hide-menu\">Plat du jour</span>\r\n                    </a>\r\n                </li> -->\r\n                <li> \r\n                    <a \r\n                        class=\"waves-effect waves-dark\" \r\n                        routerLink=\"/admin/menu/liste\"\r\n                        aria-expanded=\"false\"\r\n                    >\r\n                        <i class=\"mdi mdi-bulletin-board\"></i><span class=\"hide-menu\">Entrée</span>\r\n                    </a>\r\n                </li>\r\n                <li> \r\n                    <a \r\n                        class=\"waves-effect waves-dark\" \r\n                        routerLink=\"/admin/plat/liste\"\r\n                        aria-expanded=\"false\"\r\n                    >\r\n                        <i class=\"mdi mdi-cards-playing-outline\"></i><span class=\"hide-menu\">Plat</span>\r\n                    </a>\r\n                </li>\r\n                <li> \r\n                    <a \r\n                        class=\"waves-effect waves-dark\" \r\n                        routerLink=\"/admin/pizza/liste\"\r\n                        aria-expanded=\"false\"\r\n                    >\r\n                        <i class=\"mdi mdi-cards-playing-outline\"></i><span class=\"hide-menu\">Pizza</span>\r\n                    </a>\r\n                </li>\r\n                <li> \r\n                    <a \r\n                        class=\"waves-effect waves-dark\" \r\n                        routerLink=\"/admin/dessert/liste\"\r\n                        aria-expanded=\"false\"\r\n                    >\r\n                        <i class=\"mdi mdi-beach\"></i><span class=\"hide-menu\">Dessert</span>\r\n                    </a>\r\n                </li>\r\n                <!-- <li> \r\n                \t<a \r\n                \t\tclass=\"waves-effect waves-dark\" \r\n                \t\trouterLink=\"/admin/boisson/liste\"\r\n                \t\taria-expanded=\"false\"\r\n                \t>\r\n                \t\t<i class=\"mdi mdi-beer\"></i><span class=\"hide-menu\">Boisson</span>\r\n                \t</a>\r\n                </li>\r\n                <li> \r\n                \t<a \r\n                \t\tclass=\"waves-effect waves-dark\" \r\n                \t\trouterLink=\"/admin/vins/liste\"\r\n                \t\taria-expanded=\"false\"\r\n                \t>\r\n                \t\t<i class=\"mdi mdi-cup\"></i><span class=\"hide-menu\">Vins</span>\r\n                \t</a>\r\n                </li> -->\r\n            </ul>\r\n        </nav>\r\n        <!-- End Sidebar navigation -->\r\n    </div>\r\n    <!-- End Sidebar scroll-->\r\n    <!-- Bottom points-->\r\n    <div class=\"sidebar-footer\">\r\n        <!-- \r\n        <a href=\"\" class=\"link\" data-toggle=\"tooltip\" title=\"Configuration\">\r\n        \t<i class=\"ti-settings\"></i>\r\n        </a> \r\n        <a href=\"\" class=\"link\" data-toggle=\"tooltip\" title=\"Email\">\r\n        \t<i class=\"mdi mdi-gmail\"></i>\r\n        </a>\r\n        -->\r\n        <a \r\n            class=\"link\" \r\n            data-toggle=\"tooltip\" \r\n            title=\"Deconnexion\"\r\n            (click)=\"deconnexion()\"\r\n        >\r\n            <i class=\"mdi mdi-power\"></i>\r\n        </a> \r\n    </div>\r\n    <!-- End Bottom points-->\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminSidebarComponent = /** @class */ (function () {
    function AdminSidebarComponent(router) {
        this.router = router;
    }
    AdminSidebarComponent.prototype.ngOnInit = function () {
    };
    AdminSidebarComponent.prototype.deconnexion = function () {
        localStorage.removeItem('infosUtilisateur');
        this.router.navigate(['/']);
    };
    AdminSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'admin-sidebar',
            template: __webpack_require__("../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AdminSidebarComponent);
    return AdminSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/site-footer/site-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carte {\r\n    margin-left: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    border: 1px solid #656328;\r\n    color: #4e5217;\t\r\n}\r\n\r\n.carte:hover {\r\n\tcolor: #bf7f09;\r\n\tborder: 1px solid #bf7f09;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/site-footer/site-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer_onepage\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<p style=\"text-align: center; padding-top: 10px;\">\r\n\t\t\t\t\t<a href=\"https://www.kook-agency.fr/\" target=\"blank\"> \r\n\t\t\t\t\t\t© {{currentYear}} KOOK AGENCY \r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a routerLink=\"/admin/dashboard\" class=\"carte\"> \r\n\t\t\t\t\t\tMa carte \r\n\t\t\t\t\t</a>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_layout/site-footer/site-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteFooterComponent = /** @class */ (function () {
    function SiteFooterComponent() {
    }
    SiteFooterComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.currentYear = date.getFullYear();
    };
    SiteFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'site-footer',
            template: __webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteFooterComponent);
    return SiteFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/site-header/site-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/site-header/site-header.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- <nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\" title=\"This Header is rendered by /app/_layout/site-header/site-header.component.html\"> -->\r\n  <!-- \r\n  <nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/\">\r\n            Accueil\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/pizza\">\r\n            Notre carte\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/contact\">\r\n            Horaires & contact\r\n          </a>\r\n        </li>        \r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login Page<small>(No layout)</small></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/register\">Register Page<small>(No layout)</small></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard<small>(App layout)</small></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/profile\">Profile<small>(App layout)</small></a>\r\n        </li>\r\n      </ul>\r\n      <a \r\n        routerLink=\"/admin/dashboard\" \r\n        class=\"btn btn-success\"\r\n        style=\"background: green; border: 1px solid green;\" \r\n      >\r\n        Admninstration\r\n      </a>\r\n    </div>\r\n  </nav>\r\n  -->"

/***/ }),

/***/ "../../../../../src/app/_layout/site-header/site-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteHeaderComponent = /** @class */ (function () {
    function SiteHeaderComponent() {
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
    };
    SiteHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'site-header',
            template: __webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_layout/site-layout/site-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_layout/site-layout/site-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<site-header></site-header>\r\n<router-outlet></router-outlet>\r\n<site-footer></site-footer>"

/***/ }),

/***/ "../../../../../src/app/_layout/site-layout/site-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent() {
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-site-layout',
            template: __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (url) {
        return this.http.get(url);
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('accesUtilisateur');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });


// export * from './user.service';


/***/ }),

/***/ "../../../../../src/app/_services/table/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    /* getAll() {
      return this.http.get<Users[]>('/api/users');
    } */
    /* getById(id: number) {
      return this.http.get('/api/users/' + id);
    } */
    UsersService.prototype.create = function (user) {
        // return this.http.post('https://www.aretmic.com/api/server/web/app_dev.php/users', user);
        return this.http.post('http://jsonplaceholder.typicode.com/users', user);
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_parallaxscroll__ = __webpack_require__("../../../../ng2-parallaxscroll/modules/ng2-parallaxscroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_site_layout_site_layout_component__ = __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_admin_layout_admin_layout_component__ = __webpack_require__("../../../../../src/app/_layout/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layout_admin_header_admin_header_component__ = __webpack_require__("../../../../../src/app/_layout/admin-header/admin-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layout_site_footer_site_footer_component__ = __webpack_require__("../../../../../src/app/_layout/site-footer/site-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layout_site_header_site_header_component__ = __webpack_require__("../../../../../src/app/_layout/site-header/site-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_presentation_presentation_component__ = __webpack_require__("../../../../../src/app/pages/presentation/presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__layout_admin_sidebar_admin_sidebar_component__ = __webpack_require__("../../../../../src/app/_layout/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_alert_alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/_auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_table_users_service__ = __webpack_require__("../../../../../src/app/_services/table/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_onepage_onepage_component__ = __webpack_require__("../../../../../src/app/pages/onepage/onepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_menu_menu_component__ = __webpack_require__("../../../../../src/app/pages/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_plat_plat_component__ = __webpack_require__("../../../../../src/app/pages/plat/plat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_dessert_dessert_component__ = __webpack_require__("../../../../../src/app/pages/dessert/dessert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_boisson_boisson_component__ = __webpack_require__("../../../../../src/app/pages/boisson/boisson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_vins2_vins2_component__ = __webpack_require__("../../../../../src/app/pages/vins2/vins2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_platdujour_platdujour_component__ = __webpack_require__("../../../../../src/app/pages/platdujour/platdujour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_pizza_pizza_component__ = __webpack_require__("../../../../../src/app/pages/pizza/pizza.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { PagesModule } from './pages/pages.module';
// rooting

// components for layout





// components




// directives

// Services














// import { JwtInterceptor } from './_helpers';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__layout_site_layout_site_layout_component__["a" /* SiteLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layout_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_presentation_presentation_component__["a" /* PresentationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layout_admin_header_admin_header_component__["a" /* AdminHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layout_site_footer_site_footer_component__["a" /* SiteFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__layout_site_header_site_header_component__["a" /* SiteHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__layout_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__directives_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_23__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_onepage_onepage_component__["a" /* OnepageComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_menu_menu_component__["a" /* menuComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_plat_plat_component__["a" /* PlatComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_dessert_dessert_component__["a" /* DessertComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_boisson_boisson_component__["a" /* BoissonComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_vins2_vins2_component__["a" /* Vins2Component */],
                __WEBPACK_IMPORTED_MODULE_32__pages_platdujour_platdujour_component__["a" /* PlatdujourComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_pizza_pizza_component__["a" /* PizzaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                // PagesModule,
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCZeDurG5gamvy7AGTl-zerIuq-kzoNrRc'
                }),
                __WEBPACK_IMPORTED_MODULE_7_ng2_parallaxscroll__["a" /* ParallaxScrollModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_page_scroll__["a" /* Ng2PageScrollModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__auth_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_20__services_index__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_20__services_index__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_22__services_table_users_service__["a" /* UsersService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_site_layout_site_layout_component__ = __webpack_require__("../../../../../src/app/_layout/site-layout/site-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_admin_layout_admin_layout_component__ = __webpack_require__("../../../../../src/app/_layout/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_presentation_presentation_component__ = __webpack_require__("../../../../../src/app/pages/presentation/presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact_component__ = __webpack_require__("../../../../../src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_onepage_onepage_component__ = __webpack_require__("../../../../../src/app/pages/onepage/onepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/_auth/auth-guard.service.ts");

// Layout


// Component






// Guard

var appRoutes = [
    // Site routes goes here
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layout_site_layout_site_layout_component__["a" /* SiteLayoutComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__pages_onepage_onepage_component__["a" /* OnepageComponent */], pathMatch: 'full' },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home_component__["a" /* HomeComponent */] },
            { path: 'presentation', component: __WEBPACK_IMPORTED_MODULE_4__pages_presentation_presentation_component__["a" /* PresentationComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact_component__["a" /* ContactComponent */] },
        ]
    },
    // App routes goes here here
    // { path: 'admin', redirectTo: 'admin/dashboard' },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            { path: '', loadChildren: './admin/admin.module#AdminModule' },
        ],
    },
    // no layout routes
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/config/host.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlApi; });
// var host = 'http://mividy.com/api/millesabords/web/app_dev.php';
var host = 'https://www.millesabords-leresto.com/api/web/app_dev.php';
//const host = 'http://localhost:8000';
var urlApi = host;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n\tfont-family:\"Trebuchet MS\", \"Myriad Pro\", Arial, sans-serif;\r\n\tfont-size:14px;\r\n\t/*background:#f4f4f4 url(../images/bg.gif) repeat top left;*/\r\n\tcolor:#333;\r\n\ttext-shadow:1px 1px 1px #fff;\r\n\toverflow-y:scroll;\r\n}\r\nh1{\r\n\tfont-size:56px;\r\n}\r\nh2{\r\n\tfont-size:20px;\r\n\tpadding:0px 0px 40px 0px;\r\n\tcolor:#aaa;\r\n}\r\nh2 span{\r\n\tcolor:#ffa800;\r\n}\r\na{\r\n\tcolor:#777;\r\n}\r\na:hover{\r\n\tcolor:#222;\r\n}\r\np{\r\n\tpadding:5px 0px;\r\n}\r\n.wrapper{\r\n\twidth:960px;\r\n\tmargin:20px auto;\r\n\tmin-height:550px;\r\n}\r\n.box{\r\n\twidth:49%;\r\n}\r\n.left{\r\n\tfloat:left;\r\n}\r\n.right{\r\n\tfloat:right;\r\n}\r\n.clear{\r\n\tclear:both;\r\n}\r\na.back{\r\n\tcolor:#777;\r\n\tposition:fixed;\r\n\ttop:5px;\r\n\tright:10px;\r\n\ttext-decoration:none;\r\n}\r\n/* Form Style */\r\n.form_wrapper{\r\n\tbackground:#fff;\r\n\tborder:1px solid #ddd;\r\n\tmargin:0 auto;\r\n\twidth:350px;\r\n\tfont-size:16px;\r\n\t-webkit-box-shadow:1px 1px 7px #ccc;\r\n\tbox-shadow:1px 1px 7px #ccc;\r\n}\r\n.form_wrapper h3{\r\n\tpadding:20px 30px 20px 30px;\r\n\tbackground-color:#444;\r\n\tcolor:#fff;\r\n\tfont-size:25px;\r\n\tborder-bottom:1px solid #ddd;\r\n}\r\n.form_wrapper form{\r\n\tbackground:#fff;\r\n}\r\n.form_wrapper .column{\r\n\twidth:47%;\r\n\tfloat:left;\r\n}\r\nform.active{\r\n\tdisplay:block;\r\n}\r\nform.login{\r\n\twidth:350px;\r\n}\r\nform.register{\r\n\twidth:550px;\r\n}\r\nform.forgot_password{\r\n\twidth:300px;\r\n}\r\n.form_wrapper a{\r\n\ttext-decoration:none;\r\n\tcolor:#777;\r\n\tfont-size:12px;\r\n}\r\n.form_wrapper a:hover{\r\n\tcolor:#000;\r\n}\r\n.form_wrapper label{\r\n\tdisplay:block;\r\n\tpadding:10px 30px 0px 30px;\r\n\tmargin:10px 0px 0px 0px;\r\n}\r\n.form_wrapper input[type=\"text\"],\r\n.form_wrapper input[type=\"password\"]{\r\n\tborder: solid 1px #E5E5E5;\r\n\tbackground: #FFFFFF;\r\n\tmargin: 5px 30px 0px 30px;\r\n\tpadding: 9px;\r\n\tdisplay:block;\r\n\tfont-size:16px;\r\n\twidth:76%;\r\n\tbackground: \r\n\t\t-moz-linear-gradient(\r\n\t\t\ttop,\r\n\t\t\t#FFFFFF,\r\n\t\t\t#EEEEEE 1px,\r\n\t\t\t#FFFFFF 25px\r\n\t\t\t);\r\n\t-webkit-box-shadow: 0px 0px 8px #f0f0f0;\r\n\tbox-shadow: 0px 0px 8px #f0f0f0;\r\n}\r\n.form_wrapper input[type=\"text\"]:focus,\r\n.form_wrapper input[type=\"password\"]:focus{\r\n\tbackground:#feffef;\r\n}\r\n.form_wrapper .bottom{\r\n\tbackground-color:#444;\r\n\tborder-top:1px solid #ddd;\r\n\tmargin-top:20px;\r\n\tclear:both;\r\n\tcolor:#fff;\r\n\ttext-shadow:1px 1px 1px #000;\r\n}\r\n.form_wrapper .bottom a{\r\n\tclear:both;\r\n\tpadding:10px 30px;\r\n\ttext-align:right;\r\n\tcolor:#ffa800;\r\n\ttext-shadow:1px 1px 1px #000;\r\n}\r\n.form_wrapper a.forgot{\r\n\tfloat:right;\r\n\tfont-style:italic;\r\n\tline-height:24px;\r\n\tcolor:#ffa800;\r\n\ttext-shadow:1px 1px 1px #fff;\r\n}\r\n.form_wrapper a.forgot:hover{\r\n\tcolor:#000;\r\n}\r\n.form_wrapper div.remember{\r\n\tfloat:left;\r\n\twidth:140px;\r\n\tmargin:20px 0px 20px 30px;\r\n\tfont-size:11px;\r\n}\r\n.form_wrapper div.remember input{\r\n\tfloat:left;\r\n\tmargin:2px 5px 0px 0px;\r\n}\r\n.form_wrapper span.error{\r\n\tvisibility:hidden;\r\n\tcolor:red;\r\n\tfont-size:11px;\r\n\tfont-style:italic;\r\n\tdisplay:block;\r\n\tmargin:4px 30px;\r\n}\r\n.form_wrapper input[type=\"submit\"] {\r\n\tbackground: #e3e3e3;\r\n\tborder: 1px solid #ccc;\r\n\tcolor: #333;\r\n\tfont-family: \"Trebuchet MS\", \"Myriad Pro\", sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\tpadding: 8px 0 9px;\r\n\ttext-align: center;\r\n\twidth: 150px;\r\n\tcursor:pointer;\r\n\tmargin:15px 20px 10px 10px;\r\n\ttext-shadow: 0px 1px 0px #fff;\r\n\tborder-radius: 4px;\r\n\t-webkit-box-shadow: 0px 0px 2px #fff inset;\r\n\tbox-shadow: 0px 0px 2px #fff inset;\r\n}\r\n.form_wrapper input[type=\"submit\"]:hover {\r\n\tbackground: #d9d9d9;\r\n\t-webkit-box-shadow: 0px 0px 2px #eaeaea inset;\r\n\tbox-shadow: 0px 0px 2px #eaeaea inset;\r\n\tcolor: #222;\r\n}\r\nalert {\r\n\ttext-align: center;\r\n}\r\n.help-block {\r\n\ttext-align: center;\r\n\tcolor: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">  \r\n        <div class=\"col-md-12\" style=\"margin: auto;\">\r\n            <alert></alert>\r\n\r\n            <div style=\"margin-top: 50px;\">\r\n                <div class=\"content\">\r\n                    <div id=\"form_wrapper\" class=\"form_wrapper\">\r\n                        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                            <h3>Connexion</h3>\r\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !pseudo.valid }\" >\r\n                                <label>Pseudo</label>\r\n                                <input \r\n                                    type=\"text\" \r\n                                    class=\"form-control\" \r\n                                    name=\"pseudo\" \r\n                                    [(ngModel)]=\"model.pseudo\" #pseudo=\"ngModel\" \r\n                                    required \r\n                                    placeholder=\"Entrer votre pseudo\"\r\n                                />\r\n                                <div \r\n                                    *ngIf=\"f.submitted && !pseudo.valid\" \r\n                                    class=\"help-block\"\r\n                                >\r\n                                    Le champs pseudo est obligatoire\r\n                                </div>\r\n                            </div>\r\n                            <div [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\"\r\n                            >\r\n                                <label>Password</label>\r\n                                <input \r\n                                    type=\"password\" \r\n                                    class=\"form-control\" \r\n                                    name=\"password\" \r\n                                    [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n                                    required \r\n                                    placeholder=\"Entrer votre mot de passe\"\r\n                                />\r\n                                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">\r\n                                    Le champs mot de passe est obligatoire\r\n                                </div>\r\n                            </div>                \r\n                            <div class=\"bottom\">\r\n                                <input type=\"submit\" value=\"Envoyer\" />\r\n                                <a [routerLink]=\"['/']\" class=\"linkform\">\r\n                                    Revenir sur le site\r\n                                </a>\r\n                                <div class=\"clear\"></div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var sha1 = __webpack_require__("../../../../sha1/sha1.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        //this.model.pseudo, this.model.password
        this.loading = true;
        var url = __WEBPACK_IMPORTED_MODULE_5__config_host__["a" /* urlApi */] + '/utilisateur/' + this.model.pseudo;
        this.authenticationService.login(url)
            .subscribe(function (data) {
            var idtf = sha1(data['id']);
            var access = sha1(_this.model.password) == data['password'];
            if (access) {
                localStorage.setItem('infosUtilisateur', JSON.stringify({ 'user': data }));
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.alertService.error('Erreur de mot de passe');
                _this.loading = false;
            }
            return false;
        }, function (error) {
            _this.alertService.error(error.error.message);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // selector: 'app-login',
            moduleId: module.i.toString(),
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/boisson/boisson.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.5);\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    display: block;\r\n}\r\n\r\n#text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    font-size: 20px;\r\n    color: white;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n}\r\n\r\n#show-mobile{\r\n    display: none !important;\r\n}\r\n\r\n@media screen and (min-width: 768px)\r\n{\r\n    #prix_pm{\r\n    margin-left: 0%;\r\n }\r\n #prix_gm{\r\n    margin-left: 0%;\r\n }\r\n}\r\n\r\n@media screen and (max-width: 767px) \r\n{\r\n      #hide-mobile{\r\n        display: none !important;\r\n      }\r\n\r\n     #show-mobile{\r\n        display: block !important;\r\n     }\r\n     #list-prix{\r\n         display: -webkit-inline-box !important;\r\n         display: -ms-inline-flexbox !important;\r\n         display: inline-flex !important;\r\n     }\r\n     #prix_pm{\r\n        margin-left: 68%;\r\n        position: absolute;\r\n     }\r\n     #prix_gm{\r\n        margin-left: 68%;\r\n        position: absolute;\r\n     }\r\n    .aff_mobile {\r\n        border: 1px solid #a7ada7;\r\n        margin-right: 1px;\r\n        margin-bottom: 2px;\r\n        margin-left: 1px;\r\n    }  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/boisson/boisson.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 40px; padding-bottom: 20px;\">\r\n    <div id=\"overlay\" *ngIf=\"!boissonsCharger;\">\r\n        <div id=\"text\">Chargement des boissons en cours...</div>\r\n    </div> \r\n\r\n    <div class=\"row\" style=\"margin-bottom: 20px;\" >\r\n        <div class=\"col-md-6\">            \r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <h2 id=\"hide-mobile\">33cl</h2>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <h2 id=\"hide-mobile\">50cl</h2>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row aff_mobile\" *ngFor=\"let i of boissons\" style=\"margin-bottom: 20px;\" >\r\n        <div class=\"col-md-6\">  \r\n        \t<h2>{{i.nom | uppercase}}</h2>\r\n        </div>\r\n        <div class=\"col-md-3\" id=\"list-prix\">\r\n            <p id=\"show-mobile\"><strong>33cl</strong></p>\r\n            <p id=\"prix_pm\">{{i.pm}}</p>\r\n        </div>\r\n        <div class=\"col-md-3\" id=\"list-prix\">\r\n             <p id=\"show-mobile\"><strong>50cl</strong></p>\r\n            <p id=\"prix_gm\">{{i.gm}}</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/boisson/boisson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoissonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoissonComponent = /** @class */ (function () {
    function BoissonComponent(http) {
        this.http = http;
        this.boissonsCharger = false;
    }
    BoissonComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_host__["a" /* urlApi */] + '/boisson';
        this.http.get(url)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.boissons = data;
            _this.boissonsCharger = (data.length > 0) ? true : false;
        });
    };
    BoissonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-boisson',
            template: __webpack_require__("../../../../../src/app/pages/boisson/boisson.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/boisson/boisson.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BoissonComponent);
    return BoissonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 400px;\r\n}\r\n\r\n.font_4 {\r\n    font: normal normal normal 84px/1.4em 'playfair display',serif;\r\n    color: #2F2E2E;\r\n}\r\n\r\n.font_9 {\r\n    font: normal normal normal 19px/1.4em din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif;\r\n}\r\n\r\n@media screen and (max-width: 419px) \r\n{\r\n\t.font_4 {\r\n    font: normal normal normal 60px/1.4em 'playfair display',serif;\r\n    color: #2F2E2E;\r\n\t}\r\n\r\n\t.font_9 {\r\n    font: normal normal normal 15px/1.4em din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n\r\n<div style=\"background: #e8e8e8;\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t<div \r\n\t\t\t\t\tdata-packed=\"true\" \r\n\t\t\t\t\tclass=\"txtNew\" \r\n\t\t\t\t\tid=\"comp-ikmsbhic\" \r\n\t\t\t\t\tstyle=\"margin-top: 50px;\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<h4 class=\"font_4\" style=\"line-height:1em; text-align:center;\">\r\n\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\thref=\"#\" \r\n\t\t\t\t\t\t\ttarget=\"_self\"\r\n\t\t\t\t\t\t\tstyle=\"color: #2F2E2E !important;\" \r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tMille sabords\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<p \r\n\t\t\t\t\t\tclass=\"font_9\" \r\n\t\t\t\t\t\tstyle=\"line-height:1em; text-align:center;\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tRESTAURANT\r\n\t\t\t\t\t</p>\t\t\t\t\r\n\t\t\t\t</div>\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-5\" style=\"margin-top: 50px;\">\r\n\t\t\t\t<p class=\"font_9\">\r\n\t\t\t\t\tCONTACT\r\n\t\t\t\t</p>\r\n\t\t\t\t<p></p>\r\n\r\n\t\t\t\t<p class=\"font_9 color_15\">\r\n\t\t\t\t\tMarine de Sant’ambroggio 20260 Lumio\r\n\t\t\t\t</p>\r\n\t\t\t\t<p></p>\r\n\t\t\t\t<p></p>\r\n\r\n\t\t\t\t<p class=\"font_9 color_15\">\r\n\t\t\t\t\t04 95 60 68 74<br>\r\n\t\t\t\t\tOuvert de 7H30 à 2h00 du matin\r\n\t\t\t\t</p>\r\n\t\t\t\t<p></p>\r\n\t\t\t\t<p></p>\r\n\r\n\t\t\t\t<p class=\"font_9\">\r\n\t\t\t\t\tMoyen de paiement : CARTE BLEU , CHÈQUES, <br>TICKET RESTAURANT, CHÈQUES VACANCES\r\n\t\t\t\t</p>\r\n\t\t\t\t<p></p>\r\n\r\n\t\t\t\t<p class=\"font_9\">\r\n\t\t\t\t\tContactez nous sur contact@millessabords-leresto.com\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.lat = 42.6030003;
        this.lng = 8.8269004;
        this.zoom = 15;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dessert/dessert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.5);\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    display: block;\r\n}\r\n\r\n#text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    font-size: 20px;\r\n    color: white;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .aff_mobile {\r\n        border: 1px solid #a7ada7;\r\n        /*margin-right: 1px;*/\r\n        margin-bottom: 2px;        \r\n    }\r\n    .titre_menu_mobile {\r\n        padding: 0 !important;        \r\n    }\r\n    .titre_menu_mobile h2 {\r\n        font-size: 16px;   \r\n        padding: 2px 8px 2px 8px !important;\r\n        line-height: 20px !important;\r\n        background: #a9a7a794 !important;\r\n    }\r\n\r\n    .titre_menu_mobile p {\r\n        font-size: 14px;   \r\n        padding: 0px 8px 0px 8px !important;\r\n    }    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dessert/dessert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top: 40px; padding-bottom: 20px;\">\r\n    <div id=\"overlay\" *ngIf=\"!dessertsCharger;\">\r\n        <div id=\"text\">Chargement des desserts en cours...</div>\r\n    </div> \r\n\r\n    <div class=\"row aff_mobile menu-details\" *ngFor=\"let i of desserts\" style=\"margin-bottom: 20px;\" >\r\n        <div class=\"col-md-10 titre_menu_mobile\">\r\n            <div class=\"title d-flex\">\r\n                <h2>{{i.nom | uppercase}}</h2>\r\n                <h2 class=\"price-detail hidden-md-up\">{{i.prix}}</h2>\r\n            </div>\r\n            <p *ngIf=\"i.ingredient != '-'\" >{{i.ingredient}}</p>\r\n        </div>\r\n        <div class=\"col-md-2 hidden-md-down\" style=\"text-align: right;\">\r\n            {{i.prix}}\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/dessert/dessert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DessertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DessertComponent = /** @class */ (function () {
    function DessertComponent(http) {
        this.http = http;
        this.dessertsCharger = false;
    }
    DessertComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_host__["a" /* urlApi */] + '/dessert';
        this.http.get(url)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.desserts = data;
            _this.dessertsCharger = (data.length > 0) ? true : false;
        });
    };
    DessertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dessert',
            template: __webpack_require__("../../../../../src/app/pages/dessert/dessert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dessert/dessert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DessertComponent);
    return DessertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bandeaurose {\r\n    background: #ebc9af;\r\n    text-align: center;\r\n    height: 50px;\r\n}\r\n\r\ndiv.bandeaurose > p {\r\n    padding-top: 13px;\r\n    font-family: unset;\r\n    letter-spacing: 2pt;\r\n}\r\n\r\n.commander {\r\n    text-transform: uppercase;\r\n    height: 40px;\r\n    border: 1px solid;\r\n    width: 150px;\r\n    margin: auto;\r\n    padding-top: 6px;\r\n    cursor: pointer;\t\r\n}\r\n\r\n.commander:hover {\r\n\tbackground: black;\r\n\tcolor: white;\r\n}\r\n\r\n.strc1 {\r\n\tposition: absolute; \r\n\ttop: 0px; \r\n\twidth: calc((((100vw - 15px) - 0px) * 1) + 1px); \r\n\theight: 100%; \r\n\tpointer-events: auto; l\r\n\teft: calc((((((100vw - 15px) - 0px) * 1) - 980px) * -0.5) - 1px); \r\n\tbottom: 0px; \r\n\toverflow: hidden; clip: rect(0px 1299px 50px 0px);\t\r\n}\r\n\r\n.strc2 {\r\n\twidth: 100%; \r\n\theight: 100%; \r\n\tbackground-color: rgb(235, 201, 175); \r\n\tposition: absolute;\r\n}\r\n\r\n.strc3 {\r\n\tposition: absolute; \r\n\twidth: 980px; \r\n\ttop: 0px; \r\n\tbottom: 0px; \r\n\tleft: calc((100% - 980px) * 0.5);\t\r\n}\r\n\r\n.txtNew p {\r\n    margin: 0;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n\r\n.font_9 {\r\n    font: normal normal normal 19px/1.4em din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif;\r\n    color: #605E5E;\r\n}\r\n\r\n.color_15 {\r\n    color: #2F2E2E;\r\n}\r\n\r\n.txtNew > * {\r\n    pointer-events: auto;\r\n}\r\n\r\n.txtNew {\r\n    word-wrap: break-word;\r\n    text-align: start;\r\n    pointer-events: none;\r\n}\r\n\r\n.txtNew h3 {\r\n    margin: 0;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n\r\n.content_text {\r\n    position: relative;\r\n    top: 90px;    \r\n}\r\n\r\n.font_3 {\r\n    font: normal normal normal 170px/1.4em 'playfair display',serif;\r\n    color: #2F2E2E;   \r\n}\r\n\r\n.resto {\r\n    font: normal normal normal 25px/1.4em avenir-lt-w01_35-light1475496,sans-serif; \r\n    text-align: center; \r\n    color: #fff;\r\n    font-size: 30px;\r\n}\r\n\r\n.carte {\r\n    width: 10%;\r\n    text-align: center;\r\n    margin: auto;\r\n    background-color: #ebc9af;\r\n    font-size: 20px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    padding-top: 2px;\r\n}\r\n\r\n.carte:hover {\r\n    background-color: #d6915d;\r\n    color: #000 !important;\r\n}\r\n\r\n.parallax-home {\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/home/slide_resize.jpg")) + ") no-repeat center center fixed;;\r\n    height: 600px;\r\n    background-size: cover;\r\n}\r\n\r\n@media screen and (max-width: 1199px) and (min-width: 1053px)\r\n{\r\n    .font_3 {\r\n    font: normal normal normal 140px/1.4em 'playfair display',serif;\r\n    color: #2F2E2E;   \r\n    }\r\n    .resto {\r\n   \r\n    font-size: 27px;\r\n }\r\n}\r\n\r\n@media screen and (max-width: 1052px) and (min-width: 921px)\r\n{\r\n  .font_3 {\r\n    font: normal normal normal 121px/1.4em 'playfair display',serif;\r\n    color: #2F2E2E;   \r\n    } \r\n    .resto {\r\n   \r\n    font-size: 25px;\r\n }\r\n}\r\n\r\n@media screen and (max-width: 920px) and (min-width: 769px)\r\n{\r\n    .font_3 {\r\n    font: normal normal normal 105px/1.4em 'playfair display',serif;\r\n    color: #2F2E2E;   \r\n    } \r\n    div.bandeaurose > p {\r\n    padding-top: 2px !important;\r\n    font-family: unset;\r\n    letter-spacing: 2pt;\r\n  }\r\n  .resto {\r\n   \r\n    font-size: 23px;\r\n }\r\n .carte{\r\n    width: 14%;\r\n }\r\n}\r\n\r\n@media screen and (max-width: 768px)  and (min-width: 604px) \r\n{\r\n    .font_3 {\r\n    font: normal normal normal 98px/1.4em 'playfair display',serif;\r\n    color: #2F2E2E;   \r\n    } \r\n       div.bandeaurose > p {\r\n        padding-top: 20px !important;\r\n        font-size: small;\r\n        font-family: unset;\r\n        letter-spacing: 2pt;\r\n     }\r\n      div.bandeaurose {\r\n        height: 66px !important;\r\n     }\r\n     .resto {\r\n   \r\n    font-size: 22px;\r\n    }\r\n    .carte{\r\n    width: 17%;\r\n }\r\n  \r\n}\r\n\r\n@media screen and (max-width: 603px) \r\n{\r\n    .font_3 {\r\n    font: normal normal normal 64px/1.4em 'playfair display',serif;\r\n    color: #2F2E2E;   \r\n    } \r\n    div.bandeaurose > p {\r\n    padding-top: 16px !important;\r\n    font-size: small;\r\n    font-family: unset;\r\n    letter-spacing: 2pt;\r\n }\r\n  div.bandeaurose {\r\n    height: 72px !important;\r\n }\r\n   .resto {\r\n   \r\n    font-size: 20px;\r\n    }\r\n    .carte{\r\n    width: 29%;\r\n }\r\n  \r\n}\r\n\r\n@media  screen and(max-width: 480px) and (min-width: 410px) {\r\n     .carte{\r\n    width: 22%;\r\n }\r\n}\r\n\r\n@media  screen and(max-width: 409px) and (min-width: 341px) {\r\n     .carte{\r\n    width: 24%;\r\n }\r\n}\r\n\r\n@media  screen and(max-width: 340px) {\r\n     .carte{\r\n    width: 29%;\r\n }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bandeaurose\">\r\n    <p>\r\n        Marine de Sant’ambro­ggio 20260 Lumio | 04 95 60 68 74 |  Ouvert de 7h30 à 2h00 du matin\r\n    </p>\r\n</div>\r\n\r\n<div parallax class=\"parallax-home\" [config]=\"{axis: X, speed: -.2}\">\r\n    <div class=\"content_text\">\r\n        <h3 class=\"font_3\" style=\"line-height:0.9em; text-align:center;\">\r\n            <span style=\"color:#FAFAFA;\">\r\n                <span style=\"letter-spacing:-0.05em;\">Mille sabords</span>\r\n            </span>\r\n        </h3>\r\n        <br><br>\r\n        <p class=\"resto\">\r\n            Restaurant\r\n        </p>\r\n        <br><br><br>\r\n        <p class=\"carte\">\r\n            La Carte\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n<!-- <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\" style=\"text-align: center; margin-top: 5px; \">\r\n            <div \r\n                data-packed=\"true\" \r\n                class=\"txtNew\" \r\n                id=\"comp-ikmo799g\" \r\n                style=\"left: 65px; width: 850px; position: absolute; top: 230px;\">\r\n                <h3 class=\"font_3\" style=\"line-height:0.9em; text-align:center;\">\r\n                    <span style=\"color:#FAFAFA;\">\r\n                        <span style=\"letter-spacing:-0.05em;\">DaKoTa</span>\r\n                    </span>\r\n                </h3>\r\n            </div>\r\n            <div \r\n                data-packed=\"true\" \r\n                class=\"txtNew\" \r\n                id=\"comp-ikpj53mv\" \r\n                style=\"left: 266px; width: 447px; position: absolute; top: 411px;\"\r\n            >\r\n                <h5 class=\"font_5\" style=\"line-height:1.6em; text-align:center;\">\r\n                    <span style=\"letter-spacing:0.1em;\">\r\n                        <span class=\"color_11\">Restaurant</span>\r\n                    </span>\r\n                </h5>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/slide_resize.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "slide_resize.e5d7564a5bdb2be654de.jpg";

/***/ }),

/***/ "../../../../../src/app/pages/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.5);\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n\r\n#text{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    font-size: 20px;\r\n    color: white;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .aff_mobile {\r\n        border: 1px solid #a7ada7;\r\n        /*margin-right: 1px;*/\r\n        margin-bottom: 2px;        \r\n    }\r\n    .titre_menu_mobile {\r\n        padding: 0 !important;        \r\n    }\r\n    .titre_menu_mobile h2 {\r\n        font-size: 16px;   \r\n        padding: 2px 8px 2px 8px !important;\r\n        line-height: 20px !important;\r\n        background: #a9a7a794 !important;\r\n    }\r\n\r\n    .titre_menu_mobile p {\r\n        font-size: 14px;   \r\n        padding: 0px 8px 0px 8px !important;\r\n    }    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top: 40px; padding-bottom: 20px;\">\r\n    <div id=\"overlay\" *ngIf=\"!menusCharger;\">\r\n        <div id=\"text\">Chargement des entrées en cours...</div>\r\n    </div> \r\n\r\n    <div class=\"row aff_mobile menu-details\" *ngFor=\"let i of menus\" style=\"margin-bottom: 20px;\" >\r\n        <div class=\"col-md-10 titre_menu_mobile\">\r\n            <div class=\"title d-flex\">\r\n                <h2>{{i.nom | uppercase}}</h2>\r\n                <h2 class=\"price-detail hidden-md-up\">{{i.prix}}</h2>\r\n            </div>\r\n            <p *ngIf=\"i.ingredient != '-'\" >{{i.ingredient}}</p>\r\n        </div>\r\n        <div class=\"col-md-2 hidden-md-down\" style=\"text-align: right;\">\r\n            {{i.prix}}\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var menuComponent = /** @class */ (function () {
    function menuComponent(http) {
        this.http = http;
        this.menusCharger = false;
    }
    menuComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_host__["a" /* urlApi */] + '/menu';
        this.http.get(url)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.menus = data;
            _this.menusCharger = (data.length > 0) ? true : false;
        });
    };
    menuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/pages/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], menuComponent);
    return menuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/onepage/nos_boissons.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nos_boissons.d359a078104411377e5a.jpg";

/***/ }),

/***/ "../../../../../src/app/pages/onepage/nos_desserts.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nos_desserts.3972178a535b118635d3.jpg";

/***/ }),

/***/ "../../../../../src/app/pages/onepage/nos_entrees_1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nos_entrees_1.c31eee001eb1faa94cf3.jpg";

/***/ }),

/***/ "../../../../../src/app/pages/onepage/nos_plats.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nos_plats.3515d14bf99e7fef6800.jpg";

/***/ }),

/***/ "../../../../../src/app/pages/onepage/onepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Styles go here */\r\n.menu {\r\n    height: 60px;\r\n    background: #fff;\r\n    padding-top: 15px;\r\n    z-index: 9999;\r\n    width: 100%;\r\n    position: fixed;\r\n    border-bottom: 0.5px solid #dcd3d3;\r\n}\r\n.menu a {\r\n    cursor: pointer;\r\n    color: #000;\r\n}\r\n.menu a:hover {\r\n    cursor: pointer;\r\n    color: #A0A09F;\r\n}\r\n#content {\r\n    /*padding-top: 60px; */\r\n}\r\n#home {\r\n    padding-top: 60px;\r\n}\r\n#presentation {\r\n    padding-top: 60px;\r\n}\r\n#menu {\r\n    padding-top: 60px;\r\n}\r\n.parallax-entrees {\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/onepage/nos_entrees_1.jpg")) + ") no-repeat center center fixed;\r\n    height: 350px;\r\n    background-size: cover;    \r\n}\r\n.parallax-plats {\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/onepage/nos_plats.jpg")) + ") no-repeat center center fixed;\r\n    height: 350px;\r\n    background-size: cover;     \r\n}\r\n.parallax-desserts {\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/onepage/nos_desserts.jpg")) + ") no-repeat center center fixed;\r\n    height: 350px;\r\n    background-size: cover;    \r\n}\r\n.parallax-boissons {\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/onepage/nos_boissons.jpg")) + ") no-repeat center center fixed;\r\n    height: 350px;\r\n    background-size: cover;    \r\n}\r\n.parallax-pizza {\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/onepage/pizza_denicollo.jpg")) + ") no-repeat center center fixed;\r\n    height: 350px;\r\n    background-size: cover;\r\n}\r\n.parallax-platdujour {\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/onepage/platdujour.jpg")) + ") no-repeat center center fixed;\r\n    height: 350px;\r\n    background-size: cover;    \r\n}\r\n.parallax-presentation {\r\n    background: url(" + escape(__webpack_require__("../../../../../src/app/pages/onepage/presentation.jpg")) + ") no-repeat center center fixed;\r\n    height: 350px;\r\n    background-size: cover;    \r\n}\r\n#contact {\r\n    padding-top: 60px;\r\n}\r\n/*Pour la section accueil*/\r\n.txtNew {\r\n    word-wrap: break-word;\r\n    text-align: start;\r\n    pointer-events: none;\r\n}\r\n.txtNew h3 {\r\n    margin: 0;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n.color_32 {\r\n    color: #FFC880;\r\n}\r\n.font_3 {\r\n    font: normal normal normal 58px/1.4em impact,impact-w01-2010,impact-w02-2010,impact-w10-2010,sans-serif;\r\n    color: #222222;\r\n}\r\n.font_4 {\r\n    font: normal normal normal 68px 'playfair display',serif;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding-top: 80px;\r\n    font-style: italic;\r\n}\r\n#menu-mobile .navbar-nav li {\r\n    border: none !important;\r\n}\r\n#comp-itb5kbcnlink{\r\n    margin-left: 3px !important;\r\n}\r\n@media screen and (min-width: 1200px) \r\n{\r\n  #menu-bureau-small{\r\n    display: none !important;\r\n  }\r\n\r\n  #menu-tablet{\r\n   display: none !important;\r\n  }\r\n   #menu-mobile{\r\n   display: none  !important;\r\n  }\r\n  #menu-tablet-min{\r\n    display: none !important;\r\n  }\r\n}\r\n@media screen and (max-width: 1199px) and (min-width: 1053px)\r\n{\r\n  #menu-bureau{\r\n    display: none !important;\r\n  }\r\n   #menu-bureau-small{\r\n    display: block !important;\r\n  }\r\n  #menu-tablet{\r\n   display: none !important;\r\n  }\r\n  #menu-tablet-min{\r\n    display: none !important;\r\n  }\r\n   #menu-mobile{\r\n   display: none  !important;\r\n  }\r\n}\r\n@media screen and (max-width: 1052px) and (min-width: 921px)\r\n{\r\n    .font_4{\r\n    font: normal normal normal 73px/1.4em 'playfair display',serif;\r\n\r\n    }\r\n  #menu-bureau{\r\n    display: none !important;\r\n  }\r\n   #menu-bureau-small{\r\n    display: none !important;\r\n  }\r\n  #menu-tablet{\r\n   display: block  !important;\r\n  }\r\n  #menu-tablet-min{\r\n    display: none !important;\r\n  }\r\n   #menu-mobile{\r\n   display: none  !important;\r\n  }\r\n  \r\n}\r\n@media screen and (max-width: 920px) and (min-width: 769px)\r\n{\r\n    .font_4{\r\n    font: normal normal normal 68px/1.4em 'playfair display',serif;\r\n\r\n    }\r\n    #comp-itb5kbcnlink{\r\n   margin-left: -25px !important;\r\n    }\r\n  #menu-bureau{\r\n    display: none !important;\r\n  }\r\n   #menu-bureau-small{\r\n    display: none !important;\r\n  }\r\n  #menu-tablet{\r\n   display: none  !important;\r\n  }\r\n  #menu-tablet-min{\r\n    display: block  !important;\r\n  }\r\n   #menu-mobile{\r\n   display: none  !important;\r\n  }\r\n  \r\n  \r\n}\r\n@media screen and (max-width: 768px)\r\n{\r\n    \r\n    .font_4{\r\n    font: normal normal normal 57px/1.4em 'playfair display',serif;\r\n\r\n    }\r\n  #menu-bureau{\r\n    display: none !important;\r\n  }\r\n   #menu-bureau-small{\r\n    display: none !important;\r\n  }\r\n  #menu-tablet{\r\n   display: none  !important;\r\n  }\r\n  #menu-tablet-min{\r\n    display: none !important;\r\n  }\r\n  #menu-mobile{\r\n   display: block  !important;\r\n  }\r\n  \r\n}\r\n.topnav {\r\n  overflow: hidden;\r\n  background-color: white;\r\n}\r\n.topnav a {\r\n  float: left;\r\n  display: block;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n.topnav a:hover {\r\n  background-color:  transparent;\r\n  color: #A0A09F;\r\n}\r\n.active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n.topnav .icon {\r\n  display: none;\r\n}\r\n@media screen and (max-width: 600px) {\r\n  .topnav a:not(:first-child) {display: none;}\r\n  .topnav a.icon {\r\n    float: right;\r\n    display: block;\r\n  }\r\n}\r\n@media screen and (max-width: 600px) {\r\n  .topnav.responsive {position: relative;}\r\n  .topnav.responsive .icon {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  .topnav.responsive a {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n}\r\n/*Fin pour la section accueil*/\r\n.hide-content{\r\n  display: none;\r\n  -webkit-transition: all 1s ease-out;\r\n  transition: all 1s ease-out;\r\n}\r\n.tabs .tab{\r\n  -webkit-transition: all 1s ease-out;\r\n  transition: all 1s ease-out;\r\n  -webkit-animation: hideandshow 0.8s;\r\n          animation: hideandshow 0.8s;\r\n}\r\n.tabMenu{\r\n  color: black;\r\n  font-size: 36px;\r\n}\r\n.tabMenu .tabMenuList{\r\n  display: inline-block;\r\n  list-style: none;\r\n  padding: 8px 100px 5px 2px;;\r\n  cursor: pointer;\r\n  -webkit-animation: hideandshow 0.8s;\r\n          animation: hideandshow 0.8s;\r\n  text-transform: uppercase;\r\n  -webkit-transition: all 0.2s ease-in;\r\n  transition: all 0.2s ease-in;\r\n}\r\n.current{\r\n  border-bottom: 1px solid rgba(153, 153, 153, 1) !important;\r\n}\r\n@-webkit-keyframes hideandshow{\r\n  0%{\r\n    opacity: 0;\r\n  }\r\n  100%{\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes hideandshow{\r\n  0%{\r\n    opacity: 0;\r\n  }\r\n  100%{\r\n    opacity: 1;\r\n  }\r\n}\r\n@media screen and (max-width: 920px) {\r\n    .titre_menu_carte {\r\n        font-size: 30px !important;       \r\n    }  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/onepage/onepage.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu -->\r\n<div class=\"menu\">\r\n\t<div class=\"container\" id=\"menu-bureau\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<a \r\n\t\t\t\t\ttarget=\"_self\" \r\n\t\t\t\t\trole=\"button\" \r\n\t\t\t\t\tid=\"comp-itb5kbcnlink\" \r\n\t\t\t\t\tclass=\"b4link\"\r\n\t\t\t\t\tstyle=\"margin-left: 20px;\" \r\n\t\t\t\t\t(click)=\"goTo('#home')\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<span \r\n\t\t\t\t\t\tid=\"comp-itb5kbcnlabel\" \r\n\t\t\t\t\t\tclass=\"b4label\"\r\n\t\t\t\t\t\tstyle=\"font: normal normal normal 25px/1.4em 'playfair display',serif;\" \r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tMille sabords\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-7\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-2\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"pull-left\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#home')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tACCUEIL\r\n\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"text-center\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#presentation')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tPRESENTATION\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"pull-right\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#menu')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tMENU\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"pull-right\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#contact')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tCONTACT\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-2\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t<a \r\n\t\t\t\t\thref=\"https://www.facebook.com/MilleSabordsLumio/\"\r\n\t\t\t\t\ttarget=\"blank\" \t\t\t\t \r\n\t\t\t\t>\r\n\t\t\t\t\t<img src=\"assets/images/logo/logo_fb.png\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a \r\n\t\t\t\t\thref=\"https://www.tripadvisor.fr/Restaurant_Review-g776031-d3236463-Reviews-Le_mille_sabords-Lumio_Calvi_Haute_Corse_Corsica.html\"\r\n\t\t\t\t\ttarget=\"blank\" \t\t\t\t \r\n\t\t\t\t>\r\n\t\t\t\t\t<img src=\"assets/images/logo/logo-o_o.png\">\r\n\t\t\t\t</a>\t\t\t\t\r\n\t\t\t</div>\t\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"container-fluid\" id=\"menu-bureau-small\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t<a \r\n\t\t\t\t\ttarget=\"_self\" \r\n\t\t\t\t\trole=\"button\" \r\n\t\t\t\t\tid=\"comp-itb5kbcnlink\" \r\n\t\t\t\t\tclass=\"b4link\"\r\n\t\t\t\t\tstyle=\"margin-left: 20px;\" \r\n\t\t\t\t\t(click)=\"goTo('#home')\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<span \r\n\t\t\t\t\t\tid=\"comp-itb5kbcnlabel\" \r\n\t\t\t\t\t\tclass=\"b4label\"\r\n\t\t\t\t\t\tstyle=\"font: normal normal normal 25px/1.4em 'playfair display',serif;\" \r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tMille sabords\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-1\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"pull-left\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#home')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tACCUEIL\r\n\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"text-center\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#presentation')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tPRESENTATION\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"pull-right\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#menu')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tMENU\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"pull-right\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#contact')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tCONTACT\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-1\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t<a \r\n\t\t\t\t\thref=\"https://www.facebook.com/MilleSabordsLumio/\"\r\n\t\t\t\t\ttarget=\"blank\" \t\t\t\t \r\n\t\t\t\t>\r\n\t\t\t\t\t<img src=\"assets/images/logo/logo_fb.png\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a \r\n\t\t\t\t\thref=\"https://www.tripadvisor.fr/Restaurant_Review-g776031-d3236463-Reviews-Le_mille_sabords-Lumio_Calvi_Haute_Corse_Corsica.html\"\r\n\t\t\t\t\ttarget=\"blank\" \t\t\t\t \r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t<img src=\"assets/images/logo/logo-o_o.png\">\r\n\t\t\t\t</a>\t\t\t\t\r\n\t\t\t</div>\t\t\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"container-fluid\" id=\"menu-tablet\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t<a \r\n\t\t\t\t\ttarget=\"_self\" \r\n\t\t\t\t\trole=\"button\" \r\n\t\t\t\t\tid=\"comp-itb5kbcnlink\" \r\n\t\t\t\t\tclass=\"b4link\"\r\n\t\t\t\t\tstyle=\"margin-left: 20px;\" \r\n\t\t\t\t\t(click)=\"goTo('#home')\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<span \r\n\t\t\t\t\t\tid=\"comp-itb5kbcnlabel\" \r\n\t\t\t\t\t\tclass=\"b4label\"\r\n\t\t\t\t\t\tstyle=\"font: normal normal normal 25px/1.4em 'playfair display',serif;\" \r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tMille sabords\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-2\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"pull-left\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#home')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tACCUEIL\r\n\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"text-center\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#presentation')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tPRESENTATION\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"pull-right\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#menu')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tMENU\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\t\t\t\tclass=\"pull-right\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"goTo('#contact')\"\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\tCONTACT\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-1\">\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<a \r\n\t\t\t\t\thref=\"https://www.facebook.com/MilleSabordsLumio/\"\r\n\t\t\t\t\ttarget=\"blank\" \t\t\t\t \r\n\t\t\t\t>\r\n\t\t\t\t\t<img src=\"assets/images/logo/logo_fb.png\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a \r\n\t\t\t\t\thref=\"https://www.tripadvisor.fr/Restaurant_Review-g776031-d3236463-Reviews-Le_mille_sabords-Lumio_Calvi_Haute_Corse_Corsica.html\"\r\n\t\t\t\t\ttarget=\"blank\" \t\t\t\t \r\n\t\t\t\t>\r\n\t\t\t\t\t<img src=\"assets/images/logo/logo-o_o.png\">\r\n\t\t\t\t</a>\t\t\t\t\r\n\t\t\t</div>\t\r\n\t\t\t\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"container-fluid\" id=\"menu-tablet-min\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t<a \r\n\t\t\t\t\ttarget=\"_self\" \r\n\t\t\t\t\trole=\"button\" \r\n\t\t\t\t\tid=\"comp-itb5kbcnlink\" \r\n\t\t\t\t\tclass=\"b4link\"\r\n\t\t\t\t\tstyle=\"margin-left: 20px;\" \r\n\t\t\t\t\t(click)=\"goTo('#home')\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<span \r\n\t\t\t\t\t\tid=\"comp-itb5kbcnlabel\" \r\n\t\t\t\t\t\tclass=\"b4label\"\r\n\t\t\t\t\t\tstyle=\"font: normal normal normal 25px/1.4em 'playfair display',serif;\" \r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tMille sabords\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\tclass=\"pull-left\"\r\n\t\t\t\t\t\t\t(click)=\"goTo('#home')\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tACCUEIL\r\n\t\t\t\t\t\t</a>\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\tclass=\"text-center\"\r\n\t\t\t\t\t\t\t(click)=\"goTo('#presentation')\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tPRESENTATION\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\tclass=\"pull-right\"\r\n\t\t\t\t\t\t\t(click)=\"goTo('#menu')\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tMENU\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\tclass=\"pull-right\"\r\n\t\t\t\t\t\t\t(click)=\"goTo('#contact')\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tCONTACT\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-1\">\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\thref=\"https://www.facebook.com/MilleSabordsLumio/\"\r\n\t\t\t\t\t\t\ttarget=\"blank\" \t\t\t\t \r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo_fb.png\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\thref=\"https://www.tripadvisor.fr/Restaurant_Review-g776031-d3236463-Reviews-Le_mille_sabords-Lumio_Calvi_Haute_Corse_Corsica.html\"\r\n\t\t\t\t\t\t\ttarget=\"blank\" \t\t\t\t \r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<img src=\"assets/images/logo/logo-o_o.png\">\r\n\t\t\t\t\t\t</a>\t\t\t\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div id=\"menu-mobile\">\r\n\t\t<div class=\"topnav\" id=\"myTopnav\">\r\n\t\t\t<a \r\n\t\t\t\t\ttarget=\"_self\" \r\n\t\t\t\t\trole=\"button\" \r\n\t\t\t\t\tid=\"comp-itb5kbcnlink\" \r\n\t\t\t\t\tclass=\"b4link\"\r\n\t\t\t\t\tstyle=\"margin-left: 20px;\" \r\n\t\t\t\t\t(click)=\"goTo('#home')\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<span \r\n\t\t\t\t\t\tid=\"comp-itb5kbcnlabel\" \r\n\t\t\t\t\t\tclass=\"b4label\"\r\n\t\t\t\t\t\tstyle=\"font: normal normal normal 25px/0.4em 'playfair display',serif;\" \r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tMille sabords\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t&nbsp;&nbsp;\r\n\t\t\t</a>\r\n\t\t\t  <a \r\n\t\t\t\t\t\r\n\t\t\t\t\t(click)=\"goTo('#home')\"\r\n\t\t\t\t>\r\n\t\t\t\t\tACCUEIL\r\n\t\t\t\t</a>\t\r\n\t\t\t  <a \r\n\t\t\t\t\t\r\n\t\t\t\t\t(click)=\"goTo('#presentation')\"\r\n\t\t\t\t>\r\n\t\t\t\t\tPRESENTATION\r\n\t\t\t\t</a>\r\n\t\t\t  <a \r\n\t\t\t\t\r\n\t\t\t\t(click)=\"goTo('#menu')\"\r\n\t\t\t\t>\r\n\t\t\t\t\tMENU\r\n\t\t\t\t</a>\r\n\t\t\t\t<a \r\n\t\t\t\t\t\r\n\t\t\t\t\t(click)=\"goTo('#contact')\"\r\n\t\t\t\t>\r\n\t\t\t\t\tCONTACT\r\n\t\t\t\t</a>\r\n\t\t\t \r\n\t\t\t  <a href=\"javascript:void(0);\" style=\"font-size:15px;\" class=\"icon\" (click)=\"myFunction()\">&#9776;</a>\r\n\t\t</div>\r\n\t\t\r\n\t\t\r\n\t</div>\r\n</div>\r\n<!-- Fin menu -->\r\n\r\n<div \r\n\tid=\"content\" \r\n>\r\n\r\n\t<div id=\"home\">\r\n\t\t<app-home></app-home>\r\n\t</div>\r\n\r\n\t<div id=\"presentation\">\r\n\t\t<app-presentation></app-presentation>\r\n\t</div>\r\n\t\r\n\t<div id=\"menu\">\r\n\t\t<div class=\"block-menu\">\r\n\t\t\t<div class=\"block-menu-container\">\r\n\t\t\t\t<div parallax class=\"parallax-entrees\" [config]=\"{axis: X, speed: -.0}\">\r\n\t\t\t\t\t<h4 class=\"font_4 titre_menu_carte\" style=\"font-size: 40px;\">\r\n\t\t\t\t\tC\tarte ardoise \"Mille Sabords\" de notre Chef Christophe Lefebvre et \tson équipe.\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<app-menu></app-menu>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"block-menu\">\r\n\t\t\t<div class=\"block-menu-container\">\r\n\t\t\t\t<div parallax class=\"parallax-plats\" [config]=\"{axis: X, speed: -.0}\">\r\n\t\t\t\t\t<h4 class=\"font_4 titre_menu_carte\">\r\n\t\t\t\t\t\tNos plats\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\t\t\r\n\t\t\t\t<app-plat></app-plat>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"block-menu\">\r\n\t\t\t<div class=\"block-menu-container\">\r\n\t\t\t\t<div parallax class=\"parallax-pizza\" [config]=\"{axis: X, speed: -.0}\">\r\n\t\t\t\t\t<h4 class=\"font_4 titre_menu_carte\">\r\n\t\t\t\t\t\tLes Pizzas de Niccolo\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\t\r\n\t\t\t\t<app-pizza></app-pizza>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"block-menu\">\r\n\t\t\t<div class=\"block-menu-container\">\r\n\t\t\t\t<div parallax class=\"parallax-desserts\" [config]=\"{axis: X, speed: -.0}\">\r\n\t\t\t\t\t<h4 class=\"font_4 titre_menu_carte\">\r\n\t\t\t\t\t\tLes Desserts de Maria\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\t\r\n\t\t\t\t<app-dessert></app-dessert>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\r\n\t\t<!-- <div parallax class=\"parallax-boissons\" [config]=\"{axis: X, speed: -.0}\">\r\n\t\t\t<h4 class=\"font_4\">\r\n\t\t\t\tNos boissons\r\n\t\t\t</h4>\r\n\t\t</div>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"tabs\">\r\n\t\t\t\t<nav class=\"tabMenu\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 tabMenuList current\" (click)=\"openTab('des', $event)\">Nos Boissons</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 tabMenuList\" (click)=\"openTab('vin', $event)\">Nos Vins</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</nav>\r\n\t\t\t\t<div class=\"tab\" id=\"des\">\r\n\t\t\t\t\t<app-boisson></app-boisson>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"tab hide-content\" id=\"vin\">\r\n\t\t\t\t\t<app-vins2></app-vins2>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t -->\r\n\t\t<!-- <div parallax class=\"parallax-platdujour\" [config]=\"{axis: X, speed: -.0}\">\r\n\t\t\t<h4 class=\"font_4\">\r\n\t\t\t\tPlat du jour & Suggestion\r\n\t\t\t</h4>\r\n\t\t</div>\r\n\t\t<app-platdujour></app-platdujour> -->\r\n\r\n\t</div>\r\n\r\n\t<div \r\n\t\tparallax \r\n\t\tclass=\"parallax-presentation\" \r\n\t\t[config]=\"{axis: X, speed: -.05}\"\r\n\t>\r\n\t\t<h4 class=\"font_4 titre_menu_carte\">\r\n\t\t\tNos presentations\r\n\t\t</h4>\t\t\r\n\t</div>\r\n\t<div \r\n\t\tclass=\"container\" \r\n\t\tstyle=\"\r\n\t\t\tpadding-top: 40px; \r\n\t\t\tpadding-bottom: 20px; \r\n\t\t\t\"\r\n\t\t>\r\n\t\t<div>\r\n\t\t\t<h4 class=\"representation\">\r\n\t\t\t\t''Nous vous proposons d'animer vos <br>Anniversaires ,Brunch, Mariage, Baptême,<br>Soirées privées,Événements, Salon...''\r\n\t\t\t</h4>\r\n\t\t</div>\r\n\t</div>\t\r\n\r\n\t<div id=\"contact\">\r\n\t\t<app-contact></app-contact>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/onepage/onepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var OnepageComponent = /** @class */ (function () {
    function OnepageComponent(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
    }
    OnepageComponent.prototype.ngOnInit = function () { };
    OnepageComponent.prototype.goToHome = function () {
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollInstance */].simpleInstance(this.document, '#home');
        this.pageScrollService.start(pageScrollInstance);
    };
    ;
    OnepageComponent.prototype.goTo = function (destination) {
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollInstance */].simpleInstance(this.document, destination);
        this.pageScrollService.start(pageScrollInstance);
    };
    ;
    OnepageComponent.prototype.scrollSomewhereHorizontally = function () {
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollInstance */].newInstance({
            document: this.document,
            scrollTarget: '#targetToTheRight',
            verticalScrolling: false
        });
        this.pageScrollService.start(pageScrollInstance);
    };
    ;
    OnepageComponent.prototype.goToHeadingInContainer = function () {
        var pageScrollInstance = __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["b" /* PageScrollInstance */].newInstance({
            document: this.document,
            scrollTarget: '.headingClass',
            scrollingViews: [this.container.nativeElement]
        });
        this.pageScrollService.start(pageScrollInstance);
    };
    ;
    OnepageComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    };
    ;
    OnepageComponent.prototype.openTab = function (tabname, event) {
        var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs .tabMenu .tabMenuList'));
        tabs.forEach(function (value, index) {
            value.className = value.className.replace(" current", "");
            if (event.srcElement.innerHTML == value.innerHTML && value.className.indexOf('current') == -1) {
                value.className += " current";
            }
        });
        var i, arr;
        var classHide = "hide-content";
        var x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
            arr = x[i].className.split(" ");
            if (arr.indexOf(classHide) == -1) {
                x[i].className += " " + classHide;
            }
        }
        var currentTab = document.getElementById(tabname);
        var currentClass = currentTab.className.replace(" hide-content", "");
        currentTab.className = currentClass;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], OnepageComponent.prototype, "container", void 0);
    OnepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-onepage',
            template: __webpack_require__("../../../../../src/app/pages/onepage/onepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/onepage/onepage.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["c" /* PageScrollService */], Object])
    ], OnepageComponent);
    return OnepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/onepage/pizza_denicollo.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pizza_denicollo.d59f0b64275e6680ce49.jpg";

/***/ }),

/***/ "../../../../../src/app/pages/onepage/platdujour.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "platdujour.34415276def0736c325c.jpg";

/***/ }),

/***/ "../../../../../src/app/pages/onepage/presentation.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "presentation.e5d7564a5bdb2be654de.jpg";

/***/ }),

/***/ "../../../../../src/app/pages/pizza/pizza.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.5);\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n\r\n#text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    font-size: 20px;\r\n    color: white;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .aff_mobile {\r\n        border: 1px solid #a7ada7;\r\n        /*margin-right: 1px;*/\r\n        margin-bottom: 2px;        \r\n    }\r\n    .titre_menu_mobile {\r\n        padding: 0 !important;        \r\n    }\r\n    .titre_menu_mobile h2 {\r\n        font-size: 16px;   \r\n        padding: 2px 8px 2px 8px !important;\r\n        line-height: 20px !important;\r\n        background: #a9a7a794 !important;\r\n    }\r\n\r\n    .titre_menu_mobile p {\r\n        font-size: 14px;   \r\n        padding: 0px 8px 0px 8px !important;\r\n    }    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pizza/pizza.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top: 40px; padding-bottom: 20px;\">\r\n    <div id=\"overlay\" *ngIf=\"!pizzasCharger;\">\r\n        <div id=\"text\">Chargement des pizza en cours...</div>\r\n    </div> \r\n\r\n    <div class=\"row aff_mobile menu-details\" *ngFor=\"let i of pizzas\" style=\"margin-bottom: 20px;\" >\r\n        <div class=\"col-md-10 titre_menu_mobile\">\r\n            <div class=\"title d-flex\">\r\n                <h2>{{i.nom | uppercase}}</h2>\r\n                <h2 class=\"price-detail hidden-md-up\">{{i.pm}}</h2>\r\n            </div>\r\n            <p *ngIf=\"i.ingredient != '-'\" >{{i.ingredient}}</p>\r\n        </div>\r\n        <div class=\"col-md-2 hidden-md-down\" style=\"text-align: right;\">\r\n            {{i.pm}}\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/pizza/pizza.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PizzaComponent = /** @class */ (function () {
    function PizzaComponent(http) {
        this.http = http;
        this.pizzasCharger = false;
    }
    PizzaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_host__["a" /* urlApi */] + '/pizza';
        this.http.get(url)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.pizzas = data;
            _this.pizzasCharger = (data.length > 0) ? true : false;
        });
    };
    PizzaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pizza',
            template: __webpack_require__("../../../../../src/app/pages/pizza/pizza.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pizza/pizza.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PizzaComponent);
    return PizzaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/plat/plat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.5);\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n\r\n#text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    font-size: 20px;\r\n    color: white;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .aff_mobile {\r\n        border: 1px solid #a7ada7;\r\n        /*margin-right: 1px;*/\r\n        margin-bottom: 2px;        \r\n    }\r\n    .titre_menu_mobile {\r\n        padding: 0 !important;        \r\n    }\r\n    .titre_menu_mobile h2 {\r\n        font-size: 16px;   \r\n        padding: 2px 8px 2px 8px !important;\r\n        line-height: 20px !important;\r\n        background: #a9a7a794 !important;\r\n    }\r\n\r\n    .titre_menu_mobile p {\r\n        font-size: 14px;   \r\n        padding: 0px 8px 0px 8px !important;\r\n    }    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/plat/plat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top: 40px; padding-bottom: 20px;\">\r\n    <div id=\"overlay\" *ngIf=\"!platsCharger;\">\r\n        <div id=\"text\">Chargement des plats en cours...</div>\r\n    </div> \r\n\r\n    <div class=\"row aff_mobile menu-details\" *ngFor=\"let i of plats\" style=\"margin-bottom: 20px;\" >\r\n        <div class=\"col-md-10 titre_menu_mobile\">\r\n            <div class=\"title d-flex\">\r\n                <h2>{{i.nom | uppercase}}</h2>\r\n                <h2 class=\"price-detail hidden-md-up\">{{i.prix}}</h2>\r\n            </div>\r\n            <p *ngIf=\"i.ingredient != '-'\" >{{i.ingredient}}</p>\r\n        </div>\r\n        <div class=\"col-md-2 hidden-md-down\" style=\"text-align: right;\">\r\n            {{i.prix}}\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/plat/plat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlatComponent = /** @class */ (function () {
    function PlatComponent(http) {
        this.http = http;
        this.platsCharger = false;
    }
    PlatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_host__["a" /* urlApi */] + '/plat';
        this.http.get(url)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.plats = data;
            _this.platsCharger = (data.length > 0) ? true : false;
        });
    };
    PlatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plat',
            template: __webpack_require__("../../../../../src/app/pages/plat/plat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/plat/plat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PlatComponent);
    return PlatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/platdujour/platdujour.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/platdujour/platdujour.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding-top: 40px; padding-bottom: 20px;\">\r\n  <div id=\"overlay\" *ngIf=\"loading;\">\r\n    <div id=\"text\">Chargement des plat du jour en cours...</div>\r\n  </div>\r\n\r\n  <div class=\"row aff_mobile\" *ngFor=\"let i of products\" style=\"margin-bottom: 20px;\">\r\n    <div class=\"col-md-2\">\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <h2>{{i.nom | uppercase}}</h2>\r\n      <p>{{i.ingredient}}</p>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      {{i.prix}}\r\n    </div>\r\n\r\n    <div class=\"col-md-2\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/platdujour/platdujour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatdujourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlatdujourComponent = /** @class */ (function () {
    function PlatdujourComponent(http) {
        this.http = http;
        this.loading = true;
    }
    PlatdujourComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_host__["a" /* urlApi */] + '/platdujour').subscribe(function (response) {
            _this.products = (response.json().length) ? response.json() : [];
            _this.loading = false;
        });
    };
    PlatdujourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-platdujour',
            template: __webpack_require__("../../../../../src/app/pages/platdujour/platdujour.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/platdujour/platdujour.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PlatdujourComponent);
    return PlatdujourComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/presentation/fonts-googleapis-component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* cyrillic */\r\n@font-face {\r\n  font-family: 'Amatic SC';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZyzwprpvBS1izr_vOEDuSfQZQ.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* hebrew */\r\n@font-face {\r\n  font-family: 'Amatic SC';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZyzwprpvBS1izr_vOECOSfQZQ.woff2) format('woff2');\r\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Amatic SC';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZyzwprpvBS1izr_vOEBeSfQZQ.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Amatic SC';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Amatic SC Regular'), local('AmaticSC-Regular'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZyzwprpvBS1izr_vOEBOSfQZQ.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Amatic SC';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Amatic SC Regular'), local('AmaticSC-Regular ?     ?                     ?            ?    ??            @?     @      @?            nicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Amatic SC';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Amatic SC Bold'), local('AmaticSC-Bold'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKerUC7WQ.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* hebrew */\r\n@font-face {\r\n  font-family: 'Amatic SC';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Amatic SC Bold'), local('AmaticSC-Bold'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKfLUC7WQ.woff2) format('woff2');\r\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Amatic SC';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Amatic SC Bold'), local('AmaticSC-Bold'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKcbUC7WQ.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Amatic SC';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Amatic SC Bold'), local('AmaticSC-Bold'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKcLUC7WQ.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Amatic SC';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Amatic SC Bold'), local('AmaticSC-Bold'), url(https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKfrUC.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Anton';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Anton Regular'), local('Anton-Regular'), url(https://fonts.gstatic.com/s/anton/v9/1Ptgg87LROyAm3K8-C8QSw.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Anton';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Anton Regular'), local('Anton-Regular'), url(https://fonts.gstatic.com/s/anton/v9/1Ptgg87LROyAm3K9-C8QSw.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Anton';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Anton Regular'), local('Anton-Regular'), url(https://fonts.gstatic.com/s/anton/v9/1Ptgg87LROyAm3Kz-C8.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Barlow';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Barlow Italic'), local('Barlow-Italic'), url(https://fonts.gstatic.com/s/barlow/v1/7cHrv4kjgoGqM7E_Cfs1wH8RnA.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Barlow';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Barlow Italic'), local('Barlow-Italic'), url(https://fonts.gstatic.com/s/barlow/v1/7cHrv4kjgoGqM7E_Cfs7wH8.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Barlow';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Barlow Bold Italic'), local('Barlow-BoldItalic'), url(https://fonts.gstatic.com/s/barlow/v1/7cHsv4kjgoGqM7E_CfOA5WogvTobdw.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Barlow';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Barlow Bold Italic'), local('Barlow-BoldItalic'), url(https://fonts.gstatic.com/s/barlow/v1/7cHsv4kjgoGqM7E_CfOA5WouvTo.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Barlow';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Barlow Regular'), local('Barlow-Regular'), url(https://fonts.gstatic.com/s/barlow/v1/7cHpv4kjgoGqM7E_Ass52Hs.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Barlow';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Barlow Regular'), local('Barlow-Regular'), url(https://fonts.gstatic.com/s/barlow/v1/7cHpv4kjgoGqM7E_DMs5.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Barlow';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Barlow Bold'), local('Barlow-Bold'), url(https://fonts.gstatic.com/s/barlow/v1/7cHqv4kjgoGqM7E3t-4s6VospT4.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Barlow';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Barlow Bold'), local('Barlow-Bold'), url(https://fonts.gstatic.com/s/barlow/v1/7cHqv4kjgoGqM7E3t-4s51os.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Basic';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Basic Regular'), local('Basic-Regular'), url(https://fonts.gstatic.com/s/basic/v7/xfu_0WLxV2_XKTN-6FHlyQ.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Basic';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Basic Regular'), local('Basic-Regular'), url(https://fonts.gstatic.com/s/basic/v7/xfu_0WLxV2_XKTNw6FE.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Caudex Italic'), local('Caudex-Italic'), url(https://fonts.gstatic.com/s/caudex/v7/esDS311QOP6BJUr4yMKPtbo-Ew.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Caudex Italic'), local('Caudex-Italic'), url(https://fonts.gstatic.com/s/caudex/v7/esDS311QOP6BJUr4yMKAtbo-Ew.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Caudex Italic'), local('Caudex-Italic'), url(https://fonts.gstatic.com/s/caudex/v7/esDS311QOP6BJUr4yMKNtbo-Ew.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Caudex Italic'), local('Caudex-Italic'), url(https://fonts.gstatic.com/s/caudex/v7/esDS311QOP6BJUr4yMKDtbo.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Caudex Bold Italic'), local('Caudex-BoldItalic'), url(https://fonts.gstatic.com/s/caudex/v7/esDV311QOP6BJUr4yMo4kK8NMpWeGQ.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Caudex Bold Italic'), local('Caudex-BoldItalic'), url(https://fonts.gstatic.com/s/caudex/v7/esDV311QOP6BJUr4yMo4kK8CMpWeGQ.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Caudex Bold Italic'), local('Caudex-BoldItalic'), url(https://fonts.gstatic.com/s/caudex/v7/esDV311QOP6BJUr4yMo4kK8PMpWeGQ.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Caudex Bold Italic'), local('Caudex-BoldItalic'), url(https://fonts.gstatic.com/s/caudex/v7/esDV311QOP6BJUr4yMo4kK8BMpU.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Caudex'), url(https://fonts.gstatic.com/s/caudex/v7/esDQ311QOP6BJUr4wfKBrb4.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Caudex'), url(https://fonts.gstatic.com/s/caudex/v7/esDQ311QOP6BJUr4zvKBrb4.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Caudex'), url(https://fonts.gstatic.com/s/caudex/v7/esDQ311QOP6BJUr4w_KBrb4.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Caudex'), url(https://fonts.gstatic.com/s/caudex/v7/esDQ311QOP6BJUr4zfKB.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Caudex Bold'), local('Caudex-Bold'), url(https://fonts.gstatic.com/s/caudex/v7/esDT311QOP6BJUrwdteUnp8DKpE.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Caudex Bold'), local('Caudex-Bold'), url(https://fonts.gstatic.com/s/caudex/v7/esDT311QOP6BJUrwdteUkZ8DKpE.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Caudex Bold'), local('Caudex-Bold'), url(https://fonts.gstatic.com/s/caudex/v7/esDT311QOP6BJUrwdteUnJ8DKpE.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Caudex';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Caudex Bold'), local('Caudex-Bold'), url(https://fonts.gstatic.com/s/caudex/v7/esDT311QOP6BJUrwdteUkp8D.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Chelsea Market';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Chelsea Market'), local('ChelseaMarket-Regular'), url(https://fonts.gstatic.com/s/chelseamarket/v5/BCawqZsHqfr89WNP_IApC8tzKChsJg8eKg.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Chelsea Market';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Chelsea Market'), local('ChelseaMarket-Regular'), url(https://fonts.gstatic.com/s/chelseamarket/v5/BCawqZsHqfr89WNP_IApC8tzKChiJg8.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Cinzel';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Cinzel Regular'), local('Cinzel-Regular'), url(https://fonts.gstatic.com/s/cinzel/v7/8vIJ7ww63mVu7gt7-GT7LEc.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Cinzel';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Cinzel Regular'), local('Cinzel-Regular'), url(https://fonts.gstatic.com/s/cinzel/v7/8vIJ7ww63mVu7gt79mT7.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Cinzel';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Cinzel Bold'), local('Cinzel-Bold'), url(https://fonts.gstatic.com/s/cinzel/v7/8vIK7ww63mVu7gtzTUHuHWZaC_w.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Cinzel';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Cinzel Bold'), local('Cinzel-Bold'), url(https://fonts.gstatic.com/s/cinzel/v7/8vIK7ww63mVu7gtzTUHuE2Za.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Cookie';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Cookie-Regular'), url(https://fonts.gstatic.com/s/cookie/v8/syky-y18lb0tSbf9kgqS.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Corben';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Corben Regular'), local('Corben-Regular'), url(https://fonts.gstatic.com/s/corben/v11/LYjDdGzzklQtCMpNqQNFlVs.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  ?     ?                     ?            ?    ??            @?     @      @?            ), local('Corben-Regular'), url(https://fonts.gstatic.com/s/corben/v11/LYjDdGzzklQtCMpNpwNF.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Corben';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Corben'), url(https://fonts.gstatic.com/s/corben/v11/LYjAdGzzklQtCMpFHCZQpHoqbN4.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Corben';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Corben'), url(https://fonts.gstatic.com/s/corben/v11/LYjAdGzzklQtCMpFHCZQqnoq.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Cormorant Garamond Italic'), local('CormorantGaramond-Italic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtFmSq17w.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Cormorant Garamond Italic'), local('CormorantGaramond-Italic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtMmSq17w.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Cormorant Garamond Italic'), local('CormorantGaramond-Italic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtHmSq17w.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Cormorant Garamond Italic'), local('CormorantGaramond-Italic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtGmSq17w.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Cormorant Garamond Italic'), local('CormorantGaramond-Italic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtImSo.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Cormorant Garamond Bold Italic'), local('CormorantGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPzvD-HzhO7_w.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Cormorant Garamond Bold Italic'), local('CormorantGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPzvD-OzhO7_w.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Cormorant Garamond Bold Italic'), local('CormorantGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPzvD-FzhO7_w.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Cormorant Garamond Bold Italic'), local('CormorantGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPzvD-EzhO7_w.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Cormorant Garamond Bold Italic'), local('CormorantGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPzvD-KzhM.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Cormorant Garamond Regular'), local('CormorantGaramond-Regular'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpHtKgS4.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Cormorant Garamond Regular'), local('CormorantGaramond-Regular'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYrXtKgS4.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Cormorant Garamond Regular'), local('CormorantGaramond-Regular'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYpntKgS4.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Cormorant Garamond Regular'), local('CormorantGaramond-Regular'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYp3tKgS4.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Cormorant Garamond Regular'), local('CormorantGaramond-Regular'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Cormorant Garamond Bold'), local('CormorantGaramond-Bold'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fsw-I1hc.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Cormorant Garamond Bold'), local('CormorantGaramond-Bold'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fug-I1hc.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Cormorant Garamond Bold'), local('CormorantGaramond-Bold'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fsQ-I1hc.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Cormorant Garamond Bold'), local('CormorantGaramond-Bold'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fsA-I1hc.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Cormorant Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Cormorant Garamond Bold'), local('CormorantGaramond-Bold'), url(https://fonts.gstatic.com/s/cormorantgaramond/v5/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fvg-I.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Damion';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Damion'), url(https://fonts.gstatic.com/s/damion/v7/hv-XlzJ3KEUe_YZkamw2.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Dancing Script';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Dancing Script Regular'), local('DancingScript-Regular'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLviuEViw.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Dancing Script';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Dancing Script Regular'), local('DancingScript-Regular'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLuiuEViw.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Dancing Script';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Dancing Script Regular'), local('DancingScript-Regular'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLgiuE.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Dancing Script';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Dancing Script Bold'), local('DancingScript-Bold'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QlqiMurg.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Dancing Script';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Dancing Script Bold'), local('DancingScript-Bold'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QkqiMurg.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Dancing Script';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Dancing Script Bold'), local('DancingScript-Bold'), url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QqqiM.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDY1ZzPJ.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweD81ZzPJ.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDc1ZzPJ.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDg1ZzPJ.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDQ1ZzPJ.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDU1ZzPJ.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Italic'), local('EBGaramond-Italic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGWmQSNjdsmc35JDF1K5GRweDs1Zw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgHoqFC_.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgjoqFC_.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold Italic'),  ?     ?                     ?            ?    ??            @?     @      @?            AQcgDoqFC_.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcg_oqFC_.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgPoqFC_.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgLoqFC_.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold Italic'), local('EBGaramond-BoldItalic'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGLmQSNjdsmc35JDF1K5GRwcIAQcgzoqA.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR4SDktYw.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GRxSDktYw.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR5SDktYw.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR2SDktYw.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR6SDktYw.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR7SDktYw.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('EB Garamond Regular'), local('EBGaramond-Regular'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGUmQSNjdsmc35JDF1K5GR1SDk.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwfQg7wrA.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwWQg7wrA.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSweQg7wrA.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwRQg7wrA.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwdQg7wrA.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwcQg7wrA.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'EB Garamond';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('EB Garamond Bold'), local('EBGaramond-Bold'), url(https://fonts.gstatic.com/s/ebgaramond/v9/SlGJmQSNjdsmc35JDF1K5GzObSwSQg4.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Enriqueta';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Enriqueta-Regular'), url(https://fonts.gstatic.com/s/enriqueta/v6/goksH6L7AUFrRvV44HVjQkqioP0.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Enriqueta';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Enriqueta-Regular'), url(https://fonts.gstatic.com/s/enriqueta/v6/goksH6L7AUFrRvV44HVjTEqi.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Enriqueta';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Enriqueta-Bold'), url(https://fonts.gstatic.com/s/enriqueta/v6/gokpH6L7AUFrRvV44HVr92-3kdxFm6Q.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Enriqueta';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Enriqueta-Bold'), url(https://fonts.gstatic.com/s/enriqueta/v6/gokpH6L7AUFrRvV44HVr92-3n9xF.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Forum';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Forum'), url(https://fonts.gstatic.com/s/forum/v8/6aey4Ky-Vb8Ew8IcOpIq3g.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Forum';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Forum'), url(https://fonts.gstatic.com/s/forum/v8/6aey4Ky-Vb8Ew8IVOpIq3g.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Forum';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Forum'), url(https://fonts.gstatic.com/s/forum/v8/6aey4Ky-Vb8Ew8IfOpIq3g.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Forum';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Forum'), url(https://fonts.gstatic.com/s/forum/v8/6aey4Ky-Vb8Ew8IROpI.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Fredericka the Great';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Fredericka the Great'), local('FrederickatheGreat'), url(https://fonts.gstatic.com/s/frederickathegreat/v6/9Bt33CxNwt7aOctW2xjbCstzwVKsIBVV--Sjxbc.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Jockey One';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Jockey One'), local('JockeyOne-Regular'), url(https://fonts.gstatic.com/s/jockeyone/v7/HTxpL2g2KjCFj4x8WI6AnI_xHLOk.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Jockey One';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Jockey One'), local('JockeyOne-Regular'), url(https://fonts.gstatic.com/s/jockeyone/v7/HTxpL2g2KjCFj4x8WI6AnIHxHA.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Josefin Slab';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Josefin Slab Italic'), local('JosefinSlab-Italic'), url(https://fonts.gstatic.com/s/josefinslab/v8/lW-nwjwOK3Ps5GSJlNNkMalnrz6tDs8.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Josefin Slab';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Josefin Slab Bold Italic'), local('JosefinSlab-BoldItalic'), url(https://fonts.gstatic.com/s/josefinslab/v8/lW-kwjwOK3Ps5GSJlNNkMalnrzYWK9rnHg4.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Josefin Slab';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Josefin Slab Regular'), local('JosefinSlab-Regular'), url(https://fonts.gstatic.com/s/josefinslab/v8/lW-5wjwOK3Ps5GSJlNNkMalnqg6v.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Josefin Slab';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Josefin Slab Bold'), local('JosefinSlab-Bold'), url(https://fonts.gstatic.com/s/josefinslab/v8/lW-mwjwOK3Ps5GSJlNNkMalvESu6Kerl.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXclJURRD.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXcBJURRD.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXchJURRD.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXcdJURRD.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXctJURRD.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXcpJURRD.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Jura Regular'), local('Jura-Regular'), url(https://fonts.gstatic.com/s/jura/v9/z7NbdRfiaC4VXcRJUQ.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRCZi0aTV.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRC9i0aTV.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Jura Bold'), local('Jura-Bold'), ur ?     ?                     ?            ?    ??            @?     @      @?            e: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRChi0aTV.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRCRi0aTV.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRCVi0aTV.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Jura';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Jura Bold'), local('Jura-Bold'), url(https://fonts.gstatic.com/s/jura/v9/z7NUdRfiaC4VVX9sRCti0Q.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Kelly Slab';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Kelly Slab'), local('KellySlab-Regular'), url(https://fonts.gstatic.com/s/kellyslab/v7/-W_7XJX0Rz3cxUnJC5t6fkALfq0k.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Kelly Slab';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Kelly Slab'), local('KellySlab-Regular'), url(https://fonts.gstatic.com/s/kellyslab/v7/-W_7XJX0Rz3cxUnJC5t6fkoLfq0k.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Kelly Slab';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Kelly Slab'), local('KellySlab-Regular'), url(https://fonts.gstatic.com/s/kellyslab/v7/-W_7XJX0Rz3cxUnJC5t6fkQLfg.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/S6u8w4BMUTPHjxsAUi-qJCY.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/S6u8w4BMUTPHjxsAXC-q.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/S6u_w4BMUTPHjxsI5wq_FQft1dw.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/S6u_w4BMUTPHjxsI5wq_Gwft.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwaPGR_p.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Lato';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Libre Baskerville';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Libre Baskerville Italic'), local('LibreBaskerville-Italic'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWx8QDP2V.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Libre Baskerville';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Libre Baskerville Italic'), local('LibreBaskerville-Italic'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWxEQDA.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Libre Baskerville';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Libre Baskerville'), local('LibreBaskerville-Regular'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNXaxMICA.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Libre Baskerville';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Libre Baskerville'), local('LibreBaskerville-Regular'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Libre Baskerville';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Libre Baskerville Bold'), local('LibreBaskerville-Bold'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY5KcCsww.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Libre Baskerville';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Libre Baskerville Bold'), local('LibreBaskerville-Bold'), url(https://fonts.gstatic.com/s/librebaskerville/v5/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY3KcA.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Lobster';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lobster Regular'), local('Lobster-Regular'), url(https://fonts.gstatic.com/s/lobster/v20/neILzCirqoswsqX9zo-mM5Ez.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Lobster';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lobster Regular'), local('Lobster-Regular'), url(https://fonts.gstatic.com/s/lobster/v20/neILzCirqoswsqX9zoamM5Ez.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Lobster';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lobster Regular'), local('Lobster-Regular'), url(https://fonts.gstatic.com/s/lobster/v20/neILzCirqoswsqX9zo2mM5Ez.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Lobster';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lobster Regular'), local('Lobster-Regular'), url(https://fonts.gstatic.com/s/lobster/v20/neILzCirqoswsqX9zoymM5Ez.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Lobster';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lobster Regular'), local('Lobster-Regular'), url(https://fonts.gstatic.com/s/lobster/v20/neILzCirqoswsqX9zoKmMw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Marck Script';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Marck Script'), local('MarckScript-Regular'), url(https://fonts.gstatic.com/s/marckscript/v8/nwpTtK2oNgBA3Or78gapdwuyzCg_WMM.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Marck Script';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Marck Script'), local('MarckScript-Regular'), url(https://fonts.gstatic.com/s/marckscript/v8/nwpTtK2oNgBA3Or78gapdwuyxig_WMM.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Marck Script';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Marck Script'), local('MarckScript-Regular'), url(https://fonts.gstatic.com/s/marckscript/v8/nwpTtK2oNgBA3Or78gapdwuyyCg_.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Monoton';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Monoton'), local('Monoton-Regular'), url(https://fonts.gstatic.com/s/monoton/v7/5h1aiZUrOngCibe4TkHLQg.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Mr De Haviland';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Mr De Haviland Regular'), local('MrDeHaviland-Regular'), url(https://fonts.gstatic.com/s/mrdehaviland/v6/OpNVnooIhJj96FdB73296ksbOg3L60PlNQ.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Mr De Haviland';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Mr De Haviland Regular'), local('MrDeHaviland-Regular'), url(https://fonts.gstatic.com/s/mrdehaviland/v6/OpNVnooIhJj96FdB73296ksbOg3F60M.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Niconne';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Niconne'), local('Niconne-Regular'), url(https://fonts.gstatic.com/s/niconne/v7/w8gaH2QvRug1_rTfnQKn2W4O.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Niconne';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Niconne'), local('Niconne-Regular'), url(https://fonts.gstatic.com/s/niconne/v7/w8gaH2QvRug1_rTfnQyn2Q.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Noticia Text Italic'), local('NoticiaText-Italic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJodNDF2Yv9qppOePKYRP12YwtVn07tpQ.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Noticia Text Italic'), local('NoticiaText-Italic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJodNDF2Yv9qppOePKYRP12YwtUn07tpQ.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Noticia Text Italic'), local('NoticiaText-Italic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJodNDF2Yv9qppOePKYRP12Ywtan04.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Noticia Text Bold Italic'), local('NoticiaText-BoldItalic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJrdNDF2Yv9qppOePKYRP12YwPhulvdhDXUeA.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Noticia Text Bold Italic'), local('NoticiaText-BoldItalic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJrdNDF2Yv9qppOePKYRP12YwPhulvchDXUeA.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Noticia Text Bold Italic'), local('NoticiaText-BoldItalic'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJrdNDF2Yv9qppOePKYRP12YwPhulvShDU.woff2) format('woff2');\r\n  unicode-range: U+00 ?     ?                     ?            ?    ??            @?     @      @?            U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Noticia Text'), local('NoticiaText-Regular'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJ2dNDF2Yv9qppOePKYRP12aTtYh0o.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Noticia Text'), local('NoticiaText-Regular'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJ2dNDF2Yv9qppOePKYRP12aDtYh0o.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Noticia Text'), local('NoticiaText-Regular'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJ2dNDF2Yv9qppOePKYRP12ZjtY.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Noticia Text Bold'), local('NoticiaText-Bold'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJpdNDF2Yv9qppOePKYRP1-3R5Nt2vQnDE.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Noticia Text Bold'), local('NoticiaText-Bold'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJpdNDF2Yv9qppOePKYRP1-3R5NtmvQnDE.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Noticia Text';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Noticia Text Bold'), local('NoticiaText-Bold'), url(https://fonts.gstatic.com/s/noticiatext/v7/VuJpdNDF2Yv9qppOePKYRP1-3R5NuGvQ.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDujMR6WR.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuHMR6WR.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDunMR6WR.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDubMR6WR.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDurMR6WR.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuvMR6WR.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMRw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDujMR6WR.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDuHMR6WR.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDunMR6WR.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDubMR6WR.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDurMR6WR.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDuvMR6WR.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Open Sans Condensed';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDuXMRw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Oswald Regular'), local('Oswald-Regular'), url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752HT8Ghe4.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Oswald Regular'), local('Oswald-Regular'), url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752Fj8Ghe4.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Oswald Regular'), local('Oswald-Regular'), url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752Fz8Ghe4.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Oswald Regular'), local('Oswald-Regular'), url(https://fonts.gstatic.com/s/oswald/v16/TK3iWkUHHAIjg752GT8G.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Oswald Bold'), local('Oswald-Bold'), url(https://fonts.gstatic.com/s/oswald/v16/TK3hWkUHHAIjg75-ohoTvs9CE5Q.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Oswald Bold'), local('Oswald-Bold'), url(https://fonts.gstatic.com/s/oswald/v16/TK3hWkUHHAIjg75-ohoTtc9CE5Q.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Oswald Bold'), local('Oswald-Bold'), url(https://fonts.gstatic.com/s/oswald/v16/TK3hWkUHHAIjg75-ohoTtM9CE5Q.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Oswald Bold'), local('Oswald-Bold'), url(https://fonts.gstatic.com/s/oswald/v16/TK3hWkUHHAIjg75-ohoTus9C.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Overlock';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Overlock Italic'), local('Overlock-Italic'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XTDmdMWRiN1_T9Z7Tc2OCsk4GC.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Overlock';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Overlock Italic'), local('Overlock-Italic'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XTDmdMWRiN1_T9Z7Tc2O6skw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Overlock';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Overlock Bold Italic'), local('Overlock-BoldItalic'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XQDmdMWRiN1_T9Z7Tc0FWJhrCj8RLT.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Overlock';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Overlock Bold Italic'), local('Overlock-BoldItalic'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XQDmdMWRiN1_T9Z7Tc0FWJhr6j8Q.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Overlock';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Overlock Regular'), local('Overlock-Regular'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XVDmdMWRiN1_T9Z7TX6Oy0lw.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Overlock';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Overlock Regular'), local('Overlock-Regular'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XVDmdMWRiN1_T9Z7TZ6Ow.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Overlock';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Overlock Bold'), local('Overlock-Bold'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XSDmdMWRiN1_T9Z7xizfmFtry79Q.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Overlock';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Overlock Bold'), local('Overlock-Bold'), url(https://fonts.gstatic.com/s/overlock/v7/Z9XSDmdMWRiN1_T9Z7xizfmLtrw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Patrick Hand';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Patrick Hand'), local('PatrickHand-Regular'), url(https://fonts.gstatic.com/s/patrickhand/v11/LDI1apSQOAYtSuYWp8ZhfYe8UcLLq7s.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Patrick Hand';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Patrick Hand'), local('PatrickHand-Regular'), url(https://fonts.gstatic.com/s/patrickhand/v11/LDI1apSQOAYtSuYWp8ZhfYe8UMLLq7s.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Patrick Hand';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Patrick Hand'), local('PatrickHand-Regular'), url(https://fonts.gstatic.com/s/patrickhand/v11/LDI1apSQOAYtSuYWp8ZhfYe8XsLL.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvtg2H68T.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\ ?     ?                     ?            ?    ??            @?     @      @?            ;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvtE2H68T.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvtY2H68T.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvto2H68T.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvts2H68T.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Play Regular'), local('Play-Regular'), url(https://fonts.gstatic.com/s/play/v9/6aez4K2oVqwIvtU2Hw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCp0y2knT.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCpQy2knT.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCpMy2knT.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCp8y2knT.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCp4y2knT.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Play';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Play Bold'), local('Play-Bold'), url(https://fonts.gstatic.com/s/play/v9/6ae84K2oVqwItm4TCpAy2g.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFkD-vYSZviVYUb_rj3ij__anPXDTnohkk72xU.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFkD-vYSZviVYUb_rj3ij__anPXDTnojUk72xU.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFkD-vYSZviVYUb_rj3ij__anPXDTnojEk72xU.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFkD-vYSZviVYUb_rj3ij__anPXDTnogkk7.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu4DRmBKY.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu6zRmBKY.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu6jRmBKY.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFnD-vYSZviVYUb_rj3ij__anPXDTngOWwu5DRm.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFiD-vYSZviVYUb_rj3ij__anPXDTjYgFE_.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgFE_.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgFE_.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWoe5ixi.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWEe5ixi.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWAe5ixi.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Playfair Display';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'), url(https://fonts.gstatic.com/s/playfairdisplay/v13/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lW4e5g.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* devanagari */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Poppins Italic'), local('Poppins-Italic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiGyp8kv8JHgFVrJJLucXtAKPY.woff2) format('woff2');\r\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Poppins Italic'), local('Poppins-Italic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiGyp8kv8JHgFVrJJLufntAKPY.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Poppins Italic'), local('Poppins-Italic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiGyp8kv8JHgFVrJJLucHtA.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* devanagari */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiDyp8kv8JHgFVrJJLmy15VFteOcEg.woff2) format('woff2');\r\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiDyp8kv8JHgFVrJJLmy15VGdeOcEg.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'), url(https://fonts.gstatic.com/s/poppins/v5/pxiDyp8kv8JHgFVrJJLmy15VF9eO.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* devanagari */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v5/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');\r\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v5/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Poppins Regular'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v5/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* devanagari */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z11lFc-K.woff2) format('woff2');\r\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Questrial';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Questrial'), local('Questrial-Regular'), url(https://fonts.gstatic.com/s/questrial/v7/QdVUSTchPBm7nuUeVf70viFl.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Raleway';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Raleway Italic'), local('Raleway-Italic'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptsg8zYS_SKggPNyCg4Q4FqPfE.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20C ?     ?                     ?            ?    ??            @?     @      @?            n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Raleway Italic'), local('Raleway-Italic'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptsg8zYS_SKggPNyCg4TYFq.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Raleway';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Raleway Bold Italic'), local('Raleway-BoldItalic'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptpg8zYS_SKggPNyCgw9qR_DNCb_Vo.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Raleway';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Raleway Bold Italic'), local('Raleway-BoldItalic'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptpg8zYS_SKggPNyCgw9qR_AtCb.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Raleway';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Raleway';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Raleway';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqhPAMif.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Raleway';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xFIzIFKw.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xMIzIFKw.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xEIzIFKw.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xLIzIFKw.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xHIzIFKw.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xGIzIFKw.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzI.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic3CsTKlA.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic-CsTKlA.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic2CsTKlA.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic5CsTKlA.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic1CsTKlA.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic0CsTKlA.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* devanagari */\r\n@font-face {\r\n  font-family: 'Rozha One';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Rozha One Regular'), local('RozhaOne-Regular'), url(https://fonts.gstatic.com/s/rozhaone/v4/AlZy_zVFtYP12Zncg2kRc335bB0.woff2) format('woff2');\r\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Rozha One';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Rozha One Regular'), local('RozhaOne-Regular'), url(https://fonts.gstatic.com/s/rozhaone/v4/AlZy_zVFtYP12Zncg2kRfH35bB0.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Rozha One';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Rozha One Regular'), local('RozhaOne-Regular'), url(https://fonts.gstatic.com/s/rozhaone/v4/AlZy_zVFtYP12Zncg2kRcn35.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Sacramento';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Sacramento'), local('Sacramento-Regular'), url(https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4CMf_exL.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Sacramento';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Sacramento'), local('Sacramento-Regular'), url(https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f_Q.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Sail';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Sail'), local('Sail-Regular'), url(https://fonts.gstatic.com/s/sail/v8/DPEjYwiBxwYJJB3JAQYA.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Sail';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Sail'), local('Sail-Regular'), url(https://fonts.gstatic.com/s/sail/v8/DPEjYwiBxwYJJBPJAQ.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Sarina';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Sarina'), local('Sarina-Regular'), url(https://fonts.gstatic.com/s/sarina/v6/-F6wfjF3ITQwasLRJ0rVniA.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Sarina';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Sarina'), local('Sarina-Regular'), url(https://fonts.gstatic.com/s/sarina/v6/-F6wfjF3ITQwasLRKUrV.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Signika';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Signika Regular'), local('Signika-Regular'), url(https://fonts.gstatic.com/s/signika/v8/vEFR2_JTCgwQ5ejvG18mBkho.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Signika';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Signika Regular'), local('Signika-Regular'), url(https://fonts.gstatic.com/s/signika/v8/vEFR2_JTCgwQ5ejvG1EmBg.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Signika';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Signika Bold'), local('Signika-Bold'), url(https://fonts.gstatic.com/s/signika/v8/vEFU2_JTCgwQ5ejvE-oDE3lJanAd.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Signika';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Signika Bold'), local('Signika-Bold'), url(https://fonts.gstatic.com/s/signika/v8/vEFU2_JTCgwQ5ejvE-oDE3dJag.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Spinnaker';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Spinnaker'), local('Spinnaker-Regular'), url(https://fonts.gstatic.com/s/spinnaker/v9/w8gYH2oyX-I0_rvR6HmX1XYKmOo.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Spinnaker';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Spinnaker'), local('Spinnaker-Regular'), url(https://fonts.gstatic.com/s/spinnaker/v9/w8gYH2oyX-I0_rvR6HmX23YK.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* hebrew */\r\n@font-face {\r\n  font-family: 'Suez One';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Suez One'), local('SuezOne-Regular'), url(https://fonts.gstatic.com/s/suezone/v2/taiJGmd_EZ6rqscQgOFMmouQ-A.woff2) format('woff2');\r\n  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Suez One';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Suez One'), local('SuezOne-Regular'), url(https://fonts.gstatic.com/s/suezone/v2/taiJGmd_EZ6rqscQgOFAmouQ-A.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Suez One';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Suez One'), local('SuezOne-Regular'), url(https://fonts.gstatic.com/s/suezone/v2/taiJGmd_EZ6rqscQgOFOmos.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Work Sans';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Work Sans'), local('WorkSans-Regular'), url(https://fonts.gstatic.com/s/worksans/v3/QGYsz_wNahGAdqQ43Rh_cqDpp_k.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Work Sans';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Work Sans'), local('WorkSans-Regular'), url(https://fonts.gstatic.com/s/worksans/v3/QGYsz_wNahGAdqQ43Rh_fKDp.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Work Sans';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Work Sans Bold'), local('WorkSans-Bold'), url(https://fonts.gstatic.com/s/worksans/v3/QGYpz_wNahGAdqQ43Rh3x4X8lthN2fk.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Work Sans';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Work Sans Bold'), local('WorkSans-Bold'), url(https://fonts.gstatic.com/s/worksans/v3/QGYpz_wNahGAdqQ43Rh3x4X8mNhN.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/presentation/presentation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font_4 {\r\n    font: normal normal normal 84px/1.4em 'playfair display',serif;\r\n    color: #2F2E2E;\r\n}\r\n\r\n.txtNew {\r\n    word-wrap: break-word;\r\n    text-align: start;\r\n    pointer-events: none;\r\n}\r\n\r\n.font_8 {\r\n    font: normal normal bold 23px/1.4em din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif;\r\n    font-style: normal;\r\n    -webkit-font-variant-ligatures: normal;\r\n            font-variant-ligatures: normal;\r\n    font-variant-caps: normal;\r\n    font-variant-numeric: normal;\r\n    font-variant-east-asian: normal;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-size: 23px;\r\n    line-height: 1.4em;\r\n    font-family: din-next-w01-light, din-next-w02-light, din-next-w10-light, sans-serif;\r\n    color: #2F2E2E;\r\n}\r\n\r\n.txtNew p {\r\n    margin: 0;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n\r\n@media screen and (max-width: 768px) and (min-width: 415px)\r\n{\r\n  #font-mobile {\r\n    font-size: 57px !important;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 414px)\r\n{\r\n  #font-mobile {\r\n    font-size: 47px !important;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/presentation/presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n            \r\n        </div>\r\n        <div class=\"col-md-8\">\r\n            <div \r\n                data-packed=\"true\" \r\n                class=\"txtNew\" \r\n                id=\"comp-ikmq713k\"\r\n                style=\"margin-bottom: 50px;\" \r\n            >\r\n                <h4  \r\n                    class=\"font_4\" \r\n                    style=\"line-height:1.05em; text-align:center; font-size: 78px !important; margin-top: 40px;\"\r\n                >\r\n                    <span id=\"font-mobile\" style=\"letter-spacing:-0.05em;\">\r\n                        Présentation \r\n                    </span>\r\n                </h4>\r\n            </div>\r\n            <div \r\n                data-packed=\"true\" \r\n                class=\"txtNew home-description\" \r\n                id=\"comp-ikmqg4b9\" \r\n            >\r\n                <p \r\n                    class=\"font_8\" \r\n                >\r\n                    Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas, quibus, si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum, ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris, dum exprimunt innumera simulacra, quae finxere fabulae theatrales.\r\n\r\n                </p>\r\n            </div>            \r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            \r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/presentation/presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PresentationComponent = /** @class */ (function () {
    function PresentationComponent(http) {
        this.http = http;
    }
    PresentationComponent.prototype.ngOnInit = function () {
    };
    PresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-presentation',
            template: __webpack_require__("../../../../../src/app/pages/presentation/presentation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/presentation/presentation.component.css"), __webpack_require__("../../../../../src/app/pages/presentation/fonts-googleapis-component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/vins2/vins2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0,0,0,0.5);\r\n    z-index: 2;\r\n    cursor: pointer;\r\n}\r\n\r\n#text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    font-size: 20px;\r\n    color: white;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    -ms-transform: translate(-50%,-50%);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .aff_mobile {\r\n        border: 1px solid #a7ada7;\r\n        /*margin-right: 1px;*/\r\n        margin-bottom: 2px;        \r\n    }  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/vins2/vins2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 40px; padding-bottom: 20px;\">\r\n  <div id=\"overlay\" *ngIf=\"loading;\">\r\n    <div id=\"text\">Chargement des boissons en cours...</div>\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"margin-bottom: 20px;\">\r\n    <div class=\"col-md-6\">\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <h2 id=\"hide-mobile\">33cl</h2>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <h2 id=\"hide-mobile\">50cl</h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row aff_mobile\" *ngFor=\"let i of products\" style=\"margin-bottom: 20px;\">\r\n    <div class=\"col-md-6\">\r\n      <h2>{{i.nom | uppercase}}</h2>\r\n    </div>\r\n    <div class=\"col-md-3\" id=\"list-prix\">\r\n      <p id=\"prix_pm\">{{i.pm}}</p>\r\n    </div>\r\n    <div class=\"col-md-3\" id=\"list-prix\">\r\n      <p id=\"prix_gm\">{{i.gm}}</p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/vins2/vins2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vins2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_host__ = __webpack_require__("../../../../../src/app/config/host.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Vins2Component = /** @class */ (function () {
    function Vins2Component(http) {
        this.http = http;
        this.loading = true;
    }
    Vins2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_host__["a" /* urlApi */] + '/vins').subscribe(function (response) {
            _this.products = (response.json().length) ? response.json() : [];
            _this.loading = false;
        });
    };
    Vins2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vins2',
            template: __webpack_require__("../../../../../src/app/pages/vins2/vins2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/vins2/vins2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], Vins2Component);
    return Vins2Component;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <div class=\"col-sm-8 col-sm-offset-2\">\r\n            <alert></alert>\r\n\r\n            <div class=\"col-md-6 col-md-offset-3\">\r\n                <h2>Register</h2>\r\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                        <label for=\"firstname\">First Name</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"model.firstname\" #firstname=\"ngModel\" required />\r\n                        <div *ngIf=\"f.submitted && !firstname.valid\" class=\"help-block\">First Name is required</div>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                        <label for=\"lastname\">Last Name</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"model.lastname\" #lastname=\"ngModel\" required />\r\n                        <div *ngIf=\"f.submitted && !lastname.valid\" class=\"help-block\">Last Name is required</div>\r\n                    </div>\r\n                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                        <label for=\"email\">Email</label>\r\n                        <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n                        <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n                    </div>\r\n                    <!-- <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                        <label for=\"username\">Username</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n                    </div> -->\r\n                    <!-- <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                    </div> -->\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"loading\" class=\"btn btn-primary disabled\">Register</button>\r\n                        <!-- <img *ngIf=\"loading\" src=\"assets/images/loading.gif\" -->\r\n                        />\r\n                        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_table_users_service__ = __webpack_require__("../../../../../src/app/_services/table/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router, usersService, alertService) {
        this.http = http;
        this.router = router;
        this.usersService = usersService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.usersService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // selector: 'app-register',
            moduleId: module.i.toString(),
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_table_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AlertService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map