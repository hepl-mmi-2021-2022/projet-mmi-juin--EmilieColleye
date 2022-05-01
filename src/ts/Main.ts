

import {iDrawable} from "./iDrawable";
import {Rectangle} from "./Rectangle";
import {Ball} from "./Circle";

const canvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const shapes:iDrawable[] = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const background = new Rectangle(ctx,'black', {x:0,y:0}, {width:canvas.width, height:canvas.height});
background.draw();

//const ball =  new Ball(ctx, 'white', {x:100, y:100}, 10);
//ball.draw();
//const brick = new Rectangle(ctx, 'green', {x:200, y: 50}, {width: 100, height:30});
//brick.draw();

let bricks: any[];
let nbLigne = 5;
let nbColonne = 5;
let brickWidth = 100;
let brickHeight = 15;
let PADDING = 5;


//créer un rectangle
function rect(x: number, y: number, width: number, height: number) {
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.closePath();
    ctx.fill();
}

function initBricks() {
    bricks = new Array(nbLigne);
    for (let i=0; i < nbLigne; i++) {
        bricks[i] = new Array(nbColonne);
        for (let j=0; j < nbColonne; j++) {
            bricks[i][j] = 1;
        }
    }
}


function drawBricks() {
    for (let i=0; i < nbLigne; i++) {
        ctx.fillStyle = 'blue';
        for (let j=0; j < nbColonne; j++) {
            if (bricks[i][j] == 1) {
                rect(canvas.width/3 + (j * (brickWidth + PADDING)) + PADDING,
                    (i * (brickHeight + PADDING)) + PADDING,
                    brickWidth, brickHeight);
            }
        }
    }
}

initBricks();
drawBricks();