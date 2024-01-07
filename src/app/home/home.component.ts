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
            <p>I sketch, design, code, and build web and native apps, seeing great results and enjoying my progress.
                It's become my inspiration to solve real-world problems, making solutions open source for people to
                benefit from. I also contribute to open source projects. I've worked with various programming
                languages like Python, TypeScript/JS, MySQL, Java, PHP, and more. I've learned to stay prepared and
                follow language trends.</p>
        </section>
      <app-education></app-education>
      <br>
      <app-experience></app-experience>
      <br>
    </div>
  `,
  styles: `
    
  `
})
export class HomeComponent {

}
