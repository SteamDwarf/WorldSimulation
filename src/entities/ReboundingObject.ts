import Vector2 from "../Physics/Vector2";
import { Planes } from "../utils/enums";
import MovableObject from "./MovableObject";

class ReboundingObject extends MovableObject {
    constructor(position: Vector2, maxSpeed: number, radius: number, mass: number) {
        super(position, maxSpeed, radius, mass);
    }

    public checkEdges(width: number, height: number): void {
        super.checkEdges(width, height);

        if(this.position.x + this.radius > width || this.position.x < 0)
            this.rebound(Planes.x);

        if(this.position.y + this.radius > height || this.position.y < 0)
            this.rebound(Planes.y);
    }
}

export default ReboundingObject;