import { Component, OnInit} from '@angular/core'
import { StateService } from './state.service'

@Component({
    selector: 'app-counter',
    template:`
        <div>
            <h2> {{ message }}</h2>
            <p>Count: {{ count }}</p>
            <button (click)="increment()">+1</button>
            <button (click)="changeMessage()">Change Message</button>
        </div>    
    `
})
export class CounterComponent implements OnInit {
    message = '';
    count = 0;
    
    constructor(private stateService: StateService) { }
    ngOnInit(): void {
        //subscribe = "watch for changes"
        this.stateService.message$.subscribe(msg  => {
            this.message = msg;
        })

        this.stateService.count$.subscribe(cnt => {
            this.count = cnt;
        })
    }

    // These call the state service actions
    increment() {
        this.stateService.incrementCount();
    }

    reset() {
        this.stateService.resetCount();
    }

    changeMessage() {
        this.stateService.updateMessage('Message changed!')
    }

}

// ==================== KEY CONCEPTS EXPLAINED ====================
/*

1. COMPONENT:
   - Has template (HTML), styles (CSS), and class (TypeScript)
   - Like a custom HTML tag
   - Can have variables and functions

2. SERVICE:
   - @Injectable makes it available to components
   - Does work that components need (get data, calculations, etc)
   - Components get services through constructor

3. CONSTRUCTOR vs ngOnInit:
   - Constructor: Only for getting services from Angular
   - ngOnInit: For doing actual work (loading data, setup)

4. STATE:
   - BehaviorSubject = container that holds data and tells everyone when it changes
   - subscribe() = "tell me when this changes"
   - Actions = functions that change the state

5. DATA FLOW:
   User clicks button → Component calls action → State changes → All subscribers get notified → View updates

THIS IS THE FOUNDATION. Everything else builds on these concepts!
*/
