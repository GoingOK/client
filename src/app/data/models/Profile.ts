
/**
 * Created by andrew on 30/3/17.
 */
import {ReflectionEntry} from "./Reflections";
import {ResearchChoice} from "./ResearchParticipation";

export class Profile {
    id:string;
    messages: Message[];
    reflectionEntries: ReflectionEntry[];
    research: ResearchChoice;

    constructor() {
        this.id = "";
        this.messages = [];
        this.reflectionEntries = [];
        this.research = new ResearchChoice();
    }

    addReflectionEntry(ref:ReflectionEntry) {
        //this.currentEntry = ref;
        this.reflectionEntries.unshift(ref);
    }

    dummyData() {
        this.id = "dummy_id";
        this.messages.unshift(new Message());
        this.reflectionEntries = [
            { timestamp:"2017-01-05T10:00:00", reflection:{ point: 75.5, text:"Final text."}},
            { timestamp:"2017-01-03T00:00:00", reflection:{ point: 0.0, text:"This is some text three."}},
            { timestamp:"2016-12-02T12:00:00", reflection:{ point: 100.0, text:"This is some text too."}},
            { timestamp:"2016-11-01T12:00:00", reflection:{ point: 50.0, text:"This is some text"}}
        ];
    }
}

export class Message {
    timestamp: string;
    title: string;
    text: string;
    value: any;

    constructor() {
        this.timestamp =new Date().toISOString();
        this.title = "Test Message Title";
        this.text = "This is the body of the message";
        this.value = 42;
    }
}
