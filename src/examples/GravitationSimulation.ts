import Painter from "../canvas/Painter";
import Mover from "../entities/Mover";
import Forces from "../Physics/Forces";
import Vector2 from "../Physics/Vector2";
import Simulation from "./Simulation";

class GravitationSimulation extends Simulation {

    private mover1: Mover;
    private mover2: Mover;
    private mover3: Mover;
    private movers: Mover[];

    constructor(painter: Painter, ctx: CanvasRenderingContext2D, width: number, height: number) {
        super(painter, ctx, width, height);

        this.mover1 = new Mover(new Vector2(200, 300), 20, 10, 1);
        this.mover2 = new Mover(new Vector2(300, 150), 2000000000, 12, 10000000000000);
        this.mover3 = new Mover(new Vector2(200, 150), 0, 25, 10000000000000);
        this.movers = [this.mover1, this.mover2, this.mover3];
    }

    public setup():void {
        super.setup();

        this.painter.fillBackground(this.width, this.height, '#ccc');
        this.mover1.addForce(new Vector2(2, 0));
        this.mover2.addForce(new Vector2(0, 20000000000000))
    }

    public simulate(): void {
        super.simulate();

        this.movers.forEach((obj, i) => {
            this.movers.forEach((obj2, j) => {
                if(j <= i) return;
    
                let distance = obj.position.distance(obj2.position);
                let direction = obj.position.direction(obj2.position);
                let gravForce = Forces.getGravitationForce(obj.mass, obj2.mass, distance, direction);
    
                obj.addForce(gravForce);
                obj2.addForce(gravForce.mult(-1));
            });

            obj.move();
            obj.checkEdges(this.width, this.height);
        });
    }

    public paint(): void {
        super.paint();

        this.movers.forEach(mover => {
            mover.path.forEach((position, i) => {
                if(i < mover.path.length - 1)
                this.painter.paintLineP2P(position, mover.path[i + 1]);
            })

            this.painter.paintCircle(mover.position, mover.radius, 'green');
        })
    }
}

export default GravitationSimulation;