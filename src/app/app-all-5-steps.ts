// ==================== STEP 3: COMPONENT USING SERVICE ====================
// Now the component uses the service
// app.component.ts (updated)

// seems like this hellow world app, click to change name
import { Component, OnInit } from '@angular/core';
import { MyDataService } from './my-data.service'
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component'

@Component({
    selector: 'app-root', // HTML tag name: <app-root></app-root>
    imports: [CommonModule,  CounterComponent], 
    template: `
        <h1>Hello World!</h1>
        <p> My name is {{ nameFromService }}</p>
        <p> Numbers from service:</p>
        <ul>
            <li *ngFor="let num of numbersFromService">{{ num }}</li>
        </ul>
        <button (click)="refreshData()">Refresh</button>
        <hr>
        <h2>State Management Demo:</h2>
        <app-counter></app-counter>
        `,
        styles: [`
            h1 { color: blue;}
            button { padding: 10px; }
            `]
})
export class App implements OnInit{
   // variables to hold data
   nameFromService = '';
   numbersFromService: number[] = [];

   //constructor: angular gives the service here
   constructor(private dataService: MyDataService) {
    // Don't do work here, just receive services
   }

   //ngOnInit: this runs AFTER the component is created
   ngOnInit(): void {
       this.loadData();
   }
   loadData() {
    this.nameFromService = this.dataService.getUserName();
    this.numbersFromService = this.dataService.getNumbers();
   }

   refreshData() {
    this.loadData();
   }
}