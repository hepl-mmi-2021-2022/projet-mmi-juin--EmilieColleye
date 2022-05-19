import {iDrawable} from "./iDrawable";


export class Brick implements iDrawable{
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private origin:{x: number, y:number}
    private dimensions:{width: number, height:number}
    private readonly color: string;

    constructor(canvas: HTMLCanvasElement, ctx : CanvasRenderingContext2D, color: string, origin: { x: number; y: number }, dimensions: { width: number; height: number }) {
        this.ctx = ctx;
        this.origin = origin;
        this.dimensions = dimensions;
        this.color = color;
    }

    draw(){
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle=this.color;
        this.ctx.rect(this.origin.x, this.origin.y,this.dimensions.width,this.dimensions.height);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.restore();
    }
    update(){
        this.draw();
    }
}
