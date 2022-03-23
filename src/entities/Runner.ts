import Vector2 from "../Physics/Vector2";
import Mover from "./Mover";

class Runner extends Mover {
    constructor(position: Vector2, maxSpeed: number, radius: number, mass: number) {
        super(position, maxSpeed, radius, mass);
    }

    public move() {
        super.move();

        if(this.velocity.lessThen(new Vector2(0.001, 0.001))) {
            this.stopping();
        }
    }

    public speedUp(vector: Vector2) {
        this.addForce(vector);
        //this.acceleration = this.acceleration.limit(this.maxSpeed);
        this.limitAcceleration();
        //console.log(this.acceleration);
    }
    public speedDown(vector: Vector2) {
        if(this.velocity.lessThen(new Vector2(0.1, 0.1))) {
            this.velocity = Vector2.zero();
            return;
        }
        this.increaseAceleration(vector);     
        console.log(this.acceleration);   
    }
}

export default Runner;