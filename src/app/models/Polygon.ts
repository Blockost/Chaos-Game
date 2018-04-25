import { Point } from "./Point";

export class Polygon {

    points: Point[] = [];

    constructor(private sides: number) {
        for (let i = sides; i > 0; i--) {
            let angle = 360 / sides * i - 90
            let radians = angle * Math.PI / 180
            this.points.push(new Point(
                Math.cos(radians) * 100 + 200,
                Math.sin(radians) * 100 + 200));
        }
    }
} 