// ==================== STEP 1: SIMPLE COMPONENT ====================
// This is the most basic Angular component
// app.component.ts

// seems like this hellow world app, click to change name

import { Component } from '@angular/core';

@Component({
    selector: 'app-root', // HTML tag name: <app-root></app-root>
    template: `
        <h1>Hello World!</h1>
        <p> My name is {{ name }}</p>
        <button (click)="changeName()">Change Name</button>
        `,
        styles: [`
            h1 { color: blue;}
            button { padding: 10px; }
            `]
})
export class App {
    // this is like a variable
    name = 'Ariel'

    // this is like a function
    changeName() {
        this.name = 'Shlomo'
    }
}