/**
 * Created by andrew on 6/06/2016.
 */

import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';

declare var Dragdealer: any;

@Component({
    selector: 'slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.css']
})

export class SliderComponent implements AfterViewInit {

    constructor() {}

    @Output() notify: EventEmitter<number> = new EventEmitter<number>();

    public currentPoint: number;

    private setThePoint = (n:number) => {
        //console.log("Setting the point to: "+n);
        this.notify.emit(n);
        this.currentPoint = n;
    }

    ngAfterViewInit() {
        new Dragdealer('simple-slider',{steps:101,snap:true, x:0.5, callback: this.setThePoint})
    }

}
