/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Ball.ts":
/*!************************!*\
  !*** ./src/ts/Ball.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Ball = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Shape.ts\");\n\nvar Ball = function (_super) {\n  __extends(Ball, _super);\n\n  function Ball(ctx, color, origin, radius) {\n    var _this = _super.call(this, ctx, color, origin) || this;\n\n    _this.radius = radius;\n    return _this;\n  }\n\n  Ball.prototype.init = function () {\n    setInterval(this.update, 10);\n  };\n\n  Ball.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  Ball.prototype.update = function () {\n    this.draw();\n  };\n\n  return Ball;\n}(Shape_1.Shape);\n\nexports.Ball = Ball;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQmFsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFLQTtFQUEwQkE7O0VBR3RCLGNBQVlDLEdBQVosRUFBMkNDLEtBQTNDLEVBQTBEQyxNQUExRCxFQUE0RkMsTUFBNUYsRUFBMEc7SUFBMUcsWUFDSUMsa0JBQU1KLEdBQU4sRUFBV0MsS0FBWCxFQUFrQkMsTUFBbEIsS0FBeUIsSUFEN0I7O0lBRUlHLEtBQUksQ0FBQ0YsTUFBTCxHQUFjQSxNQUFkOztFQUNIOztFQUVERztJQUNJQyxXQUFXLENBQUMsS0FBS0MsTUFBTixFQUFjLEVBQWQsQ0FBWDtFQUNILENBRkQ7O0VBSVNGLHNCQUFUO0lBQ0ksS0FBS04sR0FBTCxDQUFTUyxTQUFUO0lBQ0EsS0FBS1QsR0FBTCxDQUFTVSxTQUFULEdBQXFCLEtBQUtULEtBQTFCO0lBQ0EsS0FBS0QsR0FBTCxDQUFTVyxHQUFULENBQWEsS0FBS1QsTUFBTCxDQUFZVSxDQUF6QixFQUE0QixLQUFLVixNQUFMLENBQVlXLENBQXhDLEVBQTJDLEtBQUtWLE1BQWhELEVBQXdELENBQXhELEVBQTJEVyxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUFyRTtJQUNBLEtBQUtmLEdBQUwsQ0FBU2dCLElBQVQ7SUFDQSxLQUFLaEIsR0FBTCxDQUFTaUIsU0FBVDtFQUNILENBTlE7O0VBUVRYO0lBQ0ksS0FBS1ksSUFBTDtFQUNILENBRkQ7O0VBR0o7QUFBQyxDQXZCRCxDQUEwQkMsYUFBMUI7O0FBQWFDLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9CYWxsLnRzPzBmODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTaGFwZX0gZnJvbSBcIi4vU2hhcGVcIjtcclxuaW1wb3J0IHtpRHJhd2FibGV9IGZyb20gXCIuL2lEcmF3YWJsZVwiO1xyXG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9TZXR0aW5ncy9zZXR0aW5nc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCYWxsIGV4dGVuZHMgU2hhcGUgaW1wbGVtZW50cyBpRHJhd2FibGUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZywgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoY3R4LCBjb2xvciwgb3JpZ2luKTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlLCAxMCk7IC8vIEV4w6ljdXRlciBkcmF3KCkgdG91dGVzIGxlcyAxMCBtc1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJyaWRlIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiX19leHRlbmRzIiwiY3R4IiwiY29sb3IiLCJvcmlnaW4iLCJyYWRpdXMiLCJfc3VwZXIiLCJfdGhpcyIsIkJhbGwiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImFyYyIsIngiLCJ5IiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsImRyYXciLCJTaGFwZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Ball.ts\n");

/***/ }),

/***/ "./src/ts/Brick.ts":
/*!*************************!*\
  !*** ./src/ts/Brick.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Brick = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./Settings/settings */ \"./src/ts/Settings/settings.ts\");\n\nvar math_1 = __webpack_require__(/*! ./heplers/math */ \"./src/ts/heplers/math.ts\");\n\nvar Brick = function () {\n  function Brick(ctx, color, origin, dimensions) {\n    this.ctx = ctx;\n    this.origin = origin;\n    this.dimensions = dimensions;\n    this.color = settings_1.settings.brick.colors[(0, math_1.random)(0, settings_1.settings.brick.colors.length, false)];\n  }\n\n  Brick.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.rect(this.origin.x, this.origin.y, this.dimensions.width, this.dimensions.height);\n    this.ctx.closePath();\n    this.ctx.fill();\n  };\n\n  return Brick;\n}();\n\nexports.Brick = Brick;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQnJpY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTs7QUFDQTs7QUFFQTtFQU1JLGVBQVlBLEdBQVosRUFBNENDLEtBQTVDLEVBQTJEQyxNQUEzRCxFQUE2RkMsVUFBN0YsRUFBMEk7SUFDdEksS0FBS0gsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0UsTUFBTCxHQUFjQSxNQUFkO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7SUFDQSxLQUFLRixLQUFMLEdBQWFHLG9CQUFTQyxLQUFULENBQWVDLE1BQWYsQ0FBc0IsbUJBQU8sQ0FBUCxFQUFTRixvQkFBU0MsS0FBVCxDQUFlQyxNQUFmLENBQXNCQyxNQUEvQixFQUF1QyxLQUF2QyxDQUF0QixDQUFiO0VBQ0g7O0VBRURDO0lBQ0ksS0FBS1IsR0FBTCxDQUFTUyxTQUFUO0lBQ0EsS0FBS1QsR0FBTCxDQUFTVSxTQUFULEdBQW1CLEtBQUtULEtBQXhCO0lBQ0EsS0FBS0QsR0FBTCxDQUFTVyxJQUFULENBQWMsS0FBS1QsTUFBTCxDQUFZVSxDQUExQixFQUE2QixLQUFLVixNQUFMLENBQVlXLENBQXpDLEVBQTJDLEtBQUtWLFVBQUwsQ0FBZ0JXLEtBQTNELEVBQWlFLEtBQUtYLFVBQUwsQ0FBZ0JZLE1BQWpGO0lBQ0EsS0FBS2YsR0FBTCxDQUFTZ0IsU0FBVDtJQUNBLEtBQUtoQixHQUFMLENBQVNpQixJQUFUO0VBQ0gsQ0FORDs7RUFPSjtBQUFDLENBcEJEOztBQUFhQyxhQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQnJpY2sudHM/YmExMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NoYXBlfSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQge2lEcmF3YWJsZX0gZnJvbSBcIi4vaURyYXdhYmxlXCI7XHJcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL1NldHRpbmdzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7cmFuZG9tfSBmcm9tIFwiLi9oZXBsZXJzL21hdGhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmljayBpbXBsZW1lbnRzIGlEcmF3YWJsZXtcclxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIG9yaWdpbjp7eDogbnVtYmVyLCB5Om51bWJlcn1cclxuICAgIHByaXZhdGUgZGltZW5zaW9uczp7d2lkdGg6IG51bWJlciwgaGVpZ2h0Om51bWJlcn1cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHggOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIG9yaWdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBkaW1lbnNpb25zOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBzZXR0aW5ncy5icmljay5jb2xvcnNbcmFuZG9tKDAsc2V0dGluZ3MuYnJpY2suY29sb3JzLmxlbmd0aCwgZmFsc2UpXTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlPXRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55LHRoaXMuZGltZW5zaW9ucy53aWR0aCx0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImN0eCIsImNvbG9yIiwib3JpZ2luIiwiZGltZW5zaW9ucyIsInNldHRpbmdzXzEiLCJicmljayIsImNvbG9ycyIsImxlbmd0aCIsIkJyaWNrIiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwicmVjdCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Brick.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/ts/Rectangle.ts\");\n\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/ts/Ball.ts\");\n\nvar Brick_1 = __webpack_require__(/*! ./Brick */ \"./src/ts/Brick.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./Settings/settings */ \"./src/ts/Settings/settings.ts\");\n\nvar balls = [];\nvar canvas = document.getElementById('my-canvas');\nvar ctx = canvas.getContext('2d');\nvar shapes = [];\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar background = new Rectangle_1.Rectangle(ctx, 'black', {\n  x: 0,\n  y: 0\n}, {\n  width: canvas.width,\n  height: canvas.height\n});\nvar ball = new Ball_1.Ball(ctx, settings_1.settings.ball.color, {\n  x: settings_1.settings.ball.origin.x,\n  y: settings_1.settings.ball.origin.y\n}, settings_1.settings.ball.radius);\nvar barre = new Rectangle_1.Rectangle(ctx, settings_1.settings.barre.color, {\n  x: settings_1.settings.barre.positionX,\n  y: canvas.height - settings_1.settings.barre.height\n}, {\n  width: settings_1.settings.barre.width,\n  height: settings_1.settings.barre.height\n});\nvar intervalId = setInterval(draw, 10);\nvar bricks;\n\nfunction initBricks() {\n  bricks = new Array(settings_1.settings.nbLigne);\n\n  for (var i = 0; i < settings_1.settings.nbLigne; i++) {\n    bricks[i] = new Array(settings_1.settings.nbColonne);\n\n    for (var j = 0; j < settings_1.settings.nbColonne; j++) {\n      bricks[i][j] = 1;\n    }\n  }\n}\n\nfunction drawBricks() {\n  for (var i = 0; i < settings_1.settings.nbLigne; i++) {\n    for (var j = 0; j < settings_1.settings.nbColonne; j++) {\n      if (bricks[i][j] == 1) {\n        new Brick_1.Brick(ctx, 'blue', {\n          x: canvas.width / 3 + j * (settings_1.settings.brickWidth + settings_1.settings.padding) + settings_1.settings.padding,\n          y: i * (settings_1.settings.brickHeight + settings_1.settings.padding) + settings_1.settings.padding\n        }, {\n          width: settings_1.settings.brickWidth,\n          height: settings_1.settings.brickHeight\n        }).draw();\n      }\n    }\n  }\n}\n\nfunction clear() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  background.draw();\n}\n\nfunction draw() {\n  clear();\n  background.draw();\n  initBricks();\n  drawBricks();\n  barre.draw();\n  var ball = new Ball_1.Ball(ctx, settings_1.settings.ball.color, {\n    x: settings_1.settings.ball.origin.x,\n    y: settings_1.settings.ball.origin.y\n  }, settings_1.settings.ball.radius);\n  ball.draw();\n  if (settings_1.settings.ball.origin.x + settings_1.settings.ball.speedX > canvas.width || settings_1.settings.ball.origin.x + settings_1.settings.ball.speedX < 0) settings_1.settings.ball.speedX = -settings_1.settings.ball.speedX;\n  if (settings_1.settings.ball.origin.y + settings_1.settings.ball.speedY > canvas.height || settings_1.settings.ball.origin.y + settings_1.settings.ball.speedY < 0) settings_1.settings.ball.speedY = -settings_1.settings.ball.speedY;else if (settings_1.settings.ball.origin.y + settings_1.settings.ball.radius > canvas.height - settings_1.settings.barre.height) {\n    if (settings_1.settings.ball.origin.x > settings_1.settings.barre.positionX && settings_1.settings.ball.origin.x < settings_1.settings.barre.positionX + settings_1.settings.barre.width) {\n      settings_1.settings.ball.speedY = -settings_1.settings.ball.speedY;\n    } else {\n      clearInterval(intervalId);\n    }\n  }\n  settings_1.settings.ball.origin.x += settings_1.settings.ball.speedX;\n  settings_1.settings.ball.origin.y += settings_1.settings.ball.speedY;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDSDtFQUNKO0VBSUROLG9CQUFTRixJQUFULENBQWNJLE1BQWQsQ0FBcUJOLENBQXJCLElBQTBCSSxvQkFBU0YsSUFBVCxDQUFjeUIsTUFBeEM7RUFDQXZCLG9CQUFTRixJQUFULENBQWNJLE1BQWQsQ0FBcUJMLENBQXJCLElBQTBCRyxvQkFBU0YsSUFBVCxDQUFjMEIsTUFBeEM7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvTWFpbi50cz80ODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQge0JhbGx9IGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IHtCcmlja30gZnJvbSBcIi4vQnJpY2tcIjtcclxuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vU2V0dGluZ3Mvc2V0dGluZ3NcIjtcclxuXHJcbmNvbnN0IGJhbGxzOiBCYWxsW10gPSBbXTtcclxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbmNvbnN0IHNoYXBlczppRHJhd2FibGVbXSA9IFtdO1xyXG5cclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgUmVjdGFuZ2xlKGN0eCwnYmxhY2snLCB7eDowLHk6MH0sIHt3aWR0aDpjYW52YXMud2lkdGgsIGhlaWdodDpjYW52YXMuaGVpZ2h0fSk7XHJcbmxldCBiYWxsID0gbmV3IEJhbGwoY3R4LCBzZXR0aW5ncy5iYWxsLmNvbG9yLHt4OnNldHRpbmdzLmJhbGwub3JpZ2luLngsIHk6c2V0dGluZ3MuYmFsbC5vcmlnaW4ueX0sIHNldHRpbmdzLmJhbGwucmFkaXVzKVxyXG5sZXQgYmFycmUgPSBuZXcgUmVjdGFuZ2xlKGN0eCwgc2V0dGluZ3MuYmFycmUuY29sb3IsIHt4OiBzZXR0aW5ncy5iYXJyZS5wb3NpdGlvblgsIHk6IGNhbnZhcy5oZWlnaHQtc2V0dGluZ3MuYmFycmUuaGVpZ2h0fSx7d2lkdGg6IHNldHRpbmdzLmJhcnJlLndpZHRoLCBoZWlnaHQ6IHNldHRpbmdzLmJhcnJlLmhlaWdodH0pO1xyXG5sZXQgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGRyYXcsIDEwKTtcclxuXHJcbmxldCBicmlja3M6IGFueVtdO1xyXG5mdW5jdGlvbiBpbml0QnJpY2tzKCkge1xyXG4gICAgYnJpY2tzID0gbmV3IEFycmF5KHNldHRpbmdzLm5iTGlnbmUpO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgc2V0dGluZ3MubmJMaWduZTsgaSsrKSB7XHJcbiAgICAgICAgYnJpY2tzW2ldID0gbmV3IEFycmF5KHNldHRpbmdzLm5iQ29sb25uZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqIDwgc2V0dGluZ3MubmJDb2xvbm5lOyBqKyspIHtcclxuICAgICAgICAgICAgYnJpY2tzW2ldW2pdID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZHJhd0JyaWNrcygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3MubmJMaWduZTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZXR0aW5ncy5uYkNvbG9ubmU7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoYnJpY2tzW2ldW2pdID09IDEpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBCcmljayhjdHgsICdibHVlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjYW52YXMud2lkdGggLyAzICsgKGogKiAoc2V0dGluZ3MuYnJpY2tXaWR0aCArIHNldHRpbmdzLnBhZGRpbmcpKSArIHNldHRpbmdzLnBhZGRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IChpICogKHNldHRpbmdzLmJyaWNrSGVpZ2h0ICsgc2V0dGluZ3MucGFkZGluZykpICsgc2V0dGluZ3MucGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge3dpZHRoOiBzZXR0aW5ncy5icmlja1dpZHRoLCBoZWlnaHQ6IHNldHRpbmdzLmJyaWNrSGVpZ2h0fSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhcigpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJhY2tncm91bmQuZHJhdygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY2xlYXIoKTtcclxuICAgIGJhY2tncm91bmQuZHJhdygpOyAvLyBkZXNzaW5lIGxlIGJhY2tncm91bmRcclxuICAgIGluaXRCcmlja3MoKTtcclxuICAgIGRyYXdCcmlja3MoKTsgLy8gZGVzc2luZSBsZXMgYnJpcXVlc1xyXG5cclxuICAgIC8vIGRlc3NpbiBkZSBsYSBiYXJyZVxyXG4gICAgYmFycmUuZHJhdygpO1xyXG5cclxuICAgIC8vIGRlc3NpbiBkZSBsYSBiYWxsZVxyXG4gICAgbGV0IGJhbGwgPSBuZXcgQmFsbChjdHgsIHNldHRpbmdzLmJhbGwuY29sb3Ise3g6c2V0dGluZ3MuYmFsbC5vcmlnaW4ueCwgeTpzZXR0aW5ncy5iYWxsLm9yaWdpbi55fSwgc2V0dGluZ3MuYmFsbC5yYWRpdXMpXHJcbiAgICBiYWxsLmRyYXcoKTtcclxuXHJcbiAgICAvLyBMYSBiYWxsZSBlc3QtZWxsZSByZW50csOpZSBlbiBjb2xsaXNpb24gYXZlYyB1bmUgYnJpcXVlID9cclxuXHJcblxyXG4gICAgLy9Ew6l0ZWN0aW9uIGRlIGxhIGJhbGxlIHN1ciBsZXMgY8O0dMOpc1xyXG4gICAgLy9kcm9pdGUgb3Ugw6AgZ2F1Y2hlXHJcbiAgICBpZiAoc2V0dGluZ3MuYmFsbC5vcmlnaW4ueCArIHNldHRpbmdzLmJhbGwuc3BlZWRYID4gY2FudmFzLndpZHRoIHx8IHNldHRpbmdzLmJhbGwub3JpZ2luLnggKyBzZXR0aW5ncy5iYWxsLnNwZWVkWCA8IDApXHJcbiAgICAgICAgc2V0dGluZ3MuYmFsbC5zcGVlZFggPSAtc2V0dGluZ3MuYmFsbC5zcGVlZFg7XHJcbiAgICAvL2JhcyBvdSBoYXV0XHJcbiAgICBpZiAoc2V0dGluZ3MuYmFsbC5vcmlnaW4ueSArIHNldHRpbmdzLmJhbGwuc3BlZWRZID4gY2FudmFzLmhlaWdodCB8fCBzZXR0aW5ncy5iYWxsLm9yaWdpbi55ICsgc2V0dGluZ3MuYmFsbC5zcGVlZFkgPCAwKVxyXG4gICAgICAgIHNldHRpbmdzLmJhbGwuc3BlZWRZID0gLXNldHRpbmdzLmJhbGwuc3BlZWRZO1xyXG5cclxuICAgIC8vRMOpdGVjdGlvbiBkZSBsYSBjb2xsaXNpb24gYXZlYyBsYSBiYXJyZVxyXG4gICAgICAgIC8vU2kgbGEgYmFsbGUgcmVudHJlIGVuIGNvbGxpc2lvbiBhdmVjIGxhIGJhcnJlIC0tPiBlbGxlIHJlYm9uZGl0XHJcbiAgICAgICAgZWxzZSBpZihzZXR0aW5ncy5iYWxsLm9yaWdpbi55ICsgc2V0dGluZ3MuYmFsbC5yYWRpdXMgPiBjYW52YXMuaGVpZ2h0IC0gc2V0dGluZ3MuYmFycmUuaGVpZ2h0KXtcclxuICAgICAgICBpZihzZXR0aW5ncy5iYWxsLm9yaWdpbi54ID4gc2V0dGluZ3MuYmFycmUucG9zaXRpb25YICYmIHNldHRpbmdzLmJhbGwub3JpZ2luLnggPCBzZXR0aW5ncy5iYXJyZS5wb3NpdGlvblggKyBzZXR0aW5ncy5iYXJyZS53aWR0aCl7XHJcbiAgICAgICAgICAgIC8vbGEgYmFsbGUgcmVib25kaXRcclxuICAgICAgICAgICAgc2V0dGluZ3MuYmFsbC5zcGVlZFkgPSAtc2V0dGluZ3MuYmFsbC5zcGVlZFk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL2NoYW5nZSBsYSB2aXRlc3NlIGRlIGxhIGJhbGxlXHJcbiAgICBzZXR0aW5ncy5iYWxsLm9yaWdpbi54ICs9IHNldHRpbmdzLmJhbGwuc3BlZWRYOyAvLyBPbiBkw6lwbGFjZSBsYSBiYWxsZVxyXG4gICAgc2V0dGluZ3MuYmFsbC5vcmlnaW4ueSArPSBzZXR0aW5ncy5iYWxsLnNwZWVkWTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImJhbGxzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzaGFwZXMiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImJhY2tncm91bmQiLCJSZWN0YW5nbGVfMSIsIngiLCJ5IiwiYmFsbCIsIkJhbGxfMSIsInNldHRpbmdzXzEiLCJjb2xvciIsIm9yaWdpbiIsInJhZGl1cyIsImJhcnJlIiwicG9zaXRpb25YIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiZHJhdyIsImJyaWNrcyIsImluaXRCcmlja3MiLCJBcnJheSIsIm5iTGlnbmUiLCJpIiwibmJDb2xvbm5lIiwiaiIsImRyYXdCcmlja3MiLCJCcmlja18xIiwiYnJpY2tXaWR0aCIsInBhZGRpbmciLCJicmlja0hlaWdodCIsImNsZWFyIiwiY2xlYXJSZWN0Iiwic3BlZWRYIiwic3BlZWRZIiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/Rectangle.ts":
/*!*****************************!*\
  !*** ./src/ts/Rectangle.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Shape.ts\");\n\nvar Rectangle = function (_super) {\n  __extends(Rectangle, _super);\n\n  function Rectangle(ctx, color, origin, dimensions) {\n    var _this = _super.call(this, ctx, color, origin) || this;\n\n    _this.dimensions = dimensions;\n    return _this;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(this.origin.x, this.origin.y, this.dimensions.width, this.dimensions.height);\n  };\n\n  return Rectangle;\n}(Shape_1.Shape);\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvUmVjdGFuZ2xlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBO0VBQStCQTs7RUFHM0IsbUJBQVlDLEdBQVosRUFBMkNDLEtBQTNDLEVBQTBEQyxNQUExRCxFQUE0RkMsVUFBNUYsRUFBeUk7SUFBekksWUFDSUMsa0JBQU1KLEdBQU4sRUFBV0MsS0FBWCxFQUFrQkMsTUFBbEIsS0FBeUIsSUFEN0I7O0lBRUlHLEtBQUksQ0FBQ0YsVUFBTCxHQUFrQkEsVUFBbEI7O0VBQ0g7O0VBRVFHLDJCQUFUO0lBQ0ksS0FBS04sR0FBTCxDQUFTTyxTQUFULEdBQXFCLEtBQUtOLEtBQTFCO0lBQ0EsS0FBS0QsR0FBTCxDQUFTUSxRQUFULENBQWtCLEtBQUtOLE1BQUwsQ0FBWU8sQ0FBOUIsRUFBaUMsS0FBS1AsTUFBTCxDQUFZUSxDQUE3QyxFQUFnRCxLQUFLUCxVQUFMLENBQWdCUSxLQUFoRSxFQUF1RSxLQUFLUixVQUFMLENBQWdCUyxNQUF2RjtFQUNILENBSFE7O0VBSWI7QUFBQyxDQVpELENBQStCQyxhQUEvQjs7QUFBYUMsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9SZWN0YW5nbGUudHM/MDQ0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NoYXBlfSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQge2lEcmF3YWJsZX0gZnJvbSBcIi4vaURyYXdhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgU2hhcGUgaW1wbGVtZW50cyBpRHJhd2FibGV7XHJcbiAgICBwcml2YXRlIGRpbWVuc2lvbnM6e3dpZHRoOiBudW1iZXIsIGhlaWdodDpudW1iZXJ9XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIG9yaWdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBkaW1lbnNpb25zOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcclxuICAgICAgICBzdXBlcihjdHgsIGNvbG9yLCBvcmlnaW4pO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcnJpZGUgZHJhdygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJjdHgiLCJjb2xvciIsIm9yaWdpbiIsImRpbWVuc2lvbnMiLCJfc3VwZXIiLCJfdGhpcyIsIlJlY3RhbmdsZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIlNoYXBlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Rectangle.ts\n");

/***/ }),

/***/ "./src/ts/Settings/settings.ts":
/*!*************************************!*\
  !*** ./src/ts/Settings/settings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  nbLigne: 10,\n  nbColonne: 4,\n  brickWidth: 200,\n  brickHeight: 30,\n  padding: 5,\n  brick: {\n    colors: [\"hsl(0, 100%, 84%)\", \"hsl(33, 100%, 82%)\", \"hsl(217, 100%, 81%)\", \"hsl(249, 100%, 85%)\", \"hsl(110, 100%, 87%)\"]\n  },\n  ball: {\n    speedX: 5,\n    speedY: 5,\n    origin: {\n      x: 0,\n      y: 0\n    },\n    radius: 10,\n    color: 'white'\n  },\n  barre: {\n    height: 30,\n    width: 200,\n    positionX: 750,\n    color: 'white'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2V0dGluZ3Mvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztFQUNwQkMsT0FBTyxFQUFFLEVBRFc7RUFFcEJDLFNBQVMsRUFBRSxDQUZTO0VBR3BCQyxVQUFVLEVBQUUsR0FIUTtFQUlwQkMsV0FBVyxFQUFFLEVBSk87RUFLcEJDLE9BQU8sRUFBRSxDQUxXO0VBTXBCQyxLQUFLLEVBQUM7SUFDRkMsTUFBTSxFQUFDLENBQUMsbUJBQUQsRUFBcUIsb0JBQXJCLEVBQTBDLHFCQUExQyxFQUFnRSxxQkFBaEUsRUFBc0YscUJBQXRGO0VBREwsQ0FOYztFQVNwQkMsSUFBSSxFQUFDO0lBQ0RDLE1BQU0sRUFBRSxDQURQO0lBRURDLE1BQU0sRUFBRSxDQUZQO0lBR0RDLE1BQU0sRUFBRTtNQUFDQyxDQUFDLEVBQUUsQ0FBSjtNQUFPQyxDQUFDLEVBQUM7SUFBVCxDQUhQO0lBSURDLE1BQU0sRUFBRSxFQUpQO0lBS0RDLEtBQUssRUFBRTtFQUxOLENBVGU7RUFnQnBCQyxLQUFLLEVBQUM7SUFDRkMsTUFBTSxFQUFFLEVBRE47SUFFRkMsS0FBSyxFQUFFLEdBRkw7SUFHRkMsU0FBUyxFQUFFLEdBSFQ7SUFJRkosS0FBSyxFQUFFO0VBSkw7QUFoQmMsQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvU2V0dGluZ3Mvc2V0dGluZ3MudHM/OTRiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBuYkxpZ25lOiAxMCxcclxuICAgIG5iQ29sb25uZTogNCxcclxuICAgIGJyaWNrV2lkdGg6IDIwMCxcclxuICAgIGJyaWNrSGVpZ2h0OiAzMCxcclxuICAgIHBhZGRpbmc6IDUsXHJcbiAgICBicmljazp7XHJcbiAgICAgICAgY29sb3JzOltcImhzbCgwLCAxMDAlLCA4NCUpXCIsXCJoc2woMzMsIDEwMCUsIDgyJSlcIixcImhzbCgyMTcsIDEwMCUsIDgxJSlcIixcImhzbCgyNDksIDEwMCUsIDg1JSlcIixcImhzbCgxMTAsIDEwMCUsIDg3JSlcIl0sXHJcbiAgICB9LFxyXG4gICAgYmFsbDp7XHJcbiAgICAgICAgc3BlZWRYOiA1LFxyXG4gICAgICAgIHNwZWVkWTogNSxcclxuICAgICAgICBvcmlnaW46IHt4OiAwLCB5OjB9LFxyXG4gICAgICAgIHJhZGl1czogMTAsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB9LFxyXG4gICAgYmFycmU6e1xyXG4gICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICBwb3NpdGlvblg6IDc1MCxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZXhwb3J0cyIsIm5iTGlnbmUiLCJuYkNvbG9ubmUiLCJicmlja1dpZHRoIiwiYnJpY2tIZWlnaHQiLCJwYWRkaW5nIiwiYnJpY2siLCJjb2xvcnMiLCJiYWxsIiwic3BlZWRYIiwic3BlZWRZIiwib3JpZ2luIiwieCIsInkiLCJyYWRpdXMiLCJjb2xvciIsImJhcnJlIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvblgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Settings/settings.ts\n");

/***/ }),

/***/ "./src/ts/Shape.ts":
/*!*************************!*\
  !*** ./src/ts/Shape.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Shape = void 0;\n\nvar Shape = function () {\n  function Shape(ctx, color, origin) {\n    this.ctx = ctx;\n    this.origin = origin;\n    this.color = color;\n  }\n\n  Shape.prototype.draw = function () {};\n\n  return Shape;\n}();\n\nexports.Shape = Shape;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2hhcGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtFQUtJLGVBQXNCQSxHQUF0QixFQUFxREMsS0FBckQsRUFBb0VDLE1BQXBFLEVBQW9HO0lBQ2hHLEtBQUtGLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtFLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtELEtBQUwsR0FBYUEsS0FBYjtFQUNIOztFQUNERSxvQ0FDQyxDQUREOztFQUVKO0FBQUMsQ0FaRDs7QUFBc0JDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9TaGFwZS50cz80NjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaGFwZSBpbXBsZW1lbnRzIGlEcmF3YWJsZXtcclxuICAgIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByb3RlY3RlZCBjb2xvcjpzdHJpbmc7XHJcbiAgICBwdWJsaWMgb3JpZ2luOnt4Om51bWJlciwgeTpudW1iZXJ9O1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZywgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImN0eCIsImNvbG9yIiwib3JpZ2luIiwiU2hhcGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Shape.ts\n");

/***/ }),

/***/ "./src/ts/heplers/math.ts":
/*!********************************!*\
  !*** ./src/ts/heplers/math.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random = void 0;\n\nfunction random(min, max, ceil) {\n  if (ceil === void 0) {\n    ceil = true;\n  }\n\n  if (ceil) {\n    return Math.ceil(min + Math.random() * (max - min));\n  }\n\n  return Math.floor(min + Math.random() * (max - min));\n}\n\nexports.random = random;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvaGVwbGVycy9tYXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBZ0JBLE1BQWhCLENBQXVCQyxHQUF2QixFQUFtQ0MsR0FBbkMsRUFBK0NDLElBQS9DLEVBQW1FO0VBQXBCO0lBQUFBO0VBQW9COztFQUMvRCxJQUFHQSxJQUFILEVBQVE7SUFDSixPQUFPQyxJQUFJLENBQUNELElBQUwsQ0FBVUYsR0FBRyxHQUFHRyxJQUFJLENBQUNKLE1BQUwsTUFBZUUsR0FBRyxHQUFDRCxHQUFuQixDQUFoQixDQUFQO0VBQ0g7O0VBQ0QsT0FBT0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsR0FBR0csSUFBSSxDQUFDSixNQUFMLE1BQWVFLEdBQUcsR0FBQ0QsR0FBbkIsQ0FBakIsQ0FBUDtBQUNIOztBQUxESyxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvaGVwbGVycy9tYXRoLnRzPzY5OWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW46bnVtYmVyLCBtYXg6bnVtYmVyLCBjZWlsOiBib29sZWFuID0gdHJ1ZSl7XHJcbiAgICBpZihjZWlsKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG1pbiArIE1hdGgucmFuZG9tKCkqKG1heC1taW4pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkqKG1heC1taW4pKTtcclxufSJdLCJuYW1lcyI6WyJyYW5kb20iLCJtaW4iLCJtYXgiLCJjZWlsIiwiTWF0aCIsImZsb29yIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/heplers/math.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;