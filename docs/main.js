(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _view_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/user-list/user-list.component */ "./src/app/view/user-list/user-list.component.ts");
/* harmony import */ var _menu_assureurs_assureurs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/assureurs/assureurs.component */ "./src/app/menu/assureurs/assureurs.component.ts");
/* harmony import */ var _menu_courtier_grossistes_courtier_grossistes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/courtier-grossistes/courtier-grossistes.component */ "./src/app/menu/courtier-grossistes/courtier-grossistes.component.ts");
/* harmony import */ var _menu_courtier_simples_courtier_simples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/courtier-simples/courtier-simples.component */ "./src/app/menu/courtier-simples/courtier-simples.component.ts");
/* harmony import */ var _menu_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/login/login.component */ "./src/app/menu/login/login.component.ts");
/* harmony import */ var _menu_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/blogs/blogs.component */ "./src/app/menu/blogs/blogs.component.ts");
/* harmony import */ var _menu_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/blog/blog.component */ "./src/app/menu/blog/blog.component.ts");
/* harmony import */ var _menu_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/contact/contact.component */ "./src/app/menu/contact/contact.component.ts");
/* harmony import */ var _menu_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/about/about.component */ "./src/app/menu/about/about.component.ts");
/* harmony import */ var _menu_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/home/home.component */ "./src/app/menu/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/services/services.component */ "./src/app/menu/services/services.component.ts");
/* harmony import */ var _menu_tpe_pme_tpe_pme_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/tpe-pme/tpe-pme.component */ "./src/app/menu/tpe-pme/tpe-pme.component.ts");
/* harmony import */ var _menu_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/register/register.component */ "./src/app/menu/register/register.component.ts");
/* harmony import */ var _view_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view/userdetail/userdetail.component */ "./src/app/view/userdetail/userdetail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: _menu_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], pathMatch: 'full' },
    { path: 'menu/services', component: _menu_services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"], pathMatch: 'full' },
    { path: 'menu/contact', component: _menu_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], pathMatch: 'full' },
    { path: 'menu/blog', component: _menu_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"], pathMatch: 'full' },
    { path: 'menu/blogs', component: _menu_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"], pathMatch: 'full' },
    { path: 'menu/login', component: _menu_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], pathMatch: 'full' },
    { path: 'menu/register', component: _menu_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], pathMatch: 'full' },
    { path: 'menu/courtier-simples', component: _menu_courtier_simples_courtier_simples_component__WEBPACK_IMPORTED_MODULE_3__["CourtierSimplesComponent"], pathMatch: 'full' },
    { path: 'menu/courtier-grossistes', component: _menu_courtier_grossistes_courtier_grossistes_component__WEBPACK_IMPORTED_MODULE_2__["CourtierGrossistesComponent"], pathMatch: 'full' },
    { path: 'menu/about', component: _menu_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], pathMatch: 'full' },
    { path: 'menu/tpe-pme', component: _menu_tpe_pme_tpe_pme_component__WEBPACK_IMPORTED_MODULE_13__["TpePmeComponent"], pathMatch: 'full' },
    { path: 'menu/assureurs', component: _menu_assureurs_assureurs_component__WEBPACK_IMPORTED_MODULE_1__["AssureursComponent"], pathMatch: 'full' },
    { path: 'view/userview', component: _view_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_15__["UserdetailComponent"], pathMatch: 'full' },
    { path: 'view/users', component: _view_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__["UserListComponent"], pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'corrected' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class='aquilamcontent'>\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Avenir Garanti';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _menu_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/services/services.component */ "./src/app/menu/services/services.component.ts");
/* harmony import */ var _menu_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/home/home.component */ "./src/app/menu/home/home.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _menu_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/about/about.component */ "./src/app/menu/about/about.component.ts");
/* harmony import */ var _menu_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/contact/contact.component */ "./src/app/menu/contact/contact.component.ts");
/* harmony import */ var _menu_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/blog/blog.component */ "./src/app/menu/blog/blog.component.ts");
/* harmony import */ var _menu_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu/blogs/blogs.component */ "./src/app/menu/blogs/blogs.component.ts");
/* harmony import */ var _menu_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/login/login.component */ "./src/app/menu/login/login.component.ts");
/* harmony import */ var _menu_courtier_simples_courtier_simples_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu/courtier-simples/courtier-simples.component */ "./src/app/menu/courtier-simples/courtier-simples.component.ts");
/* harmony import */ var _menu_courtier_grossistes_courtier_grossistes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menu/courtier-grossistes/courtier-grossistes.component */ "./src/app/menu/courtier-grossistes/courtier-grossistes.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _menu_tpe_pme_tpe_pme_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu/tpe-pme/tpe-pme.component */ "./src/app/menu/tpe-pme/tpe-pme.component.ts");
/* harmony import */ var _menu_assureurs_assureurs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./menu/assureurs/assureurs.component */ "./src/app/menu/assureurs/assureurs.component.ts");
/* harmony import */ var _menu_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./menu/register/register.component */ "./src/app/menu/register/register.component.ts");
/* harmony import */ var _view_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./view/userdetail/userdetail.component */ "./src/app/view/userdetail/userdetail.component.ts");
/* harmony import */ var _view_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view/user-list/user-list.component */ "./src/app/view/user-list/user-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _menu_services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
                _menu_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _menu_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _menu_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _menu_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"],
                _menu_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_13__["BlogsComponent"],
                _menu_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _menu_courtier_simples_courtier_simples_component__WEBPACK_IMPORTED_MODULE_15__["CourtierSimplesComponent"],
                _menu_courtier_grossistes_courtier_grossistes_component__WEBPACK_IMPORTED_MODULE_16__["CourtierGrossistesComponent"],
                _menu_tpe_pme_tpe_pme_component__WEBPACK_IMPORTED_MODULE_18__["TpePmeComponent"],
                _menu_assureurs_assureurs_component__WEBPACK_IMPORTED_MODULE_19__["AssureursComponent"],
                _menu_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _view_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_21__["UserdetailComponent"],
                _view_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_22__["UserListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu/about/about.component.css":
/*!************************************************!*\
  !*** ./src/app/menu/about/about.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/menu/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Page Content -->\n <div class=\"container\" style=\"margin-top: 2%\">\n\n  <!-- Page Heading/Breadcrumbs -->\n  <h1 class=\"mt-4 mb-3\">Qui sommes nous ?\n    <!-- <small>Subheading</small> -->\n  </h1>\n\n  <ol class=\"breadcrumb\">\n    <li class=\"breadcrumb-item\">\n      <a href=\"\">Accueil</a>\n    </li>\n    <li class=\"breadcrumb-item active\">Qui sommes nous ?</li>\n  </ol>\n\n  <!-- Intro Content -->\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <img class=\"img-fluid rounded mb-4\" src=\"http://placehold.it/750x450\" alt=\"\">\n    </div>\n    <div class=\"col-lg-6 bg-light\">\n      <h2> Avenir Garantie </h2>\n    \n      <p>« Avenir Garantie » est une marque de la société Aquilam expert de la caution.\n        Aquilam est une SAS créée en juillet 2017.\n        <p>\n        Aquilam a le statut de courtier en assurance spécialisé dans la caution et la garantie. \n        La société est inscrite à l’ORIAS sous le n° 17005403 en tant que qu’intermédiaire  en assurance.</p>\n      <p> Aquilam est dirigé par Armand Gaillabaud  son fondateur qui détient 70% du capital. \n        Après une formation supérieure en sciences économiques et sociales, Armand Gaillabaud a développé pendant 30 ans une forte expérience  dans  le crédit et la vente de services financiers auprès des TPE, PME et Grandes Entreprises  au sein de différentes banques et d’établissements financiers.\n       <p>Ces 12 dernières années Armand Gaillabaud s’est spécialisé dans la caution et la garantie, en tant que Chargé d’Affaires Grands Comptes chez l’un des leaders de la caution en France, Atradius et en tant que Responsable Développement en France pour un groupe américain, AmTrust présent en Europe. \n      </p> <p>Ces expériences réussies lui ont permis  d’approfondir ses connaissances du monde de l’entreprise.\n        Il a su démontrer sa capacité à mettre en œuvre l’ensemble de ses compétences techniques, financières et  commerciales auprès de différents interlocuteurs comme les Directeurs Financiers,  les Responsable Juridiques, les avocats, les Experts Comptables, les Fonds d’Investissements, les Courtiers  dans la rédaction de contrat cadre, la gestion, le financement du poste clients dans un souci d’atteindre, voire de dépasser, les objectifs contractuels.      \n       <p> C’est pourquoi, aujourd’hui, Armand Gaillabaud apporte son expertise dans la mise en place et la gestion de lignes de caution  plus particulièrement  dans le secteur de la construction et de la promotion immobilière.\n        </p>\n    </div>\n  </div>\n  <!-- /.row -->\n\n  <!-- Our Customers -->\n  <h2>Nos clients et partenaires</h2>\n  <div class=\"row\">\n    <div class=\"col-lg-2 col-sm-4 mb-4\">\n      <img class=\"img-fluid\" src=\"http://placehold.it/500x300\" alt=\"\">\n    </div>\n    <div class=\"col-lg-2 col-sm-4 mb-4\">\n      <img class=\"img-fluid\" src=\"http://placehold.it/500x300\" alt=\"\">\n    </div>\n    <div class=\"col-lg-2 col-sm-4 mb-4\">\n      <img class=\"img-fluid\" src=\"http://placehold.it/500x300\" alt=\"\">\n    </div>\n    <div class=\"col-lg-2 col-sm-4 mb-4\">\n      <img class=\"img-fluid\" src=\"http://placehold.it/500x300\" alt=\"\">\n    </div>\n    <div class=\"col-lg-2 col-sm-4 mb-4\">\n      <img class=\"img-fluid\" src=\"http://placehold.it/500x300\" alt=\"\">\n    </div>\n    <div class=\"col-lg-2 col-sm-4 mb-4\">\n      <img class=\"img-fluid\" src=\"http://placehold.it/500x300\" alt=\"\">\n    </div>\n  </div>\n  <!-- /.row -->\n\n</div>"

/***/ }),

/***/ "./src/app/menu/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/menu/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/menu/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/menu/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/menu/assureurs/assureurs.component.css":
/*!********************************************************!*\
  !*** ./src/app/menu/assureurs/assureurs.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvYXNzdXJldXJzL2Fzc3VyZXVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/assureurs/assureurs.component.html":
/*!*********************************************************!*\
  !*** ./src/app/menu/assureurs/assureurs.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  assureurs works!\n</p>\n"

/***/ }),

/***/ "./src/app/menu/assureurs/assureurs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/menu/assureurs/assureurs.component.ts ***!
  \*******************************************************/
/*! exports provided: AssureursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssureursComponent", function() { return AssureursComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssureursComponent = /** @class */ (function () {
    function AssureursComponent() {
    }
    AssureursComponent.prototype.ngOnInit = function () {
    };
    AssureursComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assureurs',
            template: __webpack_require__(/*! ./assureurs.component.html */ "./src/app/menu/assureurs/assureurs.component.html"),
            styles: [__webpack_require__(/*! ./assureurs.component.css */ "./src/app/menu/assureurs/assureurs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AssureursComponent);
    return AssureursComponent;
}());



/***/ }),

/***/ "./src/app/menu/blog/blog.component.css":
/*!**********************************************!*\
  !*** ./src/app/menu/blog/blog.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu/blog/blog.component.html":
/*!***********************************************!*\
  !*** ./src/app/menu/blog/blog.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Page Content -->\n <div class=\"container\">\n\n  \n    <h1 class=\"my-4\">Blog Page \n        <small>Mes blogs</small>\n      </h1>\n\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a href=\"\">Accueil</a>\n      </li>\n      <li class=\"breadcrumb-item active\">Blogs</li>\n      <li class=\"breadcrumb-item active\">Blog</li>\n    </ol>\n\n  <div class=\"row\">\n\n    <!-- Post Content Column -->\n    <div class=\"col-lg-8\">\n\n      <!-- Title -->\n      <h1 class=\"mt-4\">Post Title</h1>\n\n      <!-- Author -->\n      <p class=\"lead\">\n        by\n        <a href=\"#\">Start Bootstrap</a>\n      </p>\n\n      <hr>\n\n      <!-- Date/Time -->\n      <p>Posted on January 1, 2018 at 12:00 PM</p>\n      <a href=\"/menu/blogs\" class=\"btn btn-primary\">Retour &rarr;</a>\n      <hr>\n\n      <!-- Preview Image -->\n      <img class=\"img-fluid rounded\" src=\"http://placehold.it/900x300\" alt=\"\">\n\n      <hr>\n\n      <!-- Post Content -->\n      <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>\n\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>\n\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>\n\n      <blockquote class=\"blockquote\">\n        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n        <footer class=\"blockquote-footer\">Someone famous in\n          <cite title=\"Source Title\">Source Title</cite>\n        </footer>\n      </blockquote>\n\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>\n\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>\n\n      <hr>\n\n      <!-- Comments Form -->\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Leave a Comment:</h5>\n        <div class=\"card-body\">\n          \n              <form class=\"navbar-form-custom\" >\n            <div class=\"form-group\">\n              <textarea class=\"form-control\" rows=\"3\"></textarea>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          </form>\n        </div>\n      </div>\n\n      <!-- Single Comment -->\n      <div class=\"media mb-4\">\n        <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/50x50\" alt=\"\">\n        <div class=\"media-body\">\n          <h5 class=\"mt-0\">Commenter Name</h5>\n          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n        </div>\n      </div>\n\n      <!-- Comment with nested comments -->\n      <div class=\"media mb-4\">\n        <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/50x50\" alt=\"\">\n        <div class=\"media-body\">\n          <h5 class=\"mt-0\">Commenter Name</h5>\n          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n\n          <div class=\"media mt-4\">\n            <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/50x50\" alt=\"\">\n            <div class=\"media-body\">\n              <h5 class=\"mt-0\">Commenter Name</h5>\n              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n            </div>\n          </div>\n\n          <div class=\"media mt-4\">\n            <img class=\"d-flex mr-3 rounded-circle\" src=\"http://placehold.it/50x50\" alt=\"\">\n            <div class=\"media-body\">\n              <h5 class=\"mt-0\">Commenter Name</h5>\n              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Sidebar Widgets Column -->\n    <div class=\"col-md-4\">\n\n      <!-- Search Widget -->\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Search</h5>\n        <div class=\"card-body\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n            <span class=\"input-group-btn\">\n              <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <!-- Categories Widget -->\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Categories</h5>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <ul class=\"list-unstyled mb-0\">\n                <li>\n                  <a href=\"#\">Web Design</a>\n                </li>\n                <li>\n                  <a href=\"#\">HTML</a>\n                </li>\n                <li>\n                  <a href=\"#\">Freebies</a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-lg-6\">\n              <ul class=\"list-unstyled mb-0\">\n                <li>\n                  <a href=\"#\">JavaScript</a>\n                </li>\n                <li>\n                  <a href=\"#\">CSS</a>\n                </li>\n                <li>\n                  <a href=\"#\">Tutorials</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Side Widget -->\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Side Widget</h5>\n        <div class=\"card-body\">\n          You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n  <!-- /.row -->\n\n</div>\n<!-- /.container -->"

/***/ }),

/***/ "./src/app/menu/blog/blog.component.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/blog/blog.component.ts ***!
  \*********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/menu/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/menu/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/menu/blogs/blogs.component.css":
/*!************************************************!*\
  !*** ./src/app/menu/blogs/blogs.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/blogs/blogs.component.html":
/*!*************************************************!*\
  !*** ./src/app/menu/blogs/blogs.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n<div class=\"container\" style=\"margin-top: 1%\">\n\n    <div class=\"row\">\n\n      <!-- Blog Entries Column -->\n      <div class=\"col-md-8\">\n\n        <h1 class=\"my-4\">Blog Page \n          <small>Mes blogs</small>\n        </h1>\n  \n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"\">Accueil</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Blogs</li>\n      </ol>\n\n        <!-- Blog Post -->\n        <div class=\"card mb-4\">\n          <img class=\"card-img-top\" src=\"http://placehold.it/750x300\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title\">Titre du Post</h2>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>\n            <a href=\"/menu/blog\" class=\"btn btn-primary\">En savoir plus &rarr;</a>\n          </div>\n          <div class=\"card-footer text-muted\">\n            Publié le 1er Janvier, , 2018 par\n            <a href=\"#\">Armand Gaillaibaud</a>\n          </div>\n        </div>\n\n        <!-- Blog Post -->\n        <div class=\"card mb-4\">\n          <img class=\"card-img-top\" src=\"http://placehold.it/750x300\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title\">Titre du Post</h2>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>\n            <a href=\"/menu/blog\" class=\"btn btn-primary\">En savoir plus &rarr;</a>\n          </div>\n          <div class=\"card-footer text-muted\">\n            Publié le 1er Janvier, , 2018 par\n            <a href=\"#\">Armand Gaillaibaud</a>\n          </div>\n        </div>\n\n        <!-- Blog Post -->\n        <div class=\"card mb-4\">\n          <img class=\"card-img-top\" src=\"http://placehold.it/750x300\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title\">Titre du Post</h2>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>\n            <a href=\"/menu/blog\" class=\"btn btn-primary\">En savoir plus &rarr;</a>\n          </div>\n          <div class=\"card-footer text-muted\">\n            Publié le 1er Janvier, , 2018 par\n            <a href=\"#\">Armand Gaillaibaud</a>\n          </div>\n        </div>\n\n        <!-- Pagination -->\n        <ul class=\"pagination justify-content-center mb-4\">\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\">&larr; Older</a>\n          </li>\n          <li class=\"page-item disabled\">\n            <a class=\"page-link\" href=\"#\">Newer &rarr;</a>\n          </li>\n        </ul>\n\n      </div>\n\n      <!-- Sidebar Widgets Column -->\n      <div class=\"col-md-4\">\n\n        <!-- Search Widget -->\n        <div class=\"card my-4\">\n          <h5 class=\"card-header\">Recherche</h5>\n          <div class=\"card-body\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"rechercher ...\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n              </span>\n            </div>\n          </div>\n        </div>\n\n        <!-- Categories Widget -->\n        <div class=\"card my-4\">\n          <h5 class=\"card-header\">Categories</h5>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <ul class=\"list-unstyled mb-0\">\n                  <li>\n                    <a href=\"#\">Cauions de marchés </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">BTP</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Courtiers</a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-lg-6\">\n                <ul class=\"list-unstyled mb-0\">\n                  <li>\n                    <a href=\"#\">Assureurs</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Partenaires</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">News!</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Side Widget -->\n        <div class=\"card my-4\">\n          <h5 class=\"card-header\"> Important ! </h5>\n          <div class=\"card-body\">\n            L’actualité du marché de la construction dans le domaine de la caution est complexe d’où l’intérêt de trouver le meilleur expert pour pérenniser le portefeuille.\n            \n            <b><p>\tAccédez aux meilleures offres en caution, avec un code unique et  sans minimum de production et sur une gamme complète de produits (cf liste des types de cautions),</p>\n            <p>\tOptimisez le temps passé sur vos recherches de solutions</p>\n            <p>\tDéléguez la gestion de vos cautions  </p>\n          </b>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- /.row -->\n\n  </div>\n  <!-- /.container -->"

/***/ }),

/***/ "./src/app/menu/blogs/blogs.component.ts":
/*!***********************************************!*\
  !*** ./src/app/menu/blogs/blogs.component.ts ***!
  \***********************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogsComponent = /** @class */ (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    BlogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.component.html */ "./src/app/menu/blogs/blogs.component.html"),
            styles: [__webpack_require__(/*! ./blogs.component.css */ "./src/app/menu/blogs/blogs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogsComponent);
    return BlogsComponent;
}());



/***/ }),

/***/ "./src/app/menu/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/menu/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* body {\r\n    overflow-x: hidden;\r\n  } */\r\n  \r\n  #wrapper {\r\n    padding-left: 0;\r\n    transition: all 0.5s ease;\r\n  }\r\n  \r\n  #wrapper.toggled {\r\n    padding-left: 250px;\r\n  }\r\n  \r\n  #sidebar-wrapper {\r\n    z-index: 1000;\r\n    position: fixed;\r\n    left: 250px;\r\n    width: 0;\r\n    height: 100%;\r\n    margin-left: -250px;\r\n    overflow-y: auto;\r\n    background: #000;\r\n    transition: all 0.5s ease;\r\n  }\r\n  \r\n  #wrapper.toggled #sidebar-wrapper {\r\n    width: 250px;\r\n  }\r\n  \r\n  #page-content-wrapper {\r\n    width: 100%;\r\n    position: absolute;\r\n    padding: 15px;\r\n  }\r\n  \r\n  #wrapper.toggled #page-content-wrapper {\r\n    position: absolute;\r\n    margin-right: -250px;\r\n  }\r\n  \r\n  /* Sidebar Styles */\r\n  \r\n  .sidebar-nav {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 250px;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .sidebar-nav li {\r\n    text-indent: 20px;\r\n    line-height: 40px;\r\n  }\r\n  \r\n  .sidebar-nav li a {\r\n    display: block;\r\n    text-decoration: none;\r\n    color: #999999;\r\n  }\r\n  \r\n  .sidebar-nav li a:hover {\r\n    text-decoration: none;\r\n    color: #fff;\r\n    background: rgba(255, 255, 255, 0.2);\r\n  }\r\n  \r\n  .sidebar-nav li a:active, .sidebar-nav li a:focus {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .sidebar-nav>.sidebar-brand {\r\n    height: 65px;\r\n    font-size: 18px;\r\n    line-height: 60px;\r\n  }\r\n  \r\n  .sidebar-nav>.sidebar-brand a {\r\n    color: #999999;\r\n  }\r\n  \r\n  .sidebar-nav>.sidebar-brand a:hover {\r\n    color: #fff;\r\n    background: none;\r\n  }\r\n  \r\n  @media(min-width:768px) {\r\n    #wrapper {\r\n      padding-left: 0;\r\n    }\r\n    #wrapper.toggled {\r\n      padding-left: 250px;\r\n    }\r\n    #sidebar-wrapper {\r\n      width: 0;\r\n    }\r\n    #wrapper.toggled #sidebar-wrapper {\r\n      width: 250px;\r\n    }\r\n    #page-content-wrapper {\r\n      padding: 20px;\r\n      position: relative;\r\n    }\r\n    #wrapper.toggled #page-content-wrapper {\r\n      position: relative;\r\n      margin-right: 0;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O01BRU07O0VBRUo7SUFDRSxnQkFBZ0I7SUFJaEIsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0Usb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztJQUNULGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUlqQiwwQkFBMEI7R0FDM0I7O0VBRUQ7SUFDRSxhQUFhO0dBQ2Q7O0VBRUQ7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7R0FDZjs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixxQkFBcUI7R0FDdEI7O0VBR0Qsb0JBQW9COztFQUVwQjtJQUNFLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0dBQ2xCOztFQUVEO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtHQUNuQjs7RUFFRDtJQUNFLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZUFBZTtHQUNoQjs7RUFFRDtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oscUNBQXFDO0dBQ3RDOztFQUVEO0lBQ0Usc0JBQXNCO0dBQ3ZCOztFQUVEO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7R0FDbkI7O0VBRUQ7SUFDRSxlQUFlO0dBQ2hCOztFQUVEO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFO01BQ0UsZ0JBQWdCO0tBQ2pCO0lBQ0Q7TUFDRSxvQkFBb0I7S0FDckI7SUFDRDtNQUNFLFNBQVM7S0FDVjtJQUNEO01BQ0UsYUFBYTtLQUNkO0lBQ0Q7TUFDRSxjQUFjO01BQ2QsbUJBQW1CO0tBQ3BCO0lBQ0Q7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO0tBQ2pCO0dBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZW51L2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIGJvZHkge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH0gKi9cclxuICBcclxuICAjd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgI3dyYXBwZXIudG9nZ2xlZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAyNTBweDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogLTI1MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKiBTaWRlYmFyIFN0eWxlcyAqL1xyXG4gIFxyXG4gIC5zaWRlYmFyLW5hdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItbmF2IGxpIHtcclxuICAgIHRleHQtaW5kZW50OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLW5hdiBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1uYXYgbGkgYTphY3RpdmUsIC5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItbmF2Pi5zaWRlYmFyLWJyYW5kIHtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1uYXY+LnNpZGViYXItYnJhbmQgYSB7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItbmF2Pi5zaWRlYmFyLWJyYW5kIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAjd3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgICN3cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG4gICAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgI3dyYXBwZXIudG9nZ2xlZCAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/menu/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/menu/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Page Content -->\n\n  <div class=\"container\" style=\"margin-top: 2%\">\n\n    <!-- Page Heading/Breadcrumbs -->\n    <h1 class=\"mt-4 mb-3\">Contact\n      <!-- <small>Subheading</small> -->\n    </h1>\n\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a href=\"\">Accueil</a>\n      </li>\n      <li class=\"breadcrumb-item active\">Contact</li>\n    </ol>\n\n    <!-- Content Row -->\n    <div class=\"container\">\n    <div class=\"row\">\n      <!-- Map Column -->\n      <div class=\"col-lg-8 mb-4\">\n        <!-- Embedded Google Map -->\n        <iframe width=\"100%\" height=\"400px\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" \n         src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.7048650993356!2d2.1336975156732154!3d48.82569237928438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67d03e8871623%3A0x77136697a4df795d!2s1+Square+de+Tocqueville%2C+78150+Le+Chesnay!5e0!3m2!1sfr!2sfr!4v1542926757527\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n      </div>\n      <!-- Contact Details Column -->\n      <div class=\"col-lg-4 bg-light mb-4\"> \n        <h3>Informations de contact </h3>\n        <p>\n          1 sq de tocqueville\n          <br>78150 le chesnay\n\n          France\n          <br>\n        </p>\n        <p>\n          <abbr title=\"Téléphone\">P</abbr>: (+33) 0666666666\n        </p>\n        <p>\n          <abbr title=\"Email\">E</abbr>:\n          <a href=\"mailto:name@example.com\">name@example.com\n          </a>\n        </p>\n        <p>\n          <abbr title=\"Heures\">H</abbr>: Lundi - Vendredi: 9:00  to 17:00 \n        </p>\n      </div>\n    </div>\n    <!-- /.row -->\n  </div>\n    <!-- Contact Form -->\n    <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->\n    <div class=\"row\">\n      <div class=\"col-lg-8 mb-4\">\n        <h3>Nous envoyer un message</h3>\n        <form name=\"sentMessage\" id=\"contactForm\" novalidate >\n          <div class=\"control-group form-group\">\n            <div class=\"controls\">\n              <label>Nom complèt :</label>\n              <input type=\"text\" class=\"form-control\" id=\"name\" required data-validation-required-message=\"Please enter your name.\">\n              <p class=\"help-block\"></p>\n            </div>\n          </div>\n          <div class=\"control-group form-group\">\n            <div class=\"controls\">\n              <label>Numéro de téléphone:</label>\n              <input type=\"tel\" class=\"form-control\" id=\"phone\" required data-validation-required-message=\"Please enter your phone number.\">\n            </div>\n          </div>\n          <div class=\"control-group form-group\">\n            <div class=\"controls\">\n              <label>Adresse Email:</label>\n              <input type=\"email\" class=\"form-control\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\">\n            </div>\n          </div>\n          <div class=\"control-group form-group\">\n            <div class=\"controls\">\n              <label>Message:</label>\n              <textarea rows=\"10\" cols=\"100\" class=\"form-control\" id=\"message\" required data-validation-required-message=\"Please enter your message\" maxlength=\"999\" style=\"resize:none\"></textarea>\n            </div>\n          </div>\n          <div id=\"success\"></div>\n          <!-- For success/fail messages -->\n          <button type=\"submit\" class=\"btn btn-primary\" id=\"sendMessageButton\">Envoyer </button>\n        </form>\n      </div>\n\n    </div>\n    <!-- /.row -->\n  </div>\n"

/***/ }),

/***/ "./src/app/menu/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/menu/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/menu/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/menu/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/menu/courtier-grossistes/courtier-grossistes.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/menu/courtier-grossistes/courtier-grossistes.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvY291cnRpZXItZ3Jvc3Npc3Rlcy9jb3VydGllci1ncm9zc2lzdGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu/courtier-grossistes/courtier-grossistes.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/menu/courtier-grossistes/courtier-grossistes.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 2%\">\n    <!-- Page Heading/Breadcrumbs -->\n    <h1 class=\"mt-4 mb-3\">Professionnels de l'assurance\n       <!-- <small>Subheading</small> -->\n     </h1>\n   \n     <ol class=\"breadcrumb\">\n       <li class=\"breadcrumb-item\">\n         <a href=\"\">Accueil</a>\n       </li>\n       <li class=\"breadcrumb-item active\">Professionnels de l'assurance</li>\n     </ol>\n   \n     <div class=\"row\">\n \n         <div class=\"col-lg-7\">\n             <div class=\"breadcrumb\">\n                 <h2> Portrait du courtier grossiste</h2>\n                  <p>Un business model aux atouts considérables </p>\n               <p>Méconnue du grand public (April, Add  Value,…), cette profession conçoit des produits d’assurance ou de caution, les placent chez un porteur de risque, les commercialisent  via un réseau d’intermédiaire qu’elle se charge d’animer et gère les contrats souscrits.</p>\n             <u><p style=\"font-style: italic\">Des atouts pour séduire les assureurs….  </p></u> \n             <p>Les courtiers grossistes permettent aux assureurs d’être présents sur les marchés de niche (Agence de voyage, Interim, GFA, ICPE, CMI).  </p>\n             <p>Le courtier de proximité reconnaît la difficulté que représente la sélection des meilleurs partenaires assureurs en caution et éprouvent le besoin d’optimiser son temps dans cette recherche pour respecter les impératifs de réactivité et de et de rentabilité.</p>\n            <p>L’actualité du marché de la construction dans le domaine de la caution est complexe d’où l’intérêt de trouver le meilleur expert pour pérenniser le portefeuille.</p> \n            <ul>\n              <li>\tAccédez aux meilleures offres en caution, avec un code unique et  sans minimum de production et sur une gamme complète de produits (cf liste des types de cautions),</li>\n              <li>\tOptimisez le temps passé sur vos recherches de solutions</li>\n              <li>\tDéléguez la gestion de vos cautions  </li>\n            </ul>\n            <p>En s’appuyant sur leur réseau de courtiers de proximité, les grossistes sont en mesure d’apporter le volume d’affaires nécessaire pour garantir l’équilibre technique du portefeuille de contrats qu’ils conçoivent.</p>\n            <p>Les produits en caution sont une véritable complémentarité et de diversification de leurs portefeuilles.</p>\n            <p>Les produits en caution permettent aux courtiers de proximité d’étendre leurs offres et de répondre à toutes les attentes de leurs clients.</p>\n            <p> Contrairement au secteur de l’assurance, le courtier grossiste n’a pas la délégation des contrats et des contentieux et des appels en paiement qui restent à la charge des de l’assureur.\n              </p> <u><p style=\"font-style: italic\">… et les courtiers conseils de proximité  </p></u> \n\n              <p>Le courtage de proximité ne voit pas négativement la croissance des courtiers grossistes, surtout en matière de caution, ou le courtier de proximité ne dispose peu ou pas de compétences.  </p>\n              <p>Les courtiers de proximité ne proposent pas d’offres en caution, sauf éventuellement en caution légales et réglementées.</p>\n<p>De plus, le courtier de proximité n’a pas accès direct aux assureurs garants spécialisés dans le domaine de la caution.</p>\n<p>Le courtier grossiste en caution permet aux courtiers d’étendre son offre. </p>\n            <p>L’outil informatique est incontournable dans ce modèle. Il est au cœur de la stratégie de développement des grossistes pour fournir des outils à leurs courtiers partenaires. </p>\n <p>L’extranet à disposition des courtiers leur permet de piloter le portefeuille client (prospection et production), d’éditer des documents (fiche d’étude).</p>\n <p>L’extranet doit permettre au courtier de proximité d’avoir une visibilité sur son assuré en matière de facturation et d’encours ou d’engagements).</p>\n    <p>Les marges du courtage s’érodent dans un contexte de concurrence.</p> \n<p>Le développement au produit de la caution devrait permettre une optimisation du portefeuille.</p>\n<p>Le rôle du courtier grossiste est d’accompagner (conseils technique, juridique) le courtier de proximité.</p>\n<p>Le succès des courtiers grossistes tient à un positionnement qui répond à la fois aux besoins des assureurs et du courtage de proximité. Le courtier grossiste permet aux courtiers d’accéder aux meilleurs assureurs IARD des entreprises.</p>\n<p>L’une des clés  de la réussite et d’obtenir les codes courtage et d’avoirs accès aux produits des meilleurs assureurs du marché.</p>\n<p>Concernant les agents généraux, ils s’appuient pour compléter les solutions de leurs compagnies  sur les risques entreprises et accéder aux meilleures offres.    </p>\n<p>Quels atouts ont les courtiers grossistes pour fidéliser les Cies d’assurance mais aussi leurs apporteurs d’affaires privilégiés, les courtiers de proximité ou spécialisé ?</p>\n<p>Les courtiers grossistes sont un complément aux courtiers de proximités.</p>\n<p>Proximité, réactivité, technicité, sont les préceptes que développent les courtiers grossistes pour fidéliser leurs apporteurs.</p>\n<p>Bien qu’elle souhaite le développer ou n’y ai pas encore tenté de le faire, la question se pose pour les courtiers grossistes de faire évoluer son modèle économique en élargissant son offre et tendre vers une solution globale en intégrant le produit  caution.</p>\n</div>\n<div class=\"breadcrumb\">\n    <h2> Le périmètre d’intervention</h2>\n    <ul>\n      <h3>Les garanties légales et réglementées</h3>\t\n      <ul>\n        <li>-\tGFA (Garantie Financière d’achèvement)</li>\n        <li>-\tCMI (Constructeur de Maisons Individuelles)</li>\n        <li>-\tTravail Temporaire </li>\n        <li>-\tPortage Salariale</li>\n        <li>-\tAgence de Voyage</li>\n        <li>-\tICPE (Garanties Environnementales)</li>\n        <li>-\tLoi Hoguet (Administrateur de Biens)</li>\n        <li>-\tAccises (vins et spiritueux)</li>\n        <li>-\tCautions douanes</li>\n          <li>-\tGaranties financières pour intermédiaires en assurance</li>\n      </ul>\n    </ul>\n</div>       \n         </div>\n         <div class=\"col-lg-5\">\n             <img class=\"img-fluid rounded mb-4\" src=\"http://placehold.it/750x450\" alt=\"\">\n           </div>\n       </div>\n \n \n \n </div>"

/***/ }),

/***/ "./src/app/menu/courtier-grossistes/courtier-grossistes.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/menu/courtier-grossistes/courtier-grossistes.component.ts ***!
  \***************************************************************************/
/*! exports provided: CourtierGrossistesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourtierGrossistesComponent", function() { return CourtierGrossistesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourtierGrossistesComponent = /** @class */ (function () {
    function CourtierGrossistesComponent() {
    }
    CourtierGrossistesComponent.prototype.ngOnInit = function () {
    };
    CourtierGrossistesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courtier-grossistes',
            template: __webpack_require__(/*! ./courtier-grossistes.component.html */ "./src/app/menu/courtier-grossistes/courtier-grossistes.component.html"),
            styles: [__webpack_require__(/*! ./courtier-grossistes.component.css */ "./src/app/menu/courtier-grossistes/courtier-grossistes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourtierGrossistesComponent);
    return CourtierGrossistesComponent;
}());



/***/ }),

/***/ "./src/app/menu/courtier-simples/courtier-simples.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/menu/courtier-simples/courtier-simples.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvY291cnRpZXItc2ltcGxlcy9jb3VydGllci1zaW1wbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu/courtier-simples/courtier-simples.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/menu/courtier-simples/courtier-simples.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 2%\">\n    <!-- Page Heading/Breadcrumbs -->\n    <h1 class=\"mt-4 mb-3\">TPE - PME\n       <!-- <small>Subheading</small> -->\n     </h1>\n   \n     <ol class=\"breadcrumb\">\n       <li class=\"breadcrumb-item\">\n         <a href=\"\">Accueil</a>\n       </li>\n       <li class=\"breadcrumb-item active\">Courtiers grossistes</li>\n     </ol>\n   \n     <div class=\"row\">\n \n         <div class=\"col-lg-8\">\n             <div class=\"breadcrumb\">\n                 <h2> Portrait du courtier grossiste</h2>\n                  <p>Un business model aux atouts considérables </p>\n               <p>Méconnue du grand public (April, Add  Value,…), cette profession conçoit des produits d’assurance ou de caution, les placent chez un porteur de risque, les commercialisent  via un réseau d’intermédiaire qu’elle se charge d’animer et gère les contrats souscrits.</p>\n             <u><p style=\"font-style: italic\">Des atouts pour séduire les assureurs….  </p></u> \n             <p>Les courtiers grossistes permettent aux assureurs d’être présents sur les marchés de niche (Agence de voyage, Interim, GFA, ICPE, CMI).  </p>\n             <p>Le courtier de proximité reconnaît la difficulté que représente la sélection des meilleurs partenaires assureurs en caution et éprouvent le besoin d’optimiser son temps dans cette recherche pour respecter les impératifs de réactivité et de et de rentabilité.</p>\n            <p>L’actualité du marché de la construction dans le domaine de la caution est complexe d’où l’intérêt de trouver le meilleur expert pour pérenniser le portefeuille.</p> \n            <ul>\n              <li>\tAccédez aux meilleures offres en caution, avec un code unique et  sans minimum de production et sur une gamme complète de produits (cf liste des types de cautions),</li>\n              <li>\tOptimisez le temps passé sur vos recherches de solutions</li>\n              <li>\tDéléguez la gestion de vos cautions  </li>\n            </ul>\n            <p>En s’appuyant sur leur réseau de courtiers de proximité, les grossistes sont en mesure d’apporter le volume d’affaires nécessaire pour garantir l’équilibre technique du portefeuille de contrats qu’ils conçoivent.</p>\n            <p>Les produits en caution sont une véritable complémentarité et de diversification de leurs portefeuilles.</p>\n            <p>Les produits en caution permettent aux courtiers de proximité d’étendre leurs offres et de répondre à toutes les attentes de leurs clients.</p>\n            <p> Contrairement au secteur de l’assurance, le courtier grossiste n’a pas la délégation des contrats et des contentieux et des appels en paiement qui restent à la charge des de l’assureur.\n              </p> <u><p style=\"font-style: italic\">… et les courtiers conseils de proximité  </p></u> \n\n              <p>Le courtage de proximité ne voit pas négativement la croissance des courtiers grossistes, surtout en matière de caution, ou le courtier de proximité ne dispose peu ou pas de compétences.  </p>\n              <p>Les courtiers de proximité ne proposent pas d’offres en caution, sauf éventuellement en caution légales et réglementées.</p>\n<p>De plus, le courtier de proximité n’a pas accès direct aux assureurs garants spécialisés dans le domaine de la caution.</p>\n<p>Le courtier grossiste en caution permet aux courtiers d’étendre son offre. </p>\n            <p>L’outil informatique est incontournable dans ce modèle. Il est au cœur de la stratégie de développement des grossistes pour fournir des outils à leurs courtiers partenaires. </p>\n <p>L’extranet à disposition des courtiers leur permet de piloter le portefeuille client (prospection et production), d’éditer des documents (fiche d’étude).</p>\n <p>L’extranet doit permettre au courtier de proximité d’avoir une visibilité sur son assuré en matière de facturation et d’encours ou d’engagements).</p>\n    <p>Les marges du courtage s’érodent dans un contexte de concurrence.</p> \n<p>Le développement au produit de la caution devrait permettre une optimisation du portefeuille.</p>\n<p>Le rôle du courtier grossiste est d’accompagner (conseils technique, juridique) le courtier de proximité.</p>\n<p>Le succès des courtiers grossistes tient à un positionnement qui répond à la fois aux besoins des assureurs et du courtage de proximité. Le courtier grossiste permet aux courtiers d’accéder aux meilleurs assureurs IARD des entreprises.</p>\n<p>L’une des clés  de la réussite et d’obtenir les codes courtage et d’avoirs accès aux produits des meilleurs assureurs du marché.</p>\n<p>Concernant les agents généraux, ils s’appuient pour compléter les solutions de leurs compagnies  sur les risques entreprises et accéder aux meilleures offres.    </p>\n<p>Quels atouts ont les courtiers grossistes pour fidéliser les Cies d’assurance mais aussi leurs apporteurs d’affaires privilégiés, les courtiers de proximité ou spécialisé ?</p>\n<p>Les courtiers grossistes sont un complément aux courtiers de proximités.</p>\n<p>Proximité, réactivité, technicité, sont les préceptes que développent les courtiers grossistes pour fidéliser leurs apporteurs.</p>\n<p>Bien qu’elle souhaite le développer ou n’y ai pas encore tenté de le faire, la question se pose pour les courtiers grossistes de faire évoluer son modèle économique en élargissant son offre et tendre vers une solution globale en intégrant le produit  caution.</p>\n</div>\n<div class=\"breadcrumb\">\n    <h2> Le périmètre d’intervention</h2>\n    <ul>\n      <h3>Les garanties légales et réglementées</h3>\t\n      <ul>\n        <li>-\tGFA (Garantie Financière d’achèvement)</li>\n        <li>-\tCMI (Constructeur de Maisons Individuelles)</li>\n        <li>-\tTravail Temporaire </li>\n        <li>-\tPortage Salariale</li>\n        <li>-\tAgence de Voyage</li>\n        <li>-\tICPE (Garanties Environnementales)</li>\n        <li>-\tLoi Hoguet (Administrateur de Biens)</li>\n        <li>-\tAccises (vins et spiritueux)</li>\n        <li>-\tCautions douanes</li>\n          <li>-\tGaranties financières pour intermédiaires en assurance</li>\n      </ul>\n    </ul>\n</div>       \n         </div>\n         <div class=\"col-lg-4\">\n             <img class=\"img-fluid rounded mb-4\" src=\"http://placehold.it/750x450\" alt=\"\">\n           </div>\n       </div>\n \n \n \n </div>"

/***/ }),

/***/ "./src/app/menu/courtier-simples/courtier-simples.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/menu/courtier-simples/courtier-simples.component.ts ***!
  \*********************************************************************/
/*! exports provided: CourtierSimplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourtierSimplesComponent", function() { return CourtierSimplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourtierSimplesComponent = /** @class */ (function () {
    function CourtierSimplesComponent() {
    }
    CourtierSimplesComponent.prototype.ngOnInit = function () {
    };
    CourtierSimplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courtier-simples',
            template: __webpack_require__(/*! ./courtier-simples.component.html */ "./src/app/menu/courtier-simples/courtier-simples.component.html"),
            styles: [__webpack_require__(/*! ./courtier-simples.component.css */ "./src/app/menu/courtier-simples/courtier-simples.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourtierSimplesComponent);
    return CourtierSimplesComponent;
}());



/***/ }),

/***/ "./src/app/menu/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/menu/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/menu/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- Page Content -->\n    <div class=\"container\">\n\n      <h1 class=\"my-4\">Bienvenu sur Cent pour cent Garanti</h1>\n\n      <!-- Marketing Icons Section -->\n      <div class=\"row\">\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card h-100\">\n            <h4 class=\"card-header\">Vous etes une entreprise ?</h4>\n            <div class=\"card-body\">\n              <p class=\"card-text\">Aquilam vous accompagne et vous conseille tout au long de la vie de la caution.</p>\n              <p class=\"card-text\">\n                La caution est un enjeu majeur pour l’entreprise car si elle ne peut pas la fournir, son activité sera entravée.\n                L’entreprise est donc confrontée à une problématique qui est de maîtriser les coûts financiers liés à l'émission des cautions et au respect des dispositions contractuelles ou legales\n                </p>\n\n            <ul>\n              <li>Négocier et metre en place vos lignes de caution</li>\n              <li>\tGérer l’encours des cautions  </li>\n            </ul>\n           <b> <p class=\"card-text\">Aquilam s'interesse à la vie de la caution , de sa création à sa mainlevée.</p></b>\n            </div>\n            <div class=\"card-footer\">\n              <a routerLink=\"menu/tpe-pme\"  routerLinkActive=\"router-active\" class=\"btn btn-primary\">Allons plus loin ...</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <div class=\"card h-100\">\n            <h4 class=\"card-header\">Vous êtes un proféssionnel de l'assurance ?</h4>\n            <div class=\"card-body\">\n              <p>Aquilam vous permet d’être présents sur les marchés de la caution.</p>\n              <p class=\"card-text\">Le professionnel de l'assurance connaît la difficulté que représente la sélection des meilleurs partenaires assureurs en caution et éprouvent le besoin d’optimiser son temps dans cette recherche pour respecter les impératifs de réactivité et de rentabilité.</p>\n              <p> Le marché de la caution légale réglementée est complexe car il est lié à l'obligation d'obtenir soit : </p>\n                <ul>\n                <li> une garantie légale pour excercer une activité  (Agence de voyage, Interim, GFA, ICPE, CMI) </li>\n                  <li> une garantie liée aux obligations contractuelles .</li>\n               \n                </ul>\n                 <b> <p>Aquilam vous propose un partenariat solide</p></b>\n            </div>\n            <div class=\"card-footer\">\n              <a routerLink=\"menu/courtier-grossistes\"  routerLinkActive=\"router-active\" class=\"btn btn-primary\">Allons plus loin ...</a>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"col-lg-4 mb-4\">\n          <div class=\"card h-100\">\n            <h4 class=\"card-header\">Vous êtes Assureurs ?</h4>\n            <div class=\"card-body\">\n              <p class=\"card-text\">Assureurs de construction ou assureurs garants , Acquilam vous propose un partenariat gagnant gagant....</p>\n            </div>\n            <div class=\"card-footer\">\n              <a href=\"#\" class=\"btn btn-primary\">En savoir plus</a>\n            </div>\n          </div>\n        </div> -->\n      </div>\n      <!-- /.row -->\n\n      <div class=\"container\">\n      <!-- Features Section -->\n      <div class=\"row bg-white\">\n        <div class=\"col-lg-6 mb-4\">\n          <h2>Les valeurs d'Aquilam</h2>\n          <p>Les principaux objectifs d'Aquilam sont :</p>\n          <ul>\n            <li>\n              <strong>Bootstrap v4</strong>\n            </li>\n            <li>jQuery</li>\n            <li>Font Awesome</li>\n            <li>Working contact form with validation</li>\n            <li>Unstyled page elements for easy customization</li>\n          </ul>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>\n        </div>\n        <div class=\"col-lg-6 mb-4\">\n          <img class=\"img-fluid rounded\" src=\"http://placehold.it/700x450\" alt=\"\">\n        </div>\n      </div>\n      <!-- /.row -->\n\n      <hr>\n\n      <!-- Call to Action Section -->\n      <div class=\"row mb-4 bg-white\">\n        <div class=\"col-md-8\">\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>\n        </div>\n        <div class=\"col-md-4\">\n          <a class=\"btn btn-lg btn-secondary btn-block\" href=\"#\">Call to Action</a>\n        </div>\n      </div>\n    </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/menu/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/menu/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/menu/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/menu/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Edit in JSFiddle\r\nResult\r\nHTML\r\nCSS\r\nJavaScript\r\nResources\r\n:root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: .75rem;\r\n}\r\n\r\nbody {\r\n  background: #9CECFB;\r\n  /* fallback for old browsers */\r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.card-signin {\r\n  border: 0;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n.btn-google {\r\n  color: white;\r\n  background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook {\r\n  color: white;\r\n  background-color: #3b5998;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFFL0IsZ0NBQWdDO0VBQ2hDLGlFQUFpRTtFQUNqRSxzRUFBc0U7Q0FDdkU7O0FBRUQ7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLCtDQUErQztDQUNoRDs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEOztFQUVFLHVEQUF1RDtDQUN4RDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0NBQ2pDOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQU1EO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsNkVBQTZFO0VBQzdFLGlEQUFpRDtDQUNsRDs7QUFFRDtFQUNFLDhDQUE4QztFQUM5QyxpREFBaUQ7RUFDakQsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiRWRpdCBpbiBKU0ZpZGRsZVxyXG5SZXN1bHRcclxuSFRNTFxyXG5DU1NcclxuSmF2YVNjcmlwdFxyXG5SZXNvdXJjZXNcclxuOnJvb3Qge1xyXG4gIC0taW5wdXQtcGFkZGluZy14OiAxLjVyZW07XHJcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogIzlDRUNGQjtcclxuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDUyRDQsICM2NUM3RjcsICM5Q0VDRkIpO1xyXG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA1MkQ0LCAjNjVDN0Y3LCAjOUNFQ0ZCKTtcclxuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmJ0biB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XHJcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XHJcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNTtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/menu/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n          <div class=\"card card-signin my-5\">\n            <div class=\"card-body\">\n              <b> <h5 class=\"card-title text-center\">Se connecter</h5></b>\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                      <label for=\"username\">Email</label>\n                      <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                      <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"password\">Mot de passe</label>\n                      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <button  [disabled]=\"loading\"  class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Se connecter</button>\n                      <!-- <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" /> -->\n                      <a class=\"btn btn-lg btn-google btn-block text-uppercase\" routerLink=\"/menu/register\" >\n                        Créer un compte\n                      </a>\n                  </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </body>"

/***/ }),

/***/ "./src/app/menu/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/menu/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            if (data) {
                console.log('data found: ' + data);
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                console.log('ERROR');
                _this.alertService.error('error');
                _this.loading = false;
            }
        }, function (error) {
            console.log('Connection error');
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/menu/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/menu/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/menu/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Edit in JSFiddle\r\nResult\r\nHTML\r\nCSS\r\nJavaScript\r\nResources\r\n:root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: .75rem;\r\n}\r\n\r\nbody {\r\n  background: #9CECFB;\r\n  /* fallback for old browsers */\r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.card-signin {\r\n  border: 0;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n.btn-google {\r\n  color: white;\r\n  background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook {\r\n  color: white;\r\n  background-color: #3b5998;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0UsMEJBQTBCO0VBQzFCLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFFL0IsZ0NBQWdDO0VBQ2hDLGlFQUFpRTtFQUNqRSxzRUFBc0U7Q0FDdkU7O0FBRUQ7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLCtDQUErQztDQUNoRDs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEOztFQUVFLHVEQUF1RDtDQUN4RDs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsUUFBUTtFQUNSLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0NBQ2pDOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQU1EO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsNkVBQTZFO0VBQzdFLGlEQUFpRDtDQUNsRDs7QUFFRDtFQUNFLDhDQUE4QztFQUM5QyxpREFBaUQ7RUFDakQsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiRWRpdCBpbiBKU0ZpZGRsZVxyXG5SZXN1bHRcclxuSFRNTFxyXG5DU1NcclxuSmF2YVNjcmlwdFxyXG5SZXNvdXJjZXNcclxuOnJvb3Qge1xyXG4gIC0taW5wdXQtcGFkZGluZy14OiAxLjVyZW07XHJcbiAgLS1pbnB1dC1wYWRkaW5nLXk6IC43NXJlbTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogIzlDRUNGQjtcclxuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDUyRDQsICM2NUM3RjcsICM5Q0VDRkIpO1xyXG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA1MkQ0LCAjNjVDN0Y3LCAjOUNFQ0ZCKTtcclxuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gLmJ0biB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XHJcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XHJcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNTtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/menu/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-center\">Formulaire d'inscription</h5>\n     \n            <h2>Créer un compte </h2>\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"firstName\">Prénom</label>\n                    <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                    <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.firstName.errors.required\">Le prénom est onligatoire</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                        <label for=\"lastName\">Nom</label>\n                        <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.lastName.errors.required\">Le nom est est onligatoire</div>\n                        </div>\n                    </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Entreprise</label>\n                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                    <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.lastName.errors.required\">Le nom de l'entreprise est est onligatoire</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"username\">Identifiant</label>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">L'identifiant est onligatoire</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Mot de passe</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Le mot de passe est onligatoire</div>\n                        <div *ngIf=\"f.password.errors.minlength\">Le mot de passe doit être d'au moins 6 caractères</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Inscription</button>\n                    <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                    <!-- <a  routerLink=\"/menu/login\" class=\"btn btn-link\">Cancel</a> -->\n                </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/menu/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/menu/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/menu/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/menu/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/menu/services/services.component.css":
/*!******************************************************!*\
  !*** ./src/app/menu/services/services.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tdCol1{\r\n    width: 40%;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZENvbDF7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu/services/services.component.html":
/*!*******************************************************!*\
  !*** ./src/app/menu/services/services.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n    <div class=\"container\">\n\n      <!-- Page Heading/Breadcrumbs -->\n      <h1 class=\"mt-4 mb-3\">Services :\n        <small>Expertise</small>\n      </h1>\n\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"\">Accueil</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Services</li>\n      </ol>\n\n      <!-- Image Header -->\n      <img class=\"img-fluid rounded mb-4\" src=\"http://placehold.it/1200x300\" alt=\"\">\n\n      <div class=\"row\">\n          <!-- Sidebar Column -->\n    \n          <!-- Content Column -->\n          <div class=\"col-lg-10 mb-4\">\n              <div class=\"breadcrumb\">\n                  <table border=\"1\">\n                    <tr>\n                      <td class=\"tdCol1\">Qu’elle est la microcible : à qui est destinée cette prestation ?</td>\n                      <td>Le secteur d’activité cible est celui du BTP et de la promotion immobilière.\n                          Le secteur du voyage et de l’intérim.\n                          Mix produit- Mix clientèle : Voyage, Interim, Caution de marché, GFA- TPE/PME/ETI\n                          Caution légale, réglementée et caution contractuelle ou financière\n                          Le secteur géographique ; Paris IDF\n                          Cabinet de courtage spécialisé dans la construction et courtier grossite\n                          </td>\n                    </tr>\n                    <tr>\n                        <td class=\"tdCol1\">Qu’elle est l’objet de mon expertise ?</td>\n                        <td>Négocier des lignes de caution (montant, conditions financières et techniques)\n                            Conseiller techniquement et juridiquement (choix des textes, veille juridique et réglementaire, jurisprudence)\n                            Réduire le coût financier (taux, frais, conditions de mainlevée des actes),\n                            Améliorer, optimiser l’encours des cautions  ,\n                            Elaborer et mettre en place une méthode, un processus de demande des cautions  (logiciel et méthodologie)\n                            Etudier et mettre en place le dossier auprès des assureurs\n                            Présentation des dossiers \n                            Analyse financière, technique et juridique du dossier\n                            Accès à des garants assureurs en substitution des banques,\n                            Accompagnement et assistance (aspects, financiers, techniques et juridiques,\n                            Concevoir les outils et les méthodes de gestion des cautions (suivi et gestion des encours),                   \n                            </td>\n                      </tr>\n                      <tr>\n                          <td class=\"tdCol1\">A quel moment ce besoin s’exprime-t-il ?</td>\n                          <td>Création de la société,\n                              Développement rapide de l’activité nécessitant des capacités supplémentaires,\n                              Diversification, substituions des fournisseurs en caution actuels,\n                              Recherche de nouvelles capacités et expertise,\n                              Structurer ses demandes de caution, \n                              Bénéficier d’un appui technique et juridique,                    \n                              </td>\n                        </tr>\n                        <tr>\n                            <td class=\"tdCol1\">Quel est le bénéfice pour le client : Pourquoi ce service est-il intéressant ?</td>\n                            <td>Externaliser les compétences\n                                Diminuer le coût des cautions, baisser son encours\n                                Organiser la gestion des demandes de caution                      \n                                </td>\n                          </tr>\n                          <tr>\n                              <td class=\"tdCol1\">Quel est le bénéfice pour les bénéficiaires au sein de l’entreprise ? </td>\n                              <td>Dirigeant, DAF, Trésorier, qui n‘ont pas ni le temps ni les moyens, ni les informations pour améliorer leur capacité à souscrire de nouveau marché et assurer la sécurisation du risque et développer l’activité de la société                        \n                                  </td>\n                            </tr>\n                            <tr>\n                                <td class=\"tdCol1\">Qui sont les prescripteurs que vous connaissez ?</td>\n                                <td>Courtiers grossiste, Experts-Comptables,  courtier de proximité spécialisé en RC, DO et Garantie décennale, assureur construction, assureur,                    \n                                    </td>\n                              </tr>\n                  </table>\n                </div>\n                <div class=\"breadcrumb\" id=\"objectifs1\">\n                    <h2> Objectifs : </h2>\n                  <p>\n                      Vous accompagner et vous conseiller tout au long de la vie de la caution.\n                      La caution est un enjeu majeur pour l’entreprise car si elle ne peut pas la fournir, son activité sera entravée.\n                      L’entreprise est donc confrontée à une problématique qui est de maîtriser les coûts financiers liés à l’émission des cautions et de respecter les dispositions contractuelles  ou légales obligatoires pour réaliser les marchés de travaux.\n                      La baisse de l’endettement est un objectif majeur. La réduction du coût financier liée à l’émission des cautions s’intègre dans cet objectif.\n                      \n                  </p>\n                </div>\n                <div class=\"breadcrumb\" id=\"svc2\">\n                    <h2> L’expert s’intéresse à la vie de la caution de sa création à sa mainlevée.</h2>\n                  <p>\n                      L’objectif de l’intervention ne se résume pas à la seule baisse ,des taux, des frais, à la gestion de l’encours mais aussi aux recours d’outils informatique développés soit par le client soit par le garant pour s’assurer en priorité d’être réactif dans les émissions des cautions (qui comme on l’a vue est cruciale pour l’activité de l’entreprise) et de la gestion des encours. Parce que les collaborateurs de l’entreprise ne disposent pas ni du temps, ni des moyens, ni parfois des compétences pour gérer efficacement l’encours des cautions, le recourt à un spécialiste s’impose.\n                       Le courtier travaille en amont, il doit anticiper les besoins de l’entreprise. \n                  </p>\n                  <p>Le courtier aura pour mission de :</p>\n                  <ul>\n                      <li>\tNégocier régulièrement les lignes de garantie de manière globale, en accord en avec la stratégie de l’entreprise et de sa répartition par entités,</li>\n                      <li>\t Etre facilitateur dans la résolution des demandes d’émissions spécifiques (syndication,   groupement,…),</li>\n                      <li>\tGérer l’encours des cautions et assurer son suivi, </li>\n                      <li>\tLimiter le coût financier et le risque technique, juridique et optimiser les possibilités d’émission,</li>\n                      <li>\tNégocier les lignes d’engagement avec tous les garants en optimisant leurs  différenciations dans l’émission des cautions,</li>\n                      <li>\tEtudier les modèles de textes en fonction de la nature de l’acte à émettre et des dispositions contractuelles,</li>\n                      <li>\tEtudier et négocier le cadre contractuel avec les garants,</li>\n                      <li>\tNégocier les taux et les frais d’émission,</li>\n                      <li>\tAuditer les process de mainlevée des actes,  </li>\n                      <li>\tProposer des améliorations dans la gestion des cautions (dates prévisionnelle de fin de travaux, date de mainlevée dans l’acte surtout pour la S/T, caution en opposition …),  </li>   \n                      \n                  </ul>\n                <p>L’intervention du courtier se fait tant au niveau du garant que  du client. </p> \n                  </div>\n                  <div class=\"breadcrumb\" id=\"svc3\">\n                      <h2> Intervention auprès du garant</h2>\n                      <p>\n                          Le courtier devient l’interlocuteur privilégié vis-à-vis du garant. \n                          L’entreprise reste toutefois en contact avec le garant et tient informée le courtier de toute démarche ou action.\n                          La mission du courtier vis à vis du garant est résumée aux opérations suivantes :                          \n                      </p>\n                      <ul>\n                          <li>\tNégociation des conditions tarifaires,</li>\n                          <li>\tRenouvellement et/ou augmentation des lignes de cautions,</li>\n                          <li>\tTransmission et négociation des demandes d’émission spécifiques et complexes, </li>\n                          <li>\tSuivi des encours totaux de cautions auprès des garants (banques et assureurs),  </li>\n                          \n                      </ul>\n                    </div>\n                    <div class=\"breadcrumb\" id=\"svc3\">\n                        <h2> Intervention auprès du client</h2>\n                        <ul>\n                            <li>\tAudit des procédures dans la gestion des mainlevées des actes,</li>\n                            <li>\tEtude et proposition de modèles de textes,</li>\n                            <li>\tRecherche de capacités auprès des garants en fonction de leurs domaines de compétences en ce qui concerne :</li>\n                            <ul>\n                                <li> \tLes types de garanties (RG, ABF, S/T),</li>\n                                <li> \tLes zones géographiques d’émission, </li>\n                                <li>\tLes outils informatiques (édition déportée des actes), </li>\n                                <li>\tLes pratiques de gestion des cautions (pondération sur la S/T, Main levée partielle, main levée automatique) </li>\n                            </ul>\n                            <li>\tLa recherche de solutions dans l’émission de garanties spécifiques en France et à l’internationale,</li>\n                            \n                        </ul>\n                      </div>\n                      <div class=\"breadcrumb\" id=\"svc4\">\n                          <h2>La mise en place d’une méthodologie et d’un outil de gestion comme système d’amélioration de l’encours caution</h2>\n                          <ul>\n                              <li>\tEtude de l’opportunité (avantages/inconvénients) d’adopter un nouvel outil informatique (vialink) non propriétaire mais multi-émetteur,</li>\n                              <li>\tExtraire toutes les cautions dont la durée paraît anormale par rapport au type de caution,</li>\n                              <li>\tRenseigner une date de garantie maximum après la date prévisionnelle de fin de travaux au-delà de laquelle l’acte devra être mainlevée,</li>\n                              <li>\tRecenser tous les actes en opposition,</li>\n                              <li>\tMise en place d’un outil reporting de suivi des actes, si l’outil du garant ne le permet pas,</li>\n                              <li>\tOpportunité de faire appel à un outil informatique qui consolide l’ensemble des engagements externe ou interne, </li>\n                              \n                          </ul>\n                          <p>Le gain pour l’entreprise est la mainlevée définitive de l’acte, la baisse de l’encours et la diminution des frais financiers.</p>\n                          <p>Le courtier en tant qu’interlocuteur privilégié aura pour mission de réaliser un audit des encours en caution et de préconiser des solutions. </p>\n                          <p>La tarification de l’audit sera fonction de son étendue et de la volumétrie.</p>\n                        </div>\n                <!-- /.row -->\n          </div>\n              <div class=\"col-lg-2 mb-4\">\n            <div class=\"list-group\">\n              <a href=\"#\" class=\"list-group-item active\">Objectifs</a>\n              <a href=\"\" class=\"list-group-item\">L’expert</a>\n              <a href=\"\" class=\"list-group-item\">Services</a>\n              <a href=\"\" class=\"list-group-item\">Contact</a>\n              <a href=\"#\" class=\"list-group-item\">FAQ</a>\n              <a href=\"404.html\" class=\"list-group-item\">404</a>\n            </div>\n          </div>\n        </div>\n        <!-- /.row -->\n\n      <!-- Marketing Icons Section -->\n      \n\n\n    </div>\n"

/***/ }),

/***/ "./src/app/menu/services/services.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu/services/services.component.ts ***!
  \*****************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/menu/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/menu/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/menu/tpe-pme/tpe-pme.component.css":
/*!****************************************************!*\
  !*** ./src/app/menu/tpe-pme/tpe-pme.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvdHBlLXBtZS90cGUtcG1lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/menu/tpe-pme/tpe-pme.component.html":
/*!*****************************************************!*\
  !*** ./src/app/menu/tpe-pme/tpe-pme.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 2%\">\n   <!-- Page Heading/Breadcrumbs -->\n   <h1 class=\"mt-4 mb-3\">TPE - PME\n      <!-- <small>Subheading</small> -->\n    </h1>\n  \n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a href=\"\">Accueil</a>\n      </li>\n      <li class=\"breadcrumb-item active\">TPE -PME</li>\n    </ol>\n  \n    <div class=\"row\">\n\n        <div class=\"col-lg-8\">\n            <div class=\"breadcrumb\">\n                <b><p>Notre objectif ?</p></b>\n                 Que vous consacriez pleinement à la croissance et à la pérennité de votre entreprise.\n                Un expert à votre écoute qui connaît votre métier (construction, BTP, Promotion Immobilière).\n                Une expertise pour les  entreprises de toutes tailles de la TPE à la grande entreprise.\n                Armand Gaillabaud, votre expert en caution vous accompagne dans la recherche de solutions de demandes de cautions de marchés  et  vous conseille pour vous permettre d’atteindre vos objectifs :\n                \n                L’expert s’intéresse à la vie de la caution de sa création à sa mainlevée.\n                L’objectif de l’intervention ne se résume pas à la seule baisse des taux, des frais et à la gestion de l’encours mais aussi aux recours d’outils informatique développés soit par le client soit par le garant pour s’assurer en priorité d’être réactif dans les émissions des cautions (qui comme on l’a vue est cruciale pour l’activité de l’entreprise) et de la gestion des encours. Parce que les collaborateurs de l’entreprise ne disposent pas ni dtu temps, ni des moyens, ni parfois des compétences pour gérer efficacement l’encours des cautions, le recourt à un spécialiste s’impose. Le courtier travaille en amont, il doit anticiper les besoins de l’entreprise.\n                L’expert  aura pour mission de :\n                <ul>\n                      <li>Négocier régulièrement les lignes de garantie de manière globale, en accord en avec la stratégie de l’entreprise,</li>\n                <li>\t Etre facilitateur dans la résolution des demandes d’émissions spécifiques    (syndication, groupement,…),</li>\n                <li>\tGérer l’encours des cautions et assurer son suivi, </li>\n                <li>\tLimiter le coût financier et le risque technique, juridique et optimiser les possibilités d’émission,</li>\n                <li>\tNégocier les lignes d’engagement avec tous les garants en optimisant leurs   différenciations dans l’émission des cautions,</li>\n                <li>\tEtudier les modèles de textes en fonction de la nature de l’acte à émettre et des dispositions contractuelles,</li>\n                <li>\tEtudier et négocier le cadre contractuel avec les garants,</li>\n                <li>\tNégocier les taux et les frais d’émission,</li>\n                <li>\tAuditer les process de mainlevée des actes,  </li>\n                <li>\tAssurer une veille économique et juridique (analyse du secteur d’activités, de la jurisprudence, texte réglementaire), </li>\n                <li> \tProposer des améliorations dans la gestion des cautions (dates prévisionnelle de fin de travaux, date de mainlevée dans l’acte surtout pour la S/T, caution en opposition …),     </li>\n              </ul>\n              \n              </div>\n              \n        </div>\n        <div class=\"col-lg-4\">\n            <img class=\"img-fluid rounded mb-4\" src=\"http://placehold.it/750x450\" alt=\"\">\n          </div>\n      </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/menu/tpe-pme/tpe-pme.component.ts":
/*!***************************************************!*\
  !*** ./src/app/menu/tpe-pme/tpe-pme.component.ts ***!
  \***************************************************/
/*! exports provided: TpePmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TpePmeComponent", function() { return TpePmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TpePmeComponent = /** @class */ (function () {
    function TpePmeComponent() {
    }
    TpePmeComponent.prototype.ngOnInit = function () {
    };
    TpePmeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tpe-pme',
            template: __webpack_require__(/*! ./tpe-pme.component.html */ "./src/app/menu/tpe-pme/tpe-pme.component.html"),
            styles: [__webpack_require__(/*! ./tpe-pme.component.css */ "./src/app/menu/tpe-pme/tpe-pme.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TpePmeComponent);
    return TpePmeComponent;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        // return this.http.post<any>(GlobalVariable.BASE_API_URL  + `/users/login`, { username, password })
        //     .pipe(map(user => {
        //         // login successful if there's a jwt token in the response
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //             this.currentUserSubject.next(user);
        //             location.reload();
        //         }
        //         console.log('service auth:' + user);
        //         if ( user != null) {
        //          return user;
        //         }
        //     }));
        if (username === 'admin' && password === 'aquilam') {
            var user = new _model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
            user.id = 1;
            user.firstName = 'Admin';
            user.lastName = 'AQUILAM';
            user.username = 'admin@aquilam.com';
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            location.reload();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user1) {
                if (user1 != null) {
                    return user1;
                }
            }));
        }
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/global */ "./src/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(src_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].BASE_API_URL + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(src_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].BASE_API_URL + ("/users/" + id));
    };
    UserService.prototype.register = function (user) {
        return this.http.post(src_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].BASE_API_URL + "/users/create", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(src_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].BASE_API_URL + ("/users/" + user.id), user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(src_global__WEBPACK_IMPORTED_MODULE_2__["GlobalVariable"].BASE_API_URL + ("/users/" + id));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \n    <!-- Footer -->\n    <footer class=\"py-5 bg-dark\">\n      <div class=\"container\">\n        <p class=\"m-0 text-center text-white\">Copyright &copy; 100% garanti 2018</p>\n      </div>\n      <!-- /.container -->\n    </footer>"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav .navbar-nav li a {\r\n  color: black;\r\n}\r\n\r\n/* nav .navbar-nav li a:hover{\r\n    background-color:aqua;\r\n} */\r\n\r\nnav .navbar-brand {\r\n  color: black;\r\n}\r\n\r\nnav .navbar-nav a {\r\n    color: black;\r\n  }\r\n\r\n.router-active{\r\n    font-size: 20px;\r\n    color: red;\r\n    border-bottom: 5px solid brown;\r\n    font-weight: bold;\r\n  }\r\n\r\n.router-active1{\r\n    font-weight: bold;\r\n    /* background-color:brown; */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkOztBQUVEOztJQUVJOztBQUVKO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0lBQ0ksYUFBYTtHQUNkOztBQUdIO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0JBQWtCO0dBQ25COztBQUNEO0lBQ0Usa0JBQWtCO0lBQ2xCLDZCQUE2QjtHQUM5QiIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiAubmF2YmFyLW5hdiBsaSBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIG5hdiAubmF2YmFyLW5hdiBsaSBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjphcXVhO1xyXG59ICovXHJcblxyXG5uYXYgLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5uYXYgLm5hdmJhci1uYXYgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG5cclxuLnJvdXRlci1hY3RpdmV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJyb3duO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5yb3V0ZXItYWN0aXZlMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpicm93bjsgKi9cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Navigation -->\n<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-white fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"\"  >100%  Garanti</a>\n    <img width=\"50\" alt=\"AQUILAM Logo\" src=\"./assets/img/logoaquilam.jpg\">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item \">\n             <b> <a class=\"nav-link\" routerLink=\"\"  routerLinkActive=\"router-active1\"  >Accueil</a> </b>\n            </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"menu/about/\"  routerLinkActive=\"router-active\" (click)=\"reinitdropdown()\" >Qui sommes nous ?</a>\n        </li>\n        <li class=\"nav-item dropdown \">\n          <a class=\"nav-link dropdown-toggle\" routerLink=\"#\" routerLinkActive=\"router-active\" id=\"navbarDropdownPortfolio\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Entreprise\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownPortfolio\">\n            <a class=\"dropdown-item\" routerLink=\"menu/tpe-pme\" routerLinkActive=\"router-active\">TPE - PME</a>\n            <a class=\"dropdown-item\" routerLink=\"menu/assureurs\" routerLinkActive=\"router-active\" >Assureurs</a>\n          </div>\n        </li>\n        <li class=\"nav-item \">\n            <a class=\"nav-link\" routerLink=\"menu/courtier-grossistes/\" routerLinkActive=\"router-active\"  >\n              Professionels de l'assurance </a>\n          </li>\n        <li class=\"nav-item\" >\n          <a class=\"nav-link\" routerLink=\"menu/services/\" routerLinkActive=\"router-active\" >Notre expertise</a>\n        </li>\n        <li class=\"nav-item\" >\n          <a class=\"nav-link\" routerLink=\"menu/blogs/\" routerLinkActive=\"router-active\">Blog</a>\n        </li>\n        <li class=\"nav-item\" >\n          <a class=\"nav-link\" routerLink=\"menu/contact/\" routerLinkActive=\"router-active\">Contact</a>\n        </li>\n      </ul>\n    </div>\n\n\n  </div>\n  \n  <div class=\"navbar-expand ml-auto navbar-nav\"> \n    <div *ngIf=\"currentUser===null\" class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/menu/login\" >\n          Connexion\n        </a>\n      <a class=\"nav-item nav-link\" href=\"https://twitter.com/armand\" target=\"_blank\">\n        <i class=\"fa fa-twitter\"></i>\n      </a>\n      <a class=\"nav-item nav-link\" href=\"https://medium.com/@armand\" target=\"_blank\">\n        <i class=\"fa fa-medium\"></i>\n      </a>\n    </div>\n    <div *ngIf=\"currentUser!==null\" class=\"navbar-nav\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownPortfolio\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{currentUser.firstName}} &nbsp;{{currentUser.lastName}}\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownPortfolio\">\n            <a class=\"dropdown-item\" routerLink=\"view/userview\">Mon compte</a>\n            <a class=\"dropdown-item\" routerLink=\"view/users\">Espace admin</a> \n            \n            <button class=\"dropdown-item\" (click)=\"logout()\">Se déconnecter</button>\n          </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // this.currentUser = localStorage.getItem('currentUser');
        jquery__WEBPACK_IMPORTED_MODULE_3__('body').addClass('df');
        jquery__WEBPACK_IMPORTED_MODULE_3__('navbarDropdownPortfolio').on('click', function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_3__(this).next().toggle();
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('.dropdown-menu-right').on('click', function (e) {
            //   $('#navbarDropdownPortfolio').css({
            //     'font-size': '20px',
            //     'color': 'green',
            //     'border-bottom': '5px solid red',
            //     'font-weight': 'bold'
            // });
            e.stopPropagation();
        });
    };
    HeaderComponent.prototype.reinitdropdown = function () {
    };
    HeaderComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
        location.reload();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/layout/layout.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header>\n\n  <ng-content></ng-content>\n\n<app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/ui/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/view/user-list/user-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/view/user-list/user-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/user-list/user-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/view/user-list/user-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 2%\">\n\n    <div class=\"jumbotron\">\n      <h1> Gestion de la liste des utilisateurs</h1>\n  </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/view/user-list/user-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/view/user-list/user-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/view/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/view/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/view/userdetail/userdetail.component.css":
/*!**********************************************************!*\
  !*** ./src/app/view/userdetail/userdetail.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdXNlcmRldGFpbC91c2VyZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/userdetail/userdetail.component.html":
/*!***********************************************************!*\
  !*** ./src/app/view/userdetail/userdetail.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 2%\">\n\n    <div class=\"jumbotron\">\n  <div *ngIf=\"currentUser \" class=\"container\">\n      <div class=\"card card-signin my-5\">\n    <div>\n      <label>Nom: </label> &nbsp; &nbsp; &nbsp;\n       {{currentUser.lastName}}\n    </div>\n    <div>\n      <label>Prenom: </label> &nbsp; &nbsp; &nbsp;\n      {{currentUser.firstName}}\n    </div>\n    <div>\n      <label>Nom d'utilisateur: </label> &nbsp; &nbsp; &nbsp;\n      {{currentUser.username}}\n    </div>\n    <div>\n      <label>Mot de passe: </label> &nbsp; &nbsp; &nbsp;\n       {{currentUser.id}}\n    </div>\n   \n  \n    <hr/>\n  </div>\n  </div>\n  </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/view/userdetail/userdetail.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/view/userdetail/userdetail.component.ts ***!
  \*********************************************************/
/*! exports provided: UserdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailComponent", function() { return UserdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserdetailComponent = /** @class */ (function () {
    function UserdetailComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    UserdetailComponent.prototype.ngOnInit = function () {
    };
    UserdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userdetail',
            template: __webpack_require__(/*! ./userdetail.component.html */ "./src/app/view/userdetail/userdetail.component.html"),
            styles: [__webpack_require__(/*! ./userdetail.component.css */ "./src/app/view/userdetail/userdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], UserdetailComponent);
    return UserdetailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/*! exports provided: GlobalVariable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariable", function() { return GlobalVariable; });
var GlobalVariable = Object.freeze({
    BASE_API_URL: 'http://localhost:8080/api',
});


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\home\nodespace\business-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map