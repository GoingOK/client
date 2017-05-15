/**
 * Created by andrew on 6/06/2016.
 */

import {Component, Input} from '@angular/core';
import {Profile,ReflectionEntry} from "../../data/models/";

@Component({
    selector: 'reflection-list',
    templateUrl: 'reflections.component.html',
    styleUrls: ['reflections.component.css']
})

export class ReflectionsComponent {

    helptext="This section displays all of your past reflections in reverse order starting from the most recent. The number is a scale of 0 to 100 and represents your reflection point where  is distressed are lower numbers, going ok are middle numbers around 50 and soaring are higher numbers."

    @Input() reflections:ReflectionEntry[];

    public dataLoaded() {
        return (this.reflections.length > 0)
    }

    public getReflections() {
        return this.reflections;
    }
}
