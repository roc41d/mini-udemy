import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
        <footer class="text-gray-600 body-font w-full">
            <div class="w-full container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span class="ml-3 text-xl">Mini Udemy</span>
                </a>
                <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                    Code Repo —
                    <a href="#" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">
                        https://github.com/roc41d/mini-udemy
                    </a>
                </p>
            </div>
        </footer>
    `
})

export class FooterComponent {
}