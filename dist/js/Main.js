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

/***/ "./src/ts/Circle.ts":
/*!**************************!*\
  !*** ./src/ts/Circle.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Ball = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Shape.ts\");\n\nvar Ball = function (_super) {\n  __extends(Ball, _super);\n\n  function Ball(ctx, color, origin, radius) {\n    var _this = _super.call(this, ctx, color, origin) || this;\n\n    _this.radius = radius;\n    return _this;\n  }\n\n  Ball.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  return Ball;\n}(Shape_1.Shape);\n\nexports.Ball = Ball;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2lyY2xlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlBO0FBQTBCQTs7QUFHdEIsZ0JBQVlDLEdBQVosRUFBMkNDLEtBQTNDLEVBQTBEQyxNQUExRCxFQUEyRkMsTUFBM0YsRUFBeUc7QUFBekcsZ0JBQ0lDLGtCQUFNSixHQUFOLEVBQVdDLEtBQVgsRUFBa0JDLE1BQWxCLEtBQXlCLElBRDdCOztBQUVJRyxTQUFJLENBQUNGLE1BQUwsR0FBY0EsTUFBZDs7QUFDSDs7QUFFUUcsd0JBQVQ7QUFDSSxTQUFLTixHQUFMLENBQVNPLFNBQVQ7QUFDQSxTQUFLUCxHQUFMLENBQVNRLFNBQVQsR0FBcUIsS0FBS1AsS0FBMUI7QUFDQSxTQUFLRCxHQUFMLENBQVNTLEdBQVQsQ0FBYSxLQUFLUCxNQUFMLENBQVlRLENBQXpCLEVBQTRCLEtBQUtSLE1BQUwsQ0FBWVMsQ0FBeEMsRUFBMkMsS0FBS1IsTUFBaEQsRUFBd0QsQ0FBeEQsRUFBMkRTLElBQUksQ0FBQ0MsRUFBTCxHQUFRLENBQW5FO0FBQ0EsU0FBS2IsR0FBTCxDQUFTYyxJQUFUO0FBQ0EsU0FBS2QsR0FBTCxDQUFTZSxTQUFUO0FBQ0gsR0FOUTs7QUFPYjtBQUFDLENBZkQsQ0FBMEJDLGFBQTFCOztBQUFhQyxZQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQ2lyY2xlLnRzPzhjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTaGFwZX0gZnJvbSBcIi4vU2hhcGVcIjtcclxuaW1wb3J0IHtpRHJhd2FibGV9IGZyb20gXCIuL2lEcmF3YWJsZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCYWxsIGV4dGVuZHMgU2hhcGUgaW1wbGVtZW50cyBpRHJhd2FibGV7XHJcbiAgICBwcml2YXRlIHJhZGl1czpudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIG9yaWdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoY3R4LCBjb2xvciwgb3JpZ2luKTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBvdmVycmlkZSBkcmF3KCl7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkqMik7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImN0eCIsImNvbG9yIiwib3JpZ2luIiwicmFkaXVzIiwiX3N1cGVyIiwiX3RoaXMiLCJCYWxsIiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiYXJjIiwieCIsInkiLCJNYXRoIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwiU2hhcGVfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Circle.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/ts/Rectangle.ts\");\n\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./src/ts/Circle.ts\");\n\nvar canvas = document.getElementById('my-canvas');\nvar ctx = canvas.getContext('2d');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar background = new Rectangle_1.Rectangle(ctx, 'black', {\n  x: 0,\n  y: 0\n}, {\n  width: canvas.width,\n  height: canvas.height\n});\nbackground.draw();\nvar ball = new Circle_1.Ball(ctx, 'white', {\n  x: 100,\n  y: 100\n}, 10);\nball.draw();\nvar brick = new Rectangle_1.Rectangle(ctx, 'green', {\n  x: 200,\n  y: 50\n}, {\n  width: 100,\n  height: 30\n});\nbrick.draw();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR0E7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxDO0FBQ0EsSUFBTUMsR0FBRyxHQUE2QkgsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQXRDO0FBR0FKLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlQyxNQUFNLENBQUNDLFVBQXRCO0FBQ0FQLE1BQU0sQ0FBQ1EsTUFBUCxHQUFnQkYsTUFBTSxDQUFDRyxXQUF2QjtBQUVBLElBQU1DLFVBQVUsR0FBRyxJQUFJQyxxQkFBSixDQUFjUixHQUFkLEVBQWtCLE9BQWxCLEVBQTJCO0FBQUNTLEdBQUMsRUFBQyxDQUFIO0FBQUtDLEdBQUMsRUFBQztBQUFQLENBQTNCLEVBQXNDO0FBQUNSLE9BQUssRUFBQ0wsTUFBTSxDQUFDSyxLQUFkO0FBQXFCRyxRQUFNLEVBQUNSLE1BQU0sQ0FBQ1E7QUFBbkMsQ0FBdEMsQ0FBbkI7QUFDQUUsVUFBVSxDQUFDSSxJQUFYO0FBRUEsSUFBTUMsSUFBSSxHQUFJLElBQUlDLGFBQUosQ0FBU2IsR0FBVCxFQUFjLE9BQWQsRUFBdUI7QUFBQ1MsR0FBQyxFQUFDLEdBQUg7QUFBUUMsR0FBQyxFQUFDO0FBQVYsQ0FBdkIsRUFBdUMsRUFBdkMsQ0FBZDtBQUNBRSxJQUFJLENBQUNELElBQUw7QUFFQSxJQUFNRyxLQUFLLEdBQUcsSUFBSU4scUJBQUosQ0FBY1IsR0FBZCxFQUFtQixPQUFuQixFQUE0QjtBQUFDUyxHQUFDLEVBQUMsR0FBSDtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUE1QixFQUE0QztBQUFDUixPQUFLLEVBQUUsR0FBUjtBQUFhRyxRQUFNLEVBQUM7QUFBcEIsQ0FBNUMsQ0FBZDtBQUNBUyxLQUFLLENBQUNILElBQU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL01haW4udHM/NDg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQge0JhbGx9IGZyb20gXCIuL0NpcmNsZVwiO1xyXG5cclxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuLy9jb25zdCBzaGFwZXM6aURyYXdhYmxlW10gPSBbXTtcclxuXHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuY29uc3QgYmFja2dyb3VuZCA9IG5ldyBSZWN0YW5nbGUoY3R4LCdibGFjaycsIHt4OjAseTowfSwge3dpZHRoOmNhbnZhcy53aWR0aCwgaGVpZ2h0OmNhbnZhcy5oZWlnaHR9KTtcclxuYmFja2dyb3VuZC5kcmF3KCk7XHJcblxyXG5jb25zdCBiYWxsID0gIG5ldyBCYWxsKGN0eCwgJ3doaXRlJywge3g6MTAwLCB5OjEwMH0sIDEwKTtcclxuYmFsbC5kcmF3KCk7XHJcblxyXG5jb25zdCBicmljayA9IG5ldyBSZWN0YW5nbGUoY3R4LCAnZ3JlZW4nLCB7eDoyMDAsIHk6IDUwfSwge3dpZHRoOiAxMDAsIGhlaWdodDozMH0pO1xyXG5icmljay5kcmF3KCk7XHJcblxyXG4iXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImJhY2tncm91bmQiLCJSZWN0YW5nbGVfMSIsIngiLCJ5IiwiZHJhdyIsImJhbGwiLCJDaXJjbGVfMSIsImJyaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/Rectangle.ts":
/*!*****************************!*\
  !*** ./src/ts/Rectangle.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Shape.ts\");\n\nvar Rectangle = function (_super) {\n  __extends(Rectangle, _super);\n\n  function Rectangle(ctx, color, origin, dimensions) {\n    var _this = _super.call(this, ctx, color, origin) || this;\n\n    _this.dimensions = dimensions;\n    return _this;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(this.origin.x, this.origin.y, this.dimensions.width, this.dimensions.height);\n  };\n\n  return Rectangle;\n}(Shape_1.Shape);\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvUmVjdGFuZ2xlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBO0FBQStCQTs7QUFHM0IscUJBQVlDLEdBQVosRUFBMkNDLEtBQTNDLEVBQTBEQyxNQUExRCxFQUE0RkMsVUFBNUYsRUFBeUk7QUFBekksZ0JBQ0lDLGtCQUFNSixHQUFOLEVBQVdDLEtBQVgsRUFBa0JDLE1BQWxCLEtBQXlCLElBRDdCOztBQUVJRyxTQUFJLENBQUNGLFVBQUwsR0FBa0JBLFVBQWxCOztBQUNIOztBQUVRRyw2QkFBVDtBQUNJLFNBQUtOLEdBQUwsQ0FBU08sU0FBVCxHQUFxQixLQUFLTixLQUExQjtBQUNBLFNBQUtELEdBQUwsQ0FBU1EsUUFBVCxDQUFrQixLQUFLTixNQUFMLENBQVlPLENBQTlCLEVBQWlDLEtBQUtQLE1BQUwsQ0FBWVEsQ0FBN0MsRUFBZ0QsS0FBS1AsVUFBTCxDQUFnQlEsS0FBaEUsRUFBdUUsS0FBS1IsVUFBTCxDQUFnQlMsTUFBdkY7QUFDSCxHQUhROztBQUliO0FBQUMsQ0FaRCxDQUErQkMsYUFBL0I7O0FBQWFDLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvUmVjdGFuZ2xlLnRzPzA0NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTaGFwZX0gZnJvbSBcIi4vU2hhcGVcIjtcclxuaW1wb3J0IHtpRHJhd2FibGV9IGZyb20gXCIuL2lEcmF3YWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIGltcGxlbWVudHMgaURyYXdhYmxle1xyXG4gICAgcHJpdmF0ZSBkaW1lbnNpb25zOnt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6bnVtYmVyfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nLCBvcmlnaW46IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgZGltZW5zaW9uczogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9KSB7XHJcbiAgICAgICAgc3VwZXIoY3R4LCBjb2xvciwgb3JpZ2luKTtcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJyaWRlIGRyYXcoKXtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnksIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodClcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiX19leHRlbmRzIiwiY3R4IiwiY29sb3IiLCJvcmlnaW4iLCJkaW1lbnNpb25zIiwiX3N1cGVyIiwiX3RoaXMiLCJSZWN0YW5nbGUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJTaGFwZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Rectangle.ts\n");

/***/ }),

/***/ "./src/ts/Shape.ts":
/*!*************************!*\
  !*** ./src/ts/Shape.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Shape = void 0;\n\nvar Shape = function () {\n  function Shape(ctx, color, origin) {\n    this.ctx = ctx;\n    this.origin = origin;\n    this.color = color;\n  }\n\n  Shape.prototype.draw = function () {};\n\n  return Shape;\n}();\n\nexports.Shape = Shape;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2hhcGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQUtJLGlCQUFzQkEsR0FBdEIsRUFBcURDLEtBQXJELEVBQW9FQyxNQUFwRSxFQUFvRztBQUNoRyxTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7QUFDREUsc0NBQ0MsQ0FERDs7QUFFSjtBQUFDLENBWkQ7O0FBQXNCQyxhQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvU2hhcGUudHM/NDY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lEcmF3YWJsZX0gZnJvbSBcIi4vaURyYXdhYmxlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2hhcGUgaW1wbGVtZW50cyBpRHJhd2FibGV7XHJcbiAgICBwcm90ZWN0ZWQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcm90ZWN0ZWQgY29sb3I6c3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIG9yaWdpbjp7eDpudW1iZXIsIHk6bnVtYmVyfTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIG9yaWdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBvcmlnaW47XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZHJhdygpIHtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjdHgiLCJjb2xvciIsIm9yaWdpbiIsIlNoYXBlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Shape.ts\n");

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