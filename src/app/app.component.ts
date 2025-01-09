import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  router: Router = new Router();
  subscriptionRoute: Subscription = new Subscription();

  ngOnInit():void {
    this.subscriptionRoute = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0,0);
      }
    })
  }
}