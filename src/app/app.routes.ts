import { Routes } from '@angular/router';
import { HomeComponent } from './front/pages/home/home.component';
import { AboutComponent } from './front/pages/about/about.component';
import { ContactComponent } from './front/pages/contact/contact.component';
import { FacultyComponent } from './front/pages/faculty/faculty.component';
import { CoursesComponent } from './front/pages/courses/courses.component';
import { FrontComponent } from './front/front.component';
import { UserComponent } from './user/user.component';

import { adminRoutes } from './admin/admin.routes';
import { AdminStudentsComponent } from './admin/pages/students/students.component';

export const routes: Routes = [
    {path: '', component: FrontComponent, children: [
        {path: '', component: HomeComponent},
        {path: 'about', component: AboutComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'courses', component: CoursesComponent},
        {path: 'faculty', component: FacultyComponent},
        {path: 'students', component: AdminStudentsComponent}
    ]},

    ...adminRoutes,

    {path: 'user', component: UserComponent}
    
];
