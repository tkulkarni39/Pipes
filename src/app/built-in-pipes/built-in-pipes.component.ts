import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent {

  constructor() { }



  private dateVal: Date = new Date();
  private jsonVal: object = {Capital: 'Delhi-NCR', IT_Capital: {Karnataka: 'Bengaluru'}};
}
