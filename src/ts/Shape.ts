import {iDrawable} from "./iDrawable";

export abstract class Shape implements iDrawable{
    protected ctx: CanvasRenderingContext2D;
    protected color:string;
    protected origin:{x:number, y:number};

    protected constructor(ctx: CanvasRenderingContext2D, color: string, origin: { x: number; y: number }) {
        this.ctx = ctx;
        this.origin = origin;
        this.color = color;
    }
    draw() {
    }
}