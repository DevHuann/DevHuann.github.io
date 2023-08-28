function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/About/About.component.ts":
  /*!******************************************!*\
    !*** ./src/app/About/About.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/configuration.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AboutComponent_div_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2);
      }
    }

    function AboutComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AboutComponent_div_13_div_1_Template, 3, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var indexElement_r3 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", indexElement_r3 % 2 == 1);
      }
    }

    function AboutComponent_div_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6);
      }
    }

    function AboutComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AboutComponent_div_14_div_1_Template, 3, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var indexElement_r7 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", indexElement_r7 % 2 == 0);
      }
    }

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(elem) {
        _classCallCheck(this, AboutComponent);

        this.elem = elem;
        this.aboutMe = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].aboutMe;
        this.skills = _configuration__WEBPACK_IMPORTED_MODULE_0__["Skills"];
        this.words = ['Huan  ', 'a web developer  '];
        this.counter = 0; // direction must only be 1 or -1

        this.direction = 1;
        this.characterIndex = 0;
        this.textToShow = '';
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.startTyping(); // Gọi hàm startTyping trong ngOnInit
        }
      }, {
        key: "startTyping",
        value: function startTyping() {
          var _this = this;

          setInterval(function () {
            if (_this.direction === -1 && _this.characterIndex <= 0) {
              _this.counter = _this.counter === _this.words.length - 1 ? 0 : _this.counter + 1;
              _this.direction = 1;
            }

            var currentWord = _this.words[_this.counter];
            _this.textToShow = currentWord.slice(0, _this.characterIndex); // Sử dụng textToShow thay vì thay đổi DOM

            _this.characterIndex += _this.direction;

            if (_this.direction === 1 && _this.characterIndex > currentWord.length - 1) {
              _this.direction = -1;
            }
          }, 100);
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-About"]],
      decls: 17,
      vars: 3,
      consts: [[1, "about-top"], [1, "text-center", 2, "letter-spacing", "10px", "display", "flex", "flex-direction", "column", "justify-content", "space-around"], [1, ""], [1, "about-content"], [1, "row", "ml-1"], [1, "col-md-7"], [1, "ml-2", "row", "align-items-end", 2, "height", "30%"], [2, "color", "blue", "margin-top", "20px"], [2, "height", "70%"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], ["src", "./assets/images/about.svg", 1, "img-fluid", "about-svg"], [4, "ngIf"], [1, "skill-box"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Hello & Welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "My Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AboutComponent_div_13_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AboutComponent_div_14_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("I'm ", ctx.textToShow, " |");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skills);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".about-top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35%;\n  background: rgba(196, 196, 196, 0.3);\n  border-radius: 0px 0px 45% 15%;\n  line-height: 50px;\n}\n.about-top[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.about-top[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.about-title[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  margin-top: 18px;\n  line-height: 30px;\n  text-align: center;\n  color: #000000;\n}\n.about-desc[_ngcontent-%COMP%] {\n  margin: 0px 50px 0px 50px;\n  font-family: \"Inter\", sans-serif;\n  text-justify: auto;\n  font-size: 1vw;\n  line-height: 35px;\n  text-indent: 5%;\n  color: #000000;\n}\n.about-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 55%;\n}\n.about-svg[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 550px;\n}\n.skill-box[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 30px;\n  background: rgba(196, 196, 196, 0.3);\n  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25);\n  font-family: \"Inter\", sans-serif;\n  text-align: center;\n  padding: 2px 4px;\n  margin: 10px;\n  color: black;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWJvdXQvQzpcXFVzZXJzXFxERUxMXFxXZWJzdG9ybVByb2plY3RzXFxhbmd1bGFyLWRldi1wb3J0Zm9saW8vc3JjXFxhcHBcXEFib3V0XFxBYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWJvdXQvQWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FEQ0k7RUFDRSxnQkFBQTtBQ0NOO0FERUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRjtBRENBO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFRjtBREFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNHSjtBRERBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNJSjtBREZBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9BYm91dC9BYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC10b3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzUlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDQ1JSAxNSU7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgLnRleHQtY2VudGVyIHtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O31cclxuICB9XHJcbn1cclxuLmFib3V0LXRpdGxlIHtcclxuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5hYm91dC1kZXNjIHtcclxuICBtYXJnaW46IDBweCA1MHB4IDBweCA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtaW5kZW50OiA1JTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uYWJvdXQtY29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcbn1cclxuLmFib3V0LXN2Z3tcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbn1cclxuLnNraWxsLWJveHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycHggNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxufVxyXG4iLCIuYWJvdXQtdG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzUlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNDUlIDE1JTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG4uYWJvdXQtdG9wIC50ZXh0LWNlbnRlciBoMyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uYWJvdXQtdG9wIC50ZXh0LWNlbnRlciBoNCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hYm91dC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYWJvdXQtZGVzYyB7XG4gIG1hcmdpbjogMHB4IDUwcHggMHB4IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtanVzdGlmeTogYXV0bztcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWluZGVudDogNSU7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYWJvdXQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLmFib3V0LXN2ZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cblxuLnNraWxsLWJveCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-About',
          templateUrl: './About.component.html',
          styleUrls: ['./About.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Contact/Contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/Contact/Contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../configuration */
    "./src/app/configuration.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this._userAddress = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].userAddress;
        this._userPhone = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].userPhone;
        this._userEmail = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].userEmail;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-Contact"]],
      decls: 32,
      vars: 0,
      consts: [[1, "row", "ml-1"], [1, "col"], [1, "testimonial-card"], ["src", "../assets/images/Contact.svg", 1, "img-fluid", "contact-image"], [1, "row"], [1, "col-md-2"], [1, "contact-card"], [1, "form-group"], [1, "mb-3"], [1, "input-group", "mb-4"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user", "text-info"], ["type", "text", "id", "FullName", "placeholder", "Full Name", 1, "form-control"], [1, "fa", "fa-envelope", "text-info"], ["type", "email", "id", "Email", "placeholder", "test@gmail.com", 1, "form-control"], [1, "fa", "fa-comment", "text-info"], ["placeholder", "Your Message", 1, "form-control"], [1, "text-center"], ["type", "submit", "value", "Send", 1, "btn", "btn-info", "btn-block", "rounded-0", "py-2"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Get in Touch with us");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: [".contact-card[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    height: 250px;\r\n    font-family: 'Inter',sans-serif;\r\n}\r\n.contact-image[_ngcontent-%COMP%]{\r\n    width: 370px;\r\n    height: 320px;\r\n    display: block;\r\n    margin: auto;\r\n    padding-bottom: 40px;\r\n}\r\n.contact-card[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{\r\n    font-family: 'Inter',sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29udGFjdC9Db250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL0NvbnRhY3QvQ29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtY2FyZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XHJcbn1cclxuLmNvbnRhY3QtaW1hZ2V7XHJcbiAgICB3aWR0aDogMzcwcHg7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG4uY29udGFjdC1jYXJkPmZvcm0+aDR7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-Contact',
          templateUrl: './Contact.component.html',
          styleUrls: ['./Contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Nav/Nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/Nav/Nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/about"];
    };

    var _c1 = function _c1() {
      return ["/resume"];
    };

    var _c2 = function _c2() {
      return ["/services"];
    };

    var _c3 = function _c3() {
      return ["/testimonials"];
    };

    var _c4 = function _c4() {
      return ["/contact"];
    };

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-Nav"]],
      decls: 18,
      vars: 10,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["id", "navbarColor03", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Achievement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".nav-link[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTmF2L0M6XFxVc2Vyc1xcREVMTFxcV2Vic3Rvcm1Qcm9qZWN0c1xcYW5ndWxhci1kZXYtcG9ydGZvbGlvL3NyY1xcYXBwXFxOYXZcXE5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvTmF2L05hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL05hdi9OYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmt7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59IiwiLm5hdi1saW5rIHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-Nav',
          templateUrl: './Nav.component.html',
          styleUrls: ['./Nav.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Profile/Profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/Profile/Profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../configuration */
    "./src/app/configuration.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileComponent_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 22);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0._profileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ProfileComponent_i_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 23);
      }
    }

    function ProfileComponent_i_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 24);
      }
    }

    function ProfileComponent_i_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 25);
      }
    }

    function ProfileComponent_i_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 26);
      }
    }

    function ProfileComponent_i_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 27);
      }
    }

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);

        this._profileUrl = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].profileUrl;
        this._github = _configuration__WEBPACK_IMPORTED_MODULE_0__["SocialMedia"].github;
        this._instagram = _configuration__WEBPACK_IMPORTED_MODULE_0__["SocialMedia"].instagram;
        this._facebook = _configuration__WEBPACK_IMPORTED_MODULE_0__["SocialMedia"].facebook;
        this._twitter = _configuration__WEBPACK_IMPORTED_MODULE_0__["SocialMedia"].twitter;
        this._linkedin = _configuration__WEBPACK_IMPORTED_MODULE_0__["SocialMedia"].linkedin;
        this._medium = _configuration__WEBPACK_IMPORTED_MODULE_0__["SocialMedia"].medium;
        this._userName = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].userName;
        this._userJob = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].userJob;
        this._userLocation = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].userLocation;
        this._userDateOfBirth = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].userDateOfBirth;
        this._userEmail = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].userEmail;
        this._userPhone = _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].userPhone;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-Profile"]],
      decls: 40,
      vars: 12,
      consts: [["class", "img-fluid rounded", "alt", "Profile Photo", "width", "200px", "height", "200px", "style", "margin-left: auto;margin-right: auto;display: block", 3, "src", 4, "ngIf"], [1, "mt-2", "text-center"], [1, "text-center"], [1, "container-fluid", "about-me", 2, "width", "300px"], ["aria-hidden", "true", 1, "fa", "fa-map-marker", "text-right"], ["href", "https://phanvanhuan.com/mailTo:phanvanhuan2009@gmail.com"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o", "text-right"], ["aria-hidden", "true", 1, "fa", "fa-birthday-cake", "text-right"], ["href", "tel:0367813537"], ["aria-hidden", "true", 1, "fa", "fa-phone", "text-right"], [1, "row", "d-flex", "align-content-end"], [1, "col-md-12", "social-media"], ["href", "https://www.instagram.com/huanphan2009/"], ["style", "color: purple;", "class", "fa fa-instagram profile-icon", "aria-hidden", "true", 4, "ngIf"], ["href", "https://www.linkedin.com/in/hu%C3%A2n-phan-484669248/"], ["style", "color: darkblue;", "class", "fa fa-linkedin profile-icon", "aria-hidden", "true", 4, "ngIf"], ["href", "https://twitter.com/HuanPhan2009"], ["style", "color: aqua;", "class", "fa fa-twitter profile-icon", "aria-hidden", "true", 4, "ngIf"], ["href", "https://www.facebook.com/100046993239182/"], ["style", "color: darkblue;", "class", "fa fa-facebook profile-icon", "aria-hidden", "true", 4, "ngIf"], ["href", "https://github.com/DevHuann"], ["style", "color: black;", "class", "fa fa-github profile-icon", "aria-hidden", "true", 4, "ngIf"], ["alt", "Profile Photo", "width", "200px", "height", "200px", 1, "img-fluid", "rounded", 2, "margin-left", "auto", "margin-right", "auto", "display", "block", 3, "src"], ["aria-hidden", "true", 1, "fa", "fa-instagram", "profile-icon", 2, "color", "purple"], ["aria-hidden", "true", 1, "fa", "fa-linkedin", "profile-icon", 2, "color", "darkblue"], ["aria-hidden", "true", 1, "fa", "fa-twitter", "profile-icon", 2, "color", "aqua"], ["aria-hidden", "true", 1, "fa", "fa-facebook", "profile-icon", 2, "color", "darkblue"], ["aria-hidden", "true", 1, "fa", "fa-github", "profile-icon", 2, "color", "black"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_img_1_Template, 1, 1, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProfileComponent_i_31_Template, 1, 0, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ProfileComponent_i_33_Template, 1, 0, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ProfileComponent_i_35_Template, 1, 0, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ProfileComponent_i_37_Template, 1, 0, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ProfileComponent_i_39_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._profileUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._userJob);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._userLocation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._userEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._userDateOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._userPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._instagram);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._linkedin);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._twitter);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._facebook);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._github);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".profile-icon[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n    width: 30px;\r\n    color:black;\r\n    padding: 2px;\r\n    text-align: center;\r\n}\r\n.social-media[_ngcontent-%COMP%]{\r\n    margin:20px 0px 0px 0px;\r\n    text-align: center;\r\n    font-family: \"Inter\", sans-serif;\r\n    border: 1px solid lightgray;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n}\r\n.about-me[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{\r\n    margin-bottom:5px;\r\n    margin-right: 5px;\r\n    width: 30px;\r\n}\r\n.about-me[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{\r\n  margin-bottom:5px;\r\n  margin-right: 5px;\r\n  width: 30px;\r\n}\r\n.about-me[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\r\n    font-size: 0.7vw;\r\n}\r\n.container-fluid[_ngcontent-%COMP%]{\r\n    margin-left: -15px !important;\r\n}\r\n.text-center[_ngcontent-%COMP%]{\r\n    font-family: \"Inter\", sans-serif !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUHJvZmlsZS9Qcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDJDQUEyQztBQUMvQyIsImZpbGUiOiJzcmMvYXBwL1Byb2ZpbGUvUHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaWNvbntcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNvY2lhbC1tZWRpYXtcclxuICAgIG1hcmdpbjoyMHB4IDBweCAwcHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmFib3V0LW1lPnA+YT5pe1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcbi5hYm91dC1tZT5wPml7XHJcbiAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLmFib3V0LW1lPnB7XHJcbiAgICBmb250LXNpemU6IDAuN3Z3O1xyXG59XHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-Profile',
          templateUrl: './Profile.component.html',
          styleUrls: ['./Profile.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Resume/Resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/Resume/Resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../configuration */
    "./src/app/configuration.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResumeComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r2.company, " ( ", item_r2.date, " ) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.rank);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.description);
      }
    }

    function ResumeComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r3.school, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.description);
      }
    }

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);

        this._jobs = _configuration__WEBPACK_IMPORTED_MODULE_0__["JobExperience"];
        this._educations = _configuration__WEBPACK_IMPORTED_MODULE_0__["Education"];
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)();
    };

    ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-Resume"]],
      decls: 11,
      vars: 2,
      consts: [[1, "row", "middle-line"], [1, "col", "ml-3"], ["src", "./assets/images/Experience.svg", 1, "img-fluid", "float-right"], [1, "resume-title", "text-center"], [4, "ngFor", "ngForOf"], [1, "col"], ["src", "../assets/images/education.svg", 1, "img-fluid", "float-left"], [1, "resume-card"], [1, "resume-card-title"], ["aria-hidden", "true", 1, "fa", "fa-building", "resume-icon"], [2, "margin", "1px !important"], [1, "mb-auto"], ["aria-hidden", "true", 1, "fa", "fa-graduation-cap", "resume-icon"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Experiences");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ResumeComponent_div_5_Template, 10, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Educations");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ResumeComponent_div_10_Template, 10, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._jobs);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._educations);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 600px;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\nh4[_ngcontent-%COMP%]{\r\n    font-family: 'Inter', sans-serif;\r\n}\r\n.resume-card[_ngcontent-%COMP%]{\r\n    width: 320px;\r\n    min-height: 125px;\r\n    height: 100%;\r\n    \r\n}\r\n.resume-icon[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 25px;\r\n    color:green;\r\n}\r\n.icon-text[_ngcontent-%COMP%]{\r\n    margin-left: 0px;\r\n    margin-top: -20px;\r\n    float: left;\r\n}\r\n.middle-line[_ngcontent-%COMP%]{\r\n    border-right: 1px solid lightgray;\r\n}\r\n.resume-card-title[_ngcontent-%COMP%]{\r\n    color: black !important;\r\n    font-family: 'Inter', sans-serif;\r\n    min-height: 150px !important;\r\n}\r\n.resume-title[_ngcontent-%COMP%]{\r\n    color: blue !important;\r\n    font-family: 'Inter', sans-serif;\r\n    min-height: 150px !important;\r\n}\r\n.img-fluid[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    height: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVzdW1lL1Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtBQUNGO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvUmVzdW1lL1Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuaDR7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucmVzdW1lLWNhcmR7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMjVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qbWFyZ2luOiAwcHggMTVweDsqL1xyXG59XHJcbi5yZXN1bWUtaWNvbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgY29sb3I6Z3JlZW47XHJcbn1cclxuLmljb24tdGV4dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5taWRkbGUtbGluZXtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG4ucmVzdW1lLWNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xyXG4gICAgbWluLWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxufSAgIFxyXG4ucmVzdW1lLXRpdGxle1xyXG4gICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xyXG4gICAgbWluLWhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG4uaW1nLWZsdWlke1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-Resume',
          templateUrl: './Resume.component.html',
          styleUrls: ['./Resume.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/Services.component.ts":
  /*!************************************************!*\
    !*** ./src/app/Services/Services.component.ts ***!
    \************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../configuration */
    "./src/app/configuration.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ServicesComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r2.serviceName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.description);
      }
    }

    function ServicesComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ServicesComponent_div_2_div_1_Template, 7, 2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var indexElement_r3 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", indexElement_r3 % 2 == 0);
      }
    }

    function ServicesComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r6.serviceName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.description);
      }
    }

    function ServicesComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ServicesComponent_div_5_div_1_Template, 7, 2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var indexElement_r7 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", indexElement_r7 % 2 == 1);
      }
    }

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);

        this._services = _configuration__WEBPACK_IMPORTED_MODULE_0__["Services"];
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-Services"]],
      decls: 7,
      vars: 2,
      consts: [[1, "row", "mt-3"], [1, "col"], [4, "ngFor", "ngForOf"], ["src", "./assets/images/Design_Thinking.svg", 1, "img-fluid", "service-image"], ["src", "./assets/images/Skill.svg", 1, "img-fluid", "service-image"], ["class", "service-card ", 4, "ngIf"], [1, "service-card"], [1, "service-card-title"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-right", "service-icon"], [2, "margin", "3px !important"], [1, "mb-auto"], ["class", "service-card", 4, "ngIf"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ServicesComponent_div_2_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ServicesComponent_div_5_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._services);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._services);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n  justify-content: center;\n  align-items: center;\n}\n\n.service-card[_ngcontent-%COMP%] {\n  width: 320px;\n  min-height: 125px;\n  font-family: \"Inter\", sans-serif;\n  height: 100%;\n  \n}\n\n.service-icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 25px;\n  color: blue;\n}\n\n.icon-text[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  margin-top: -20px;\n  float: left;\n}\n\n.middle-line[_ngcontent-%COMP%] {\n  border-right: 1px solid lightgray;\n}\n\n.service-card-title[_ngcontent-%COMP%] {\n  color: black;\n  font-family: \"Inter\", sans-serif;\n  min-height: 150px !important;\n}\n\n.service-image[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  padding-bottom: 40px;\n  padding-left: 20px;\n}\n\n.col[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2VydmljZXMvQzpcXFVzZXJzXFxERUxMXFxXZWJzdG9ybVByb2plY3RzXFxhbmd1bGFyLWRldi1wb3J0Zm9saW8vc3JjXFxhcHBcXFNlcnZpY2VzXFxTZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvU2VydmljZXMvU2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNHRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFDRSxpQ0FBQTtBQ0tGOztBREhBO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0Usb0JBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL1NlcnZpY2VzL1NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5zZXJ2aWNlLWNhcmQge1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBtaW4taGVpZ2h0OiAxMjVweDtcclxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyptYXJnaW46IDBweCAxNXB4OyovXHJcbn1cclxuLnNlcnZpY2UtaWNvbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcbi5pY29uLXRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1pZGRsZS1saW5lIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuLnNlcnZpY2UtY2FyZC10aXRsZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlcnZpY2UtaW1hZ2V7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5jb2x7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn0gICAiLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VydmljZS1jYXJkIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBtaW4taGVpZ2h0OiAxMjVweDtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKm1hcmdpbjogMHB4IDE1cHg7Ki9cbn1cblxuLnNlcnZpY2UtaWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI1cHg7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uaWNvbi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWlkZGxlLWxpbmUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5zZXJ2aWNlLWNhcmQtdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZXJ2aWNlLWltYWdlIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uY29sIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-Services',
          templateUrl: './Services.component.html',
          styleUrls: ['./Services.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Testimonials/Testimonials.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/Testimonials/Testimonials.component.ts ***!
    \********************************************************/

  /*! exports provided: TestimonialsComponent */

  /***/
  function srcAppTestimonialsTestimonialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function () {
      return TestimonialsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/configuration.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TestimonialsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-size: cover;background-image: url('", item_r1.bg, "');");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r1.date, " - ", item_r1.category, " ");
      }
    }

    var TestimonialsComponent = /*#__PURE__*/function () {
      function TestimonialsComponent() {
        _classCallCheck(this, TestimonialsComponent);

        this._testimonials = _configuration__WEBPACK_IMPORTED_MODULE_1__["Testimonials"];
      }

      _createClass(TestimonialsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestimonialsComponent;
    }();

    TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) {
      return new (t || TestimonialsComponent)();
    };

    TestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestimonialsComponent,
      selectors: [["app-Testimonials"]],
      decls: 6,
      vars: 1,
      consts: [[1, "row", "ml-1"], [1, "col", "d-flex", "flex-row", "flex-wrap", 2, "justify-content", "space-evenly"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col"], ["src", "./assets/images/Skill.svg", 1, "img-fluid", "testimonial-image"], [3, "href"], [1, "testimonial-card"], [1, "testimonial-text", 2, "float", "left"], ["aria-hidden", "true", 1, "fa", "fa-quote-left", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-quote-right", "ml-2"], [1, "testimonial-text", 2, "float", "right"]],
      template: function TestimonialsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestimonialsComponent_div_2_Template, 9, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._testimonials);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 600px;\n  justify-content: center;\n  align-items: center;\n}\n.testimonial-icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100px;\n}\n.icon-text[_ngcontent-%COMP%] {\n  color: blue;\n  margin-left: 20px;\n  margin-top: -20px;\n  float: left;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 130px;\n  background-color: #f1ebeb;\n  margin: 20px 0px;\n  padding: 10px;\n  border-radius: 13px;\n  position: relative;\n}\n.testimonial-card[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  position: absolute;\n  border-radius: 13px;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n  \n  opacity: 1;\n  \n  pointer-events: none;\n}\n.testimonial-card[_ngcontent-%COMP%]:hover   .testimonial-text[_ngcontent-%COMP%] {\n  display: block;\n}\n.testimonial-text[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  font-size: small;\n  color: #f5f0f0;\n  display: none;\n  position: relative;\n  z-index: 1;\n  \n}\n.testimonial-image[_ngcontent-%COMP%] {\n  width: 370px;\n  height: 370px;\n  display: block;\n  margin: auto;\n  padding-bottom: 40px;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvVGVzdGltb25pYWxzL0M6XFxVc2Vyc1xcREVMTFxcV2Vic3Rvcm1Qcm9qZWN0c1xcYW5ndWxhci1kZXYtcG9ydGZvbGlvL3NyY1xcYXBwXFxUZXN0aW1vbmlhbHNcXFRlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FERUY7QUNBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FER0Y7QUNEQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBRElGO0FDRkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREtGO0FDSEU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUFzQyxzQ0FBQTtFQUN0QyxVQUFBO0VBQVksZ0NBQUE7RUFDWixvQkFBQTtBRE9KO0FDSEE7RUFDRSxjQUFBO0FETUY7QUNIQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUFZLHFEQUFBO0FET2Q7QUNMQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEUUoiLCJmaWxlIjoic3JjL2FwcC9UZXN0aW1vbmlhbHMvVGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRlc3RpbW9uaWFsLWljb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmljb24tdGV4dCB7XG4gIGNvbG9yOiBibHVlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGVzdGltb25pYWwtY2FyZCB7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWJlYjtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRlc3RpbW9uaWFsLWNhcmQ6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIC8qIE3DoHUgbuG7gW4gbeG7nSB24bubaSBhbHBoYSB0cmFuc3BhcmVuY3kgKi9cbiAgb3BhY2l0eTogMTtcbiAgLyogxJDhu5kgdHJvbmcgY+G7p2EgcHNldWRvLWVsZW1lbnQgKi9cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50ZXN0aW1vbmlhbC1jYXJkOmhvdmVyIC50ZXN0aW1vbmlhbC10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXN0aW1vbmlhbC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6ICNmNWYwZjA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgLyogxJDhurd0IHotaW5kZXggxJHhu4MgxJHhuqNtIGLhuqNvIHRleHQgaGnhu4NuIHRo4buLIHRyw6puIGzhu5twIG3hu50gKi9cbn1cblxuLnRlc3RpbW9uaWFsLWltYWdlIHtcbiAgd2lkdGg6IDM3MHB4O1xuICBoZWlnaHQ6IDM3MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSIsIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50ZXN0aW1vbmlhbC1pY29uIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5pY29uLXRleHQge1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50ZXN0aW1vbmlhbC1jYXJkIHtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlYmViO1xyXG4gIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjpob3Zlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTsgLyogTcOgdSBu4buBbiBt4budIHbhu5tpIGFscGhhIHRyYW5zcGFyZW5jeSAqL1xyXG4gICAgb3BhY2l0eTogMTsgLyogxJDhu5kgdHJvbmcgY+G7p2EgcHNldWRvLWVsZW1lbnQgKi9cclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnRlc3RpbW9uaWFsLWNhcmQ6aG92ZXIgLnRlc3RpbW9uaWFsLXRleHQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGVzdGltb25pYWwtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogI2Y1ZjBmMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxOyAvKiDEkOG6t3Qgei1pbmRleCDEkeG7gyDEkeG6o20gYuG6o28gdGV4dCBoaeG7g24gdGjhu4sgdHLDqm4gbOG7m3AgbeG7nSAqL1xyXG59XHJcbi50ZXN0aW1vbmlhbC1pbWFnZXtcclxuICAgIHdpZHRoOiAzNzBweDtcclxuICAgIGhlaWdodDogMzcwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-Testimonials',
          templateUrl: './Testimonials.component.html',
          styleUrls: ['./Testimonials.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Profile/Profile.component */
    "./src/app/Profile/Profile.component.ts");
    /* harmony import */


    var _Nav_Nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Nav/Nav.component */
    "./src/app/Nav/Nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 15,
      vars: 0,
      consts: [[1, "row", "d-flex", "vh-100", "align-items-center", 2, "margin-bottom", "-20px"], [1, "col"], [1, "col-md-2"], [1, "card"], [1, "card-body", "align-self-center", 2, "height", "700px"], [1, "col-md-5"], [2, "min-height", "700px !important", "background-color", "#ffffff", "height", "700px"], [1, "d-flex", "justify-content-center", "mb-10"], ["href", "https://github.com/DevHuann", "target", "blank", 1, "bg-light", "text-black", "lead", 2, "text-decoration", "none", "padding", "1px", "font-size", "11px", "border", "1px solid black", "border-radius", "2px"], ["aria-hidden", "true", 1, "fa", "fa-github"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-Nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fork us on Github ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_Profile_Profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _Nav_Nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _About_About_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./About/About.component */
    "./src/app/About/About.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _appRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./appRoutes */
    "./src/app/appRoutes.ts");
    /* harmony import */


    var _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Profile/Profile.component */
    "./src/app/Profile/Profile.component.ts");
    /* harmony import */


    var _Nav_Nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Nav/Nav.component */
    "./src/app/Nav/Nav.component.ts");
    /* harmony import */


    var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Contact/Contact.component */
    "./src/app/Contact/Contact.component.ts");
    /* harmony import */


    var _Services_Services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Services/Services.component */
    "./src/app/Services/Services.component.ts");
    /* harmony import */


    var _Testimonials_Testimonials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Testimonials/Testimonials.component */
    "./src/app/Testimonials/Testimonials.component.ts");
    /* harmony import */


    var _Resume_Resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Resume/Resume.component */
    "./src/app/Resume/Resume.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_appRoutes__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _About_About_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _Nav_Nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _Services_Services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"], _Testimonials_Testimonials_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialsComponent"], _Resume_Resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _About_About_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _Profile_Profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _Nav_Nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _Services_Services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"], _Testimonials_Testimonials_component__WEBPACK_IMPORTED_MODULE_10__["TestimonialsComponent"], _Resume_Resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_appRoutes__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"])],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/appRoutes.ts":
  /*!******************************!*\
    !*** ./src/app/appRoutes.ts ***!
    \******************************/

  /*! exports provided: AppRoutes */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
      return AppRoutes;
    });
    /* harmony import */


    var _Resume_Resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Resume/Resume.component */
    "./src/app/Resume/Resume.component.ts");
    /* harmony import */


    var _Services_Services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Services/Services.component */
    "./src/app/Services/Services.component.ts");
    /* harmony import */


    var _Testimonials_Testimonials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Testimonials/Testimonials.component */
    "./src/app/Testimonials/Testimonials.component.ts");
    /* harmony import */


    var _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Contact/Contact.component */
    "./src/app/Contact/Contact.component.ts");
    /* harmony import */


    var _About_About_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./About/About.component */
    "./src/app/About/About.component.ts");

    var AppRoutes = [{
      path: "about",
      component: _About_About_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: "testimonials",
      component: _Testimonials_Testimonials_component__WEBPACK_IMPORTED_MODULE_2__["TestimonialsComponent"]
    }, {
      path: "services",
      component: _Services_Services_component__WEBPACK_IMPORTED_MODULE_1__["ServicesComponent"]
    }, {
      path: "contact",
      component: _Contact_Contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }, {
      path: "resume",
      component: _Resume_Resume_component__WEBPACK_IMPORTED_MODULE_0__["ResumeComponent"]
    }, {
      path: "**",
      component: _About_About_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
      pathMatch: "full"
    }];
    /***/
  },

  /***/
  "./src/app/configuration.ts":
  /*!**********************************!*\
    !*** ./src/app/configuration.ts ***!
    \**********************************/

  /*! exports provided: Configuration, Skills, JobExperience, Education, Services, Testimonials, SocialMedia */

  /***/
  function srcAppConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Skills", function () {
      return Skills;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobExperience", function () {
      return JobExperience;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Education", function () {
      return Education;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Services", function () {
      return Services;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Testimonials", function () {
      return Testimonials;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialMedia", function () {
      return SocialMedia;
    });

    var Configuration = {
      profileUrl: './assets/images/avatar.jpg',
      userName: 'Huan Phan',
      userJob: 'Web Developer',
      userLocation: 'HaiDuong',
      userEmail: 'phanvanhuan2009@gmail',
      userDateOfBirth: '20/09/2002',
      userAddress: 'TuKy / HaiDuong',
      userPhone: '+84 367 813 537',
      aboutMe: 'Huan Phan . I am fullstack developer and blogger. I interested in .net technologies for backend and angular for frontend. You can read my articles on medium.'
    }; // Personal Informations

    var Skills = ['C#', '.Net Core', 'Angular', 'Asp.Net', 'Typescript', 'Javascript', 'Java']; // Max skills limit is 6 . If you add more than 6 skill , you may be disappointed.

    var JobExperience = [{
      company: 'WEB DEVELOPMENT',
      rank: '',
      date: ' ',
      description: 'My team design and program website and mobile application according to customer requirements.'
    }, {
      company: 'WEB DESIGN',
      rank: '',
      date: '',
      description: 'My team design and program website and mobile application according to customer requirements.'
    }]; // Max job experiences limit is 3 . If you add more than 3 skill , you may be disappointed.

    var Education = [{
      school: 'SaoDo University',
      date: '09/2020 - Present',
      description: 'University course 11 Information Technology 1.'
    }, {
      school: 'Khuc Thua Du High School',
      date: '09/2017 - 07/2020',
      description: 'DK18 Khuc Thua Du High School.'
    }]; // Max education limit is 3 . If you add more than 3 skill , you may be disappointed.

    var Services = [{
      serviceName: 'Web Design',
      description: ''
    }, {
      serviceName: 'Desktop Development',
      description: ''
    }, {
      serviceName: 'Software Architecture',
      description: ''
    }, {
      serviceName: 'Social Media Management',
      description: ''
    }, {
      serviceName: 'Logo Design',
      description: ''
    }]; // Max services limit is 6 . If you add more than 6 skill , you may be disappointed.

    var Testimonials = [{
      date: '3/2022',
      category: 'Website',
      description: 'First personal website using angular framework.',
      bg: './assets/images/bg_achievement/3_2022.png',
      review: 85,
      url: 'https://phanvanhuan.com'
    }, {
      date: '7/2023',
      category: 'Website',
      description: 'SaoDo 360 - Scientific research project at SaoDo University achieved excellent results.',
      bg: './assets/images/bg_achievement/7_2023.png',
      review: 80,
      url: 'http://phanvanhuan.lovestoblog.com'
    }]; // Max testimonials limit is 4 . If you add more than 4 skill , you may be disappointed.

    var SocialMedia = {
      github: 'github.com',
      instagram: 'instagram.com',
      twitter: 'twitter.com',
      linkedin: 'linkedin.com',
      medium: 'medium.com',
      facebook: 'facebook.com'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\DELL\WebstormProjects\angular-dev-portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map