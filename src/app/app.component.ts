import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Point } from './models/Point';
import { Canvas } from './models/Canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('canvas') private canvasRef: ElementRef;
  private canvas: Canvas;

  ngOnInit(): void {

    this.canvas = new Canvas(this.canvasRef.nativeElement.getContext('2d'));

    this.canvas.addPoint(new Point(250, 50));
    this.canvas.addPoint(new Point(100, 400));
    this.canvas.addPoint(new Point(400, 400));
    this.canvas.addStart(new Point());

    for (let i = 0; i < 20000; i++) {
      setTimeout(() => {
        this.canvas.moveStart();
      });
    }

  }
}
