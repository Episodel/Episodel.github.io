(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n  <h1 class=\"header__works\">Angular list og previous task</h1>\n</header>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"d-flex justify-content-around align-items-center home__wrapper\">\n    <div class=\"card\" style=\"width: 20rem;\">\n      <img src=\"assets/img/censor.png\" class=\"card-img-top\" alt=\"...\" />\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Angular list of prohibited words</h5>\n        <a\n          [routerLink]=\"['/work/cenzor']\"\n          routerLinkActive=\"active\"\n          class=\"btn btn-success\"\n          >detalis</a\n        >\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 20rem;\">\n      <img\n        src=\"assets/img/add-users.png\"\n        class=\"card-img-top card-img-one\"\n        alt=\"...\"\n      />\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Angular task list</h5>\n        <a\n          [routerLink]=\"['/work/add-users']\"\n          routerLinkActive=\"active\"\n          class=\"btn btn-success\"\n          >detalis</a\n        >\n      </div>\n    </div>\n    <div class=\"card\" style=\"width: 20rem;\">\n      <img src=\"assets/img/list-user.png\" class=\"card-img-top\" alt=\"...\" />\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Angular users list</h5>\n        <a\n          [routerLink]=\"['/work/tasklist']\"\n          routerLinkActive=\"active\"\n          class=\"btn btn-success\"\n          >detalis</a\n        >\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work-add-users/work-add-users.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work-add-users/work-add-users.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <form>\n        <div class=\"form-group mt-3\">\n          <label for=\"userLogin\">Login</label>\n          <input\n            [(ngModel)]=\"userLogin\"\n            name=\"userLogin\"\n            type=\"text\"\n            class=\"form-control\"\n            id=\"userLogin\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"userPassword\">Password</label>\n          <input\n            [(ngModel)]=\"userPassword\"\n            name=\"userPassword\"\n            type=\"{{ inputType }}\"\n            class=\"form-control\"\n            id=\"userPassword\"\n          />\n        </div>\n        <div class=\"form-group\">\n          <label for=\"userEmail\">Email address</label>\n          <input\n            [(ngModel)]=\"userEmail\"\n            name=\"userEmail\"\n            type=\"email\"\n            class=\"form-control\"\n            id=\"userEmail\"\n          />\n        </div>\n\n        <button\n          (click)=\"addUser()\"\n          type=\"button\"\n          class=\"btn\"\n          [ngClass]=\"editStatus ? 'btn-primary' : 'btn-success'\"\n        >\n          {{ mainButton }}\n        </button>\n      </form>\n    </div>\n    <div class=\"col-6 d-flex\">\n      <table class=\"table vertical-align-middle\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">login</th>\n            <th scope=\"col\">email</th>\n            <th scope=\"col\">password</th>\n            <th scope=\"col\">edit</th>\n            <th scope=\"col\">delete</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of arrUsers; let i = index\">\n            <th scope=\"row\">{{ i + 1 }}</th>\n            <td>{{ item.login }}</td>\n            <td>{{ item.password }}</td>\n            <td>{{ item.email }}</td>\n            <td>\n              <button\n                (click)=\"editUser(item)\"\n                type=\"button\"\n                class=\"btn btn-warning\"\n              >\n                edit\n              </button>\n            </td>\n            <td>\n              <button\n                (click)=\"deleteUser(item)\"\n                type=\"button\"\n                class=\"btn btn-danger\"\n                [disabled]=\"editStatus\"\n              >\n                delete\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work-cenzor/work-cenzor.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work-cenzor/work-cenzor.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-signin\">\n  <div class=\"wrapper\">\n    <div class=\"text-center\"></div>\n\n    <h3>\n      Bad Words: <span class=\"textRed\">{{ allText }}</span>\n    </h3>\n\n    <div class=\"form-label-group mb-2\">\n      <input\n        type=\"text\"\n        id=\"inputText\"\n        [(ngModel)]=\"textSearch\"\n        name=\"textSearch\"\n        class=\"form-control\"\n        [placeholder]=\"inputPlaceholderError\"\n        required=\"\"\n        autofocus=\"\"\n        [class.inputError]=\"isError\"\n      />\n      <label for=\"inputText\">{{ inputPlaceholderError }}</label>\n    </div>\n    <button\n      class=\"btn btn-lg btn-warning btn-block\"\n      type=\"button\"\n      (click)=\"addBadWords()\"\n    >\n      add words\n    </button>\n    <button\n      class=\"btn btn-lg btn-danger btn-block\"\n      type=\"button\"\n      (click)=\"reset()\"\n    >\n      reset\n    </button>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlTextarea1\"></label>\n      <textarea\n        class=\"form-control\"\n        id=\"exampleFormControlTextarea1\"\n        rows=\"5\"\n        [(ngModel)]=\"textArea\"\n        name=\"textArea\"\n        [class.areaError]=\"areaIsError\"\n        [placeholder]=\"areaPlaceholderError\"\n      ></textarea>\n    </div>\n    <button\n      class=\"btn btn-lg btn-success btn-block\"\n      (click)=\"censor()\"\n      type=\"button\"\n    >\n      censor\n    </button>\n  </div>\n</form>\n<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work-tasklist/work-tasklist.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work-tasklist/work-tasklist.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h1>Plan your day!</h1>\r\n  <h2>User: User Name. Count of Task {{ arrTask.length }}</h2>\r\n  <hr />\r\n  <form>\r\n    <div class=\"row d-flex align-items-center\">\r\n      <div class=\"col-10\">\r\n        <div class=\"form-group mt-3\">\r\n          <input\r\n            [(ngModel)]=\"taskName\"\r\n            name=\"taskName\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"taskName\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-2 p-0\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"AddTask()\">\r\n          Add\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"col-12 d-flex p-0 flex-column\">\r\n    <table class=\"table vertical-align-middle\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Task</th>\r\n          <th scope=\"col\">Check</th>\r\n          <th scope=\"col\">DONE/IN PROGRESS</th>\r\n          <th scope=\"col\">edit</th>\r\n          <th scope=\"col\">DELETE</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of arrTask; let i = index\">\r\n          <th scope=\"row\">{{ i + 1 }}</th>\r\n          <td>{{ item.name }}</td>\r\n          <td>\r\n            <input\r\n              type=\"checkbox\"\r\n              [checked]=\"item.check\"\r\n              (click)=\"checkBox($event, item)\"\r\n            />\r\n          </td>\r\n          <td [ngClass]=\"item.check ? 'green' : 'tomato'\">{{ item.status }}</td>\r\n          <td>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-warning\"\r\n              (click)=\"editTask(item)\"\r\n            >\r\n              edit\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-danger\"\r\n              [disabled]=\"!item.check\"\r\n              (click)=\"deleteTask(item)\"\r\n            >\r\n              delete\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"editTaskShow\">\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>\r\n            <input type=\"text\" [(ngModel)]=\"renameTask\" name=\"renameTask\" />\r\n          </td>\r\n          <td>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-dark p-1 m-0\"\r\n              (click)=\"editSave()\"\r\n            >\r\n              save\r\n            </button>\r\n          </td>\r\n          <td></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"card text-center\">\n    <div class=\"card-header d-flex\">\n      <ul class=\"nav nav-tabs card-header-tabs d-flex w-100 ml-0\">\n        <div class=\"work__pointers\">Last works >>></div>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLink=\"/work/cenzor\"\n            routerLinkActive=\"active\"\n            >Cenzor</a\n          >\n        </li>\n\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLink=\"/work/add-users\"\n            routerLinkActive=\"active\"\n            >Users</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLink=\"/work/tasklist\"\n            routerLinkActive=\"active\"\n            >Task</a\n          >\n        </li>\n        <div\n          class=\"work__pointers work__pointers--right\"\n          routerLink=\"/home\"\n          routerLinkActive=\"active\"\n        >\n          Back to >>> Home\n        </div>\n      </ul>\n    </div>\n    <div class=\"card-body\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
            /* harmony import */ var _work_work_cenzor_work_cenzor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work/work-cenzor/work-cenzor.component */ "./src/app/work/work-cenzor/work-cenzor.component.ts");
            /* harmony import */ var _work_work_add_users_work_add_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work-add-users/work-add-users.component */ "./src/app/work/work-add-users/work-add-users.component.ts");
            /* harmony import */ var _work_work_tasklist_work_tasklist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work/work-tasklist/work-tasklist.component */ "./src/app/work/work-tasklist/work-tasklist.component.ts");
            var routes = [
                { path: "", redirectTo: "/home", pathMatch: "full" },
                { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                {
                    path: "work",
                    component: _work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"],
                    children: [
                        { path: "cenzor", component: _work_work_cenzor_work_cenzor_component__WEBPACK_IMPORTED_MODULE_5__["WorkCenzorComponent"] },
                        { path: "add-users", component: _work_work_add_users_work_add_users_component__WEBPACK_IMPORTED_MODULE_6__["WorkAddUsersComponent"] },
                        { path: "tasklist", component: _work_work_tasklist_work_tasklist_component__WEBPACK_IMPORTED_MODULE_7__["WorkTasklistComponent"] }
                    ]
                },
                { path: "**", redirectTo: "/home" }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'routing';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
            /* harmony import */ var _work_work_cenzor_work_cenzor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./work/work-cenzor/work-cenzor.component */ "./src/app/work/work-cenzor/work-cenzor.component.ts");
            /* harmony import */ var _work_work_add_users_work_add_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./work/work-add-users/work-add-users.component */ "./src/app/work/work-add-users/work-add-users.component.ts");
            /* harmony import */ var _work_work_tasklist_work_tasklist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work/work-tasklist/work-tasklist.component */ "./src/app/work/work-tasklist/work-tasklist.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                        _work_work_component__WEBPACK_IMPORTED_MODULE_9__["WorkComponent"],
                        _work_work_cenzor_work_cenzor_component__WEBPACK_IMPORTED_MODULE_10__["WorkCenzorComponent"],
                        _work_work_add_users_work_add_users_component__WEBPACK_IMPORTED_MODULE_11__["WorkAddUsersComponent"],
                        _work_work_tasklist_work_tasklist_component__WEBPACK_IMPORTED_MODULE_12__["WorkTasklistComponent"]
                    ],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/footer/footer.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* .footer {\r\n  height: 50px;\r\n  background: grey;\r\n  font-size: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5mb290ZXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59ICovXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/footer/footer.component.ts ***!
          \*******************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/header/header.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("p,\r\nh1,\r\nh2 {\r\n  padding: 0;\r\n  margin: 0 !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header__works {\r\n\r\n  max-height: 1.7em;\r\n  background: grey;\r\n  font-size: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: absolute;\r\n  justify-content: center;\r\n  top: -50px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7Ozs7OztBQU1BOztFQUVFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAsXHJcbmgxLFxyXG5oMiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5oZWFkZXJfX3dvcmtzIHtcclxuXHJcbiAgbWF4LWhlaWdodDogMS43ZW07XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0b3A6IC01MHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/pages/home/home.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn {\r\n  width: 100%;\r\n}\r\n\r\n.home__wrapper {\r\n  height: 90vh;\r\n\r\n}\r\n\r\n.card-title {\r\n  font-size: 18px;\r\n  display: flex;\r\n  justify-content: center;\r\n  color: tomato;\r\n}\r\n\r\n.card-img-top {}\r\n\r\n/* \r\n.card {\r\n  width: 20rem;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZOztBQUVkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBLGVBQWU7O0FBRWY7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvbWVfX3dyYXBwZXIge1xyXG4gIGhlaWdodDogOTB2aDtcclxuXHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogdG9tYXRvO1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHt9XHJcblxyXG4vKiBcclxuLmNhcmQge1xyXG4gIHdpZHRoOiAyMHJlbTtcclxufSAqL1xyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/pages/home/home.component.ts ***!
          \**********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/classes/task.model.ts": 
        /*!**********************************************!*\
          !*** ./src/app/shared/classes/task.model.ts ***!
          \**********************************************/
        /*! exports provided: Task */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function () { return Task; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Task = /** @class */ (function () {
                function Task(id, name, status, check) {
                    this.id = id;
                    this.name = name;
                    this.status = status;
                    this.check = check;
                }
                return Task;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/classes/userlist.model.ts": 
        /*!**************************************************!*\
          !*** ./src/app/shared/classes/userlist.model.ts ***!
          \**************************************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User(id, login, password, email) {
                    this.id = id;
                    this.login = login;
                    this.password = password;
                    this.email = email;
                }
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/work/work-add-users/work-add-users.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/work/work-add-users/work-add-users.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("tr,\r\ntd,\r\nth {\r\n  vertical-align: middle;\r\n}\r\n\r\n/* .editBtn {\r\n  background: rgb(0, 68, 255);\r\n\r\n}\r\n\r\n.editBtn:hover {\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 68, 255, 0.25)\r\n} */\r\n\r\n.btn {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLWFkZC11c2Vycy93b3JrLWFkZC11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBRUg7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmstYWRkLXVzZXJzL3dvcmstYWRkLXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0cixcclxudGQsXHJcbnRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4vKiAuZWRpdEJ0biB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsIDY4LCAyNTUpO1xyXG5cclxufVxyXG5cclxuLmVkaXRCdG46aG92ZXIge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgNjgsIDI1NSwgMC4yNSlcclxufSAqL1xyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/work/work-add-users/work-add-users.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/work/work-add-users/work-add-users.component.ts ***!
          \*****************************************************************/
        /*! exports provided: WorkAddUsersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkAddUsersComponent", function () { return WorkAddUsersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_classes_userlist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/classes/userlist.model */ "./src/app/shared/classes/userlist.model.ts");
            var WorkAddUsersComponent = /** @class */ (function () {
                function WorkAddUsersComponent() {
                    this.arrUsers = [];
                    this.inputType = "password";
                    this.mainButton = "add user";
                }
                WorkAddUsersComponent.prototype.ngOnInit = function () { };
                WorkAddUsersComponent.prototype.addUser = function () {
                    var newUser = new _shared_classes_userlist_model__WEBPACK_IMPORTED_MODULE_2__["User"](1, this.userLogin, this.userPassword, this.userEmail);
                    if (this.arrUsers.length > 0) {
                        newUser.id = this.arrUsers.slice(-1)[0].id + 1;
                    }
                    if (this.editStatus) {
                        newUser.id = this.userId;
                        var index = this.arrUsers.findIndex(function (us) { return us.id === newUser.id; });
                        this.arrUsers.splice(index, 1, newUser);
                        this.editStatus = false;
                        this.inputType = "password";
                        this.mainButton = "add user";
                    }
                    else {
                        this.arrUsers.push(newUser);
                    }
                    this.userLogin = "";
                    this.userPassword = "";
                    this.userEmail = "";
                };
                WorkAddUsersComponent.prototype.deleteUser = function (user) {
                    var index = this.arrUsers.findIndex(function (us) { return us.id === user.id; });
                    this.arrUsers.splice(index, 1);
                };
                WorkAddUsersComponent.prototype.editUser = function (user) {
                    this.userLogin = user.login;
                    this.userPassword = user.password;
                    this.userEmail = user.email;
                    this.userId = user.id;
                    this.editStatus = true;
                    this.inputType = "text";
                    this.mainButton = "save edit user";
                };
                return WorkAddUsersComponent;
            }());
            WorkAddUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-work-add-users",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-add-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work-add-users/work-add-users.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-add-users.component.css */ "./src/app/work/work-add-users/work-add-users.component.css")).default]
                })
            ], WorkAddUsersComponent);
            /***/ 
        }),
        /***/ "./src/app/work/work-cenzor/work-cenzor.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/work/work-cenzor/work-cenzor.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-sign {\r\n  display: flex;\r\n  height: 100vh;\r\n}\r\n\r\n.btn-block {\r\n  width: 50%;\r\n}\r\n\r\n.form-group {\r\n  width: 50%;\r\n}\r\n\r\n.form-label-group {\r\n  width: 50%;\r\n  text-align: start\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n\r\n}\r\n\r\n.h3 {\r\n  display: flex;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  height: 3.125rem;\r\n  padding: .75rem;\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default <label> margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  pointer-events: none;\r\n  cursor: text;\r\n  /* Match the input under the label */\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-moz-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: 1.25rem;\r\n  padding-bottom: .25rem;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown)~label {\r\n  padding-top: .25rem;\r\n  padding-bottom: .25rem;\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\n/* Fallback for Edge\r\n-------------------------------------------------- */\r\n\r\n@supports (-ms-ime-align: auto) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n\r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n\r\n/* Fallback for IE\r\n-------------------------------------------------- */\r\n\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n\r\n  .form-label-group input:-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n\r\n#formSignIn {\r\n  display: none;\r\n}\r\n\r\n.card-img img {\r\n  width: 30%;\r\n}\r\n\r\n.card-img .badge {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 150px;\r\n}\r\n\r\n.card-detail span {\r\n  color: #a2a2a2;\r\n  font-size: 20px;\r\n}\r\n\r\n.border {\r\n  width: 20%;\r\n}\r\n\r\n.card-icon span i {\r\n  font-size: 25px;\r\n  margin: 10px;\r\n  color: #000;\r\n}\r\n\r\n.card-icon a .fa-twitter:hover {\r\n  color: #00ACED;\r\n}\r\n\r\n.card-icon a .fa-instagram:hover {\r\n  color: #D93965;\r\n}\r\n\r\n.card-icon a .fa-facebook:hover {\r\n  color: #3B5998;\r\n}\r\n\r\n#profileCard {\r\n  display: none;\r\n}\r\n\r\n/* #tooltipSignIn{\r\n position: relative;\r\n visibility: hidden;\r\n display: block;\r\n} */\r\n\r\n.inputError {\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border-color: #f1424b;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25)\r\n}\r\n\r\n.areaError {\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border-color: #f1424b;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25)\r\n}\r\n\r\n.textRed {\r\n  color: red;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLWNlbnpvci93b3JrLWNlbnpvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVjtBQUNGOztBQUlBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1COzs7QUFHckI7O0FBSUE7RUFDRSxhQUFhO0FBQ2Y7O0FBTUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBTUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO29EQUNvRDs7QUFDcEQ7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO29EQUNvRDs7QUFDcEQ7RUFFRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7O0dBSUc7O0FBR0g7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Y7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVjtBQUNGOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLWNlbnpvci93b3JrLWNlbnpvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tc2lnbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYnRuLWJsb2NrIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnRcclxufVxyXG5cclxuXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4uaDMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmlucHV0LFxyXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcclxuICBwYWRkaW5nOiAuNzVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAvKiBPdmVycmlkZSBkZWZhdWx0IDxsYWJlbD4gbWFyZ2luICovXHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjdXJzb3I6IHRleHQ7XHJcbiAgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcclxuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbn1cclxuXHJcbi8qIEZhbGxiYWNrIGZvciBJRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLFxyXG4oLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xyXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG59XHJcblxyXG4jZm9ybVNpZ25JbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtaW1nIGltZyB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmNhcmQtaW1nIC5iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWRldGFpbCBzcGFuIHtcclxuICBjb2xvcjogI2EyYTJhMjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5jYXJkLWljb24gc3BhbiBpIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIGEgLmZhLXR3aXR0ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDBBQ0VEO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIGEgLmZhLWluc3RhZ3JhbTpob3ZlciB7XHJcbiAgY29sb3I6ICNEOTM5NjU7XHJcbn1cclxuXHJcbi5jYXJkLWljb24gYSAuZmEtZmFjZWJvb2s6aG92ZXIge1xyXG4gIGNvbG9yOiAjM0I1OTk4O1xyXG59XHJcblxyXG4jcHJvZmlsZUNhcmQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qICN0b29sdGlwU2lnbklue1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gZGlzcGxheTogYmxvY2s7XHJcbn0gKi9cclxuXHJcblxyXG4uaW5wdXRFcnJvciB7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICNmMTQyNGI7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDAsIDAsIDAuMjUpXHJcbn1cclxuXHJcbi5hcmVhRXJyb3Ige1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjE0MjRiO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAwLCAwLCAwLjI1KVxyXG59XHJcblxyXG4udGV4dFJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/work/work-cenzor/work-cenzor.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/work/work-cenzor/work-cenzor.component.ts ***!
          \***********************************************************/
        /*! exports provided: WorkCenzorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkCenzorComponent", function () { return WorkCenzorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WorkCenzorComponent = /** @class */ (function () {
                function WorkCenzorComponent() {
                    this.title = "cenzor";
                    this.arrBadWord = [];
                    this.searchBad = [];
                    this.allText = "";
                    this.inputPlaceholderError = "text hear...";
                    this.areaPlaceholderError = "write some text";
                }
                WorkCenzorComponent.prototype.ngOnInit = function () { };
                WorkCenzorComponent.prototype.addBadWords = function () {
                    if (this.textSearch) {
                        this.allText = "";
                        this.arrBadWord.push(this.textSearch);
                        this.allText += this.arrBadWord;
                        this.textSearch = "";
                        this.isError = false;
                        this.inputPlaceholderError = "text hear...";
                    }
                    else {
                        this.isError = true;
                        this.inputPlaceholderError = "Input is empty";
                    }
                };
                WorkCenzorComponent.prototype.reset = function () {
                    this.arrBadWord = [];
                    this.allText = "";
                    this.textArea = "";
                };
                WorkCenzorComponent.prototype.censor = function () {
                    var _this = this;
                    if (this.textArea) {
                        this.searchBad = this.textArea
                            .replace(/[.,\/#?!$%\;;{}=\-_`~()]/g, "")
                            .split(" ");
                        this.arrBadWord.forEach(function (el) {
                            _this.searchBad.forEach(function (item, index) {
                                if (el === item) {
                                    item = item.replace(item, "*".repeat(item.length));
                                    _this.searchBad.splice(index, 1, item);
                                }
                            });
                        });
                        this.textArea = this.searchBad.join(" ");
                        this.areaIsError = false;
                        this.areaPlaceholderError = "write some text";
                    }
                    else {
                        this.areaPlaceholderError = "please write a text";
                        this.areaIsError = true;
                    }
                };
                return WorkCenzorComponent;
            }());
            WorkCenzorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-work-cenzor",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-cenzor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work-cenzor/work-cenzor.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-cenzor.component.css */ "./src/app/work/work-cenzor/work-cenzor.component.css")).default]
                })
            ], WorkCenzorComponent);
            /***/ 
        }),
        /***/ "./src/app/work/work-tasklist/work-tasklist.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/work/work-tasklist/work-tasklist.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn {\r\n  width: 90%;\r\n  vertical-align: middle;\r\n}\r\n\r\n.green {\r\n  color: green;\r\n}\r\n\r\n.tomato {\r\n  color: tomato;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLXRhc2tsaXN0L3dvcmstdGFza2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmstdGFza2xpc3Qvd29yay10YXNrbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnRvbWF0byB7XHJcbiAgY29sb3I6IHRvbWF0bztcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/work/work-tasklist/work-tasklist.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/work/work-tasklist/work-tasklist.component.ts ***!
          \***************************************************************/
        /*! exports provided: WorkTasklistComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTasklistComponent", function () { return WorkTasklistComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_classes_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/classes/task.model */ "./src/app/shared/classes/task.model.ts");
            var WorkTasklistComponent = /** @class */ (function () {
                function WorkTasklistComponent() {
                    this.arrTask = [
                        { id: 1, name: "html", status: "Done", check: true },
                        { id: 2, name: "css", status: "Done", check: true },
                        { id: 3, name: "sass", status: "IN PROGRESS", check: false }
                    ];
                    this.taskStatus = "IN PROGRESS";
                }
                WorkTasklistComponent.prototype.ngOnInit = function () { };
                WorkTasklistComponent.prototype.AddTask = function () {
                    var newTask = new src_app_shared_classes_task_model__WEBPACK_IMPORTED_MODULE_2__["Task"](1, this.taskName, this.taskStatus, this.checkTask);
                    if (this.arrTask.length > 0) {
                        newTask.id = this.arrTask.slice(-1)[0].id + 1;
                    }
                    this.arrTask.push(newTask);
                    this.taskName = '';
                    console.log(newTask);
                };
                WorkTasklistComponent.prototype.checkBox = function (event, arrTask) {
                    console.log(event.target.checked);
                    if (event.target.checked) {
                        arrTask.status = "Done";
                        arrTask.check = true;
                        console.log(this.arrTask);
                    }
                    else {
                        arrTask.status = "IN PROGRESS";
                        arrTask.check = false;
                        console.log(this.arrTask);
                    }
                };
                WorkTasklistComponent.prototype.deleteTask = function (task) {
                    var index = this.arrTask.findIndex(function (ts) { return ts.id === task.id; });
                    this.arrTask.splice(index, 1);
                };
                WorkTasklistComponent.prototype.editTask = function (task) {
                    this.renameTask = task.name;
                    this.idTask = task.id;
                    this.editTaskShow = !this.editTaskShow;
                };
                WorkTasklistComponent.prototype.editSave = function () {
                    var _this = this;
                    this.editTaskShow = !this.editTaskShow;
                    this.arrTask.find(function (element) { return element.id === _this.idTask ? (element.name = _this.renameTask) : undefined; });
                };
                return WorkTasklistComponent;
            }());
            WorkTasklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-work-tasklist",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-tasklist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work-tasklist/work-tasklist.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-tasklist.component.css */ "./src/app/work/work-tasklist/work-tasklist.component.css")).default]
                })
            ], WorkTasklistComponent);
            /***/ 
        }),
        /***/ "./src/app/work/work.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/work/work.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n  margin-top: 5vh;\r\n\r\n}\r\n\r\n.card {\r\n  height: 95vh;\r\n\r\n}\r\n\r\n.work__pointers {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  display: flex;\r\n  align-items: center;\r\n  padding-right: 30px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.work__pointers--right {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: auto;\r\n  padding: 0;\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsVUFBVTs7O0FBR1oiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcblxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgaGVpZ2h0OiA5NXZoO1xyXG5cclxufVxyXG5cclxuLndvcmtfX3BvaW50ZXJzIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi53b3JrX19wb2ludGVycy0tcmlnaHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuXHJcblxyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/work/work.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/work/work.component.ts ***!
          \****************************************/
        /*! exports provided: WorkComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function () { return WorkComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WorkComponent = /** @class */ (function () {
                function WorkComponent() {
                }
                WorkComponent.prototype.ngOnInit = function () {
                };
                return WorkComponent;
            }());
            WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-work',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/work/work.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")).default]
                })
            ], WorkComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Angular\routing\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map