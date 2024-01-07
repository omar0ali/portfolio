import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <main>
    <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
      You can download a pdf version of my resume from this link <a href="assets/Omar-BaGunaid.pdf" download>Omar-BaGunaid.pdf</a>
    </div>
    </main>
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: `
  main {
    padding: 15px;
  }
  `
})
export class AppComponent {
  title = 'portfolio';
}
