import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ProjectsComponent } from './components/projects.component';
import { ContactComponent } from './components/contact.component';
import { ArticleComponent } from './components/articles/article.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home Page' },
    { path: 'projects', component: ProjectsComponent, title: 'Projects' },
    { path: 'contact', component: ContactComponent, title: 'Contact info' },
    { path: 'article', component: ArticleComponent, title: 'Article 1' },
];


