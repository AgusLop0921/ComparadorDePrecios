import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent {
  @Output() splashEnd = new EventEmitter<void>();
  fadeOut = false;

  ngOnInit() {
    setTimeout(() => {
      this.fadeOut = true;
      setTimeout(() => this.splashEnd.emit(), 600);
    }, 20000);
  }
}