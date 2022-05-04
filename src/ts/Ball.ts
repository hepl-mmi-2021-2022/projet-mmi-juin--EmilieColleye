import {Shape} from "./Shape";
import {iDrawable} from "./iDrawable";
import {settings} from "./Settings/settings";


export class Ball extends Shape implements iDrawable {
    private readonly radius: number;
    private counterClockWise: boolean;

    constructor(ctx: CanvasRenderingContext2D, color: string, origin: { x: number; y: number }, radius: number, counterClockWise: boolean) {
        super(ctx, color, origin);
        this.radius = radius;
        this.counterClockWise = counterClockWise;
    }

    init() {
        setInterval(this.update, 10); // Exécuter draw() toutes les 10 ms
    }

    override draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();
    }

    update() {

        this.origin.y -= settings.ball.speedY;
        this.origin.x += settings.ball.speedX;
        this.draw();
    }
}