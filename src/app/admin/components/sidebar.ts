import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component
({
    selector: 'app-sidebar',
    imports: [
      CommonModule  
    ],
    template: `<div class="list-group">
                <a *ngFor="let nav of navs" href="{{nav.link}}" class="list-group-item list-group-item-action" aria-current="true">
                    {{nav.level}}
                </a>
            </div>`,
})
export class SidebarComponent {
    
    @Input() navs = [
        {level: 'Dashboard', link: '/admin'},
        {level: 'Faculty', link: '/admin/faculty'},
        {level: 'Students', link: '/admin/students'},
        {level: 'Courses', link: '/admin/courses'},
        {level: 'Contacts', link: '/admin/contacts'},
        {level: 'Staff', link: '/admin/staff'},
    ];
    
}