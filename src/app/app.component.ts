import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public alien = true;
  title = 'resume-app';

  public splat() {
    this.alien = false;
  }
}

