import Vector2 from "../Physics/Vector2";
import Mover from "./Mover";

class MouseFolower extends Mover {
    constructor(position: Vector2, maxSpeed: number, radius: number, mass: number) {
        super(position, maxSpeed, radius, mass);
    }
}