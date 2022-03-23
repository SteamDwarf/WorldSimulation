import Painter from "../canvas/Painter";
import Vector2 from "../Physics/Vector2";

class Area {
    private _position: Vector2;
    private _width: number;
    private _height: number;
    private _density: number;
    private _color: string;

    constructor(position: Vector2, width: number, height: number, density: number, color: string) {
        this._position = position;
        this._width = width;
        this._height = height;
        this._density = density;
        this._color = color;
    }

    public get position() {
        return this._position;
    }
    public get width() {
        return this._width;
    }
    public get height() {
        return this._height;
    }
    public get density() {
        return this._density;
    }

    public display(painter: Painter) {
        painter.paintRect(this._position, this._width, this._height, this._color);
    }
}

export default Area;