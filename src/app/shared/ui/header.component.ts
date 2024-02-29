import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    template: `
        <header class="bg-white shadow">
        <nav class="container mx-auto p-6 flex justify-between items-center">
            <a class="text-xl font-bold text-gray-800" routerLink="/">Mini Udemy</a>
            <div class="flex items-center space-x-4">
                <a class="text-gray-600 hover:text-gray-800" routerLink="/courses">Courses</a>
            </div>
        </nav>
        </header>
    `
})

export class HeaderComponent {
}