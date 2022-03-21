import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public alien = Math.floor(Math.random() * 20) % 20 === 0;
  title = 'resume-app';

  public navigate(event: any) {
    console.log(event);
  }
}

