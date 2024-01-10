import { Component } from '@angular/core';
import { EducationComponent } from '../components/education.component';
import { ExperienceComponent } from '../components/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EducationComponent, ExperienceComponent],
  template: `
    <div>
        <section>
            <h1>Greetings</h1>
            <hr>
            <p>I sketch, design, code, and build web and native apps, witnessing great results and relishing my progress. This has become my inspiration to solve real-world problems, offering open-source solutions for people to benefit from. Additionally, I actively contribute to open-source projects. I've worked with various programming languages such as Python, TypeScript/JavaScript, MySQL, Java, PHP, and more. I've learned to stay prepared and keep abreast of language trends.</p>
        </section>
      <app-education></app-education>
      <br>
      <app-experience></app-experience>
      <br>
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
    </div>
  `,
  styles: `
    
  `
})
export class HomeComponent {

}
