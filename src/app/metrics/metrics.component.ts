import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: 'metrics.component.html',
  styleUrls: ['metrics.component.css']
})
export class MetricsComponent implements OnInit {

 @Input()
 value : number;
  
  constructor() { }

  ngOnInit() {
  }

}
