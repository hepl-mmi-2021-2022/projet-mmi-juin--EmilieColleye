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

eval("\n\nexports.__esModule = true;\nexports.Brick = void 0;\n\nvar Brick = function () {\n  function Brick(canvas, ctx, color, origin, dimensions) {\n    this.ctx = ctx;\n    this.origin = origin;\n    this.dimensions = dimensions;\n    this.color = color;\n  }\n\n  Brick.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.rect(this.origin.x, this.origin.y, this.dimensions.width, this.dimensions.height);\n    this.ctx.closePath();\n    this.ctx.fill();\n    this.ctx.restore();\n  };\n\n  Brick.prototype.update = function () {\n    this.draw();\n  };\n\n  return Brick;\n}();\n\nexports.Brick = Brick;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQnJpY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtFQU9JLGVBQVlBLE1BQVosRUFBdUNDLEdBQXZDLEVBQXVFQyxLQUF2RSxFQUFzRkMsTUFBdEYsRUFBd0hDLFVBQXhILEVBQXFLO0lBQ2pLLEtBQUtILEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtFLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0lBQ0EsS0FBS0YsS0FBTCxHQUFhQSxLQUFiO0VBQ0g7O0VBRURHO0lBQ0ksS0FBS0osR0FBTCxDQUFTSyxJQUFUO0lBQ0EsS0FBS0wsR0FBTCxDQUFTTSxTQUFUO0lBQ0EsS0FBS04sR0FBTCxDQUFTTyxTQUFULEdBQW1CLEtBQUtOLEtBQXhCO0lBQ0EsS0FBS0QsR0FBTCxDQUFTUSxJQUFULENBQWMsS0FBS04sTUFBTCxDQUFZTyxDQUExQixFQUE2QixLQUFLUCxNQUFMLENBQVlRLENBQXpDLEVBQTJDLEtBQUtQLFVBQUwsQ0FBZ0JRLEtBQTNELEVBQWlFLEtBQUtSLFVBQUwsQ0FBZ0JTLE1BQWpGO0lBQ0EsS0FBS1osR0FBTCxDQUFTYSxTQUFUO0lBQ0EsS0FBS2IsR0FBTCxDQUFTYyxJQUFUO0lBQ0EsS0FBS2QsR0FBTCxDQUFTZSxPQUFUO0VBQ0gsQ0FSRDs7RUFTQVg7SUFDSSxLQUFLWSxJQUFMO0VBQ0gsQ0FGRDs7RUFHSjtBQUFDLENBMUJEOztBQUFhQyxhQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQnJpY2sudHM/YmExMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lEcmF3YWJsZX0gZnJvbSBcIi4vaURyYXdhYmxlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJyaWNrIGltcGxlbWVudHMgaURyYXdhYmxle1xyXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgb3JpZ2luOnt4OiBudW1iZXIsIHk6bnVtYmVyfVxyXG4gICAgcHJpdmF0ZSBkaW1lbnNpb25zOnt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6bnVtYmVyfVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eCA6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY29sb3I6IHN0cmluZywgb3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGRpbWVuc2lvbnM6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlPXRoaXMuY29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55LHRoaXMuZGltZW5zaW9ucy53aWR0aCx0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNhbnZhcyIsImN0eCIsImNvbG9yIiwib3JpZ2luIiwiZGltZW5zaW9ucyIsIkJyaWNrIiwic2F2ZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsInJlY3QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xvc2VQYXRoIiwiZmlsbCIsInJlc3RvcmUiLCJkcmF3IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Brick.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/ts/Rectangle.ts\");\n\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/ts/Ball.ts\");\n\nvar Brick_1 = __webpack_require__(/*! ./Brick */ \"./src/ts/Brick.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./Settings/settings */ \"./src/ts/Settings/settings.ts\");\n\nvar clear_1 = __webpack_require__(/*! ./heplers/clear */ \"./src/ts/heplers/clear.ts\");\n\nvar canvas = document.getElementById('my-canvas');\nvar ctx = canvas.getContext('2d');\nvar shapes = [];\nvar bricks;\nvar life;\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar background = new Rectangle_1.Rectangle(ctx, 'black', {\n  x: 0,\n  y: 0\n}, {\n  width: canvas.width,\n  height: canvas.height\n});\n\nfunction initBricks() {\n  bricks = new Array(settings_1.settings.nbLigne);\n\n  for (var i = 0; i < settings_1.settings.nbLigne; i++) {\n    bricks[i] = new Array(settings_1.settings.nbColonne);\n\n    for (var j = 0; j < settings_1.settings.nbColonne; j++) {\n      bricks[i][j] = 1;\n    }\n  }\n}\n\nfunction drawBricks() {\n  for (var i = 0; i < settings_1.settings.nbLigne; i++) {\n    for (var j = 0; j < settings_1.settings.nbColonne; j++) {\n      if (bricks[i][j] == 1) {\n        new Brick_1.Brick(canvas, ctx, 'black', {\n          x: canvas.width / 4 + j * (settings_1.settings.brick.width + settings_1.settings.brick.padding) + settings_1.settings.brick.padding,\n          y: i * (settings_1.settings.brick.height + settings_1.settings.brick.padding) + settings_1.settings.brick.padding\n        }, {\n          width: settings_1.settings.brick.width,\n          height: settings_1.settings.brick.height\n        }).draw();\n      }\n    }\n  }\n}\n\ninitBricks();\ndrawBricks();\n\nfunction collisionBriques() {\n  var rowheight = settings_1.settings.brick.height + settings_1.settings.brick.padding;\n  var colwidth = settings_1.settings.brick.width + settings_1.settings.brick.padding;\n  var row = Math.floor(settings_1.settings.ball.origin.y / rowheight);\n  var col = Math.floor(settings_1.settings.ball.origin.x / colwidth);\n\n  if (settings_1.settings.ball.origin.y < settings_1.settings.nbLigne * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {\n    settings_1.settings.ball.speedY = -settings_1.settings.ball.speedY;\n    bricks[row][col] = 0;\n  }\n}\n\nfunction collisionCotes() {\n  if (settings_1.settings.ball.origin.x + settings_1.settings.ball.speedX > canvas.width || settings_1.settings.ball.origin.x + settings_1.settings.ball.speedX < 0) settings_1.settings.ball.speedX = -settings_1.settings.ball.speedX;\n  if (settings_1.settings.ball.origin.y + settings_1.settings.ball.speedY > canvas.height || settings_1.settings.ball.origin.y + settings_1.settings.ball.speedY < 0) settings_1.settings.ball.speedY = -settings_1.settings.ball.speedY;else if (settings_1.settings.ball.origin.y + settings_1.settings.ball.radius > canvas.height - settings_1.settings.barre.height) {\n    if (settings_1.settings.ball.origin.x > settings_1.settings.barre.positionX && settings_1.settings.ball.origin.x < settings_1.settings.barre.positionX + settings_1.settings.barre.width) {\n      settings_1.settings.ball.speedY = -settings_1.settings.ball.speedY;\n    } else if (settings_1.settings.ball.origin.y + settings_1.settings.ball.radius > canvas.height) {\n      life = settings_1.settings.life - 1;\n      resetBall();\n    }\n  }\n}\n\nfunction addEventListeners() {\n  window.addEventListener('keydown', function (e) {\n    if (e.key === 'ArrowRight') {\n      settings_1.settings.barre.positionX += settings_1.settings.barre.speedX;\n\n      if (settings_1.settings.barre.positionX + settings_1.settings.barre.width > canvas.width) {\n        settings_1.settings.barre.positionX = canvas.width - settings_1.settings.barre.width;\n      }\n    }\n\n    if (e.key === 'ArrowLeft') {\n      settings_1.settings.barre.positionX -= settings_1.settings.barre.speedX;\n\n      if (settings_1.settings.barre.positionX < 0) {\n        settings_1.settings.barre.positionX = 0;\n      }\n    }\n  });\n}\n\nfunction animation() {\n  (0, clear_1.clear)(ctx, canvas);\n  draw();\n  update();\n  requestAnimationFrame(animation);\n}\n\nfunction draw() {\n  var ball = new Ball_1.Ball(ctx, settings_1.settings.ball.color, {\n    x: settings_1.settings.ball.origin.x,\n    y: settings_1.settings.ball.origin.y\n  }, settings_1.settings.ball.radius);\n  ball.draw();\n  ball.update();\n  var barre = new Rectangle_1.Rectangle(ctx, settings_1.settings.barre.color, {\n    x: settings_1.settings.barre.positionX,\n    y: canvas.height - settings_1.settings.barre.height\n  }, {\n    width: settings_1.settings.barre.width,\n    height: settings_1.settings.barre.height\n  });\n  barre.draw();\n  drawBricks();\n}\n\nfunction update() {\n  addEventListeners();\n  collisionCotes();\n}\n\ninitBricks();\nanimation();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3Rkcsb0JBQVNnQixJQUFULENBQWNNLE1BQXRHLENBQVg7RUFDQU4sSUFBSSxDQUFDUCxJQUFMO0VBQ0FPLElBQUksQ0FBQ2UsTUFBTDtFQUVBLElBQUlSLEtBQUssR0FBRyxJQUFJNUIscUJBQUosQ0FBY1gsR0FBZCxFQUFtQmdCLG9CQUFTdUIsS0FBVCxDQUFlVyxLQUFsQyxFQUF5QztJQUFDdEMsQ0FBQyxFQUFFSSxvQkFBU3VCLEtBQVQsQ0FBZUMsU0FBbkI7SUFBOEIzQixDQUFDLEVBQUVoQixNQUFNLENBQUNXLE1BQVAsR0FBY1Esb0JBQVN1QixLQUFULENBQWUvQjtFQUE5RCxDQUF6QyxFQUErRztJQUFDSCxLQUFLLEVBQUVXLG9CQUFTdUIsS0FBVCxDQUFlbEMsS0FBdkI7SUFBOEJHLE1BQU0sRUFBRVEsb0JBQVN1QixLQUFULENBQWUvQjtFQUFyRCxDQUEvRyxDQUFaO0VBQ0ErQixLQUFLLENBQUNkLElBQU47RUFFQUosVUFBVTtBQUViOztBQUVELFNBQVMwQixNQUFULEdBQWU7RUFFWEwsaUJBQWlCO0VBRWpCTixjQUFjO0FBQ2pCOztBQUVEdEIsVUFBVTtBQUNWZ0MsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvTWFpbi50cz80ODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aURyYXdhYmxlfSBmcm9tIFwiLi9pRHJhd2FibGVcIjtcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQge0JhbGx9IGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IHtCcmlja30gZnJvbSBcIi4vQnJpY2tcIjtcclxuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vU2V0dGluZ3Mvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtjbGVhcn0gZnJvbSBcIi4vaGVwbGVycy9jbGVhclwiO1xyXG5cclxuXHJcbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5jb25zdCBzaGFwZXM6aURyYXdhYmxlW10gPSBbXTtcclxubGV0IGJyaWNrczogYW55W107XHJcbmxldCBsaWZlO1xyXG5cclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbmNvbnN0IGJhY2tncm91bmQgPSBuZXcgUmVjdGFuZ2xlKGN0eCwnYmxhY2snLCB7eDowLHk6MH0sIHt3aWR0aDpjYW52YXMud2lkdGgsIGhlaWdodDpjYW52YXMuaGVpZ2h0fSk7XHJcblxyXG5mdW5jdGlvbiBpbml0QnJpY2tzKCkge1xyXG4gICAgYnJpY2tzID0gbmV3IEFycmF5KHNldHRpbmdzLm5iTGlnbmUpO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgc2V0dGluZ3MubmJMaWduZTsgaSsrKSB7XHJcbiAgICAgICAgYnJpY2tzW2ldID0gbmV3IEFycmF5KHNldHRpbmdzLm5iQ29sb25uZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaj0wOyBqIDwgc2V0dGluZ3MubmJDb2xvbm5lOyBqKyspIHtcclxuICAgICAgICAgICAgYnJpY2tzW2ldW2pdID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZHJhd0JyaWNrcygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3MubmJMaWduZTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZXR0aW5ncy5uYkNvbG9ubmU7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoYnJpY2tzW2ldW2pdID09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldHRpbmdzLmJyaWNrLmNvbG9yc1tyYW5kb20oMCxzZXR0aW5ncy5icmljay5jb2xvcnMubGVuZ3RoLCBmYWxzZSldXHJcbiAgICAgICAgICAgICAgICBuZXcgQnJpY2soY2FudmFzLCBjdHgsICdibGFjaycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogY2FudmFzLndpZHRoIC8gNCArIChqICogKHNldHRpbmdzLmJyaWNrLndpZHRoICsgc2V0dGluZ3MuYnJpY2sucGFkZGluZykpICsgc2V0dGluZ3MuYnJpY2sucGFkZGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogKGkgKiAoc2V0dGluZ3MuYnJpY2suaGVpZ2h0ICsgc2V0dGluZ3MuYnJpY2sucGFkZGluZykpICsgc2V0dGluZ3MuYnJpY2sucGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIHt3aWR0aDogc2V0dGluZ3MuYnJpY2sud2lkdGgsIGhlaWdodDogc2V0dGluZ3MuYnJpY2suaGVpZ2h0fSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmluaXRCcmlja3MoKTtcclxuZHJhd0JyaWNrcygpO1xyXG5cclxuZnVuY3Rpb24gY29sbGlzaW9uQnJpcXVlcygpIHtcclxuICAgIC8vIExhIGJhbGxlIGVzdC1lbGxlIHJlbnRyw6llIGVuIGNvbGxpc2lvbiBhdmVjIHVuZSBicmlxdWUgP1xyXG4gICAgbGV0IHJvd2hlaWdodCA9IHNldHRpbmdzLmJyaWNrLmhlaWdodCArIHNldHRpbmdzLmJyaWNrLnBhZGRpbmc7XHJcbiAgICBsZXQgY29sd2lkdGggPSBzZXR0aW5ncy5icmljay53aWR0aCArIHNldHRpbmdzLmJyaWNrLnBhZGRpbmc7XHJcbiAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihzZXR0aW5ncy5iYWxsLm9yaWdpbi55IC8gcm93aGVpZ2h0KTtcclxuICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKHNldHRpbmdzLmJhbGwub3JpZ2luLnggLyBjb2x3aWR0aCk7XHJcbiAgICAvLyBTaSBjJ2VzdCBsZSBjYXMsIGZhaXJlIHJlYm9uZGlyIGxhIGJhbGxlIGV0IG1hcnF1ZXIgbGEgYnJpcXVlIGNvbW1lIGTDqW1vbGllXHJcbiAgICAvL3NpIGxhIHBvc2l0aW9uIGRlIGxhIGJhbGxlIGVzdCBwbHVzIHBldGl0IHF1ZVxyXG4gICAgaWYgKHNldHRpbmdzLmJhbGwub3JpZ2luLnkgPCBzZXR0aW5ncy5uYkxpZ25lICogcm93aGVpZ2h0ICYmIHJvdyA+PSAwICYmIGNvbCA+PSAwICYmIGJyaWNrc1tyb3ddW2NvbF0gPT0gMSkge1xyXG4gICAgICAgIHNldHRpbmdzLmJhbGwuc3BlZWRZID0gLXNldHRpbmdzLmJhbGwuc3BlZWRZO1xyXG4gICAgICAgIGJyaWNrc1tyb3ddW2NvbF0gPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsaXNpb25Db3RlcygpIHtcclxuICAgICAgICAvL0TDqXRlY3Rpb24gZGUgbGEgYmFsbGUgc3VyIGxlcyBjw7R0w6lzXHJcbiAgICAgICAgLy9kcm9pdGUgb3Ugw6AgZ2F1Y2hlXHJcbiAgICAgICAgaWYgKHNldHRpbmdzLmJhbGwub3JpZ2luLnggKyBzZXR0aW5ncy5iYWxsLnNwZWVkWCA+IGNhbnZhcy53aWR0aCB8fCBzZXR0aW5ncy5iYWxsLm9yaWdpbi54ICsgc2V0dGluZ3MuYmFsbC5zcGVlZFggPCAwKVxyXG4gICAgICAgICAgICBzZXR0aW5ncy5iYWxsLnNwZWVkWCA9IC1zZXR0aW5ncy5iYWxsLnNwZWVkWDtcclxuICAgICAgICAvL2JhcyBvdSBoYXV0XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLmJhbGwub3JpZ2luLnkgKyBzZXR0aW5ncy5iYWxsLnNwZWVkWSA+IGNhbnZhcy5oZWlnaHQgfHwgc2V0dGluZ3MuYmFsbC5vcmlnaW4ueSArIHNldHRpbmdzLmJhbGwuc3BlZWRZIDwgMClcclxuICAgICAgICAgICAgc2V0dGluZ3MuYmFsbC5zcGVlZFkgPSAtc2V0dGluZ3MuYmFsbC5zcGVlZFk7XHJcblxyXG4gICAgICAgIC8vRMOpdGVjdGlvbiBkZSBsYSBjb2xsaXNpb24gYXZlYyBsYSBiYXJyZVxyXG4gICAgICAgIC8vU2kgbGEgYmFsbGUgcmVudHJlIGVuIGNvbGxpc2lvbiBhdmVjIGxhIGJhcnJlIC0tPiBlbGxlIHJlYm9uZGl0XHJcbiAgICAgICAgZWxzZSBpZiAoc2V0dGluZ3MuYmFsbC5vcmlnaW4ueSArIHNldHRpbmdzLmJhbGwucmFkaXVzID4gY2FudmFzLmhlaWdodCAtIHNldHRpbmdzLmJhcnJlLmhlaWdodCkge1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuYmFsbC5vcmlnaW4ueCA+IHNldHRpbmdzLmJhcnJlLnBvc2l0aW9uWCAmJiBzZXR0aW5ncy5iYWxsLm9yaWdpbi54IDwgc2V0dGluZ3MuYmFycmUucG9zaXRpb25YICsgc2V0dGluZ3MuYmFycmUud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIC8vbGEgYmFsbGUgcmVib25kaXRcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmJhbGwuc3BlZWRZID0gLXNldHRpbmdzLmJhbGwuc3BlZWRZO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNldHRpbmdzLmJhbGwub3JpZ2luLnkgKyBzZXR0aW5ncy5iYWxsLnJhZGl1cyA+IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGxpZmUgPSBzZXR0aW5ncy5saWZlIC0xO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRCYWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVzZXRCYWxsKCk6e1xyXG4gICAgLy9cclxufVxyXG5cclxuLy8gQHRzLWlnbm9yZVxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5iYXJyZS5wb3NpdGlvblggKz0gc2V0dGluZ3MuYmFycmUuc3BlZWRYO1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuYmFycmUucG9zaXRpb25YICsgc2V0dGluZ3MuYmFycmUud2lkdGggPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmJhcnJlLnBvc2l0aW9uWCA9IGNhbnZhcy53aWR0aCAtIHNldHRpbmdzLmJhcnJlLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3MuYmFycmUucG9zaXRpb25YIC09IHNldHRpbmdzLmJhcnJlLnNwZWVkWDtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmJhcnJlLnBvc2l0aW9uWCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmJhcnJlLnBvc2l0aW9uWCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xyXG4gICAgY2xlYXIoY3R4LCBjYW52YXMpO1xyXG4gICAgLy9kcmF3QnJpY2tzKCk7XHJcbiAgICBkcmF3KCk7XHJcbiAgICB1cGRhdGUoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3KCl7XHJcbiAgICAvL2Rlc3NpbiBiYWxsZVxyXG4gICAgbGV0IGJhbGwgPSBuZXcgQmFsbChjdHgsIHNldHRpbmdzLmJhbGwuY29sb3Ise3g6c2V0dGluZ3MuYmFsbC5vcmlnaW4ueCwgeTpzZXR0aW5ncy5iYWxsLm9yaWdpbi55fSwgc2V0dGluZ3MuYmFsbC5yYWRpdXMpO1xyXG4gICAgYmFsbC5kcmF3KCk7XHJcbiAgICBiYWxsLnVwZGF0ZSgpO1xyXG4gICAgLy9kZXNzaW4gcmFxdWV0dGVcclxuICAgIGxldCBiYXJyZSA9IG5ldyBSZWN0YW5nbGUoY3R4LCBzZXR0aW5ncy5iYXJyZS5jb2xvciwge3g6IHNldHRpbmdzLmJhcnJlLnBvc2l0aW9uWCwgeTogY2FudmFzLmhlaWdodC1zZXR0aW5ncy5iYXJyZS5oZWlnaHR9LHt3aWR0aDogc2V0dGluZ3MuYmFycmUud2lkdGgsIGhlaWdodDogc2V0dGluZ3MuYmFycmUuaGVpZ2h0fSk7XHJcbiAgICBiYXJyZS5kcmF3KCk7XHJcbiAgICAvLyBkZXNzaW4gZGVzIGJyaXF1ZXNcclxuICAgIGRyYXdCcmlja3MoKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZSgpe1xyXG4gICAgLy9ib3VnZXIgbGEgcmFxdWV0dGVcclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAvL2NvbGxpc2lvbiBjb3TDqSBldCByYXF1ZXR0ZVxyXG4gICAgY29sbGlzaW9uQ290ZXMoKTtcclxufVxyXG5cclxuaW5pdEJyaWNrcygpO1xyXG5hbmltYXRpb24oKTsiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzaGFwZXMiLCJicmlja3MiLCJsaWZlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJiYWNrZ3JvdW5kIiwiUmVjdGFuZ2xlXzEiLCJ4IiwieSIsImluaXRCcmlja3MiLCJBcnJheSIsInNldHRpbmdzXzEiLCJuYkxpZ25lIiwiaSIsIm5iQ29sb25uZSIsImoiLCJkcmF3QnJpY2tzIiwiQnJpY2tfMSIsImJyaWNrIiwicGFkZGluZyIsImRyYXciLCJjb2xsaXNpb25CcmlxdWVzIiwicm93aGVpZ2h0IiwiY29sd2lkdGgiLCJyb3ciLCJNYXRoIiwiZmxvb3IiLCJiYWxsIiwib3JpZ2luIiwiY29sIiwic3BlZWRZIiwiY29sbGlzaW9uQ290ZXMiLCJzcGVlZFgiLCJyYWRpdXMiLCJiYXJyZSIsInBvc2l0aW9uWCIsInJlc2V0QmFsbCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJhbmltYXRpb24iLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJCYWxsXzEiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

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

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  life: 3,\n  nbLigne: 5,\n  nbColonne: 4,\n  brick: {\n    colors: [\"hsl(0, 100%, 84%)\", \"hsl(33, 100%, 82%)\", \"hsl(217, 100%, 81%)\", \"hsl(249, 100%, 85%)\", \"hsl(110, 100%, 87%)\"],\n    width: 150,\n    height: 40,\n    padding: 5\n  },\n  ball: {\n    speedX: 5,\n    speedY: 5,\n    origin: {\n      x: 0,\n      y: 0\n    },\n    radius: 10,\n    color: 'black'\n  },\n  barre: {\n    height: 30,\n    width: 200,\n    positionX: 500,\n    color: 'black',\n    speedX: 0.1\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2V0dGluZ3Mvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztFQUNwQkMsSUFBSSxFQUFDLENBRGU7RUFFcEJDLE9BQU8sRUFBRSxDQUZXO0VBR3BCQyxTQUFTLEVBQUUsQ0FIUztFQUlwQkMsS0FBSyxFQUFDO0lBQ0ZDLE1BQU0sRUFBQyxDQUFDLG1CQUFELEVBQXFCLG9CQUFyQixFQUEwQyxxQkFBMUMsRUFBZ0UscUJBQWhFLEVBQXNGLHFCQUF0RixDQURMO0lBRUZDLEtBQUssRUFBRSxHQUZMO0lBR0ZDLE1BQU0sRUFBRSxFQUhOO0lBSUZDLE9BQU8sRUFBRTtFQUpQLENBSmM7RUFVcEJDLElBQUksRUFBQztJQUNEQyxNQUFNLEVBQUUsQ0FEUDtJQUVEQyxNQUFNLEVBQUUsQ0FGUDtJQUdEQyxNQUFNLEVBQUU7TUFBQ0MsQ0FBQyxFQUFFLENBQUo7TUFBT0MsQ0FBQyxFQUFDO0lBQVQsQ0FIUDtJQUlEQyxNQUFNLEVBQUUsRUFKUDtJQUtEQyxLQUFLLEVBQUU7RUFMTixDQVZlO0VBaUJwQkMsS0FBSyxFQUFDO0lBQ0ZWLE1BQU0sRUFBRSxFQUROO0lBRUZELEtBQUssRUFBRSxHQUZMO0lBR0ZZLFNBQVMsRUFBRSxHQUhUO0lBSUZGLEtBQUssRUFBRSxPQUpMO0lBS0ZOLE1BQU0sRUFBRTtFQUxOO0FBakJjLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL1NldHRpbmdzL3NldHRpbmdzLnRzPzk0YjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgbGlmZTozLFxyXG4gICAgbmJMaWduZTogNSxcclxuICAgIG5iQ29sb25uZTogNCxcclxuICAgIGJyaWNrOntcclxuICAgICAgICBjb2xvcnM6W1wiaHNsKDAsIDEwMCUsIDg0JSlcIixcImhzbCgzMywgMTAwJSwgODIlKVwiLFwiaHNsKDIxNywgMTAwJSwgODElKVwiLFwiaHNsKDI0OSwgMTAwJSwgODUlKVwiLFwiaHNsKDExMCwgMTAwJSwgODclKVwiXSxcclxuICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgcGFkZGluZzogNSxcclxuICAgIH0sXHJcbiAgICBiYWxsOntcclxuICAgICAgICBzcGVlZFg6IDUsXHJcbiAgICAgICAgc3BlZWRZOiA1LFxyXG4gICAgICAgIG9yaWdpbjoge3g6IDAsIHk6MH0sXHJcbiAgICAgICAgcmFkaXVzOiAxMCxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgIH0sXHJcbiAgICBiYXJyZTp7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgIHBvc2l0aW9uWDogNTAwLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgIHNwZWVkWDogMC4xLFxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJleHBvcnRzIiwibGlmZSIsIm5iTGlnbmUiLCJuYkNvbG9ubmUiLCJicmljayIsImNvbG9ycyIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImJhbGwiLCJzcGVlZFgiLCJzcGVlZFkiLCJvcmlnaW4iLCJ4IiwieSIsInJhZGl1cyIsImNvbG9yIiwiYmFycmUiLCJwb3NpdGlvblgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Settings/settings.ts\n");

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