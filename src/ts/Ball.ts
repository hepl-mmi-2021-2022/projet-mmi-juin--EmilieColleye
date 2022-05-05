import {Shape} from "./Shape";
import {iDrawable} from "./iDrawable";
import {settings} from "./Settings/settings";


export class Ball extends Shape implements iDrawable {
    private readonly radius: number;

    constructor(ctx: CanvasRenderingContext2D, color: string, origin: { x: number; y: number }, radius: number) {
        super(ctx, color, origin);
        this.radius = radius;
    }


    override draw() {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
    }

    update(){
        settings.ball.origin.x += settings.ball.speedX; // On déplace la balle
        settings.ball.origin.y += settings.ball.speedY;
        this.draw();
    }
}