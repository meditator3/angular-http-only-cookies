// ==================== STEP 2: ADD A SERVICE ====================
// Services are like helpers that do work for components
// my-data.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'  // this means "make it available anywhere"
})
export class MyDataService {

    // pretend this gets data from somewhere
    getUserName(): string {
        return 'Is this service pinging?'
    }

    // pretend this gets a list
    getNumbers(): number[] {
        return [1, 2, 3, 4, 5];
    }
}