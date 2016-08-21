/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MetricsService } from './metrics.service';

describe('Service: Metrics', () => {
  beforeEach(() => {
    addProviders([MetricsService]);
  });

  it('should ...',
    inject([MetricsService],
      (service: MetricsService) => {
        expect(service).toBeTruthy();
      }));
});
