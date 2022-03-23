import Vector2 from "../Physics/Vector2";
import MovableObject from "./MovableObject";

class Mover extends MovableObject{

    constructor(position: Vector2, maxSpeed: number, radius: number, mass: number) {
        super(position, maxSpeed, radius, mass);
    }

    public checkEdges(width: number, height: number) {
        super.checkEdges(width, height);

        if(this.position.x > width) {
            this.position = new Vector2(0, this.position.y);
        } else if(this.position.x < 0) {
            this.position = new Vector2(width, this.position.y);
        }

        if(this.position.y > height) {
            this.position = new Vector2(this.position.x, 0);
        } else if(this.position.x < 0) {
            this.position = new Vector2(this.position.x, height);
        }
    }
}

export default Mover;