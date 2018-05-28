import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Point } from './models/Point';
import { Canvas } from './models/Canvas';
import { Polygon } from './models/Polygon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // TODO: 2018-04-25 find a way to retrieve DOM element's with and height
  private readonly WIDTH = 500;
  private readonly HEIGHT = 500;


  @ViewChild('canvas') private canvasRef: ElementRef;
  private canvas: Canvas;

  ngOnInit(): void {

    this.canvas = new Canvas(
      this.canvasRef.nativeElement.getContext('2d'),
      this.WIDTH,
      this.HEIGHT);

    this.canvas.addStart(new Point());

    this.draw();
  }

  onRatioChange(ratio: number) {
    this.canvas.ratio = ratio;
    this.redraw();
  }

  onPolygonChange(numberOfvertices: number) {
    this.canvas.vertices = numberOfvertices;
    this.redraw();
  }

  draw() {
    for (let i = 0; i < 20000; i++) {
      this.canvas.moveStart();
    }
  }

  redraw() {
    this.canvas.clear();
    this.draw();
  }
}
