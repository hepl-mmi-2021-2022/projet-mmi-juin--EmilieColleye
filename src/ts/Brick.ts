import {Shape} from "./Shape";
import {iDrawable} from "./iDrawable";
import {settings} from "./Settings/settings";
import {random} from "./heplers/math";

export class Brick implements iDrawable{
    private ctx: CanvasRenderingContext2D;
    private origin:{x: number, y:number}
    private dimensions:{width: number, height:number}
    private readonly color: string;

    constructor(ctx : CanvasRenderingContext2D, color: string, origin: { x: number; y: number }, dimensions: { width: number; height: number }) {
        this.ctx = ctx;
        this.origin = origin;
        this.dimensions = dimensions;
        this.color = settings.brick.colors[random(0,settings.brick.colors.length, false)];
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle=this.color;
        this.ctx.rect(this.origin.x, this.origin.y,this.dimensions.width,this.dimensions.height);
        this.ctx.closePath();
        this.ctx.fill();
    }
}
