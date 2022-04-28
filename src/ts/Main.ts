

import {iDrawable} from "./iDrawable";
import {Rectangle} from "./Rectangle";
import {Ball} from "./Circle";

const canvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
//const shapes:iDrawable[] = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const background = new Rectangle(ctx,'black', {x:0,y:0}, {width:canvas.width, height:canvas.height});
background.draw();

const ball =  new Ball(ctx, 'white', {x:100, y:100}, 10);
ball.draw();

const brick = new Rectangle(ctx, 'green', {x:200, y: 50}, {width: 100, height:30});
brick.draw();

