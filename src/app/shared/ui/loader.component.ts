import { Component } from "@angular/core";

@Component({
    selector: 'app-loader',
    standalone: true,
    template: `
        <div class='lds-ripple'><div></div><div></div></div>
    `,
    styles: [`
        .lds-ripple {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
        }

        .lds-ripple div {
            position: absolute;
            border: 4px solid #3a4fb7;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite;
        }

        .lds-ripple div:nth-child(2) {
            animation-delay: -.5s;
        }

        @keyframes lds-ripple {
        0% {
            top: 40px;
            left: 40px;
            width: 0;
            height: 0;
            opacity: 1;
        }

        100% {
            top: 0;
            left: 0;
            width: 80px;
            height: 80px;
            opacity: 0;
        }
        }
    `]
})

export class LoaderComponent {
}