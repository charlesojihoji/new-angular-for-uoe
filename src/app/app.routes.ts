import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'faculty', component: FacultyComponent}
];
