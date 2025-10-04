// ==================== STEP 4: SIMPLE STATE MANAGEMENT ====================
// State = storing data that multiple parts of app can use

import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class StateService {

    //this holds our data
    private messageSubject = new BehaviorSubject<string>('Hello from State!');
    private countSubject = new BehaviorSubject<number>(0)

    // These are what components can watch
    message$ = this.messageSubject.asObservable();
    count$ = this.countSubject.asObservable();

    // Actions = methods that change the state
    updateMessage(newMessage: string){
        this.messageSubject.next(newMessage)
    }

    incrementCount() {
        const current = this.countSubject.value;
        this.countSubject.next(current +1);
    }
    resetCount() {
        this.countSubject.next(0)
    }
}