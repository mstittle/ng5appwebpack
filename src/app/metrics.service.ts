import { Injectable } from '@angular/core';
import {Metric} from './metric';

@Injectable()
export class MetricsService {

  metrics : Metric[] = [
{ value: 3, name: 'average response time'},
{ value: 1, name: 'min response time'},
{ value: 5, name: 'max response time'},
  ];

  constructor() { }
    getData() : Promise<Metric[]> {
      return Promise.resolve(this.metrics);
    }
}
