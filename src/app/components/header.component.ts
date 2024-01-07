import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <nav class="sticky-top navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">{{ title }}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">Projects</a>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Articles
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="article">article 1</a></li>
          </ul>
        </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: `
    nav {
      margin-top: 10px;
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  `
})
export class HeaderComponent {
  title?:string = "omar ali"
}
