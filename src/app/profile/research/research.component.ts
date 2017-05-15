/**
 * Created by andrew on 6/06/2016.
 */

import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {ResearchChoice, ResearchChoices} from "../../data/models/ResearchParticipation";

@Component({
    selector: 'research',
    templateUrl: 'research.component.html',
    styleUrls: ['research.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ResearchComponent {

    researchChoices: ResearchChoices = new ResearchChoices();
    saved: boolean = false;

    helptext = "If you are participating in a research project that involves using GoingOK, please ensure that the settings in this box are correct. If you are willing for your deidentified data to be used for ongoing research, please select the 'My deidentified data can be used for research' checkbox."

    @Input() research:ResearchChoice = new ResearchChoice();
    @Output() notify: EventEmitter<ResearchChoice> = new EventEmitter<ResearchChoice>();

    constructor() {
        //console.log("Starting code: "+this.research.code());
        //this.savedCode = this.research.code();
    }

    // ngAfterViewInit() {
    //     //this.savedCode = this.research.code();
    // }

    public saveResearchChoice() {
        //console.info("Save choice to server: "+JSON.stringify(this.research));
        //this.savedCode = this.research.project.code +"-"+ this.research.organisation.code +"-"+ this.research.cohort.code;

        this.notify.emit(this.research);
        this.saved = true;
    }

    public setUnsaved() {
        console.info("Research: ",this.research)
        this.saved = false;
    }

}
