// this reads cookies from backend, and can read also http-only cookies


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


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
    message = '';
    constructor(private http: HttpClient) {}

    ngOnInit() {
        //calling backend instead of calling cookies directly
        this.http.get<any>('http://localhost:8000/api/v1/lti/auth-cookie-tokens', { withCredentials: true })
            .subscribe({
                next: (data) => {
                    console.log('Data from backend:', data);
                    this.sessionCookie = data.sessionId || 'no cookie found';
                    this.userCookie = data.userId || 'no cookie found';
                    this.message = data.message || 'no message'
                },
            error: (error) => {
                console.error('Error: ', error);
                this.sessionCookie = 'Error loading';
                this.userCookie = 'Error loading';
            }
        
    });
    }  
}  
        




        /// THIS FOR REGULAR COOKIES (ngOnInit nested)
    //     //Read cookies when page loads
    //     this.sessionCookie = this.getCookie('sessionId') || 'no cookie found';
    //     this.userCookie = this.getCookie('userId') || 'No cookie found';
    // }
    // getCookie(name: string): string | null {
    //     const cookies = document.cookie.split(';');
    //     for(let cookie of cookies) {
    //         const [key, value] = cookie.trim().split('=');
    //         if (key === name) return value;
    //     }
    //     return null;
//     }
// }