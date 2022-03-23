import Vector2 from "./Vector2";

class Forces {
    private static GRAVITATION_CONST = 6.67428e-11;

    public static getDragForce(areaDensity: number, velocity: Vector2, frontArea: number, dragCoefficient: number): Vector2 {
        let direction = velocity.normalize().mult(-0.5);
        let friction = areaDensity * (velocity.magnitude() ** 2) * frontArea * dragCoefficient;
        
        return direction.mult(friction);
    }

    public static getGravitationForce(mass1: number, mass2: number, distance: number, direction: Vector2): Vector2 {
        let force = (Forces.GRAVITATION_CONST * mass1 * mass2) / (distance ** 2);
        return direction.mult(force);
    }
}

export default Forces;