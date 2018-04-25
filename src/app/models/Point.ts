export class Point {

    constructor(public x?: number, public y?: number) {
        this.x = x || this.getRandomNumer();
        this.y = y || this.getRandomNumer();
    }

    addX(x: number) {
        this.x += x;
    }

    addY(y: number) {
        this.y += y;
    }

    private getRandomNumer(): number {
        return Math.floor(Math.random() * 500);
    }
}
