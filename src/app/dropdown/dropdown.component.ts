import { Component } from '@angular/core';

import { CommonService } from '../common.service';
import { Time } from './time';
import { FactorsData } from '../data';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styles: ['SELECT { margin-bottom: 20px;'],
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  selectedDay: string = '';

  constructor( private commonService: CommonService ){}

  public selectChangeHandler (event: any) {
    this.selectedDay = event.target.value;
    this.commonService.notifyOther({option: 'onSubmit', value: this.selectedDay});
  }
}


