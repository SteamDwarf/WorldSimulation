import Vector2 from "../Physics/Vector2";

class Painter {
    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    paintLineP2P(vector1: Vector2, vector2: Vector2) {
        this.ctx.beginPath();
        this.ctx.moveTo(vector1.x, vector1.y);
        this.ctx.lineTo(vector2.x, vector2.y);
        this.ctx.stroke();
    }
    paintLineByDirection(source: Vector2, direction: Vector2, length: number) {
        this.ctx.beginPath();
        this.ctx.moveTo(source.x, source.y);
        this.ctx.lineTo(source.x + (direction.x * length), source.y + (direction.y * length));
        this.ctx.stroke();
    }
    fillBackground(width: number, height: number, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, width, height);
    }
    paintCircle(circleCenter: Vector2, radius: number, color: string) {
        this.ctx.beginPath();
        this.ctx.arc(circleCenter.x, circleCenter.y, radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = color;
        this.ctx.stroke();
        this.ctx.fill();
    }
    paintRect(position: Vector2, width: number, height: number, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(position.x, position.y, width, height);
    }

    updateCanvas(width: number, height: number, backgroundColor: string) {
        this.ctx.clearRect(0, 0, width, height);
        this.fillBackground(width, height, backgroundColor);
    }
}

export default Painter;