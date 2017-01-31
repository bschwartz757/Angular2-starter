import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="jumbotron">
            <h1>Welcome to the app!</h1>
        </div>
    `,
    styles: [`
        .jumbotron {
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
            background-color: rgba(113, 115, 111, 0.17);
        }
    `]
})
export class AppComponent{}