import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <section>
            <h1>Projects</h1>
            <hr>
            <div class="alert alert-dark" role="alert">
                <p>All projects can be viewed through my github accounts.</p>
                <div class="btn-group">
                  <a href="https://github.com/omarbajunaid" class="btn btn-primary"><i class="fa-brands fa-square-github"></i> /omarbajunaid</a>
                  <a href="https://github.com/omar0ali" class="btn btn-primary"><i class="fa-brands fa-square-github"></i> /omar0ali</a>
                </div>
            </div>
            <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <br>
              <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <br>
              <div class="card">
                <h5 class="card-header">Featured</h5>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </section>
  `,
  styles: `
  
  `
})
export class ProjectsComponent {

}
