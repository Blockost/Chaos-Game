import { Point } from './Point';

export class Canvas {
    private readonly WIDTH = 2;
    private readonly HEIGHT = 2;
    private readonly ratio = 1 / 2;

    private ctx: CanvasRenderingContext2D;
    private start: Point;
    private points: Point[];

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.points = [];
    }

    getContext(): CanvasRenderingContext2D {
        return this.ctx;
    }

    addPoint(point: Point) {
        this.points.push(point);
        this.ctx.fillRect(point.x, point.y, this.WIDTH, this.HEIGHT);
        console.log(`New point added at (${point.x}, ${point.y})`);
    }

    addStart(point: Point) {
        if (this.start != null) {
            throw new Error('Start point already defined');
        }
        this.start = point;
        console.log(`START added at (${point.x}, ${point.y})`);
    }

    moveStart() {
        const index = Math.floor(Math.random() * 3);
        const point = this.points[index];
        this.start.addX(Math.round(point.x - this.start.x) * this.ratio);
        this.start.addY(Math.round(point.y - this.start.y) * this.ratio);
        this.ctx.fillRect(this.start.x, this.start.y, this.WIDTH, this.HEIGHT);
    }
}
