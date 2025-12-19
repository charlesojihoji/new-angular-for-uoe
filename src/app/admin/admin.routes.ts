import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { ContactListComponent } from "./pages/contacts/list/list.component";
import { ContactCreateComponent } from "./pages/contacts/create/create.component";
import { ContactShowComponent } from "./pages/contacts/show/show.component";
import { ContactEditComponent } from "./pages/contacts/edit/edit.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { AdminFacultyComponent } from "./pages/faculty/faculty.component";
import { FacultyListComponent } from "./pages/faculty/list/list.component";
import { FacultyEditComponent } from "./pages/faculty/edit/edit.component";
import { FacultyCreateComponent } from "./pages/faculty/create/create.component";
import { FacultyShowComponent } from "./pages/faculty/show/show.component";
import { FacultyDeleteComponent } from "./pages/faculty/delete/delete.component";
import { UserComponent } from "../user/user.component";
import { AdminStudentsComponent } from "./pages/students/students.component";
import { StudentsListComponent } from "./pages/students/list/list.component";
import { StudentsCreateComponent } from "./pages/students/create/create.component";
import { StudentsEditComponent } from "./pages/students/edit/edit.component";
import { StudentsShowComponent } from "./pages/students/show/show.component";
import { StudentsDeleteComponent } from "./pages/students/delete/delete.component";

export const adminRoutes: Routes = [

    {path: 'admin', component: AdminComponent, children: [
        {path: '', component: DashboardComponent},
        {path: 'contacts', component: ContactsComponent, children: [
            {path: '', component: ContactListComponent},
            {path: 'create', component: ContactCreateComponent},
            {path: ':id', component: ContactShowComponent},
            {path: ':id/edit', component: ContactEditComponent}
        ]},
        {path: 'courses', component: CoursesComponent},
        {path: 'faculty', component: AdminFacultyComponent, children: [
            {path: '', component: FacultyListComponent},
            {path: 'create', component: FacultyCreateComponent},
            {path: ':id/edit', component: FacultyEditComponent},
            {path: ':id', component: FacultyShowComponent},
            {path: ':id/delete', component: FacultyDeleteComponent}
        ]},
        {path: 'students', component: AdminStudentsComponent, children: [
            {path: '', component: StudentsListComponent},
            {path: 'create', component: StudentsCreateComponent},
            {path: ':id/edit', component: StudentsEditComponent},
            {path: ':id', component: StudentsShowComponent},
            {path: ':id/delete', component: StudentsDeleteComponent}
        ]},
        {path: 'user', component: UserComponent}
    ]},
]