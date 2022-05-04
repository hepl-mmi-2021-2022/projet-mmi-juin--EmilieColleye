import {iDrawable} from "./iDrawable";
import {Rectangle} from "./Rectangle";
import {Ball} from "./Ball";
import {Brick} from "./Brick";
import {settings} from "./Settings/settings";

const canvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const shapes:iDrawable[] = [];
let ball =  new Ball(ctx, 'white', {x:200, y:200}, 5, true);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const background = new Rectangle(ctx,'black', {x:0,y:0}, {width:canvas.width, height:canvas.height});



let bricks: any[];
function initBricks() {
    bricks = new Array(settings.nbLigne);
    for (let i=0; i < settings.nbLigne; i++) {
        bricks[i] = new Array(settings.nbColonne);
        for (let j=0; j < settings.nbColonne; j++) {
            bricks[i][j] = 1;
        }
    }
}
function drawBricks() {
    for (let i = 0; i < settings.nbLigne; i++) {
        for (let j = 0; j < settings.nbColonne; j++) {
            if (bricks[i][j] == 1) {
                new Brick(ctx, 'blue', {
                        x: canvas.width / 3 + (j * (settings.brickWidth + settings.padding)) + settings.padding,
                        y: (i * (settings.brickHeight + settings.padding)) + settings.padding
                    },
                    {width: settings.brickWidth, height: settings.brickHeight}).draw();
            }
        }
    }
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
}

background.draw();
initBricks();
drawBricks();
ball.init();

var x = 150;
var y = 150;
var dx = 2;
var dy = 4;

function init() {
    return setInterval(draw, 1000); // Exécuter draw() toutes les 10 ms
}
function draw() {
    clear();
    background.draw();
    initBricks();
    drawBricks();

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
    x += dx; // On déplace la balle
    y += dy;
}

init();