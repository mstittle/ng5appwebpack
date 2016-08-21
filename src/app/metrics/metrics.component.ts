import { Component, OnInit, Input } from '@angular/core';
import {Metric} from '../metric';

@Component({
  selector: 'app-metrics',
  templateUrl: 'metrics.component.html',
  styleUrls: ['metrics.component.css']
})
export class MetricsComponent implements OnInit {

 @Input()
 value : Metric;

  constructor() { }

  ngOnInit() {
  }

}
