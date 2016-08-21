import { Injectable } from '@angular/core';

@Injectable()
export class MetricsService {

  constructor() { }
    getData() : Promise<number []> {
      return Promise.resolve([1,2,3,4]);
    }
}
