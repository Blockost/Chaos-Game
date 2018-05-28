import { Point } from './Point';
import { Polygon } from './Polygon';

export class Canvas {
    private readonly WIDTH = 1;
    private readonly HEIGHT = 1;
    private _ratio = 0.5;

    private start: Point;
    private lastPoint: Point;
    private points: Point[];

    constructor(
        private ctx: CanvasRenderingContext2D,
        private width: number,
        private height: number) {
        this.points = [];
        const polygon = new Polygon(3);

        for (const point of polygon.points) {
            this.addPoint(point);
        }
    }

    get context(): CanvasRenderingContext2D {
        return this.ctx;
    }

    set ratio(ratio: number) {
        this._ratio = ratio;
    }

    set vertices(numberOfVertices: number) {
        const poly = new Polygon(numberOfVertices);
        this.points = [];
        this.points.push(...poly.points);
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
        const point = this.getRandomPoint();
        this.start.addX(Math.round(point.x - this.start.x) * this._ratio);
        this.start.addY(Math.round(point.y - this.start.y) * this._ratio);
        this.ctx.fillRect(this.start.x, this.start.y, this.WIDTH, this.HEIGHT);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    getRandomPoint(): Point {
        let randomPoint;
        do {
            const index = Math.floor(Math.random() * this.points.length);
            randomPoint = this.points[index];
        } while (this.lastPoint === randomPoint);

        this.lastPoint = randomPoint;
        return randomPoint;
    }

}
