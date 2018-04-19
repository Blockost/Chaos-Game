import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('canvas') canvasRef: ElementRef;

  ngOnInit(): void {

    let ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');

  }
}
