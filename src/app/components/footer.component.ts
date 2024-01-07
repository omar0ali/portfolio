import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <section>
            <h3>Technical skills</h3>
            <hr>
            <div class="alert alert-light" role="alert">
                <p>Languages I've employed in the development of web applications and native solutions across
                    various platforms, including Windows, macOS, and Linux, encompass both command-line interface
                    (CLI) and graphical user interface (GUI) environments.</p>
                <p><strong>Most Used:</strong> TypeScript, JavaScript, Python, HTML, CSS, SCSS, ZSH/BASH, Nodejs,
                    Linux Systems</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 89%"></div>
                </div>
                <p><strong>Mid:</strong> Java, PHP, Android Studio, Vue.js</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 48%"></div>
                </div>
                <p><strong>Rarely:</strong> RUST, C, C++, C#</p>
                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 23%"></div>
                </div>
            </div>
      </section>
    <footer>
    <div style="text-align: center; font-size: 13px;">

        <p>Copyright © 2023 Omar BaGunaid. All rights reserved.</p>
    </div>
    </footer>
  `,
  styles: `
  
  `
})
export class FooterComponent {

}
