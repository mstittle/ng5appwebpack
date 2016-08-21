import { Component, OnInit } from '@angular/core';
import { MetricsService} from './metrics.service';
import {Metric} from "./metric";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MetricsService]
})
export class AppComponent {

  values: Metric[];

  constructor(private service : MetricsService) {

  }

   ngOnInit(): void  {
      this.service.getData().then(
        values => this.values = values
      );
   }

  title = 'app works!';
}
