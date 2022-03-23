import Painter from "./canvas/Painter";
import Vector2 from "./Physics/Vector2";
import Mover from "./entities/Mover";
import Runner from "./entities/Runner";
import ReboundingObject from "./entities/ReboundingObject";
import Area from "./areas/Area";
import Forces from "./Physics/Forces";
import MovableObject from "./entities/MovableObject";
import GravitationSimulation from "./examples/GravitationSimulation";
import Simulation from "./examples/Simulation";
import DragForceSimulation from "./examples/DragForceSimulation";

const canvas: HTMLCanvasElement = document.querySelector('#canvas')as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
const painter: Painter = new Painter(ctx);

const gravitationBtn = document.querySelector('#gravitation_btn') as HTMLButtonElement;
const dragForceBtn = document.querySelector('#drag_force_btn') as HTMLButtonElement;

const width: number = 500;
const height: number = 500;

const vector1 = new Vector2(200, 150);
const vector2 = new Vector2(200, 300);
const vector3 = new Vector2(300, 150);
/* const vector3 = new Vector2(100, 20);
const vector4 = new Vector2(150, 20);
 */
let gravPos = new Vector2(0, height);

const getGravPos = (position: Vector2) => new Vector2(position.x, height);

const mover = new Mover(vector2, 20, 10, 1);
const mover2 = new Mover(vector3, 2000000000, 12, 10000000000000);
const attractor = new Mover(vector1, 0, 25, 10000000000000);
const movers = [mover, mover2, attractor];

const orbitPoints = [mover.position];

///////////////////////////////////////////////
const gravitationSimulation = new GravitationSimulation(painter, ctx, width, height);
const dragForceSimulation = new DragForceSimulation(painter, ctx, width, height);

let currentSilumation: Simulation = new Simulation(painter, ctx, width, height);


function canvasSetup() {
    canvas.width = width;
    canvas.height = height;

    gravitationSimulation.setup();
}


canvasSetup();

gravitationBtn.addEventListener('click', () => currentSilumation = gravitationSimulation);
dragForceBtn.addEventListener('click', () => currentSilumation = dragForceSimulation);

setInterval(() => {
    painter.updateCanvas(width, height, '#ccc');

    currentSilumation.simulate();
    currentSilumation.paint();
}, 20)

/* const runner = new Runner(vector2, 5, 10, 1);
const mouseFolower = new Mover(vector1, 5, 20, 10);
const ball = new ReboundingObject(vector3, 10, 10, 1);
const rect = new ReboundingObject(vector4, 10, 10, 1); */

//const water = new Area(new Vector2(0, 400), 500, 200, 0.1, '#6495ED');

//let mousePosition = new Vector2(0, 0);

/* function canvasSetup() {
    canvas.width = width;
    canvas.height = height;

    painter.fillBackground(width, height, '#ccc');
    mover.addForce(new Vector2(2, 0));
    mover2.addForce(new Vector2(0, 20000000000000))
    runner.addForce(new Vector2(0.001 , 0));
    ball.addForce(new Vector2(0, 2));
    rect.addForce(new Vector2(0, 2));
}

function countAccelerationToMouse(objectPosition: Vector2, magnitude: number): Vector2 {
    const accelerationVector = mousePosition.sub(objectPosition);
    return accelerationVector.setMagnitude(magnitude);
} */



/* function emulateGravitation(attractableObjects: MovableObject[]) {
    attractableObjects.forEach((obj, i) => {
        attractableObjects.forEach((obj2, j) => {
            if(j <= i) return;

            let distance = obj.position.distance(obj2.position);
            let direction = obj.position.direction(obj2.position);
            let gravForce = Forces.getGravitationForce(obj.mass, obj2.mass, distance, direction);

            obj.addForce(gravForce);
            obj2.addForce(gravForce.mult(-1));
        });
        
    });
} */


/* setInterval(() => {
    painter.updateCanvas(width, height, '#ccc');

    emulateGravitation(movers);
    movers.forEach(m => {
        m.move();
        m.checkEdges(width, height);
        
    });
    orbitPoints.push(mover.position);
    
    movers.forEach((m) => {
        let distance = m.position.distance(attractor.position);
        let direction = m.position.direction(attractor.position);
        let gravForce = Forces.getGravitationForce(m.mass, attractor.mass, distance, direction);

        m.addForce(gravForce);
        m.move();
        m.checkEdges(width, height);

        attractor.addForce(gravForce.mult(-1));
        attractor.move();
        attractor.checkEdges(width, height);
    });
    
    runner.move();
    runner.checkEdges(width, height);
    mouseFolower.addForce(countAccelerationToMouse(mouseFolower.position, 0.1));
    mouseFolower.move();
    mouseFolower.checkEdges(width, height);

    
    ball.addForce(new Vector2(0, 0.1));
    rect.addForce(new Vector2(0, 0.1));

    if(ball.isInside(water)) {
        ball.addForce(Forces.getDragForce(water.density, ball.velocity, 1, 0.47));
    }
    if(rect.isInside(water)) {
        rect.addForce(Forces.getDragForce(water.density, rect.velocity, 1, 1.05))
    }

    ball.move();
    rect.move();
    console.log(ball.acceleration);

    ball.checkEdges(width, height);
    rect.checkEdges(width, height);

    
    
    water.display(painter);
    painter.paintCircle(mover.position, mover.radius, 'green');
    painter.paintCircle(mover2.position, mover2.radius, 'green');
    painter.paintCircle(attractor.position, attractor.radius, 'grey');

    orbitPoints.forEach((point, i) => {
        if(i < i+1)
        painter.paintLineP2P(point, orbitPoints[i+1]);
    })

    painter.paintCircle(runner.position, runner.radius, 'green');
    painter.paintCircle(mouseFolower.position, mouseFolower.radius, 'red');
    painter.paintCircle(ball.position, ball.radius, 'yellow');
    painter.paintRect(rect.position, rect.radius * 2, rect.radius * 2, 'yellow');
}, 20) */

/* addEventListener('keydown', (e) => {
    if(e.code === 'ArrowUp') {
        runner.speedUp(new Vector2(0.005, 0));
    }
    if(e.code === 'ArrowDown') {
        runner.speedDown(new Vector2(0.5, 0));
    }
}); */

/* addEventListener('mousemove', (e) => {
    mousePosition = new Vector2(e.clientX, e.clientY);
}) */

/* document.addEventListener('click', (e) => {
    ball.addForce(new Vector2(0, -10));
}); */
