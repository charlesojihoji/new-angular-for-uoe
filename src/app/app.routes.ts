import { Routes } from '@angular/router';
import { HomeComponent } from './front/pages/home/home.component';
import { AboutComponent } from './front/pages/about/about.component';
import { ContactComponent } from './front/pages/contact/contact.component';
import { FacultyComponent } from './front/pages/faculty/faculty.component';
import { CoursesComponent } from './front/pages/courses/courses.component';
import { FrontComponent } from './front/front.component';
import { UserComponent } from './user/user.component';

import { adminRoutes } from './admin/admin.routes';
import { LoginComponent } from './front/pages/login/login.component';
import { RegisterComponent } from './front/pages/register/register.component';
import { studentRoutes } from './student/student.routes';
import { facultyRoutes } from './faculty/faculty.routes';

export const routes: Routes = [
    {path: '', component: FrontComponent, children: [
        {path: '', component: HomeComponent},
        {path: 'about', component: AboutComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'courses', component: CoursesComponent},
    //  {path: 'faculty', component: FacultyComponent},
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent}

    ]},

    ...adminRoutes,
    ...studentRoutes,
    ...facultyRoutes,

    {path: 'user', component: UserComponent}
];
