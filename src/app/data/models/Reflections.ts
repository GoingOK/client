/**
 * Created by andrew on 4/3/17.
 */

// export class Reflections {
//     currentEntry:ReflectionEntry;
//     reflectionEntries: ReflectionEntry[];
//
//     constructor() {
//         this.currentEntry = new ReflectionEntry();
//         this.reflectionEntries = [];
//     }
//
//     addReflectionEntry(ref:ReflectionEntry) {
//         this.currentEntry = ref;
//         this.reflectionEntries.unshift(ref);
//     }
//
//     dummyData() {
//         this.currentEntry = { timestamp:"2017-01-05T10:00:00", reflection:{ point: 75.5, text:"Final text."}};
//         this.reflectionEntries = [
//             { timestamp:"2017-01-05T10:00:00", reflection:{ point: 75.5, text:"Final text."}},
//             { timestamp:"2017-01-03T00:00:00", reflection:{ point: 0.0, text:"This is some text three."}},
//             { timestamp:"2016-12-02T12:00:00", reflection:{ point: 100.0, text:"This is some text too."}},
//             { timestamp:"2016-11-01T12:00:00", reflection:{ point: 50.0, text:"This is some text"}}
//         ];
//     }
//
// }

export class ReflectionEntry {
    timestamp: string;
    reflection: Reflection;

    constructor() {
        this.timestamp = new Date().toISOString();
        this.reflection = new Reflection();
    }
}

export class Reflection {
    point: number;
    text: string;

    constructor() {
        this.point = -1;
        this.text = "";
    }
}
