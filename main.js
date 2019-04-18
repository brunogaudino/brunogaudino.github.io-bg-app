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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/home/home.component */ "./src/app/content/home/home.component.ts");
/* harmony import */ var _content_recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/recommendations/recommendations.component */ "./src/app/content/recommendations/recommendations.component.ts");
/* harmony import */ var _content_lab_lab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/lab/lab.component */ "./src/app/content/lab/lab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    {
        path: '',
        component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'lab',
        component: _content_lab_lab_component__WEBPACK_IMPORTED_MODULE_4__["LabComponent"]
    },
    {
        path: 'recommendations',
        component: _content_recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_3__["RecommendationsComponent"]
    },
    {
        path: '**',
        component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    //useHash: true
                    enableTracing: false
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
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

module.exports = "<router-outlet></router-outlet>"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-root',
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _content_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.module */ "./src/app/content/content.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = /** @class */ (function () {
    function AppModule(router) {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _content_content_module__WEBPACK_IMPORTED_MODULE_5__["ContentModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.module.ts":
/*!*******************************************!*\
  !*** ./src/app/content/content.module.ts ***!
  \*******************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.module */ "./src/app/content/home/home.module.ts");
/* harmony import */ var _recommendations_recommendations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recommendations/recommendations.module */ "./src/app/content/recommendations/recommendations.module.ts");
/* harmony import */ var _lab_lab_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lab/lab.module */ "./src/app/content/lab/lab.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _home_home_module__WEBPACK_IMPORTED_MODULE_1__["HomeModule"],
                _recommendations_recommendations_module__WEBPACK_IMPORTED_MODULE_2__["RecommendationsModule"],
                _lab_lab_module__WEBPACK_IMPORTED_MODULE_3__["LabModule"]
            ]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./src/app/content/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/content/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /* Custom page Home\n  -------------------------------------------------- */\n  #about h3{\n    font-size: 1.3em;\n    margin: 10px auto;\n  }\n  .avatar {\n    padding-top: 5%;\n  }\n  .avatar .img-circle{\n    border: 10px solid #8fd6ff;\n    padding: 5px 10px 3px 10px;\n    margin: 0 auto;\n    max-width: 300px;\n    height: auto;\n  }\n  .avatar img{\n    min-width: 160px;\n    height: auto;\n    max-width: 80%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtzREFDb0Q7RUFDcEQ7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAvKiBDdXN0b20gcGFnZSBIb21lXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICNhYm91dCBoM3tcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIC5hdmF0YXIge1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgfVxuICBcbiAgLmF2YXRhciAuaW1nLWNpcmNsZXtcbiAgICBib3JkZXI6IDEwcHggc29saWQgIzhmZDZmZjtcbiAgICBwYWRkaW5nOiA1cHggMTBweCAzcHggMTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLmF2YXRhciBpbWd7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/content/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/content/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\n\n  <bg-menu></bg-menu>\n\n  <div class=\"container\">\n\n    <div class=\"avatar\">\n      <div class=\"img-circle\">\n        <img width=\"300\" src=\"assets/img/home/logo-bcw.png\" alt=\"Bruno Gaudino's logo\" title=\"Bruno Gaudino's logo\">\n      </div>\n    </div>\n\n    <h3><strong>Bruno Gaudino</strong> {{workPosition}}.</h3>\n    <h3><strong>Technician's license </strong> by Fatec(Technology College of State of São Paulo).</h3>\n    <h3>Web development with <span class=\"featured\">HTML</span>, <span class=\"featured\">CSS</span>, <span class=\"featured\">JavaScript</span>/<span class=\"featured\">jQuery</span>.</h3>\n    <h3>Versioning control with <span class=\"featured\">Git</span>.</h3>\n    <h3>Front-end performance with <span class=\"featured\">Gulp</span>.</h3>\n    <h3>Specialist in <span class=\"featured\">web accessibility</span>.</h3>\n    <h3><span class=\"featured\">Node.js</span> and <span class=\"featured\">Angular</span> frameworks.</h3>\n    \n    <!-- social -->\n    <bg-social></bg-social>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/content/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/content/home/home.component.ts ***!
  \************************************************/
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.workPosition = 'analyst developer web front-end';
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/content/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/content/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/content/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/content/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/content/home/home.component.ts");
/* harmony import */ var _social_social_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../social/social.module */ "./src/app/social/social.module.ts");
/* harmony import */ var src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/menu/menu.module */ "./src/app/menu/menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _social_social_module__WEBPACK_IMPORTED_MODULE_4__["SocialModule"],
                src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"]
            ],
            exports: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/content/lab/lab.component.html":
/*!************************************************!*\
  !*** ./src/app/content/lab/lab.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"lab\">\n\n  <bg-menu></bg-menu>\n\n    <div class=\"container\">\n          <h3>Lab</h3>\n          <section id=\"labProjects\">\n                          <article>\n      <!--  PROJETOS/CURSOS  -->\n              <h2>Course projects <span>Projects developed during Alura courses</span> </h2>\n              <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/api.payment\" target=\"_blank\">API Payment</a></strong>\n                                      - NodeJs API development. The code is available in github and is accessible through the link <a href=\"https://github.com/brunogaudino/api.payment\" target=\"_blank\">API Payment</a>.\n                </p>\n              </h5>\n      <!--<hr>-->\n              <h5>\n                <p>\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/casadocodigo/\" target=\"_blank\">Casa do código home</a></strong>\n                                      - Development of the home of the \"Casa do código\" website in Nodejs, as a NodeJs course project. The code is available in github and can be accessed from the Home Code link. <a href=\"https://github.com/brunogaudino/casadocodigo/\" target=\"_blank\">Casa do código home</a>.\n                </p>\n              </h5>\n      <!--<hr>-->\n              <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/angular-alurapic/\" target=\"_blank\">Web application Angular</a></strong>\n                                      - Webapp development with <a href=\"https://angular.io/\" target=\"_blank\">angular</a>. The code is available in github and is accessible through the Webapp Angular link. <a href=\"https://github.com/brunogaudino/angular-alurapic/\" target=\"_blank\">webapp angular</a>.\n                </p>\n              </h5>\n      <!--<hr>-->\n              <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/website-workflow-gulp\" target=\"_blank\">Website workflow gulp</a></strong>\n                  - Workflow development with automatization tool <a href=\"http://gulpjs.com/\" target=\"_blank\">Gulp</a>.\n                                      The code is available in github and is accessible through the Website Workflow <a href=\"https://brunogaudino.github.io/website-workflow-gulp/\" target=\"_blank\">website workflow gulp</a>.\n                </p>\n              </h5>\n      <!--<hr>-->\n<!--\t\t\t\t\t\t\t\t<h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/aparecidanutricao\" target=\"_blank\">Aparecida Nutrition</a></strong>\n                                      - Web application development calculate body fat. A sample page can be accessed on the Aparecida nutrition link <a href=\"https://brunogaudino.github.io/aparecidanutricao/\" target=\"_blank\">Aparecida nutrition</a>.\n                </p>\n              </h5>-->\n      <!--<hr>-->\n<!--                <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/portal-news-rwd\" target=\"_blank\">News Portal Responsive</a></strong>\n                                      - Development a news web page responsive. A sample page can be accessed on the News Portal link <a href=\"https://brunogaudino.github.io/portal-news-rwd/\" target=\"_blank\">News Portal Responsive</a>.\n                </p>\n              </h5>-->\n      <!--<hr>-->\n<!--                <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/webpage-joao-da-silva\" target=\"_blank\">Web page João da Silva</a></strong>\n                                      - Development personal web page of fictional person(João da Silva) for HTML and CSS in <a href=\"http://www.alura.com.br/\">Alura course</a>. A sample page can be accessed on the João da Silva page link <a href=\"https://brunogaudino.github.io/webpage-joao-da-silva/\" target=\"_blank\">web page João da Silva</a>.\n                </p>\n              </h5>-->\n      <!--  PROJETOS/CURSOS  -->\n              <!--  PROJETOS  -->\n                              <h2>Projects <span>Developed projects</span></h2> \n                              <h5>\n                                  <p>\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/developer-nodejs-project/\" target=\"_blank\">Developer nodejs project</a></strong>\n                                          - A project built with HTML5, CSS3, javascipt, node.js and mongodb, as a complement to the training. The code is available in github and is accessible through the link<a href = \"https://github.com/brunogaudino/developer-nodejs-project/\"target =\" _ blank \"> developer nodejs project</a>.\n                                  </p>\n                              </h5>\n                              <h5>\n                        <p>\n                          <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/shot-on-the-target\" target=\"_blank\">Shot on the target</a></strong>\n                                          - Development of a simple game with javascript in which the user needs to hit the target. This page is usually blocked by the browser for security, it is necessary to unlock to see the game by running the example page can be accessed on the link<a href = \"https://brunogaudino.github.io/shot-on-the-target/ \"target =\" _ blank \"> shot on the target </a>.\n                        </p>\n                      </h5>\n                      <!--<hr>-->\n                              <h5>\n                                  <p>\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/minimalist-jekyll-blog\" target=\"_blank\">Minimalist jekyll blog</a></strong>\n                                      - Minimalist blog development using jekyll, with posts lists, pagination, commentary with <a href=\"https://disqus.com/\" target=\"_blank\">disqus</a>, and contact form. A sample page can be accessed on the <a href=\"https://brunogaudino.github.io/minimalist-jekyll-blog/\" target=\"_blank\">minimalist jekyll blog</a>.\n                                  </p>\n                              </h5>\n                              <!--<hr>-->\n                              <h5>\n                                  <p>\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/framework-grid-css\" target=\"_blank\">Framework Grid CSS</a></strong>\n                                      - CSS framework adaptation based on grid concept, for facilitates the website interface development. A sample page can be accessed on the Framework Grid CSS. <a href=\"https://brunogaudino.github.io/framework-grid-css/\" target=\"_blank\">framework grid css</a>.\n                                  </p>\n                              </h5>\n                              <!--<hr>-->\n<!--\t\t\t\t\t\t\t\t<h5>\n                                  <p>\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/calculate-gestation-time\" target=\"_blank\">Calculate gestation time</a></strong>\n                                      - Online gestation time calculator development. A sample page can be accessed on the Calculate gestation time link. <a href=\"https://brunogaudino.github.io/calculate-gestation-time/\" target=\"_blank\">Calculate Gestation Time</a>.\n                                  </p>\n                              </h5>-->\n                              <!--<hr>\n                              <h5>\n                                  <p>\n                                      <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/my-patients\" target=\"_blank\">My patients</a></strong>\n                                      - Desenvolvimento de uma aplicação web que calcula o IMC e adiciona novos pacientes a uma tabela usando javascript. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/my-patients/\" target=\"_blank\">my patients</a>.\n                                  </p>\n                              </h5>-->\n              <!--  PROJETOS  -->\n              <!--  GUIA  -->\n              <!-- <h2>Guides <span>Web pages with information guides</span> </h2>\n              <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/guide-viewit-processes\" target=\"_blank\">Guide Viewit Processes</a></strong>\n                                      - Web page with process documentation in Viewit Mobile. A sample page can be accessed on the Guide Viewit Processes link <a href=\"https://brunogaudino.github.io/guide-viewit-processes/\" target=\"_blank\">Guide Viewit Processes</a>.\n                </p>\n              </h5>\n              <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/simple-git-guide\" target=\"_blank\">Simple Git Guide</a></strong>\n                                      - Development of a simple guide with some basic git commands using html, css for query. A sample page can be accessed on the Simple Git Guide link <a href=\"https://brunogaudino.github.io/simple-git-guide/\" target=\"_blank\">Simple Git Guide</a>.\n                </p>\n              </h5> -->\n      <!--  GUIA  -->\n                          </article>\n      <!--<hr>-->\n      <!--\n              <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/sources-exercises\" target=\"_blank\">Sources exercises</a></strong>\n                  - Desenvolvimento de uma lista com exercícios resolvidos. A página de exemplo com os exercícios pode ser acessada no link <a href=\"https://brunogaudino.github.io/sources-exercises/\" target=\"_blank\">sources exercises</a>.\n                </p>\n              </h5>\n      -->\n              <!--<h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/projects-list\" target=\"_blank\">Projects list</a></strong>\n                  - Página com uma lista de pequenos projetos desenvolvidos e em desenvolvimento como menus, layout em colunas, galeria com efeitos em css3, etc. Desenvolvidos com html, css e javascript/jquery. A página de exemplo com os exercícios pode ser acessada no link <a href=\"https://brunogaudino.github.io/projects-list/\" target=\"_blank\">projects list</a>.\n                </p>\n              </h5>-->\n      <!--  SOURCES  -->\n      <!--<hr>\n             <h5>\n               <p>\n                 <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/flip-effect-cards\" target=\"_blank\">Cards Flip Effect CSS3</a></strong>\n                 - Página html desenvolvida utilizando html, css, javascript/jQuery e o plugin <a href=\"http://www.jacklmoore.com/colorbox/\" target=\"_blank\">colorbox</a>. <br />\n                A página contém 5 cartas que são rotacionadas quando o mouse é possicionado sobre elas, e ao clicar o efeito colorbox é aplicado sobre a carta clicada. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/flip-effect-cards/\" target=\"_blank\">flip card effect cards</a>.\n               </p>\n             </h5>\n      <hr>\n              <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/gallery-css3\" target=\"_blank\">Gallery CSS 3</a></strong>\n                  - Página html desenvolvida utilizando html, e efeitos css3. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/gallery-css3/\" target=\"_blank\">gallery css3</a>.\n                </p>\n              </h5>\n      <hr>\n              <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/columns-layout\" target=\"_blank\">Columns layout</a></strong>\n                  - Desenvolvimento de estrutura html/css para construção de websites com dimensões de largura e altura do monitor de 1024px por 768px utilizando 2 e 3 colunas. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/columns-layout/\" target=\"_blank\">columns layout</a>.\n                </p>\n              </h5>\n      <hr>\n              <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/selection-checkbox-js\" target=\"_blank\">Selection checkbox js</a></strong>\n                  - Desenvolvimento de página html utilizando alguns itens de formulário(radio, checkbox), a página mostra um exemplo de seleção de itens checkbox ao selecionar um item radio. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/selection-checkbox-js/\" target=\"_blank\">selection checkbox js</a>.\n                </p>\n              </h5>\n      <hr>\n               <h5>\n                 <p>\n                   <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/megamenu\" target=\"_blank\">Megamenu</a></strong>\n                   - Criação de um mega menu com várias opções e dimensões definidas utilizando html e css sem javascript. A página de exemplo pode ser acessada no link <a href=\"https://brunogaudino.github.io/megamenu/\" target=\"_blank\">megamenu</a>.\n                 </p>\n               </h5>\n      <hr>\n              <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/table-to-list-convert\" target=\"_blank\">Table to list convert</a></strong>\n                      - Página em html com uma tabela(table) e a sua conversão em lista (ul - li) utilizando jQuery, esse código foi desenvolvido para mostrar como alterar o html com jQuery. A página de exemplo no github está no link <a href=\"https://brunogaudino.github.io/table-to-list-convert/\" target=\"_blank\">table to list convert</a>.\n                </p>\n                  </h5>\n      <hr>\n                  <h5>\n                <p>\n                  <i class=\"fa fa-github\"></i>&nbsp;&nbsp;<strong><a href=\"https://github.com/brunogaudino/cadastro-teste\" target=\"_blank\">Cadastro teste</a></strong>\n                      - Desenvolvimento de página de cadastro com formulário e validação de dados, nesse projeto foi utilizado um plugin de validação de dados o jquery validate que pode ser obtido no site <a href=\"http://bassistance.de/jquery-plugins/jquery-plugin-validation/\" target=\"_blank\">Bassistance</a>.\n                </p>\n                  </h5>\n                  <h5>\n                      <i class=\"fa fa-globe\"></i>&nbsp;&nbsp;<strong><a href=\"#\" target=\"_blank\">Project 5</a></strong>\n                      - Dicta causae meliore ex vel, in vix erant integre petentium. Vix ei nisl scripta recusabo,\n                      eam doming blandit facilisis.\n                  </h5>\n                  <h5>\n                      <i class=\"fa fa-cog\"></i>&nbsp;&nbsp;<strong><a href=\"#\" target=\"_blank\">Project 6</a></strong>\n                      - Inermis recusabo elaboraret mea et, dicat neglegentur vim te. Nec et sanctus scriptorem,\n                      usu ex sapientem gubergren. Tamquam admodum ei usu.\n                  </h5> -->\n          </section>\n\n        </div>\n\n      </section>"

/***/ }),

/***/ "./src/app/content/lab/lab.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/lab/lab.component.ts ***!
  \**********************************************/
/*! exports provided: LabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabComponent", function() { return LabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LabComponent = /** @class */ (function () {
    function LabComponent() {
    }
    LabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./lab.component.html */ "./src/app/content/lab/lab.component.html")
        })
    ], LabComponent);
    return LabComponent;
}());



/***/ }),

/***/ "./src/app/content/lab/lab.module.ts":
/*!*******************************************!*\
  !*** ./src/app/content/lab/lab.module.ts ***!
  \*******************************************/
/*! exports provided: LabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabModule", function() { return LabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _lab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lab.component */ "./src/app/content/lab/lab.component.ts");
/* harmony import */ var _social_social_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../social/social.module */ "./src/app/social/social.module.ts");
/* harmony import */ var src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/menu/menu.module */ "./src/app/menu/menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LabModule = /** @class */ (function () {
    function LabModule() {
    }
    LabModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _lab_component__WEBPACK_IMPORTED_MODULE_3__["LabComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _social_social_module__WEBPACK_IMPORTED_MODULE_4__["SocialModule"],
                src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"]
            ],
            exports: [
                _lab_component__WEBPACK_IMPORTED_MODULE_3__["LabComponent"]
            ]
        })
    ], LabModule);
    return LabModule;
}());



/***/ }),

/***/ "./src/app/content/recommendations/recommendations.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/recommendations/recommendations.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"depositions\">\n\n    <bg-menu></bg-menu>\n\n    <div class=\"container\">\n\n        <h3>Recommendations</h3>\n        <p>The recommendations can be seen on the link <a href=\"https://www.linkedin.com/in/brunocesarweb\" target=\"_blank\">LinkedIn profile</a>.</p>\n        <div class=\"panel panel-default\">\n\n        <div class=\"panel-body\">\n\n            <h3><span>Viewit Mobile</span></h3>\n            <div class=\"flexslider\">\n                <ul class=\"slides\">\n                <li>\n                    <!--<p class=\"depositions\">\"O Bruno é um profissional comprometido com a qualidade dos entregáveis, tem um compromisso com a empresa, pontual, organizado com um excelente conhecimento no que se dispõem.\"</p>-->\n                    <p class=\"depositions\">\"Bruno is a professional committed to the quality of his work, is committed to the company, punctual, organized and with excellent knowledge.\"</p>\n                    <div class=\"flex-caption\">\n                    <figure>\n                        <img src=\"../assets/img/recommendations/wilson-viewit2.jpg\" alt=\"Wilson Cunha - Director of new business - Viewit Mobile\" title=\"Wilson Cunha - Director of new business - Viewit Mobile\" />\n                    </figure>\n                    <p>Wilson Cunha - <span>Director of new business.</span></p>\n                    </div>\n                </li>\n                </ul>\n            </div>\n\n            <!--<hr>-->\n            <h3><span>Ongame</span></h3>\n            <div class=\"flexslider\">\n                <ul class=\"slides\">\n                <li>\n                    <!--<p class=\"depositions\">\"Bruno é um grande profissional Front-End. Trabalhei com ele na Ongame onde pude acompanhar uma grande evolução que ele teve como Front-End e também evoluiu muito bem como desenvolvedor junior PHP. Tem ótimos conhecimentos das ferramentas necessárias para um Front-End. Tem paciência e trabalha muito bem em equipe.\"</p>-->\n                    <p class=\"depositions\">\"Bruno is a great front-end professional. We worked at Ongame where I followed his great evolution in Front-end and also as junior PHP developer. Has good knowledge of the tools for a front end. He has patience and works very well as team.\"</p>\n                    <div class=\"flex-caption\">\n                    <figure>\n                        <img src=\"../assets/img/recommendations/fabio-ongame.jpg\" alt=\"Fabio Guaraldo - PHP developer - Ongame\" title=\"Fabio Guaraldo - PHP developer - Ongame\" />\n                    </figure>\n                    <p>Fabio Guaraldo - <span>PHP developer.</span></p>\n                    </div>\n                </li>\n                <li>\n                    <!--<p class=\"depositions\">\"O Bruno é um profissional sério, trabalhador, preocupado em aprender e ajuda bastante nos projetos da empresa.\"</p>-->\n                    <p class=\"depositions\">\"Bruno is a serious professional, hardworking, interested in learning and helping a lot in the projects of the company.\"</p>\n                    <div class=\"flex-caption\">\n                    <figure>\n                        <img src=\"../assets/img/recommendations/mardel-ongame.jpg\" alt=\"Mardel Cardoso - Project manager - Ongame\" title=\"Mardel Cardoso - Project manager - Ongame\" />\n                    </figure>\n                    <p>Mardel Cardoso - <span>Project manager.</span></p>\n                    </div>\n                </li>\n                <li>\n                                            <!--<p class=\"depositions\">\"Bruno é um ótimo webdesigner, os layouts eram sempre programados e entregues nos prazos corretos!\"</p>-->\n                    <p class=\"depositions\">\"Bruno is a great webdesigner, the layouts were always scheduled and delivered on the correct deadlines!\"</p>\n                    <div class=\"flex-caption\">\n                    <figure>\n                        <img src=\"../assets/img/recommendations/rafael-ongame.jpg\" alt=\"Rafael Naletto - Digital design - Ongame\" title=\"Rafael Naletto - Digital design - Ongame\" />\n                    </figure>\n                    <p>Rafael Naletto - <span>Digital design.</span></p>\n                    </div>\n                </li>\n                <li>\n                    <!--<p class=\"depositions\">\"Sempre solícito e eficaz! \"</p>-->\n                    <p class=\"depositions\">\"Always helpful and effective!\"</p>\n                    <div class=\"flex-caption\">\n                    <figure>\n                        <img src=\"../assets/img/recommendations/diogo-ongame.jpg\" alt=\"Diogo Nishimoto - Content analyst - Ongame\" title=\"Diogo Nishimoto - Content analyst - Ongame\" />\n                    </figure>\n                    <p>Diogo Nishimoto - <span>Content analyst.</span></p>\n                    </div>\n                </li>\n                </ul>\n            </div>\n            <!--<hr>-->\n            <h3><span>Technology College of State of São Paulo(Fatec)</span></h3>\n            <div class=\"flexslider\">\n                <ul class=\"slides\">\n                <li>\n                                            <!--<p class=\"depositions\">\"Bruno Cesar é um profissional notável, com grande preocupação com a qualidade de seus entregáveis e na experiência do usuário. É marcado também por sua capacidade de trabalho em equipe e organização de seu fluxo de trabalho.\"</p>-->\n                    <p class=\"depositions\">\"Bruno Cesar is a remarkable professional with great concern for the quality of his deliverables and in the user experience. He is remarkable for his ability to work in teams and to organize his workflow.\"</p>\n                    <div class=\"flex-caption\">\n                    <figure>\n                        <img src=\"../assets/img/recommendations/marcos-fatec.jpg\" alt=\"Marcos Vinicius Guimarães - Web Developer - Fatec\" title=\"Marcos Vinicius Guimarães - Web Developer - Fatec\" />\n                    </figure>\n                    <p>Marcos Vinicius Guimarães - <span>Web Developer.</span></p>\n                    </div>\n                </li>\n                <li>\n                                            <!--<p class=\"depositions\">\"Bruno sempre foi um aluno dedicado e responsável em suas atividades acadêmicas. Está em busca constante de novidades que possam agregar em suas ações profissionais.\"</p>-->\n                    <p class=\"depositions\">\"Bruno has always been a dedicated and responsible student in his academic activities. It is in constant search of novelties that can add in their professional actions.\"</p>\n                                            <div class=\"flex-caption\">\n                    <figure>\n                        <img src=\"../assets/img/recommendations/luiz-fatec.jpg\" alt=\"Luiz Pena - Computing course coordinator on ETEC Osasco - Fatec\" title=\"Luiz Pena - Computing course coordinator on ETEC Osasco - Fatec\" />\n                    </figure>\n                                                <p>Luiz Pena - <span>Computing course coordinator on ETEC Osasco.</span></p>\n                    </div>\n                </li>\n                <li>\n                    <!--<p class=\"depositions\">\"Tive o privilégio de conhecer o Bruno durante o curso de graduação na FATEC e desenvolvermos diversar atividades em grupo. Ele sempre foi uma referência em nossa classe, muito dedicado, pró-ativo e com espírito empreendedor. Sempre bem atualizado e com um bom relacionamento com todos, cativa todas as amizades e cria um ambiente agradável e produtivo. O Bruno é uma excelente pessoa, muito sensato, um super profissional e, particularmente, um grande amigo.\"</p>-->\n                    <p class=\"depositions\">\"I had the privilege to meet Bruno during the course at FATEC and to develop various group activities. He has always been a reference in our class, very dedicated, proactive and with an entrepreneurial spirit. Always well updated and with a good relationship with all, it captivates all the friendships and creates a pleasant and productive environment. Bruno is an excellent person, very sensible, a super professional and, in particular, a great friend.\"</p>\n                    <div class=\"flex-caption\">\n                    <figure>\n                        <img src=\"../assets/img/recommendations/joao-fatec.jpg\" alt=\"João Gambôa - CSV Expert - Fatec\" title=\"João Gambôa - CSV Expert - Fatec\" />\n                    </figure>\n                    <p>João Gambôa - <span>CSV Expert(Computerized Systems Validation Analyst).</span></p>\n                    </div>\n                </li>\n                <li>\n                    <!--<p class=\"depositions\">\"Além de se uma pessoa extraordinária como amigo, também é um ótimo profissional.\"</p>-->\n                    <p class=\"depositions\">\"Besides being an extraordinary person as a friend, he is also a great professional.\"</p>\n                    <div class=\"flex-caption\">\n                    <figure>\n                        <img src=\"../assets/img/recommendations/monica-fatec.jpg\" alt=\"Mônica Oliveira - Teacher at the Centro Paula Souza - Fatec\" title=\"Mônica Oliveira - Teacher at the Centro Paula Souza - Fatec\" />\n                    </figure>\n                    <p>Mônica Oliveira - <span>Teacher at the Centro Paula Souza.</span></p>\n                    </div>\n                </li>\n                </ul>\n            </div>\n\n        </div><!-- panel-body -->\n\n        </div>\n\n    </div>\n\n</section>"

/***/ }),

/***/ "./src/app/content/recommendations/recommendations.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/recommendations/recommendations.component.ts ***!
  \**********************************************************************/
/*! exports provided: RecommendationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsComponent", function() { return RecommendationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecommendationsComponent = /** @class */ (function () {
    function RecommendationsComponent() {
    }
    RecommendationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./recommendations.component.html */ "./src/app/content/recommendations/recommendations.component.html")
        })
    ], RecommendationsComponent);
    return RecommendationsComponent;
}());



/***/ }),

/***/ "./src/app/content/recommendations/recommendations.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/recommendations/recommendations.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecommendationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsModule", function() { return RecommendationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _recommendations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recommendations.component */ "./src/app/content/recommendations/recommendations.component.ts");
/* harmony import */ var _social_social_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../social/social.module */ "./src/app/social/social.module.ts");
/* harmony import */ var src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/menu/menu.module */ "./src/app/menu/menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RecommendationsModule = /** @class */ (function () {
    function RecommendationsModule() {
    }
    RecommendationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _recommendations_component__WEBPACK_IMPORTED_MODULE_3__["RecommendationsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _social_social_module__WEBPACK_IMPORTED_MODULE_4__["SocialModule"],
                src_app_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"]
            ],
            exports: [
                _recommendations_component__WEBPACK_IMPORTED_MODULE_3__["RecommendationsComponent"]
            ]
        })
    ], RecommendationsModule);
    return RecommendationsModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nnav.navbar .container{\n    /*position: absolute;*/\n    background: white;\n    padding: 20px 10px 10px 0px;\n    height: 100%;\n}\n  \n.backNav{\n    position: fixed;\n    background: rgba(10,23,55,0.5);\n    height: 100%;\n    width: 100%;\n    top: 0px;\n    z-index: 2;\n    display: none;\n}\n  \n.navbar.navbar-default{\n    position: fixed;\n    z-index: 3;\n    height: 100%;\n    width: 140px;\n    top: 0px;\n    right: -140px;\n    border-radius: 0px !important;\n}\n  \n.navbar.navbar-default .container .navbar-header,\n.navbar.navbar-default .container .navbar-header a{\n    width: 100%;\n    text-align: center;\n}\n  \n.navbar.navbar-default #navbar ul.nav{\n    width: 100%;\n}\n  \n.navbar.navbar-default #navbar ul.nav li{\n    width: 100%;\n}\n  \n.navbar.navbar-default #navbar ul.nav li a{\n    text-align: left;\n}\n  \n@media (max-width: 767px) {\n    /*\n      span.fa{\n        cursor: pointer;\n        display: inline;\n        margin-top: 5px;\n        margin-left: 20px;\n        padding: 3px;\n        right: 15px;\n        position: absolute;\n        background-color: white;\n        border: 1px solid black;\n        border-radius: 5px;\n            -webkit-border-radius: 5px;\n            -moz-border-radius: 5px;\n            -ms-border-radius: 5px;\n            -o-border-radius: 5px;\n      }\n    \n      span.fa:before{}\n    \n      #wrap{\n        position: relative;\n      }\n    \n      nav.navbar .container{\n        position: absolute;\n        background: white;\n        padding: 20px 20px 10px 30px;\n        height: 100%;\n      }\n    \n      .backNav{\n        position: fixed;\n        background: rgba(10,23,55,0.5);\n        height: 100%;\n        width: 100%;\n        top: 0px;\n        z-index: 1;\n        display: none;\n      }\n    \n      .navbar.navbar-default{\n        position: fixed;\n        z-index: 3;\n        height: 100%;\n        width: 140px;\n        top: 0px;\n        right: -140px;\n      }\n    \n      .navbar.navbar-default .container .navbar-header,\n      .navbar.navbar-default .container .navbar-header a{\n        text-align: right;\n        margin: 0px 0px 0px auto;\n      }\n    \n      .navbar.navbar-default #navbar ul.nav li a{\n        text-align: right;\n      }\n    \n      .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n        color: #6b6b6b;\n      }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #6b6b6b;\n      }\n      .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n        color: #6b6b6b;\n        background-color: #ffffff;\n      }*/\n    \n}\n  \n/* @media (max-width: 767px) */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osUUFBUTtJQUNSLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFxRUk7O0FBRVI7O0FBQUUsOEJBQThCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm5hdi5uYXZiYXIgLmNvbnRhaW5lcntcbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4gIFxuLmJhY2tOYXZ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAsMjMsNTUsMC41KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuICBcbi5uYXZiYXIubmF2YmFyLWRlZmF1bHR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDM7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogLTE0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuICBcbi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLmNvbnRhaW5lciAubmF2YmFyLWhlYWRlcixcbi5uYXZiYXIubmF2YmFyLWRlZmF1bHQgLmNvbnRhaW5lciAubmF2YmFyLWhlYWRlciBhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdmJhci5uYXZiYXItZGVmYXVsdCAjbmF2YmFyIHVsLm5hdntcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdmJhci5uYXZiYXItZGVmYXVsdCAjbmF2YmFyIHVsLm5hdiBsaXtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdmJhci5uYXZiYXItZGVmYXVsdCAjbmF2YmFyIHVsLm5hdiBsaSBhe1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC8qXG4gICAgICBzcGFuLmZhe1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgfVxuICAgIFxuICAgICAgc3Bhbi5mYTpiZWZvcmV7fVxuICAgIFxuICAgICAgI3dyYXB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIG5hdi5uYXZiYXIgLmNvbnRhaW5lcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIFxuICAgICAgLmJhY2tOYXZ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMCwyMyw1NSwwLjUpO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5uYXZiYXIubmF2YmFyLWRlZmF1bHR7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogLTE0MHB4O1xuICAgICAgfVxuICAgIFxuICAgICAgLm5hdmJhci5uYXZiYXItZGVmYXVsdCAuY29udGFpbmVyIC5uYXZiYXItaGVhZGVyLFxuICAgICAgLm5hdmJhci5uYXZiYXItZGVmYXVsdCAuY29udGFpbmVyIC5uYXZiYXItaGVhZGVyIGF7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IGF1dG87XG4gICAgICB9XG4gICAgXG4gICAgICAubmF2YmFyLm5hdmJhci1kZWZhdWx0ICNuYXZiYXIgdWwubmF2IGxpIGF7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIFxuICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7XG4gICAgICB9XG4gICAgICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgICAgfVxuICAgICAgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEsIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudSA+IC5hY3RpdmUgPiBhOmhvdmVyLCAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjNmI2YjZiO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgfSovXG4gICAgXG59IC8qIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backNav\"></div>\n<span class=\"fa fa-bars fa-lg\"></span>\n\n<nav class=\"navbar navbar-default\">\n\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <!-- <a class=\"navbar-brand\" href=\"/\"><i class=\"fa fa-home\"></i></a> -->\n      <a class=\"navbar-brand\" href=\"/\">\n        <img src=\"../assets/img/home/logo-bcw.png\" alt=\"Bruno Gaudino's logo\" title=\"Bruno Gaudino's logo\">\n      </a>\n    </div>\n    <div id=\"navbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"/lab\">Lab</a></li>\n        <!--li><a href=\"/recommendations\">Recommendations</a></li>        \n        <li><a href=\"/skills\">Skills</a></li>\n        <li><a href=\"/portfolio\">Portfolio</a></li>\n        <li><a href=\"https://medium.com/@brunocesaragweb/\" target=\"_blank\">Blog</a></li-->\n      </ul>\n    </div>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]
            ],
            exports: [
                _menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        /* Social\n  -------------------------------------------------- */\n  i.fa:before{\n    width: 30px;\n    font-size: 30px;\n    height: 30px;\n    display: block;\n    margin: 5px auto;\n}\n  #social {\n  padding-top: 12px;\n  word-spacing: 25px;\n}\n  #social h4 > a {\n  color: #000000;\n  margin: 0px 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJRQUFRO3NEQUM4QztFQUNwRDtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7RUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICAvKiBTb2NpYWxcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgaS5mYTpiZWZvcmV7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDVweCBhdXRvO1xufVxuXG4jc29jaWFsIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHdvcmQtc3BhY2luZzogMjVweDtcbn1cblxuI3NvY2lhbCBoNCA+IGEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOiAwcHggM3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"social\">\n    <h4>\n        <a href=\"https://linkedin.com/in/brunocesarweb/?locale=en_US\" target=\"blank\"><i class=\"fa fa-linkedin\"></i></a>\n        <a href=\"https://github.com/brunogaudino\" target=\"blank\"><i class=\"fa fa-github\"></i></a>\n        <a href=\"http://codepen.io/brunocesaragweb/\" target=\"blank\"><i class=\"fa fa-codepen\"></i></a>\n        <a href=\"https://www.behance.net/brunocesarweb\" target=\"blank\"><i class=\"fa fa-behance\"></i></a>\n    </h4>\n</section>"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bg-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")]
        })
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/social/social.module.ts":
/*!*****************************************!*\
  !*** ./src/app/social/social.module.ts ***!
  \*****************************************/
/*! exports provided: SocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.component */ "./src/app/social/social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SocialModule = /** @class */ (function () {
    function SocialModule() {
    }
    SocialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _social_component__WEBPACK_IMPORTED_MODULE_1__["SocialComponent"]
            ],
            exports: [
                _social_component__WEBPACK_IMPORTED_MODULE_1__["SocialComponent"]
            ]
        })
    ], SocialModule);
    return SocialModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brunogaudino/local-repositories/brunogaudino.github.io/bg-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map