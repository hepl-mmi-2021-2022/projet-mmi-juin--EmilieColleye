import {iDrawable} from "./iDrawable";
import {Rectangle} from "./Rectangle";
import {Ball} from "./Ball";
import {Brick} from "./Brick";
import {settings} from "./Settings/settings";
import {clear} from "./heplers/clear";


const canvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const shapes:iDrawable[] = [];
let bricks: any[];
let life;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const background = new Rectangle(ctx,'black', {x:0,y:0}, {width:canvas.width, height:canvas.height});

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
                // settings.brick.colors[random(0,settings.brick.colors.length, false)]
                new Brick(canvas, ctx, 'black', {
                        x: canvas.width / 4 + (j * (settings.brick.width + settings.brick.padding)) + settings.brick.padding,
                        y: (i * (settings.brick.height + settings.brick.padding)) + settings.brick.padding
                    }, {width: settings.brick.width, height: settings.brick.height}).draw();
            }
        }
    }
}
initBricks();
drawBricks();

function collisionBriques() {
    // La balle est-elle rentrée en collision avec une brique ?
    let rowheight = settings.brick.height + settings.brick.padding;
    let colwidth = settings.brick.width + settings.brick.padding;
    let row = Math.floor(settings.ball.origin.y / rowheight);
    let col = Math.floor(settings.ball.origin.x / colwidth);
    // Si c'est le cas, faire rebondir la balle et marquer la brique comme démolie
    //si la position de la balle est plus petit que
    if (settings.ball.origin.y < settings.nbLigne * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
        settings.ball.speedY = -settings.ball.speedY;
        bricks[row][col] = 0;
    }
}

function collisionCotes() {
        //Détection de la balle sur les côtés
        //droite ou à gauche
        if (settings.ball.origin.x + settings.ball.speedX > canvas.width || settings.ball.origin.x + settings.ball.speedX < 0)
            settings.ball.speedX = -settings.ball.speedX;
        //bas ou haut
        if (settings.ball.origin.y + settings.ball.speedY > canvas.height || settings.ball.origin.y + settings.ball.speedY < 0)
            settings.ball.speedY = -settings.ball.speedY;

        //Détection de la collision avec la barre
        //Si la balle rentre en collision avec la barre --> elle rebondit
        else if (settings.ball.origin.y + settings.ball.radius > canvas.height - settings.barre.height) {
            if (settings.ball.origin.x > settings.barre.positionX && settings.ball.origin.x < settings.barre.positionX + settings.barre.width) {
                //la balle rebondit
                settings.ball.speedY = -settings.ball.speedY;
            } else if (settings.ball.origin.y + settings.ball.radius > canvas.height) {
                life = settings.life -1;
                resetBall();
            }
        }
}
function resetBall():{
    //
}

// @ts-ignore
function addEventListeners() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') {
            settings.barre.positionX += settings.barre.speedX;
            if (settings.barre.positionX + settings.barre.width > canvas.width) {
                settings.barre.positionX = canvas.width - settings.barre.width;
            }
        }
        if (e.key === 'ArrowLeft') {
            settings.barre.positionX -= settings.barre.speedX;
            if (settings.barre.positionX < 0) {
                settings.barre.positionX = 0;
            }
        }
    });
}

function animation() {
    clear(ctx, canvas);
    //drawBricks();
    draw();
    update();
    requestAnimationFrame(animation);
}

function draw(){
    //dessin balle
    let ball = new Ball(ctx, settings.ball.color,{x:settings.ball.origin.x, y:settings.ball.origin.y}, settings.ball.radius);
    ball.draw();
    ball.update();
    //dessin raquette
    let barre = new Rectangle(ctx, settings.barre.color, {x: settings.barre.positionX, y: canvas.height-settings.barre.height},{width: settings.barre.width, height: settings.barre.height});
    barre.draw();
    // dessin des briques
    drawBricks();

}

function update(){
    //bouger la raquette
    addEventListeners();
    //collision coté et raquette
    collisionCotes();
}

initBricks();
animation();