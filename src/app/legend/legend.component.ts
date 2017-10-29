import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from '../common.service';

import { FactorsData } from  '../data';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css'],
})

export class LegendComponent implements OnInit {

  private subscription: Subscription;
  value: any;
  FACTORS: any;

  constructor ( private commonService: CommonService ) {
    const value = this.value ? this.value : "alltime";
    this.FACTORS = FactorsData[value];
  }

  ngOnInit() {
    const self = this;
    this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'onSubmit') {
        self.FACTORS = FactorsData[res.value];
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getPathValue(val) {
    return "M 0, 0 H " + val;
  }
}
