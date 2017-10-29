import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="App">
    <div class="App__Header">
      <h2>{{title}}</h2>
      <app-dropdown></app-dropdown>
    </div>
    <div class="App__Graphs">
      <div class="App__Circle">
        <app-circle></app-circle>
      </div>
      <div>
        <app-legend></app-legend>
      </div>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'Average Saftey Score';
}
