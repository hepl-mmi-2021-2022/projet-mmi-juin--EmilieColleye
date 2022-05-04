import {iDrawable} from "./iDrawable";
import {Rectangle} from "./Rectangle";
import {Ball} from "./Ball";
import {Brick} from "./Brick";
import {settings} from "./Settings/settings";

const balls: Ball[] = [];
const canvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const shapes:iDrawable[] = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const background = new Rectangle(ctx,'black', {x:0,y:0}, {width:canvas.width, height:canvas.height});
let ball = new Ball(ctx, settings.ball.color,{x:settings.ball.origin.x, y:settings.ball.origin.y}, settings.ball.radius)
let barre = new Rectangle(ctx, settings.barre.color, {x: settings.barre.positionX, y: canvas.height-settings.barre.height},{width: settings.barre.width, height: settings.barre.height});
let intervalId = setInterval(draw, 10);

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

function draw() {
    clear();
    background.draw(); // dessine le background
    initBricks();
    drawBricks(); // dessine les briques

    // dessin de la barre
    barre.draw();

    // dessin de la balle
    let ball = new Ball(ctx, settings.ball.color,{x:settings.ball.origin.x, y:settings.ball.origin.y}, settings.ball.radius)
    ball.draw();

    // La balle est-elle rentrée en collision avec une brique ?


    //Détection de la balle sur les côtés
    //droite ou à gauche
    if (settings.ball.origin.x + settings.ball.speedX > canvas.width || settings.ball.origin.x + settings.ball.speedX < 0)
        settings.ball.speedX = -settings.ball.speedX;
    //bas ou haut
    if (settings.ball.origin.y + settings.ball.speedY > canvas.height || settings.ball.origin.y + settings.ball.speedY < 0)
        settings.ball.speedY = -settings.ball.speedY;

    //Détection de la collision avec la barre
        //Si la balle rentre en collision avec la barre --> elle rebondit
        else if(settings.ball.origin.y + settings.ball.radius > canvas.height - settings.barre.height){
        if(settings.ball.origin.x > settings.barre.positionX && settings.ball.origin.x < settings.barre.positionX + settings.barre.width){
            //la balle rebondit
            settings.ball.speedY = -settings.ball.speedY;
        }
        else{
            clearInterval(intervalId);
        }
    }


    //change la vitesse de la balle
    settings.ball.origin.x += settings.ball.speedX; // On déplace la balle
    settings.ball.origin.y += settings.ball.speedY;
}

