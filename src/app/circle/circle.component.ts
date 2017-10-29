import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CommonService } from '../common.service';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { RiskData, AvgScoreData } from '../data';

@Component({
    selector: 'app-circle',
    template: `
      <div id="svg-pie">
        <svg width="340" height="250"></svg>
      </div>
    `
})

export class CircleComponent implements OnInit {

    private subscription: Subscription;
    period: any;
    AvgSaftey: any;

    private width: number;
    private height: number;

    private svg: any;
    private radius: number;

    private arc: any;
    private out_arc: any;
    private pie: any;
    private color: any;
    private out_color: any;

    private g: any;
    private h: any;


    constructor ( private commonService: CommonService ) {
      // period defaults to 'alltime'
      this.period = this.period ? this.period : "alltime";
      this.AvgSaftey = AvgScoreData[this.period];
    }

    ngOnInit() {
        // create the chart
        this.initSvg();
        this.riskChart(RiskData);
        this.avgScoreChart(AvgScoreData['alltime']);

        const self = this;
        this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
           if (res.hasOwnProperty('option') && res.option === 'onSubmit') {
             self.period = res.value;
             self.AvgSaftey = AvgScoreData[res.value];

             // draw a new svg over the previous one
             self.svg.remove();

             // Redraw the chart
             self.initSvg();
             self.riskChart(RiskData);
             self.avgScoreChart(self.AvgSaftey);
           }
         });
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    private initSvg() {
        this.svg = d3.select('#svg-pie').select('svg');

        this.width = +this.svg.attr('width');
        this.height = +this.svg.attr('height');
        this.radius = Math.min(this.width, this.height) / 2;

        this.color = d3Scale.scaleOrdinal()
            .range(["#771414", "#1C001C", "#0000AF"]);


        this.out_color = d3Scale.scaleOrdinal()
          .range(["#7b6888", "transparent"]);

        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(this.radius - 30);

        this.out_arc = d3Shape.arc()
            .outerRadius(this.radius - 3)
            .innerRadius(this.radius - 10);


        this.pie = d3Shape.pie()
            .sort(null)
            .padAngle(.007)
            .value((d: any) => d.value);

        this.svg = d3.select('#svg-pie').select('svg')
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
    }

    private riskChart(data: any[]) {
        let g = this.svg.selectAll(".arc")
            .data(this.pie(data))
            .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("id", function(d,i) { return "textArc_"+i; })
            .attr("d", this.arc)
            .style("fill", d => this.color(d.data.risk));

        g.append("text")
           .attr("dy", 16) //Move the text down
           .append("textPath")
           .style("fill", "#fff")
           .style("opacity", "0.7")
           .style("font-size", "14px")
           .attr("xlink:href", function(d,i){return "#textArc_"+i;})
           .attr("startOffset", "15%")
           .text(d => d.data.risk);
    }

    private avgScoreChart(data: any[]) {
        let h = this.svg.selectAll(".outarc")
            .data(this.pie(data))
            .enter().append("g")
            .attr("class", "arc");

        h.append("path")
            .attr("d", this.out_arc)
            .style("fill", d => this.out_color(d.data.score));


        h.append("text")
            .attr("fill", "#ffffff")
            .text(function(d) { return 'Avg. Saftey Score'; })
            .attr("x", this.radius - 180)
            .attr("y", this.radius - 150);


        // Average saftery score value
        const value = AvgScoreData[this.period][0].value;

        var vText;
        switch (true) {
           case value >= 66:
             vText = 'Low Risk';
             break;

           case  value >= 33:
             vText = 'Medium Risk';
             break;

          case value < 33:
             vText = 'High Risk';
             break;
        }

        h.append("text")
            .attr("fill", "#ffffff")
            .text(function(d) { return value + " %"; })
            .style("text-anchor", "middle");

        h.append("text")
            .attr("fill", "#ffffff")
            .text(vText)
            .attr("x", this.radius - 160)
            .attr("y", this.radius - 100);
    }
}
