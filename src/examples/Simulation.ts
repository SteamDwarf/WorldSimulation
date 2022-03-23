import Painter from "../canvas/Painter";

class Simulation {
    private _painter: Painter;
    private _ctx: CanvasRenderingContext2D;
    private _width: number;
    private _height: number;

    constructor(painter: Painter, ctx: CanvasRenderingContext2D, width: number, height: number) {
        this._painter = painter;
        this._ctx = ctx;
        this._width = width;
        this._height = height;
    }

    public get painter(): Painter {
        return this._painter;
    }
    public get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }
    public get width(): number {
        return this._width;
    }
    public get height(): number {
        return this._height
    }


    public setup(): void {}
    public simulate(): void {}
    public paint(): void {}
}

export default Simulation;