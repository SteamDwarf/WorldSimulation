import Area from "../areas/Area";
import Vector2 from "../Physics/Vector2";
import { Planes } from "../utils/enums";

class MovableObject {
    private _position: Vector2;
    private _velocity: Vector2 = new Vector2(0, 0);
    private _acceleration: Vector2 = new Vector2(0, 0);
    private _maxSpeed: number = 25;
    private _radius: number;
    private _mass: number;
    private _path: Vector2[];

    constructor(position: Vector2, maxSpeed: number, radius: number, mass: number) {
        this._position = position;
        this._maxSpeed = maxSpeed;
        this._radius = radius;
        this._mass = mass;
        this._path = [position];
    }

    public get position(): Vector2 {
        return new Vector2(this._position.x, this._position.y);
    }
    public set position(newPosition: Vector2) {
        this._position = newPosition;
    }

    public set velocity(newVelocity: Vector2) {
        this._velocity = newVelocity;
    }
    public get velocity(): Vector2 {
        return new Vector2(this._velocity.x, this._velocity.y);
    }

    public get acceleration(): Vector2 {
        return new Vector2(this._acceleration.x, this._acceleration.y);
    }

    public get maxSpeed(): number {
        return this._maxSpeed;
    }

    public get radius(): number {
        return this._radius;
    }

    public get mass(): number {
        return this._mass;
    }

    public get path(): Vector2[] {
        return this._path;
    }

    public move() {
        this._velocity = this._velocity.add(this._acceleration);
        this._velocity = this._velocity.limit(this._maxSpeed);
        this._position = this._position.add(this._velocity);
        this._acceleration = Vector2.zero();

        this.addPath(this._position);
    }

    private addPath(newPosition: Vector2) {
        if(this._path.length < 1000) {
            this._path.push(newPosition);
        } else {
            this._path = [newPosition];
        }
    }

    public checkEdges(width: number, height: number) {

    }

    public addForce(force: Vector2) {
        this._acceleration = this._acceleration.add(force.div(this._mass));
    }

    public stopping() {
        this._acceleration = Vector2.zero();
    }

    public limitAcceleration() {
        this._acceleration = this._acceleration.limit(this._maxSpeed);
    }

    public increaseAceleration(vector: Vector2) {
        this._acceleration = this._acceleration.sub(vector);
    }

    public rebound(plane: Planes) {
        if(plane === Planes.x) {
            //this._acceleration = new Vector2(this._acceleration.x * -1, this._acceleration.y);
            this._velocity = new Vector2(this._velocity.x * -1, this._velocity.y);
        } else if (plane === Planes.y){
            //this._acceleration = new Vector2(this._acceleration.x, this._acceleration.y * -1);
            this._velocity = new Vector2(this._velocity.x, this._velocity.y * -1);
        }
    }

    public isInside(area: Area) {
        if(this._position.x > area.position.x && 
            this._position.x < area.position.x + area.width &&
            this._position.y > area.position.y &&
            this._position.x < area.position.y + area.height
        )return true;
        else return false;
    }
}

export default MovableObject;