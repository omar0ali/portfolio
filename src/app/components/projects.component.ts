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
                <p>All of my personal and work projects are accessible through my GitHub accounts.</p>
                <div class="btn-group">
                  <a href="https://github.com/omarbajunaid" class="btn btn-primary"><i class="fa-brands fa-square-github"></i> /omarbajunaid</a>
                  <a href="https://github.com/omar0ali" class="btn btn-primary"><i class="fa-brands fa-square-github"></i> /omar0ali</a>
                </div>
            </div>
            <div class="card">
                <h5 class="card-header">CLI Accounting Journal Entry</h5>
                <div class="card-body">
                  <h5 class="card-title">Journal Entry</h5>
                  <p class="card-text">The go-to solution for efficient and accurate accounting journal entries. This CLI application is tailored for professionals, accountants, and businesses seeking a digital platform to record and manage their financial transactions seamlessly. As a CLI app, it's designed for simplicity and speed, allowing you to record debit and credit transactions seamlessly from the command line.</p>
                  <a href="https://github.com/omar0ali/journal-entry" class="btn btn-primary">omar0ali/journal-entry</a>
                </div>
              </div>
              <br>
              <div class="card">
                <h5 class="card-header">Seeisve</h5>
                <div class="card-body">
                  <p class="card-text">CSV Manipulator tool allows you to effortlessly manipulate and update CSV (Comma-Separated Values) files with ease. Whether you need to clean, transform, or enrich your data, this website provides a user-friendly interface to accomplish your tasks efficiently. Link: <a href="https://omar0ali.github.io/seeisve">https://omar0ali.github.io/seeisve/</a></p>
                  <a href="https://github.com/omar0ali/seeisve" class="btn btn-primary">/omar0ali/seeisve</a>
                </div>
              </div>
              <br>
              <div class="card">
                <h5 class="card-header">Rust & C Exercises</h5>
                <div class="card-body">
                  <h5 class="card-title">A collection of simple Rust and C applications for personal use and language practice.</h5>
                  <p class="card-text">This repository contains a set of basic Rust and C programs that perform various simple tasks, including mathematical operations (addition, subtraction, etc.), palindrome checks, array shuffling, and more. These programs serve as learning exercise and may be useful for reference in the future.</p>
                  <a href="https://github.com/omar0ali/rust-simple-exercises" class="btn btn-primary">omar0ali/rust-simple-exercises</a><br><br>
                  <a href="https://github.com/omar0ali/c-simple-exercises" class="btn btn-primary">omar0ali/c-simple-exercises</a>
                </div>
              </div>
        </section>
  `,
  styles: `
  
  `
})
export class ProjectsComponent {

}
