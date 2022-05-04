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

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Ball = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Shape.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./Settings/settings */ \"./src/ts/Settings/settings.ts\");\n\nvar Ball = function (_super) {\n  __extends(Ball, _super);\n\n  function Ball(ctx, color, origin, radius, counterClockWise) {\n    var _this = _super.call(this, ctx, color, origin) || this;\n\n    _this.radius = radius;\n    _this.counterClockWise = counterClockWise;\n    return _this;\n  }\n\n  Ball.prototype.init = function () {\n    setInterval(this.update, 10);\n  };\n\n  Ball.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2, true);\n    this.ctx.closePath();\n    this.ctx.fill();\n  };\n\n  Ball.prototype.update = function () {\n    this.origin.y -= settings_1.settings.ball.speedY;\n    this.origin.x += settings_1.settings.ball.speedX;\n    this.draw();\n  };\n\n  return Ball;\n}(Shape_1.Shape);\n\nexports.Ball = Ball;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQmFsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFHQTtFQUEwQkE7O0VBSXRCLGNBQVlDLEdBQVosRUFBMkNDLEtBQTNDLEVBQTBEQyxNQUExRCxFQUE0RkMsTUFBNUYsRUFBNEdDLGdCQUE1RyxFQUFxSTtJQUFySSxZQUNJQyxrQkFBTUwsR0FBTixFQUFXQyxLQUFYLEVBQWtCQyxNQUFsQixLQUF5QixJQUQ3Qjs7SUFFSUksS0FBSSxDQUFDSCxNQUFMLEdBQWNBLE1BQWQ7SUFDQUcsS0FBSSxDQUFDRixnQkFBTCxHQUF3QkEsZ0JBQXhCOztFQUNIOztFQUVERztJQUNJQyxXQUFXLENBQUMsS0FBS0MsTUFBTixFQUFjLEVBQWQsQ0FBWDtFQUNILENBRkQ7O0VBSVNGLHNCQUFUO0lBQ0ksS0FBS1AsR0FBTCxDQUFTVSxTQUFUO0lBQ0EsS0FBS1YsR0FBTCxDQUFTVyxTQUFULEdBQXFCLEtBQUtWLEtBQTFCO0lBQ0EsS0FBS0QsR0FBTCxDQUFTWSxHQUFULENBQWEsS0FBS1YsTUFBTCxDQUFZVyxDQUF6QixFQUE0QixLQUFLWCxNQUFMLENBQVlZLENBQXhDLEVBQTJDLEtBQUtYLE1BQWhELEVBQXdELENBQXhELEVBQTJEWSxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUFyRSxFQUF3RSxJQUF4RTtJQUNBLEtBQUtoQixHQUFMLENBQVNpQixTQUFUO0lBQ0EsS0FBS2pCLEdBQUwsQ0FBU2tCLElBQVQ7RUFDSCxDQU5ROztFQVFUWDtJQUVJLEtBQUtMLE1BQUwsQ0FBWVksQ0FBWixJQUFpQkssb0JBQVNDLElBQVQsQ0FBY0MsTUFBL0I7SUFDQSxLQUFLbkIsTUFBTCxDQUFZVyxDQUFaLElBQWlCTSxvQkFBU0MsSUFBVCxDQUFjRSxNQUEvQjtJQUNBLEtBQUtDLElBQUw7RUFDSCxDQUxEOztFQU1KO0FBQUMsQ0E1QkQsQ0FBMEJDLGFBQTFCOztBQUFhQyxZQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQmFsbC50cz8wZjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2hhcGV9IGZyb20gXCIuL1NoYXBlXCI7XHJcbmltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vU2V0dGluZ3Mvc2V0dGluZ3NcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmFsbCBleHRlbmRzIFNoYXBlIGltcGxlbWVudHMgaURyYXdhYmxlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmFkaXVzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNvdW50ZXJDbG9ja1dpc2U6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIG9yaWdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCByYWRpdXM6IG51bWJlciwgY291bnRlckNsb2NrV2lzZTogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKGN0eCwgY29sb3IsIG9yaWdpbik7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyQ2xvY2tXaXNlID0gY291bnRlckNsb2NrV2lzZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHNldEludGVydmFsKHRoaXMudXBkYXRlLCAxMCk7IC8vIEV4w6ljdXRlciBkcmF3KCkgdG91dGVzIGxlcyAxMCBtc1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJyaWRlIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgICAgICB0aGlzLm9yaWdpbi55IC09IHNldHRpbmdzLmJhbGwuc3BlZWRZO1xyXG4gICAgICAgIHRoaXMub3JpZ2luLnggKz0gc2V0dGluZ3MuYmFsbC5zcGVlZFg7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiX19leHRlbmRzIiwiY3R4IiwiY29sb3IiLCJvcmlnaW4iLCJyYWRpdXMiLCJjb3VudGVyQ2xvY2tXaXNlIiwiX3N1cGVyIiwiX3RoaXMiLCJCYWxsIiwic2V0SW50ZXJ2YWwiLCJ1cGRhdGUiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJ4IiwieSIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJzZXR0aW5nc18xIiwiYmFsbCIsInNwZWVkWSIsInNwZWVkWCIsImRyYXciLCJTaGFwZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Ball.ts\n");

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

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/ts/Rectangle.ts\");\n\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/ts/Ball.ts\");\n\nvar Brick_1 = __webpack_require__(/*! ./Brick */ \"./src/ts/Brick.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./Settings/settings */ \"./src/ts/Settings/settings.ts\");\n\nvar canvas = document.getElementById('my-canvas');\nvar ctx = canvas.getContext('2d');\nvar shapes = [];\nvar ball = new Ball_1.Ball(ctx, 'white', {\n  x: 200,\n  y: 200\n}, 5, true);\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar background = new Rectangle_1.Rectangle(ctx, 'black', {\n  x: 0,\n  y: 0\n}, {\n  width: canvas.width,\n  height: canvas.height\n});\nvar bricks;\n\nfunction initBricks() {\n  bricks = new Array(settings_1.settings.nbLigne);\n\n  for (var i = 0; i < settings_1.settings.nbLigne; i++) {\n    bricks[i] = new Array(settings_1.settings.nbColonne);\n\n    for (var j = 0; j < settings_1.settings.nbColonne; j++) {\n      bricks[i][j] = 1;\n    }\n  }\n}\n\nfunction drawBricks() {\n  for (var i = 0; i < settings_1.settings.nbLigne; i++) {\n    for (var j = 0; j < settings_1.settings.nbColonne; j++) {\n      if (bricks[i][j] == 1) {\n        new Brick_1.Brick(ctx, 'blue', {\n          x: canvas.width / 3 + j * (settings_1.settings.brickWidth + settings_1.settings.padding) + settings_1.settings.padding,\n          y: i * (settings_1.settings.brickHeight + settings_1.settings.padding) + settings_1.settings.padding\n        }, {\n          width: settings_1.settings.brickWidth,\n          height: settings_1.settings.brickHeight\n        }).draw();\n      }\n    }\n  }\n}\n\nfunction clear() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  background.draw();\n}\n\nbackground.draw();\ninitBricks();\ndrawBricks();\nball.init();\nvar x = 150;\nvar y = 150;\nvar dx = 2;\nvar dy = 4;\n\nfunction init() {\n  return setInterval(draw, 1000);\n}\n\nfunction draw() {\n  clear();\n  background.draw();\n  initBricks();\n  drawBricks();\n  ctx.beginPath();\n  ctx.arc(x, y, 10, 0, Math.PI * 2, true);\n  ctx.closePath();\n  ctx.fill();\n  x += dx;\n  y += dy;\n}\n\ninit();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7O0FBRURmLFVBQVUsQ0FBQ2UsSUFBWDtBQUNBWixVQUFVO0FBQ1ZPLFVBQVU7QUFDVm5CLElBQUksQ0FBQzJCLElBQUw7QUFFQSxJQUFJekIsQ0FBQyxHQUFHLEdBQVI7QUFDQSxJQUFJQyxDQUFDLEdBQUcsR0FBUjtBQUNBLElBQUl5QixFQUFFLEdBQUcsQ0FBVDtBQUNBLElBQUlDLEVBQUUsR0FBRyxDQUFUOztBQUVBLFNBQVNGLElBQVQsR0FBYTtFQUNULE9BQU9HLFdBQVcsQ0FBQ04sSUFBRCxFQUFPLElBQVAsQ0FBbEI7QUFDSDs7QUFDRCxTQUFTQSxJQUFULEdBQWE7RUFDVEMsS0FBSztFQUNMaEIsVUFBVSxDQUFDZSxJQUFYO0VBQ0FaLFVBQVU7RUFDVk8sVUFBVTtFQUVWdEIsR0FBRyxDQUFDa0MsU0FBSjtFQUNBbEMsR0FBRyxDQUFDbUMsR0FBSixDQUFROUIsQ0FBUixFQUFXQyxDQUFYLEVBQWMsRUFBZCxFQUFrQixDQUFsQixFQUFxQjhCLElBQUksQ0FBQ0MsRUFBTCxHQUFRLENBQTdCLEVBQWdDLElBQWhDO0VBQ0FyQyxHQUFHLENBQUNzQyxTQUFKO0VBQ0F0QyxHQUFHLENBQUN1QyxJQUFKO0VBQ0FsQyxDQUFDLElBQUkwQixFQUFMO0VBQ0F6QixDQUFDLElBQUkwQixFQUFMO0FBQ0g7O0FBRURGLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL01haW4udHM/NDg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lEcmF3YWJsZX0gZnJvbSBcIi4vaURyYXdhYmxlXCI7XHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IHtCYWxsfSBmcm9tIFwiLi9CYWxsXCI7XHJcbmltcG9ydCB7QnJpY2t9IGZyb20gXCIuL0JyaWNrXCI7XHJcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL1NldHRpbmdzL3NldHRpbmdzXCI7XHJcblxyXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5jb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuY29uc3Qgc2hhcGVzOmlEcmF3YWJsZVtdID0gW107XHJcbmxldCBiYWxsID0gIG5ldyBCYWxsKGN0eCwgJ3doaXRlJywge3g6MjAwLCB5OjIwMH0sIDUsIHRydWUpO1xyXG5cclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgUmVjdGFuZ2xlKGN0eCwnYmxhY2snLCB7eDowLHk6MH0sIHt3aWR0aDpjYW52YXMud2lkdGgsIGhlaWdodDpjYW52YXMuaGVpZ2h0fSk7XHJcblxyXG5cclxuXHJcbmxldCBicmlja3M6IGFueVtdO1xyXG5mdW5jdGlvbiBpbml0QnJpY2tzKCkge1xyXG4gICAgYnJpY2tzID0gbmV3IEFycmF5KHNldHRpbmdzLm5iTGlnbmUpO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgc2V0dGluZ3MubmJMaWduZTsgaSsrKSB7XHJcbiAgICAgICAgYnJpY2tzW2ldID0gbmV3IEFycmF5KHNldHRpbmdzLm5iQ29sb25uZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqIDwgc2V0dGluZ3MubmJDb2xvbm5lOyBqKyspIHtcclxuICAgICAgICAgICAgYnJpY2tzW2ldW2pdID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZHJhd0JyaWNrcygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3MubmJMaWduZTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZXR0aW5ncy5uYkNvbG9ubmU7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoYnJpY2tzW2ldW2pdID09IDEpIHtcclxuICAgICAgICAgICAgICAgIG5ldyBCcmljayhjdHgsICdibHVlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBjYW52YXMud2lkdGggLyAzICsgKGogKiAoc2V0dGluZ3MuYnJpY2tXaWR0aCArIHNldHRpbmdzLnBhZGRpbmcpKSArIHNldHRpbmdzLnBhZGRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IChpICogKHNldHRpbmdzLmJyaWNrSGVpZ2h0ICsgc2V0dGluZ3MucGFkZGluZykpICsgc2V0dGluZ3MucGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge3dpZHRoOiBzZXR0aW5ncy5icmlja1dpZHRoLCBoZWlnaHQ6IHNldHRpbmdzLmJyaWNrSGVpZ2h0fSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhcigpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJhY2tncm91bmQuZHJhdygpO1xyXG59XHJcblxyXG5iYWNrZ3JvdW5kLmRyYXcoKTtcclxuaW5pdEJyaWNrcygpO1xyXG5kcmF3QnJpY2tzKCk7XHJcbmJhbGwuaW5pdCgpO1xyXG5cclxudmFyIHggPSAxNTA7XHJcbnZhciB5ID0gMTUwO1xyXG52YXIgZHggPSAyO1xyXG52YXIgZHkgPSA0O1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIHJldHVybiBzZXRJbnRlcnZhbChkcmF3LCAxMDAwKTsgLy8gRXjDqWN1dGVyIGRyYXcoKSB0b3V0ZXMgbGVzIDEwIG1zXHJcbn1cclxuZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBiYWNrZ3JvdW5kLmRyYXcoKTtcclxuICAgIGluaXRCcmlja3MoKTtcclxuICAgIGRyYXdCcmlja3MoKTtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKHgsIHksIDEwLCAwLCBNYXRoLlBJKjIsIHRydWUpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICAgIHggKz0gZHg7IC8vIE9uIGTDqXBsYWNlIGxhIGJhbGxlXHJcbiAgICB5ICs9IGR5O1xyXG59XHJcblxyXG5pbml0KCk7Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2hhcGVzIiwiYmFsbCIsIkJhbGxfMSIsIngiLCJ5Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJiYWNrZ3JvdW5kIiwiUmVjdGFuZ2xlXzEiLCJicmlja3MiLCJpbml0QnJpY2tzIiwiQXJyYXkiLCJzZXR0aW5nc18xIiwibmJMaWduZSIsImkiLCJuYkNvbG9ubmUiLCJqIiwiZHJhd0JyaWNrcyIsIkJyaWNrXzEiLCJicmlja1dpZHRoIiwicGFkZGluZyIsImJyaWNrSGVpZ2h0IiwiZHJhdyIsImNsZWFyIiwiY2xlYXJSZWN0IiwiaW5pdCIsImR4IiwiZHkiLCJzZXRJbnRlcnZhbCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

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

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  nbLigne: 5,\n  nbColonne: 5,\n  brickWidth: 100,\n  brickHeight: 15,\n  padding: 5,\n  brick: {\n    colors: [\"hsl(0, 100%, 84%)\", \"hsl(33, 100%, 82%)\", \"hsl(217, 100%, 81%)\", \"hsl(249, 100%, 85%)\", \"hsl(110, 100%, 87%)\"]\n  },\n  ball: {\n    speedX: 2,\n    speedY: 2\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2V0dGluZ3Mvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztFQUNwQkMsT0FBTyxFQUFFLENBRFc7RUFFcEJDLFNBQVMsRUFBRSxDQUZTO0VBR3BCQyxVQUFVLEVBQUUsR0FIUTtFQUlwQkMsV0FBVyxFQUFFLEVBSk87RUFLcEJDLE9BQU8sRUFBRSxDQUxXO0VBTXBCQyxLQUFLLEVBQUM7SUFDRkMsTUFBTSxFQUFDLENBQUMsbUJBQUQsRUFBcUIsb0JBQXJCLEVBQTBDLHFCQUExQyxFQUFnRSxxQkFBaEUsRUFBc0YscUJBQXRGO0VBREwsQ0FOYztFQVNwQkMsSUFBSSxFQUFDO0lBQ0RDLE1BQU0sRUFBRSxDQURQO0lBRURDLE1BQU0sRUFBRTtFQUZQO0FBVGUsQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvU2V0dGluZ3Mvc2V0dGluZ3MudHM/OTRiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBuYkxpZ25lOiA1LFxyXG4gICAgbmJDb2xvbm5lOiA1LFxyXG4gICAgYnJpY2tXaWR0aDogMTAwLFxyXG4gICAgYnJpY2tIZWlnaHQ6IDE1LFxyXG4gICAgcGFkZGluZzogNSxcclxuICAgIGJyaWNrOntcclxuICAgICAgICBjb2xvcnM6W1wiaHNsKDAsIDEwMCUsIDg0JSlcIixcImhzbCgzMywgMTAwJSwgODIlKVwiLFwiaHNsKDIxNywgMTAwJSwgODElKVwiLFwiaHNsKDI0OSwgMTAwJSwgODUlKVwiLFwiaHNsKDExMCwgMTAwJSwgODclKVwiXSxcclxuICAgIH0sXHJcbiAgICBiYWxsOntcclxuICAgICAgICBzcGVlZFg6IDIsXHJcbiAgICAgICAgc3BlZWRZOiAyLFxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJleHBvcnRzIiwibmJMaWduZSIsIm5iQ29sb25uZSIsImJyaWNrV2lkdGgiLCJicmlja0hlaWdodCIsInBhZGRpbmciLCJicmljayIsImNvbG9ycyIsImJhbGwiLCJzcGVlZFgiLCJzcGVlZFkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Settings/settings.ts\n");

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