import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume-app';

  public navigate(event: any) {
    console.log(event);
  }
}

