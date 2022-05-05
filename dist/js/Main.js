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

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Ball = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/ts/Shape.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./Settings/settings */ \"./src/ts/Settings/settings.ts\");\n\nvar Ball = function (_super) {\n  __extends(Ball, _super);\n\n  function Ball(ctx, color, origin, radius) {\n    var _this = _super.call(this, ctx, color, origin) || this;\n\n    _this.radius = radius;\n    return _this;\n  }\n\n  Ball.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2);\n    this.ctx.fill();\n    this.ctx.closePath();\n    this.ctx.restore();\n  };\n\n  Ball.prototype.update = function () {\n    settings_1.settings.ball.origin.x += settings_1.settings.ball.speedX;\n    settings_1.settings.ball.origin.y += settings_1.settings.ball.speedY;\n    this.draw();\n  };\n\n  return Ball;\n}(Shape_1.Shape);\n\nexports.Ball = Ball;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQmFsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFHQTtFQUEwQkE7O0VBR3RCLGNBQVlDLEdBQVosRUFBMkNDLEtBQTNDLEVBQTBEQyxNQUExRCxFQUE0RkMsTUFBNUYsRUFBMEc7SUFBMUcsWUFDSUMsa0JBQU1KLEdBQU4sRUFBV0MsS0FBWCxFQUFrQkMsTUFBbEIsS0FBeUIsSUFEN0I7O0lBRUlHLEtBQUksQ0FBQ0YsTUFBTCxHQUFjQSxNQUFkOztFQUNIOztFQUdRRyxzQkFBVDtJQUNJLEtBQUtOLEdBQUwsQ0FBU08sSUFBVDtJQUNBLEtBQUtQLEdBQUwsQ0FBU1EsU0FBVDtJQUNBLEtBQUtSLEdBQUwsQ0FBU1MsU0FBVCxHQUFxQixLQUFLUixLQUExQjtJQUNBLEtBQUtELEdBQUwsQ0FBU1UsR0FBVCxDQUFhLEtBQUtSLE1BQUwsQ0FBWVMsQ0FBekIsRUFBNEIsS0FBS1QsTUFBTCxDQUFZVSxDQUF4QyxFQUEyQyxLQUFLVCxNQUFoRCxFQUF3RCxDQUF4RCxFQUEyRFUsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBckU7SUFDQSxLQUFLZCxHQUFMLENBQVNlLElBQVQ7SUFDQSxLQUFLZixHQUFMLENBQVNnQixTQUFUO0lBQ0EsS0FBS2hCLEdBQUwsQ0FBU2lCLE9BQVQ7RUFDSCxDQVJROztFQVVUWDtJQUNJWSxvQkFBU0MsSUFBVCxDQUFjakIsTUFBZCxDQUFxQlMsQ0FBckIsSUFBMEJPLG9CQUFTQyxJQUFULENBQWNDLE1BQXhDO0lBQ0FGLG9CQUFTQyxJQUFULENBQWNqQixNQUFkLENBQXFCVSxDQUFyQixJQUEwQk0sb0JBQVNDLElBQVQsQ0FBY0UsTUFBeEM7SUFDQSxLQUFLQyxJQUFMO0VBQ0gsQ0FKRDs7RUFLSjtBQUFDLENBeEJELENBQTBCQyxhQUExQjs7QUFBYUMsWUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0JhbGwudHM/MGY4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NoYXBlfSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQge2lEcmF3YWJsZX0gZnJvbSBcIi4vaURyYXdhYmxlXCI7XHJcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL1NldHRpbmdzL3NldHRpbmdzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJhbGwgZXh0ZW5kcyBTaGFwZSBpbXBsZW1lbnRzIGlEcmF3YWJsZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJhZGl1czogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjb2xvcjogc3RyaW5nLCBvcmlnaW46IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihjdHgsIGNvbG9yLCBvcmlnaW4pO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvdmVycmlkZSBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgc2V0dGluZ3MuYmFsbC5vcmlnaW4ueCArPSBzZXR0aW5ncy5iYWxsLnNwZWVkWDsgLy8gT24gZMOpcGxhY2UgbGEgYmFsbGVcclxuICAgICAgICBzZXR0aW5ncy5iYWxsLm9yaWdpbi55ICs9IHNldHRpbmdzLmJhbGwuc3BlZWRZO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImN0eCIsImNvbG9yIiwib3JpZ2luIiwicmFkaXVzIiwiX3N1cGVyIiwiX3RoaXMiLCJCYWxsIiwic2F2ZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImFyYyIsIngiLCJ5IiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsInJlc3RvcmUiLCJzZXR0aW5nc18xIiwiYmFsbCIsInNwZWVkWCIsInNwZWVkWSIsImRyYXciLCJTaGFwZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Ball.ts\n");

/***/ }),

/***/ "./src/ts/Brick.ts":
/*!*************************!*\
  !*** ./src/ts/Brick.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Brick = void 0;\n\nvar Brick = function () {\n  function Brick(ctx, color, origin, dimensions) {\n    this.ctx = ctx;\n    this.origin = origin;\n    this.dimensions = dimensions;\n    this.color = color;\n  }\n\n  Brick.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.rect(this.origin.x, this.origin.y, this.dimensions.width, this.dimensions.height);\n    this.ctx.closePath();\n    this.ctx.fill();\n    this.ctx.restore();\n  };\n\n  Brick.prototype.update = function () {\n    this.draw();\n  };\n\n  return Brick;\n}();\n\nexports.Brick = Brick;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQnJpY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTtFQU1JLGVBQVlBLEdBQVosRUFBNENDLEtBQTVDLEVBQTJEQyxNQUEzRCxFQUE2RkMsVUFBN0YsRUFBMEk7SUFDdEksS0FBS0gsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0UsTUFBTCxHQUFjQSxNQUFkO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7SUFDQSxLQUFLRixLQUFMLEdBQWFBLEtBQWI7RUFDSDs7RUFFREc7SUFDSSxLQUFLSixHQUFMLENBQVNLLElBQVQ7SUFDQSxLQUFLTCxHQUFMLENBQVNNLFNBQVQ7SUFDQSxLQUFLTixHQUFMLENBQVNPLFNBQVQsR0FBbUIsS0FBS04sS0FBeEI7SUFDQSxLQUFLRCxHQUFMLENBQVNRLElBQVQsQ0FBYyxLQUFLTixNQUFMLENBQVlPLENBQTFCLEVBQTZCLEtBQUtQLE1BQUwsQ0FBWVEsQ0FBekMsRUFBMkMsS0FBS1AsVUFBTCxDQUFnQlEsS0FBM0QsRUFBaUUsS0FBS1IsVUFBTCxDQUFnQlMsTUFBakY7SUFDQSxLQUFLWixHQUFMLENBQVNhLFNBQVQ7SUFDQSxLQUFLYixHQUFMLENBQVNjLElBQVQ7SUFDQSxLQUFLZCxHQUFMLENBQVNlLE9BQVQ7RUFDSCxDQVJEOztFQVNBWDtJQUNJLEtBQUtZLElBQUw7RUFDSCxDQUZEOztFQUdKO0FBQUMsQ0F6QkQ7O0FBQWFDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9Ccmljay50cz9iYTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2hhcGV9IGZyb20gXCIuL1NoYXBlXCI7XHJcbmltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vU2V0dGluZ3Mvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtyYW5kb219IGZyb20gXCIuL2hlcGxlcnMvbWF0aFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJyaWNrIGltcGxlbWVudHMgaURyYXdhYmxle1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgb3JpZ2luOnt4OiBudW1iZXIsIHk6bnVtYmVyfVxyXG4gICAgcHJpdmF0ZSBkaW1lbnNpb25zOnt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6bnVtYmVyfVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCA6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZywgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGRpbWVuc2lvbnM6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlPXRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55LHRoaXMuZGltZW5zaW9ucy53aWR0aCx0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImN0eCIsImNvbG9yIiwib3JpZ2luIiwiZGltZW5zaW9ucyIsIkJyaWNrIiwic2F2ZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsInJlY3QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xvc2VQYXRoIiwiZmlsbCIsInJlc3RvcmUiLCJkcmF3IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Brick.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/ts/Rectangle.ts\");\n\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/ts/Ball.ts\");\n\nvar Brick_1 = __webpack_require__(/*! ./Brick */ \"./src/ts/Brick.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./Settings/settings */ \"./src/ts/Settings/settings.ts\");\n\nvar clear_1 = __webpack_require__(/*! ./heplers/clear */ \"./src/ts/heplers/clear.ts\");\n\nvar math_1 = __webpack_require__(/*! ./heplers/math */ \"./src/ts/heplers/math.ts\");\n\nvar canvas = document.getElementById('my-canvas');\nvar ctx = canvas.getContext('2d');\nvar shapes = [];\nvar bricks;\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar background = new Rectangle_1.Rectangle(ctx, 'black', {\n  x: 0,\n  y: 0\n}, {\n  width: canvas.width,\n  height: canvas.height\n});\nvar intervalId = setInterval(draw, 10);\n\nfunction initBricks() {\n  bricks = new Array(settings_1.settings.nbLigne);\n\n  for (var i = 0; i < settings_1.settings.nbLigne; i++) {\n    bricks[i] = new Array(settings_1.settings.nbColonne);\n\n    for (var j = 0; j < settings_1.settings.nbColonne; j++) {\n      bricks[i][j] = 1;\n    }\n  }\n}\n\nfunction drawBricks() {\n  for (var i = 0; i < settings_1.settings.nbLigne; i++) {\n    for (var j = 0; j < settings_1.settings.nbColonne; j++) {\n      if (bricks[i][j] == 1) {\n        new Brick_1.Brick(ctx, settings_1.settings.brick.colors[(0, math_1.random)(0, settings_1.settings.brick.colors.length, false)], {\n          x: canvas.width / 4 + j * (settings_1.settings.brick.width + settings_1.settings.brick.padding) + settings_1.settings.brick.padding,\n          y: i * (settings_1.settings.brick.height + settings_1.settings.brick.padding) + settings_1.settings.brick.padding\n        }, {\n          width: settings_1.settings.brick.width,\n          height: settings_1.settings.brick.height\n        }).draw();\n      }\n    }\n  }\n}\n\ninitBricks();\ndrawBricks();\n\nfunction collisionCotes() {\n  if (settings_1.settings.ball.origin.x + settings_1.settings.ball.speedX > canvas.width || settings_1.settings.ball.origin.x + settings_1.settings.ball.speedX < 0) settings_1.settings.ball.speedX = -settings_1.settings.ball.speedX;\n  if (settings_1.settings.ball.origin.y + settings_1.settings.ball.speedY > canvas.height || settings_1.settings.ball.origin.y + settings_1.settings.ball.speedY < 0) settings_1.settings.ball.speedY = -settings_1.settings.ball.speedY;else if (settings_1.settings.ball.origin.y + settings_1.settings.ball.radius > canvas.height - settings_1.settings.barre.height) {\n    if (settings_1.settings.ball.origin.x > settings_1.settings.barre.positionX && settings_1.settings.ball.origin.x < settings_1.settings.barre.positionX + settings_1.settings.barre.width) {\n      settings_1.settings.ball.speedY = -settings_1.settings.ball.speedY;\n    } else if (settings_1.settings.ball.origin.y + settings_1.settings.ball.radius > canvas.height) {\n      clearInterval(intervalId);\n    }\n  }\n}\n\nfunction addEventListeners() {\n  window.addEventListener('keydown', function (e) {\n    if (e.key === 'ArrowRight') {\n      settings_1.settings.barre.positionX += 0.1;\n\n      if (settings_1.settings.barre.positionX + settings_1.settings.barre.width > canvas.width) {\n        settings_1.settings.barre.positionX = canvas.width - settings_1.settings.barre.width;\n      }\n    }\n\n    if (e.key === 'ArrowLeft') {\n      settings_1.settings.barre.positionX -= 0.1;\n\n      if (settings_1.settings.barre.positionX < 0) {\n        settings_1.settings.barre.positionX = 0;\n      }\n    }\n  });\n}\n\nfunction draw() {\n  (0, clear_1.clear)(ctx, canvas);\n  background.draw();\n  addEventListeners();\n  var barre = new Rectangle_1.Rectangle(ctx, settings_1.settings.barre.color, {\n    x: settings_1.settings.barre.positionX,\n    y: canvas.height - settings_1.settings.barre.height\n  }, {\n    width: settings_1.settings.barre.width,\n    height: settings_1.settings.barre.height\n  });\n  barre.draw();\n  var ball = new Ball_1.Ball(ctx, settings_1.settings.ball.color, {\n    x: settings_1.settings.ball.origin.x,\n    y: settings_1.settings.ball.origin.y\n  }, settings_1.settings.ball.radius);\n  ball.draw();\n  collisionCotes();\n  ball.update();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxDO0FBQ0EsSUFBTUMsR0FBRyxHQUE2QkgsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQXRDO0FBQ0EsSUFBTUMsTUFBTSxHQUFlLEVBQTNCO0FBQ0EsSUFBSUMsTUFBSjtBQUVBTixNQUFNLENBQUNPLEtBQVAsR0FBZUMsTUFBTSxDQUFDQyxVQUF0QjtBQUNBVCxNQUFNLENBQUNVLE1BQVAsR0FBZ0JGLE1BQU0sQ0FBQ0csV0FBdkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsSUFBSUMscUJBQUosQ0FBY1YsR0FBZCxFQUFrQixPQUFsQixFQUEyQjtFQUFDVyxDQUFDLEVBQUMsQ0FBSDtFQUFLQyxDQUFDLEVBQUM7QUFBUCxDQUEzQixFQUFzQztFQUFDUixLQUFLLEVBQUNQLE1BQU0sQ0FBQ08sS0FBZDtFQUFxQkcsTUFBTSxFQUFDVixNQUFNLENBQUNVO0FBQW5DLENBQXRDLENBQW5CO0FBRUEsSUFBSU0sVUFBVSxHQUFHQyxXQUFXLENBQUNDLElBQUQsRUFBTyxFQUFQLENBQTVCOztBQUVBLFNBQVNDLFVBQVQsR0FBbUI7RUFDZmIsTUFBTSxHQUFHLElBQUljLEtBQUosQ0FBVUMsb0JBQVNDLE9BQW5CLENBQVQ7O0VBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUdGLG9CQUFTQyxPQUEzQixFQUFvQ0MsQ0FBQyxFQUFyQyxFQUF5QztJQUNyQ2pCLE1BQU0sQ0FBQ2lCLENBQUQsQ0FBTixHQUFZLElBQUlILEtBQUosQ0FBVUMsb0JBQVNHLFNBQW5CLENBQVo7O0lBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUdKLG9CQUFTRyxTQUEzQixFQUFzQ0MsQ0FBQyxFQUF2QyxFQUEyQztNQUN2Q25CLE1BQU0sQ0FBQ2lCLENBQUQsQ0FBTixDQUFVRSxDQUFWLElBQWUsQ0FBZjtJQUNIO0VBQ0o7QUFDSjs7QUFDRCxTQUFTQyxVQUFULEdBQW1CO0VBQ2YsS0FBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixvQkFBU0MsT0FBN0IsRUFBc0NDLENBQUMsRUFBdkMsRUFBMkM7SUFDdkMsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixvQkFBU0csU0FBN0IsRUFBd0NDLENBQUMsRUFBekMsRUFBNkM7TUFDekMsSUFBSW5CLE1BQU0sQ0FBQ2lCLENBQUQsQ0FBTixDQUFVRSxDQUFWLEtBQWdCLENBQXBCLEVBQXVCO1FBQ25CLElBQUlFLGFBQUosQ0FBVXhCLEdBQVYsRUFBZWtCLG9CQUFTTyxLQUFULENBQWVDLE1BQWYsQ0FBc0IsbUJBQU8sQ0FBUCxFQUFTUixvQkFBU08sS0FBVCxDQUFlQyxNQUFmLENBQXNCQyxNQUEvQixFQUF1QyxLQUF2QyxDQUF0QixDQUFmLEVBQXFGO1VBQzdFaEIsQ0FBQyxFQUFFZCxNQUFNLENBQUNPLEtBQVAsR0FBZSxDQUFmLEdBQW9Ca0IsQ0FBQyxJQUFJSixvQkFBU08sS0FBVCxDQUFlckIsS0FBZixHQUF1QmMsb0JBQVNPLEtBQVQsQ0FBZUcsT0FBMUMsQ0FBckIsR0FBMkVWLG9CQUFTTyxLQUFULENBQWVHLE9BRGhCO1VBRTdFaEIsQ0FBQyxFQUFHUSxDQUFDLElBQUlGLG9CQUFTTyxLQUFULENBQWVsQixNQUFmLEdBQXdCVyxvQkFBU08sS0FBVCxDQUFlRyxPQUEzQyxDQUFGLEdBQXlEVixvQkFBU08sS0FBVCxDQUFlRztRQUZFLENBQXJGLEVBR087VUFBQ3hCLEtBQUssRUFBRWMsb0JBQVNPLEtBQVQsQ0FBZXJCLEtBQXZCO1VBQThCRyxNQUFNLEVBQUVXLG9CQUFTTyxLQUFULENBQWVsQjtRQUFyRCxDQUhQLEVBR3FFUSxJQUhyRTtNQUlIO0lBQ0o7RUFDSjtBQUNKOztBQUNEQyxVQUFVO0FBQ1ZPLFVBQVU7O0FBQ1YsU0FBU00sY0FBVCxHQUF1QjtFQUduQixJQUFJWCxvQkFBU1ksSUFBVCxDQUFjQyxNQUFkLENBQXFCcEIsQ0FBckIsR0FBeUJPLG9CQUFTWSxJQUFULENBQWNFLE1BQXZDLEdBQWdEbkMsTUFBTSxDQUFDTyxLQUF2RCxJQUFnRWMsb0JBQVNZLElBQVQsQ0FBY0MsTUFBZCxDQUFxQnBCLENBQXJCLEdBQXlCTyxvQkFBU1ksSUFBVCxDQUFjRSxNQUF2QyxHQUFnRCxDQUFwSCxFQUNJZCxvQkFBU1ksSUFBVCxDQUFjRSxNQUFkLEdBQXVCLENBQUNkLG9CQUFTWSxJQUFULENBQWNFLE1BQXRDO0VBRUosSUFBSWQsb0JBQVNZLElBQVQsQ0FBY0MsTUFBZCxDQUFxQm5CLENBQXJCLEdBQXlCTSxvQkFBU1ksSUFBVCxDQUFjRyxNQUF2QyxHQUFnRHBDLE1BQU0sQ0FBQ1UsTUFBdkQsSUFBaUVXLG9CQUFTWSxJQUFULENBQWNDLE1BQWQsQ0FBcUJuQixDQUFyQixHQUF5Qk0sb0JBQVNZLElBQVQsQ0FBY0csTUFBdkMsR0FBZ0QsQ0FBckgsRUFDSWYsb0JBQVNZLElBQVQsQ0FBY0csTUFBZCxHQUF1QixDQUFDZixvQkFBU1ksSUFBVCxDQUFjRyxNQUF0QyxDQURKLEtBS0ssSUFBR2Ysb0JBQVNZLElBQVQsQ0FBY0MsTUFBZCxDQUFxQm5CLENBQXJCLEdBQXlCTSxvQkFBU1ksSUFBVCxDQUFjSSxNQUF2QyxHQUFnRHJDLE1BQU0sQ0FBQ1UsTUFBUCxHQUFnQlcsb0JBQVNpQixLQUFULENBQWU1QixNQUFsRixFQUF5RjtJQUMxRixJQUFHVyxvQkFBU1ksSUFBVCxDQUFjQyxNQUFkLENBQXFCcEIsQ0FBckIsR0FBeUJPLG9CQUFTaUIsS0FBVCxDQUFlQyxTQUF4QyxJQUFxRGxCLG9CQUFTWSxJQUFULENBQWNDLE1BQWQsQ0FBcUJwQixDQUFyQixHQUF5Qk8sb0JBQVNpQixLQUFULENBQWVDLFNBQWYsR0FBMkJsQixvQkFBU2lCLEtBQVQsQ0FBZS9CLEtBQTNILEVBQWlJO01BRTdIYyxvQkFBU1ksSUFBVCxDQUFjRyxNQUFkLEdBQXVCLENBQUNmLG9CQUFTWSxJQUFULENBQWNHLE1BQXRDO0lBQ0gsQ0FIRCxNQUlLLElBQUdmLG9CQUFTWSxJQUFULENBQWNDLE1BQWQsQ0FBcUJuQixDQUFyQixHQUF5Qk0sb0JBQVNZLElBQVQsQ0FBY0ksTUFBdkMsR0FBZ0RyQyxNQUFNLENBQUNVLE1BQTFELEVBQWlFO01BQ2xFOEIsYUFBYSxDQUFDeEIsVUFBRCxDQUFiO0lBQ0g7RUFDSjtBQUNKOztBQUNELFNBQVN5QixpQkFBVCxHQUEwQjtFQUN0QmpDLE1BQU0sQ0FBQ2tDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLENBQUQsRUFBaUI7SUFDaEQsSUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsWUFBZCxFQUE0QjtNQUN4QnZCLG9CQUFTaUIsS0FBVCxDQUFlQyxTQUFmLElBQTRCLEdBQTVCOztNQUNBLElBQUlsQixvQkFBU2lCLEtBQVQsQ0FBZUMsU0FBZixHQUEyQmxCLG9CQUFTaUIsS0FBVCxDQUFlL0IsS0FBMUMsR0FBa0RQLE1BQU0sQ0FBQ08sS0FBN0QsRUFBbUU7UUFDL0RjLG9CQUFTaUIsS0FBVCxDQUFlQyxTQUFmLEdBQTRCdkMsTUFBTSxDQUFDTyxLQUFQLEdBQWVjLG9CQUFTaUIsS0FBVCxDQUFlL0IsS0FBMUQ7TUFDSDtJQUNKOztJQUNELElBQUlvQyxDQUFDLENBQUNDLEdBQUYsS0FBVSxXQUFkLEVBQTJCO01BQ3ZCdkIsb0JBQVNpQixLQUFULENBQWVDLFNBQWYsSUFBNEIsR0FBNUI7O01BQ0EsSUFBSWxCLG9CQUFTaUIsS0FBVCxDQUFlQyxTQUFmLEdBQTJCLENBQS9CLEVBQWlDO1FBQzdCbEIsb0JBQVNpQixLQUFULENBQWVDLFNBQWYsR0FBNEIsQ0FBNUI7TUFDSDtJQUNKO0VBQ0osQ0FiRDtBQWNIOztBQUVELFNBQVNyQixJQUFULEdBQWE7RUFDVCxtQkFBTWYsR0FBTixFQUFXSCxNQUFYO0VBRUFZLFVBQVUsQ0FBQ00sSUFBWDtFQUlBdUIsaUJBQWlCO0VBR2pCLElBQUlILEtBQUssR0FBRyxJQUFJekIscUJBQUosQ0FBY1YsR0FBZCxFQUFtQmtCLG9CQUFTaUIsS0FBVCxDQUFlTyxLQUFsQyxFQUF5QztJQUFDL0IsQ0FBQyxFQUFFTyxvQkFBU2lCLEtBQVQsQ0FBZUMsU0FBbkI7SUFBOEJ4QixDQUFDLEVBQUVmLE1BQU0sQ0FBQ1UsTUFBUCxHQUFjVyxvQkFBU2lCLEtBQVQsQ0FBZTVCO0VBQTlELENBQXpDLEVBQStHO0lBQUNILEtBQUssRUFBRWMsb0JBQVNpQixLQUFULENBQWUvQixLQUF2QjtJQUE4QkcsTUFBTSxFQUFFVyxvQkFBU2lCLEtBQVQsQ0FBZTVCO0VBQXJELENBQS9HLENBQVo7RUFDQTRCLEtBQUssQ0FBQ3BCLElBQU47RUFHQSxJQUFJZSxJQUFJLEdBQUcsSUFBSWEsV0FBSixDQUFTM0MsR0FBVCxFQUFja0Isb0JBQVNZLElBQVQsQ0FBY1ksS0FBNUIsRUFBa0M7SUFBQy9CLENBQUMsRUFBQ08sb0JBQVNZLElBQVQsQ0FBY0MsTUFBZCxDQUFxQnBCLENBQXhCO0lBQTJCQyxDQUFDLEVBQUNNLG9CQUFTWSxJQUFULENBQWNDLE1BQWQsQ0FBcUJuQjtFQUFsRCxDQUFsQyxFQUF3Rk0sb0JBQVNZLElBQVQsQ0FBY0ksTUFBdEcsQ0FBWDtFQUNBSixJQUFJLENBQUNmLElBQUw7RUFHQWMsY0FBYztFQUdkQyxJQUFJLENBQUNjLE1BQUw7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvTWFpbi50cz80ODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQge0JhbGx9IGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IHtCcmlja30gZnJvbSBcIi4vQnJpY2tcIjtcclxuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vU2V0dGluZ3Mvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtjbGVhcn0gZnJvbSBcIi4vaGVwbGVycy9jbGVhclwiO1xyXG5pbXBvcnQge3JhbmRvbX0gZnJvbSBcIi4vaGVwbGVycy9tYXRoXCI7XHJcblxyXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5jb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuY29uc3Qgc2hhcGVzOmlEcmF3YWJsZVtdID0gW107XHJcbmxldCBicmlja3M6IGFueVtdO1xyXG5cclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgUmVjdGFuZ2xlKGN0eCwnYmxhY2snLCB7eDowLHk6MH0sIHt3aWR0aDpjYW52YXMud2lkdGgsIGhlaWdodDpjYW52YXMuaGVpZ2h0fSk7XHJcblxyXG5sZXQgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGRyYXcsIDEwKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRCcmlja3MoKSB7XHJcbiAgICBicmlja3MgPSBuZXcgQXJyYXkoc2V0dGluZ3MubmJMaWduZSk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBzZXR0aW5ncy5uYkxpZ25lOyBpKyspIHtcclxuICAgICAgICBicmlja3NbaV0gPSBuZXcgQXJyYXkoc2V0dGluZ3MubmJDb2xvbm5lKTtcclxuICAgICAgICBmb3IgKGxldCBqPTA7IGogPCBzZXR0aW5ncy5uYkNvbG9ubmU7IGorKykge1xyXG4gICAgICAgICAgICBicmlja3NbaV1bal0gPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkcmF3QnJpY2tzKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5ncy5uYkxpZ25lOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNldHRpbmdzLm5iQ29sb25uZTsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChicmlja3NbaV1bal0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbmV3IEJyaWNrKGN0eCwgc2V0dGluZ3MuYnJpY2suY29sb3JzW3JhbmRvbSgwLHNldHRpbmdzLmJyaWNrLmNvbG9ycy5sZW5ndGgsIGZhbHNlKV0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY2FudmFzLndpZHRoIC8gNCArIChqICogKHNldHRpbmdzLmJyaWNrLndpZHRoICsgc2V0dGluZ3MuYnJpY2sucGFkZGluZykpICsgc2V0dGluZ3MuYnJpY2sucGFkZGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogKGkgKiAoc2V0dGluZ3MuYnJpY2suaGVpZ2h0ICsgc2V0dGluZ3MuYnJpY2sucGFkZGluZykpICsgc2V0dGluZ3MuYnJpY2sucGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHt3aWR0aDogc2V0dGluZ3MuYnJpY2sud2lkdGgsIGhlaWdodDogc2V0dGluZ3MuYnJpY2suaGVpZ2h0fSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmluaXRCcmlja3MoKTtcclxuZHJhd0JyaWNrcygpO1xyXG5mdW5jdGlvbiBjb2xsaXNpb25Db3Rlcygpe1xyXG4gICAgLy9Ew6l0ZWN0aW9uIGRlIGxhIGJhbGxlIHN1ciBsZXMgY8O0dMOpc1xyXG4gICAgLy9kcm9pdGUgb3Ugw6AgZ2F1Y2hlXHJcbiAgICBpZiAoc2V0dGluZ3MuYmFsbC5vcmlnaW4ueCArIHNldHRpbmdzLmJhbGwuc3BlZWRYID4gY2FudmFzLndpZHRoIHx8IHNldHRpbmdzLmJhbGwub3JpZ2luLnggKyBzZXR0aW5ncy5iYWxsLnNwZWVkWCA8IDApXHJcbiAgICAgICAgc2V0dGluZ3MuYmFsbC5zcGVlZFggPSAtc2V0dGluZ3MuYmFsbC5zcGVlZFg7XHJcbiAgICAvL2JhcyBvdSBoYXV0XHJcbiAgICBpZiAoc2V0dGluZ3MuYmFsbC5vcmlnaW4ueSArIHNldHRpbmdzLmJhbGwuc3BlZWRZID4gY2FudmFzLmhlaWdodCB8fCBzZXR0aW5ncy5iYWxsLm9yaWdpbi55ICsgc2V0dGluZ3MuYmFsbC5zcGVlZFkgPCAwKVxyXG4gICAgICAgIHNldHRpbmdzLmJhbGwuc3BlZWRZID0gLXNldHRpbmdzLmJhbGwuc3BlZWRZO1xyXG5cclxuICAgICAgICAvL0TDqXRlY3Rpb24gZGUgbGEgY29sbGlzaW9uIGF2ZWMgbGEgYmFycmVcclxuICAgIC8vU2kgbGEgYmFsbGUgcmVudHJlIGVuIGNvbGxpc2lvbiBhdmVjIGxhIGJhcnJlIC0tPiBlbGxlIHJlYm9uZGl0XHJcbiAgICBlbHNlIGlmKHNldHRpbmdzLmJhbGwub3JpZ2luLnkgKyBzZXR0aW5ncy5iYWxsLnJhZGl1cyA+IGNhbnZhcy5oZWlnaHQgLSBzZXR0aW5ncy5iYXJyZS5oZWlnaHQpe1xyXG4gICAgICAgIGlmKHNldHRpbmdzLmJhbGwub3JpZ2luLnggPiBzZXR0aW5ncy5iYXJyZS5wb3NpdGlvblggJiYgc2V0dGluZ3MuYmFsbC5vcmlnaW4ueCA8IHNldHRpbmdzLmJhcnJlLnBvc2l0aW9uWCArIHNldHRpbmdzLmJhcnJlLndpZHRoKXtcclxuICAgICAgICAgICAgLy9sYSBiYWxsZSByZWJvbmRpdFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5iYWxsLnNwZWVkWSA9IC1zZXR0aW5ncy5iYWxsLnNwZWVkWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihzZXR0aW5ncy5iYWxsLm9yaWdpbi55ICsgc2V0dGluZ3MuYmFsbC5yYWRpdXMgPiBjYW52YXMuaGVpZ2h0KXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5iYXJyZS5wb3NpdGlvblggKz0gMC4xO1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuYmFycmUucG9zaXRpb25YICsgc2V0dGluZ3MuYmFycmUud2lkdGggPiBjYW52YXMud2lkdGgpe1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuYmFycmUucG9zaXRpb25YICA9IGNhbnZhcy53aWR0aCAtIHNldHRpbmdzLmJhcnJlLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3MuYmFycmUucG9zaXRpb25YIC09IDAuMTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmJhcnJlLnBvc2l0aW9uWCA8IDApe1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuYmFycmUucG9zaXRpb25YICA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGNsZWFyKGN0eCwgY2FudmFzKTtcclxuICAgIC8vZGVzc2luZSBsZSBiYWNrZ3JvdW5kXHJcbiAgICBiYWNrZ3JvdW5kLmRyYXcoKTtcclxuICAgIC8vaW5pdEJyaWNrcygpO1xyXG4gICAgLy8gZGVzc2luZSBsZXMgYnJpcXVlc1xyXG4gICAgLy9kcmF3QnJpY2tzKCk7XHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIC8vIGRlc3NpbiBkZSBsYSBiYXJyZVxyXG4gICAgbGV0IGJhcnJlID0gbmV3IFJlY3RhbmdsZShjdHgsIHNldHRpbmdzLmJhcnJlLmNvbG9yLCB7eDogc2V0dGluZ3MuYmFycmUucG9zaXRpb25YLCB5OiBjYW52YXMuaGVpZ2h0LXNldHRpbmdzLmJhcnJlLmhlaWdodH0se3dpZHRoOiBzZXR0aW5ncy5iYXJyZS53aWR0aCwgaGVpZ2h0OiBzZXR0aW5ncy5iYXJyZS5oZWlnaHR9KTtcclxuICAgIGJhcnJlLmRyYXcoKTtcclxuXHJcbiAgICAvLyBkZXNzaW4gZGUgbGEgYmFsbGVcclxuICAgIGxldCBiYWxsID0gbmV3IEJhbGwoY3R4LCBzZXR0aW5ncy5iYWxsLmNvbG9yLHt4OnNldHRpbmdzLmJhbGwub3JpZ2luLngsIHk6c2V0dGluZ3MuYmFsbC5vcmlnaW4ueX0sIHNldHRpbmdzLmJhbGwucmFkaXVzKTtcclxuICAgIGJhbGwuZHJhdygpO1xyXG5cclxuICAgIC8vQ29sbGlzaW9uIGF2ZWMgbGVzIGPDtHTDqXMgZXQgbGEgYmFycmVcclxuICAgIGNvbGxpc2lvbkNvdGVzKCk7XHJcblxyXG4gICAgLy9jaGFuZ2UgbGEgdml0ZXNzZSBkZSBsYSBiYWxsZVxyXG4gICAgYmFsbC51cGRhdGUoKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2hhcGVzIiwiYnJpY2tzIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJiYWNrZ3JvdW5kIiwiUmVjdGFuZ2xlXzEiLCJ4IiwieSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJpbml0QnJpY2tzIiwiQXJyYXkiLCJzZXR0aW5nc18xIiwibmJMaWduZSIsImkiLCJuYkNvbG9ubmUiLCJqIiwiZHJhd0JyaWNrcyIsIkJyaWNrXzEiLCJicmljayIsImNvbG9ycyIsImxlbmd0aCIsInBhZGRpbmciLCJjb2xsaXNpb25Db3RlcyIsImJhbGwiLCJvcmlnaW4iLCJzcGVlZFgiLCJzcGVlZFkiLCJyYWRpdXMiLCJiYXJyZSIsInBvc2l0aW9uWCIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwiY29sb3IiLCJCYWxsXzEiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

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

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  nbLigne: 5,\n  nbColonne: 4,\n  brick: {\n    colors: [\"hsl(0, 100%, 84%)\", \"hsl(33, 100%, 82%)\", \"hsl(217, 100%, 81%)\", \"hsl(249, 100%, 85%)\", \"hsl(110, 100%, 87%)\"],\n    width: 150,\n    height: 40,\n    padding: 5\n  },\n  ball: {\n    speedX: 5,\n    speedY: 5,\n    origin: {\n      x: 0,\n      y: 0\n    },\n    radius: 10,\n    color: 'white'\n  },\n  barre: {\n    height: 30,\n    width: 200,\n    positionX: 500,\n    color: 'white'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2V0dGluZ3Mvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztFQUNwQkMsT0FBTyxFQUFFLENBRFc7RUFFcEJDLFNBQVMsRUFBRSxDQUZTO0VBR3BCQyxLQUFLLEVBQUM7SUFDRkMsTUFBTSxFQUFDLENBQUMsbUJBQUQsRUFBcUIsb0JBQXJCLEVBQTBDLHFCQUExQyxFQUFnRSxxQkFBaEUsRUFBc0YscUJBQXRGLENBREw7SUFFRkMsS0FBSyxFQUFFLEdBRkw7SUFHRkMsTUFBTSxFQUFFLEVBSE47SUFJRkMsT0FBTyxFQUFFO0VBSlAsQ0FIYztFQVNwQkMsSUFBSSxFQUFDO0lBQ0RDLE1BQU0sRUFBRSxDQURQO0lBRURDLE1BQU0sRUFBRSxDQUZQO0lBR0RDLE1BQU0sRUFBRTtNQUFDQyxDQUFDLEVBQUUsQ0FBSjtNQUFPQyxDQUFDLEVBQUM7SUFBVCxDQUhQO0lBSURDLE1BQU0sRUFBRSxFQUpQO0lBS0RDLEtBQUssRUFBRTtFQUxOLENBVGU7RUFnQnBCQyxLQUFLLEVBQUM7SUFDRlYsTUFBTSxFQUFFLEVBRE47SUFFRkQsS0FBSyxFQUFFLEdBRkw7SUFHRlksU0FBUyxFQUFFLEdBSFQ7SUFJRkYsS0FBSyxFQUFFO0VBSkw7QUFoQmMsQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvU2V0dGluZ3Mvc2V0dGluZ3MudHM/OTRiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBuYkxpZ25lOiA1LFxyXG4gICAgbmJDb2xvbm5lOiA0LFxyXG4gICAgYnJpY2s6e1xyXG4gICAgICAgIGNvbG9yczpbXCJoc2woMCwgMTAwJSwgODQlKVwiLFwiaHNsKDMzLCAxMDAlLCA4MiUpXCIsXCJoc2woMjE3LCAxMDAlLCA4MSUpXCIsXCJoc2woMjQ5LCAxMDAlLCA4NSUpXCIsXCJoc2woMTEwLCAxMDAlLCA4NyUpXCJdLFxyXG4gICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgfSxcclxuICAgIGJhbGw6e1xyXG4gICAgICAgIHNwZWVkWDogNSxcclxuICAgICAgICBzcGVlZFk6IDUsXHJcbiAgICAgICAgb3JpZ2luOiB7eDogMCwgeTowfSxcclxuICAgICAgICByYWRpdXM6IDEwLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgfSxcclxuICAgIGJhcnJlOntcclxuICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgcG9zaXRpb25YOiA1MDAsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJuYkxpZ25lIiwibmJDb2xvbm5lIiwiYnJpY2siLCJjb2xvcnMiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmciLCJiYWxsIiwic3BlZWRYIiwic3BlZWRZIiwib3JpZ2luIiwieCIsInkiLCJyYWRpdXMiLCJjb2xvciIsImJhcnJlIiwicG9zaXRpb25YIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Settings/settings.ts\n");

/***/ }),

/***/ "./src/ts/Shape.ts":
/*!*************************!*\
  !*** ./src/ts/Shape.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Shape = void 0;\n\nvar Shape = function () {\n  function Shape(ctx, color, origin) {\n    this.ctx = ctx;\n    this.origin = origin;\n    this.color = color;\n  }\n\n  Shape.prototype.draw = function () {};\n\n  return Shape;\n}();\n\nexports.Shape = Shape;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2hhcGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtFQUtJLGVBQXNCQSxHQUF0QixFQUFxREMsS0FBckQsRUFBb0VDLE1BQXBFLEVBQW9HO0lBQ2hHLEtBQUtGLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtFLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtELEtBQUwsR0FBYUEsS0FBYjtFQUNIOztFQUNERSxvQ0FDQyxDQUREOztFQUVKO0FBQUMsQ0FaRDs7QUFBc0JDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9TaGFwZS50cz80NjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaGFwZSBpbXBsZW1lbnRzIGlEcmF3YWJsZXtcclxuICAgIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByb3RlY3RlZCBjb2xvcjpzdHJpbmc7XHJcbiAgICBwdWJsaWMgb3JpZ2luOnt4Om51bWJlciwgeTpudW1iZXJ9O1xyXG5cclxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZywgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICBkcmF3KCkge1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImN0eCIsImNvbG9yIiwib3JpZ2luIiwiU2hhcGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Shape.ts\n");

/***/ }),

/***/ "./src/ts/heplers/clear.ts":
/*!*********************************!*\
  !*** ./src/ts/heplers/clear.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.clear = void 0;\n\nfunction clear(ctx, canvas) {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n}\n\nexports.clear = clear;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvaGVwbGVycy9jbGVhci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQWdCQSxLQUFoQixDQUFzQkMsR0FBdEIsRUFBcURDLE1BQXJELEVBQThFO0VBQ3RFRCxHQUFHLENBQUNFLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CRCxNQUFNLENBQUNFLEtBQTNCLEVBQWtDRixNQUFNLENBQUNHLE1BQXpDO0FBQ1A7O0FBRkRDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9oZXBsZXJzL2NsZWFyLnRzP2NkOTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KXtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbn0iXSwibmFtZXMiOlsiY2xlYXIiLCJjdHgiLCJjYW52YXMiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/heplers/clear.ts\n");

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