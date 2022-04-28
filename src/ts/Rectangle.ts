import {Shape} from "./Shape";
import {iDrawable} from "./iDrawable";

export class Rectangle extends Shape implements iDrawable{
    private dimensions:{width: number, height:number}

    constructor(ctx: CanvasRenderingContext2D, color: string, origin: { x: number; y: number }, dimensions: { width: number; height: number }) {
        super(ctx, color, origin);
        this.dimensions = dimensions;
    }

    override draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.origin.x, this.origin.y, this.dimensions.width, this.dimensions.height)
    }
}
