import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './main/components/nav-bar/nav-bar.component';
import { FooterComponent } from './main/components/footer/footer.component';
import { SplashScreenComponent } from './main/components/splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, SplashScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ComparadorDePrecios';
  showSplash = true;
}
