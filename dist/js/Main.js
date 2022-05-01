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

/***/ "./src/ts/Brick.ts":
/*!*************************!*\
  !*** ./src/ts/Brick.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Brick = void 0;\n\nvar Brick = function () {\n  function Brick(ctx, color, origin, dimensions) {\n    this.ctx = ctx;\n    this.origin = origin;\n    this.dimensions = dimensions;\n    this.color = color;\n  }\n\n  Brick.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.rect(this.origin.x, this.origin.y, this.dimensions.width, this.dimensions.height);\n    this.ctx.closePath();\n    this.ctx.fill();\n  };\n\n  return Brick;\n}();\n\nexports.Brick = Brick;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQnJpY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtFQU1JLGVBQVlBLEdBQVosRUFBNENDLEtBQTVDLEVBQTJEQyxNQUEzRCxFQUE2RkMsVUFBN0YsRUFBMEk7SUFDdEksS0FBS0gsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0UsTUFBTCxHQUFjQSxNQUFkO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7SUFDQSxLQUFLRixLQUFMLEdBQWFBLEtBQWI7RUFDSDs7RUFFREc7SUFDSSxLQUFLSixHQUFMLENBQVNLLFNBQVQ7SUFDQSxLQUFLTCxHQUFMLENBQVNNLFNBQVQsR0FBbUIsS0FBS0wsS0FBeEI7SUFDQSxLQUFLRCxHQUFMLENBQVNPLElBQVQsQ0FBYyxLQUFLTCxNQUFMLENBQVlNLENBQTFCLEVBQTZCLEtBQUtOLE1BQUwsQ0FBWU8sQ0FBekMsRUFBMkMsS0FBS04sVUFBTCxDQUFnQk8sS0FBM0QsRUFBaUUsS0FBS1AsVUFBTCxDQUFnQlEsTUFBakY7SUFDQSxLQUFLWCxHQUFMLENBQVNZLFNBQVQ7SUFDQSxLQUFLWixHQUFMLENBQVNhLElBQVQ7RUFDSCxDQU5EOztFQU9KO0FBQUMsQ0FwQkQ7O0FBQWFDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9Ccmljay50cz9iYTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2hhcGV9IGZyb20gXCIuL1NoYXBlXCI7XHJcbmltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmljayBpbXBsZW1lbnRzIGlEcmF3YWJsZXtcclxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIG9yaWdpbjp7eDogbnVtYmVyLCB5Om51bWJlcn1cclxuICAgIHByaXZhdGUgZGltZW5zaW9uczp7d2lkdGg6IG51bWJlciwgaGVpZ2h0Om51bWJlcn1cclxuICAgIHByaXZhdGUgY29sb3I6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHggOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIG9yaWdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBkaW1lbnNpb25zOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlPXRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55LHRoaXMuZGltZW5zaW9ucy53aWR0aCx0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImN0eCIsImNvbG9yIiwib3JpZ2luIiwiZGltZW5zaW9ucyIsIkJyaWNrIiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwicmVjdCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Brick.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/ts/Rectangle.ts\");\n\nvar Brick_1 = __webpack_require__(/*! ./Brick */ \"./src/ts/Brick.ts\");\n\nvar canvas = document.getElementById('my-canvas');\nvar ctx = canvas.getContext('2d');\nvar shapes = [];\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar background = new Rectangle_1.Rectangle(ctx, 'black', {\n  x: 0,\n  y: 0\n}, {\n  width: canvas.width,\n  height: canvas.height\n});\nbackground.draw();\nvar bricks;\nvar nbLigne = 5;\nvar nbColonne = 5;\nvar brickWidth = 100;\nvar brickHeight = 15;\nvar padding = 5;\n\nfunction initBricks() {\n  bricks = new Array(nbLigne);\n\n  for (var i = 0; i < nbLigne; i++) {\n    bricks[i] = new Array(nbColonne);\n\n    for (var j = 0; j < nbColonne; j++) {\n      bricks[i][j] = 1;\n    }\n  }\n}\n\nfunction drawBricks() {\n  for (var i = 0; i < nbLigne; i++) {\n    for (var j = 0; j < nbColonne; j++) {\n      if (bricks[i][j] == 1) {\n        new Brick_1.Brick(ctx, 'blue', {\n          x: canvas.width / 3 + j * (brickWidth + padding) + padding,\n          y: i * (brickHeight + padding) + padding\n        }, {\n          width: brickWidth,\n          height: brickHeight\n        }).draw();\n      }\n    }\n  }\n}\n\ninitBricks();\ndrawBricks();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR0E7O0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxDO0FBQ0EsSUFBTUMsR0FBRyxHQUE2QkgsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQXRDO0FBQ0EsSUFBTUMsTUFBTSxHQUFlLEVBQTNCO0FBRUFMLE1BQU0sQ0FBQ00sS0FBUCxHQUFlQyxNQUFNLENBQUNDLFVBQXRCO0FBQ0FSLE1BQU0sQ0FBQ1MsTUFBUCxHQUFnQkYsTUFBTSxDQUFDRyxXQUF2QjtBQUVBLElBQU1DLFVBQVUsR0FBRyxJQUFJQyxxQkFBSixDQUFjVCxHQUFkLEVBQWtCLE9BQWxCLEVBQTJCO0VBQUNVLENBQUMsRUFBQyxDQUFIO0VBQUtDLENBQUMsRUFBQztBQUFQLENBQTNCLEVBQXNDO0VBQUNSLEtBQUssRUFBQ04sTUFBTSxDQUFDTSxLQUFkO0VBQXFCRyxNQUFNLEVBQUNULE1BQU0sQ0FBQ1M7QUFBbkMsQ0FBdEMsQ0FBbkI7QUFDQUUsVUFBVSxDQUFDSSxJQUFYO0FBT0EsSUFBSUMsTUFBSjtBQUNBLElBQUlDLE9BQU8sR0FBRyxDQUFkO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLEdBQWpCO0FBQ0EsSUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLENBQWQ7O0FBR0EsU0FBU0MsVUFBVCxHQUFtQjtFQUNmTixNQUFNLEdBQUcsSUFBSU8sS0FBSixDQUFVTixPQUFWLENBQVQ7O0VBQ0EsS0FBSyxJQUFJTyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUdQLE9BQWxCLEVBQTJCTyxDQUFDLEVBQTVCLEVBQWdDO0lBQzVCUixNQUFNLENBQUNRLENBQUQsQ0FBTixHQUFZLElBQUlELEtBQUosQ0FBVUwsU0FBVixDQUFaOztJQUNBLEtBQUssSUFBSU8sQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFHUCxTQUFsQixFQUE2Qk8sQ0FBQyxFQUE5QixFQUFrQztNQUM5QlQsTUFBTSxDQUFDUSxDQUFELENBQU4sQ0FBVUMsQ0FBVixJQUFlLENBQWY7SUFDSDtFQUNKO0FBQ0o7O0FBRUQsU0FBU0MsVUFBVCxHQUFtQjtFQUNmLEtBQUssSUFBSUYsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFHUCxPQUFsQixFQUEyQk8sQ0FBQyxFQUE1QixFQUFnQztJQUU1QixLQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBR1AsU0FBbEIsRUFBNkJPLENBQUMsRUFBOUIsRUFBa0M7TUFDOUIsSUFBSVQsTUFBTSxDQUFDUSxDQUFELENBQU4sQ0FBVUMsQ0FBVixLQUFnQixDQUFwQixFQUF1QjtRQUNuQixJQUFJRSxhQUFKLENBQVd4QixHQUFYLEVBQWdCLE1BQWhCLEVBQXVCO1VBQUNVLENBQUMsRUFBQ2IsTUFBTSxDQUFDTSxLQUFQLEdBQWEsQ0FBYixHQUFrQm1CLENBQUMsSUFBSU4sVUFBVSxHQUFHRSxPQUFqQixDQUFuQixHQUFnREEsT0FBbkQ7VUFBNERQLENBQUMsRUFBRVUsQ0FBQyxJQUFJSixXQUFXLEdBQUdDLE9BQWxCLENBQUYsR0FBZ0NBO1FBQTlGLENBQXZCLEVBQ0k7VUFBQ2YsS0FBSyxFQUFFYSxVQUFSO1VBQW9CVixNQUFNLEVBQUVXO1FBQTVCLENBREosRUFDOENMLElBRDlDO01BRUg7SUFDSjtFQUNKO0FBQ0o7O0FBRURPLFVBQVU7QUFDVkksVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvTWFpbi50cz80ODhlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHtpRHJhd2FibGV9IGZyb20gXCIuL2lEcmF3YWJsZVwiO1xyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7QmFsbH0gZnJvbSBcIi4vQ2lyY2xlXCI7XHJcbmltcG9ydCB7QnJpY2t9IGZyb20gXCIuL0JyaWNrXCI7XHJcblxyXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5jb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuY29uc3Qgc2hhcGVzOmlEcmF3YWJsZVtdID0gW107XHJcblxyXG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgUmVjdGFuZ2xlKGN0eCwnYmxhY2snLCB7eDowLHk6MH0sIHt3aWR0aDpjYW52YXMud2lkdGgsIGhlaWdodDpjYW52YXMuaGVpZ2h0fSk7XHJcbmJhY2tncm91bmQuZHJhdygpO1xyXG5cclxuLy9jb25zdCBiYWxsID0gIG5ldyBCYWxsKGN0eCwgJ3doaXRlJywge3g6MTAwLCB5OjEwMH0sIDEwKTtcclxuLy9iYWxsLmRyYXcoKTtcclxuLy9jb25zdCBicmljayA9IG5ldyBSZWN0YW5nbGUoY3R4LCAnZ3JlZW4nLCB7eDoyMDAsIHk6IDUwfSwge3dpZHRoOiAxMDAsIGhlaWdodDozMH0pO1xyXG4vL2JyaWNrLmRyYXcoKTtcclxuXHJcbmxldCBicmlja3M6IGFueVtdO1xyXG5sZXQgbmJMaWduZSA9IDU7XHJcbmxldCBuYkNvbG9ubmUgPSA1O1xyXG5sZXQgYnJpY2tXaWR0aCA9IDEwMDtcclxubGV0IGJyaWNrSGVpZ2h0ID0gMTU7XHJcbmxldCBwYWRkaW5nID0gNTtcclxuXHJcblxyXG5mdW5jdGlvbiBpbml0QnJpY2tzKCkge1xyXG4gICAgYnJpY2tzID0gbmV3IEFycmF5KG5iTGlnbmUpO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgbmJMaWduZTsgaSsrKSB7XHJcbiAgICAgICAgYnJpY2tzW2ldID0gbmV3IEFycmF5KG5iQ29sb25uZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqIDwgbmJDb2xvbm5lOyBqKyspIHtcclxuICAgICAgICAgICAgYnJpY2tzW2ldW2pdID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdCcmlja3MoKSB7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBuYkxpZ25lOyBpKyspIHtcclxuICAgICAgICAvL2N0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqIDwgbmJDb2xvbm5lOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGJyaWNrc1tpXVtqXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgQnJpY2soIGN0eCwgJ2JsdWUnLHt4OmNhbnZhcy53aWR0aC8zICsgKGogKiAoYnJpY2tXaWR0aCArIHBhZGRpbmcpKSArIHBhZGRpbmcsIHk6KGkgKiAoYnJpY2tIZWlnaHQgKyBwYWRkaW5nKSkgKyBwYWRkaW5nfSxcclxuICAgICAgICAgICAgICAgICAgICB7d2lkdGg6IGJyaWNrV2lkdGgsIGhlaWdodDogYnJpY2tIZWlnaHR9KS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmluaXRCcmlja3MoKTtcclxuZHJhd0JyaWNrcygpOyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInNoYXBlcyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYmFja2dyb3VuZCIsIlJlY3RhbmdsZV8xIiwieCIsInkiLCJkcmF3IiwiYnJpY2tzIiwibmJMaWduZSIsIm5iQ29sb25uZSIsImJyaWNrV2lkdGgiLCJicmlja0hlaWdodCIsInBhZGRpbmciLCJpbml0QnJpY2tzIiwiQXJyYXkiLCJpIiwiaiIsImRyYXdCcmlja3MiLCJCcmlja18xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/Rectangle.ts":
/*!*****************************!*\
  !*** ./src/ts/Rectangle.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Shape.ts\");\n\nvar Rectangle = function (_super) {\n  __extends(Rectangle, _super);\n\n  function Rectangle(ctx, color, origin, dimensions) {\n    var _this = _super.call(this, ctx, color, origin) || this;\n\n    _this.dimensions = dimensions;\n    return _this;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(this.origin.x, this.origin.y, this.dimensions.width, this.dimensions.height);\n  };\n\n  return Rectangle;\n}(Shape_1.Shape);\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvUmVjdGFuZ2xlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBO0VBQStCQTs7RUFHM0IsbUJBQVlDLEdBQVosRUFBMkNDLEtBQTNDLEVBQTBEQyxNQUExRCxFQUE0RkMsVUFBNUYsRUFBeUk7SUFBekksWUFDSUMsa0JBQU1KLEdBQU4sRUFBV0MsS0FBWCxFQUFrQkMsTUFBbEIsS0FBeUIsSUFEN0I7O0lBRUlHLEtBQUksQ0FBQ0YsVUFBTCxHQUFrQkEsVUFBbEI7O0VBQ0g7O0VBRVFHLDJCQUFUO0lBQ0ksS0FBS04sR0FBTCxDQUFTTyxTQUFULEdBQXFCLEtBQUtOLEtBQTFCO0lBQ0EsS0FBS0QsR0FBTCxDQUFTUSxRQUFULENBQWtCLEtBQUtOLE1BQUwsQ0FBWU8sQ0FBOUIsRUFBaUMsS0FBS1AsTUFBTCxDQUFZUSxDQUE3QyxFQUFnRCxLQUFLUCxVQUFMLENBQWdCUSxLQUFoRSxFQUF1RSxLQUFLUixVQUFMLENBQWdCUyxNQUF2RjtFQUNILENBSFE7O0VBSWI7QUFBQyxDQVpELENBQStCQyxhQUEvQjs7QUFBYUMsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9SZWN0YW5nbGUudHM/MDQ0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NoYXBlfSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQge2lEcmF3YWJsZX0gZnJvbSBcIi4vaURyYXdhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgU2hhcGUgaW1wbGVtZW50cyBpRHJhd2FibGV7XHJcbiAgICBwcml2YXRlIGRpbWVuc2lvbnM6e3dpZHRoOiBudW1iZXIsIGhlaWdodDpudW1iZXJ9XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNvbG9yOiBzdHJpbmcsIG9yaWdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBkaW1lbnNpb25zOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcclxuICAgICAgICBzdXBlcihjdHgsIGNvbG9yLCBvcmlnaW4pO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcnJpZGUgZHJhdygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJjdHgiLCJjb2xvciIsIm9yaWdpbiIsImRpbWVuc2lvbnMiLCJfc3VwZXIiLCJfdGhpcyIsIlJlY3RhbmdsZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIlNoYXBlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Rectangle.ts\n");

/***/ }),

/***/ "./src/ts/Shape.ts":
/*!*************************!*\
  !*** ./src/ts/Shape.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Shape = void 0;\n\nvar Shape = function () {\n  function Shape(ctx, color, origin) {\n    this.ctx = ctx;\n    this.origin = origin;\n    this.color = color;\n  }\n\n  Shape.prototype.draw = function () {};\n\n  return Shape;\n}();\n\nexports.Shape = Shape;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2hhcGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtFQUtJLGVBQXNCQSxHQUF0QixFQUFxREMsS0FBckQsRUFBb0VDLE1BQXBFLEVBQW9HO0lBQ2hHLEtBQUtGLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtFLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtELEtBQUwsR0FBYUEsS0FBYjtFQUNIOztFQUNERSxvQ0FDQyxDQUREOztFQUVKO0FBQUMsQ0FaRDs7QUFBc0JDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9TaGFwZS50cz80NjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaGFwZSBpbXBsZW1lbnRzIGlEcmF3YWJsZXtcclxuICAgIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByb3RlY3RlZCBjb2xvcjpzdHJpbmc7XHJcbiAgICBwdWJsaWMgb3JpZ2luOnt4Om51bWJlciwgeTpudW1iZXJ9O1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZywgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImN0eCIsImNvbG9yIiwib3JpZ2luIiwiU2hhcGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Shape.ts\n");

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