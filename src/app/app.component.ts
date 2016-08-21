import { Component, OnInit } from '@angular/core';
import { MetricsService} from './metrics.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [MetricsService]
})
export class AppComponent {

  constructor(private service : MetricsService) {
    
  }

   ngOnInit(): void  {
      this.service.getData().then( values => values.forEach( x => console.log(x)));
   }
   
  title = 'app works!';
}
