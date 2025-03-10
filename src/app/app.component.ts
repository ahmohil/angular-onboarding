import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-onboarding';
  currentYear = new Date().getFullYear();
  greeting: string;

  ngOnInit() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = 'Good morning ☀️';
    } else if (hour < 18) {
      this.greeting = 'Good afternoon 🌤️';
    } else {
      this.greeting = 'Good evening 🌙';
    }
  }
}
