/**
 * Created by andrew on 6/06/2016.
 */

import { Component,Input,ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { curveBasis, curveMonotoneX} from "d3-shape";
import {ReflectionEntry} from "../../data/models/Reflections"; //curveLinear, curveBasisOpen, curveCatmullRomOpen, curveStep, curveCatmullRom,
//import {ReflectionEntry} from "../../data/ReflectionStore";

@Component({
    selector: 'reflection-chart',
    templateUrl: 'reflectionChart.component.html',
    styleUrls: ['reflectionChart.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ReflectionChartComponent {

    @Input() reflections: ReflectionEntry[] = [];

    helptext = "This chart displays a record of your reflection points over time. The purple dots are the actual points that you record with each reflection, and these are connected by straight light blue lines. The red line is a smoothed version of how you've gone over time. It is meant to reflect the general ups and downs without necessarily displaying every point. The light yellow line indicates an 'average' of all of your reflection points. For more detail on each reflection, see the reflection list at the bottom of the page."
//     chartdata = [
// { timeStamp:"2016-11-01T12:00:00", reflection:{ point: 50.0, text:"This is some text"}},
// { timeStamp:"2016-11-02T12:00:00", reflection:{ point: 100.0, text:"This is some text too."}},
// { timeStamp:"2016-11-03T00:00:00", reflection:{ point: 0.0, text:"This is some text three."}},
// { timeStamp:"2016-11-05T10:00:00", reflection:{ point: 75.5, text:"Final text."}}
// ];

    chartDataSize = 0;

    // testVariable = false;
    //
    // public getChartData() {
    //     return JSON.stringify(this.chartdata);
    // }
    //
    // public testclick() {
    //     console.log("test click");
    //     this.testVariable = !this.testVariable;
    // }

    constructor() {}

    ngDoCheck() {
        if (this.reflections.length != this.chartDataSize) {
            this.chartDataSize = this.reflections.length;
            this.buildChart(this.reflections);
        }
    }

    public buildChart(entries) {

        var svg = null;

        var data:DatePoint[] = entries.map( r =>  {
            var dp = new DatePoint();
            dp.timestamp = new Date(r.timestamp);
            dp.point = r.reflection.point;
            return dp;
        } );

        var width = 1000;
        var height = width/4;
        var margin = {top: 10, right: 10, bottom: 20, left: 60};
        var w = width - margin.left - margin.right;
        var h = height - margin.top - margin.bottom;

        var x = d3.scaleTime().range([0, w]);
        var y = d3.scaleLinear().range([h, 0]);

        x.domain(d3.extent(data.map(r => r.timestamp)));
        y.domain([0,100]); // range of reflection points
        //
        var xAxis = d3.axisBottom(x)
            .ticks(8);

        var labels = new Map();
        labels.set(0, "distressed");
        labels.set(50, "going ok");
        labels.set(100, "soaring");

        var yAxis = d3.axisLeft(y)
            .tickValues([0,25,50,75,100])
            .tickFormat(function(d) { return labels.get(d);});


        d3.select("svg").remove();

            svg = d3.select("div#container")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 "+1000+" "+4000)
                .classed("svg-content", true);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + h + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        svg.selectAll(".point")
            .data(data)
            .enter().append("svg:circle")
            .attr("class","point")
            .attr("r",5)
            .attr("cx",function(d) { return x(d.timestamp); })
            .attr("cy",function(d) { return y(d.point); });

        var hardline = d3.line<DatePoint>()
            .x(function(d) { return x(d.timestamp); })
            .y(function(d) { return y(<number>d.point); })
            .curve(curveMonotoneX); //interpolate("linear");

        var softline = d3.line<DatePoint>()
            .x(function(d) { return x(d.timestamp); })
            .y(function(d) { return y(<number>d.point); })
            .curve(curveBasis);


        var avg = d3.mean(data,function(d) { return y(d.point); });
        var meanline = d3.line<DatePoint>()
            .x(function(d) { return x(d.timestamp); })
            .y(function(d) { return avg; });

        svg.append("path")
            .data([data])
            .attr("class", "hardline")
            .attr("d", hardline);

        svg.append("path")
            .data([data])
            .attr("class", "softline")
            .attr("d", softline);

        svg.append("path")
            .data([data])
            .attr("class", "meanline")
            .attr("d", meanline);

        //.on('click', function(d) { alert("Reflection point "+ d.reflection.point+" at "+ d.timestamp); });

    }

}

export class DatePoint {
    timestamp: Date;
    point: number;
}
