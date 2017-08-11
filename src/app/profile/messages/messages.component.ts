/**
 * Created by andrew on 6/06/2016.
 */

import {Component, Input} from '@angular/core';
import {Message} from "../../data/models/Profile";

@Component({
    selector: 'message-list',
    templateUrl: 'messages.component.html',
    styleUrls: ['messages.component.css']
})

export class MessagesComponent {

    @Input() messages:Message[] = [];

    helptext = "Check this box for recent messages from GoingOK. The messages are presented in reverse chronological order and may include general information about GoingOK, information associated with a research project you are involved in, or occasional personal reminders for you."

    public dataLoaded() {
        return (this.messages.length > 0)
    }

    public getMessages() {
        return this.messages;
    }
}
