/**
 * Created by andrew on 6/06/2016.
 */

import {Component, EventEmitter, Output} from '@angular/core';
import {SliderComponent} from './slider/slider.component'
import {Reflection} from "../../data/models/Reflections";

@Component({
    selector: 'entry',
    providers: [SliderComponent],
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {

    @Output() notify: EventEmitter<Reflection> = new EventEmitter<Reflection>();

    public sliderValue: number;
    public reflectText:string;

    helptext = "This is where you record your personal reflection. First, choose an overall indication of how you are feeling by moving the slider between distressed, going ok and soaring. Then provide a written description of how you are going in the box below. Write whatever you think is most relevant to how you are going, including how you feel and why you feel that way. When you have finished, click the save button to record your reflection."

    onNotify(sVal:number):void {
        //console.log("Received from slider: "+sVal);
        this.sliderValue = sVal;
    }

    public saveEntry() {
            //console.log("Setting the text to: " + this.reflectText);
            let ref = new Reflection();
            if(this.sliderValue === undefined) {
                ref.point = 50
            } else {
                ref.point = this.sliderValue*100;
            }
            ref.text = this.reflectText;
            this.notify.emit(ref);
            this.reflectText = "";
    }
}
