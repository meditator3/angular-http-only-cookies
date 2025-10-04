// reads regular coookies


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Cookie Receiver from Backend</h1>
        <p>Session Cookie: {{ sessionCookie }}</p>
        <p>User Cookie: {{ userCookie }}</p>
    `
})
export class App implements OnInit {

    sessionCookie = '';
    userCookie = '';


    ngOnInit() {
        //Read cookies when page loads
        this.sessionCookie = this.getCookie('sessionId') || 'no cookie found';
        this.userCookie = this.getCookie('userId') || 'No cookie found';
    }
    getCookie(name: string): string | null {
        const cookies = document.cookie.split(';');
        for(let cookie of cookies) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) return value;
        }
        return null;
    }
}