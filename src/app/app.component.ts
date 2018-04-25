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

  //TODO 2018-04-25 find a way to retrieve DOM element's with and height
  private readonly WIDTH = 500;
  private readonly HEIGHT = 500;


  @ViewChild('canvas') private canvasRef: ElementRef;
  private canvas: Canvas;

  ngOnInit(): void {

    this.canvas = new Canvas(
      this.canvasRef.nativeElement.getContext('2d'),
      this.WIDTH,
      this.HEIGHT);

    let polygon = new Polygon(4);

    for (let point of polygon.points) {
      this.canvas.addPoint(point);
    }

    this.canvas.addStart(new Point());

    for (let i = 0; i < 10000; i++) {
      setTimeout(() => {
        this.canvas.moveStart();
      });
    }

  }
}
