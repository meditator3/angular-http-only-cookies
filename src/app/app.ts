// this reads cookies from backend, and can read also http-only cookies


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-root',
    template: `
        <h1>Send Cookie Receive Token from Backend</h1>
        <p>Token: {{ tokenn }}</p>
    `
})
export class App implements OnInit {
    tokenn = '';
    orgName = '';
    sessionCookie = '';
    userCookie = '';
    message = '';
    constructor(private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            console.log('url:==>', location.href) 
            const url = location.href
            const part1 = url.split('://')[1];
            const part2 = part1.split('/')[1];
            const org_name = part2.split('?')[0];
            console.log("org_name", org_name);
            console.log('OrgName param:', params.get('orgName'))
            this.orgName = params.get('orgName') || '';
            console.log('Final orgName value:', this.orgName)
        })
        
        this.route.queryParams.subscribe(params => {
            if (params['provider'] === 'lti:moodle') {
                console.log('provider matched! making API call')
        //calling backend instead of calling cookies directly
                this.http.post<any>('https://web-stg.betayeda.dev/api/v1/lti/auth-cookie-tokens', {}, { withCredentials: true, headers: { 'ngrok-skip-browser-warning': 'true' } })
                    .subscribe({
                        next: (data) => {
                            console.log('Data from backend:', data);
                            this.tokenn = JSON.stringify(data) || 'no token found';
                            this.message = data.message || 'no message'
                        },
                    error: (error) => {
                        console.error('Error: ', error);
                        this.sessionCookie = 'Error loading';
                        this.userCookie = 'Error loading';
                    }
                });
            }    
        });
    }        
}  
 
        
