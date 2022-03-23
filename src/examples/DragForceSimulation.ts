import Area from "../areas/Area";
import Painter from "../canvas/Painter";
import MovableObject from "../entities/MovableObject";
import ReboundingObject from "../entities/ReboundingObject";
import Forces from "../Physics/Forces";
import Vector2 from "../Physics/Vector2";
import Simulation from "./Simulation";

class DragForceSimulation extends Simulation {
    private ball: ReboundingObject;
    private rect: ReboundingObject;
    private liquid: Area;

    constructor (painter: Painter, ctx: CanvasRenderingContext2D, width: number, height: number) {
        super(painter, ctx, width, height);

        this.ball = new ReboundingObject(new Vector2(100, 20), 10, 10, 1);
        this.rect = new ReboundingObject(new Vector2(150, 20), 10, 10, 1);
        this.liquid = new Area(new Vector2(0, 300), 500, 300, 0.1, '#6495ED');
    }

    public setup(): void {
        super.setup();

        this.painter.fillBackground(this.width, this.height, '#ccc');
        this.ball.addForce(new Vector2(0, 2));
        this.rect.addForce(new Vector2(0, 2));
    }

    public simulate(): void {
        super.simulate();

        this.addDragForce(this.ball, this.liquid, new Vector2(0, 0.1), 0.47);
        this.addDragForce(this.rect, this.liquid, new Vector2(0, 0.1), 1.05);

        this.ball.move();
        this.ball.checkEdges(this.width, this.height);
        this.rect.move();
        this.rect.checkEdges(this.width, this.height);
    }

    public paint(): void {
        super.paint();

        this.liquid.display(this.painter);
        this.painter.paintCircle(this.ball.position, this.ball.radius, 'yellow');
        this.painter.paintRect(this.rect.position, this.rect.radius * 2, this.rect.radius * 2, 'yellow');
    }

    private addDragForce(obj: MovableObject, liquid: Area, defaultForce: Vector2, dragCoefficient: number) {
        obj.addForce(defaultForce);

        if(obj.isInside(liquid))
            obj.addForce(Forces.getDragForce(liquid.density, obj.velocity, 1, dragCoefficient));
    }
}

export default DragForceSimulation;