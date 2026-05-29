import { FacultyComponent } from "./faculty.component";
import { CoursesComponent } from "./pages/courses/courses.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SettingsComponent } from "./pages/settings/settings.component";

export const facultyRoutes = [
    {path: 'faculty', component: FacultyComponent, children: [
        {path: '', component: DashboardComponent},
        {path: 'profile', component: ProfileComponent},
        {path: 'settings', component: SettingsComponent},
        {path: 'courses', component: CoursesComponent}
    ]},
]