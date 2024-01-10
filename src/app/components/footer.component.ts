import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
    <a href="https://www.linkedin.com/in/omarbajunaid/"><i class="fa-brands fa-linkedin"></i></a>
    <a href="https://twitter.com/0mar41i"><i class="fa-brands fa-square-twitter"></i></a>
    <div>
        <p>Copyright © 2024 Omar BaGunaid. All rights reserved.</p>
    </div>
    </footer>
  `,
  styles: `
    footer {
      text-align: center;
      a {
        padding: 10px;
      }
      i {
        font-size: 40px;
      }
      p {
        font-size: 14px;
      }
    }
  `
})
export class FooterComponent {

}
