import { Component, OnInit} from '@angular/core';
import { UsApiService } from './service/us-api.service';
import { Router ,RouterModule,NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//title = 'Cronos-v3';
//nuevo borrar en caso de falla 
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            if (event.url.match('/') || event.url.match('/fichadaRRHH')) {
                this.hideElement = true;
            } else {
                this.hideElement = false;
            }
        }
    });
  }
  public hideElement = false;

}
