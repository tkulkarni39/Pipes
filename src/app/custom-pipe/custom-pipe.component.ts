import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})




export class CustomPipeComponent {


  constructor() { }
  power = 5;
  factor = 1;


}
