import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonService } from './common.service'
import { AppComponent } from './app.component';
import { LegendComponent } from './legend/legend.component';
import { CircleComponent } from './circle/circle.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    LegendComponent,
    CircleComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
