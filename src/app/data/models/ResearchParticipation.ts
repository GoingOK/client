/**
 * Created by andrew on 3/4/17.
 */


export class ResearchEntry {
    name: string;
    code: string;

    constructor() {
        this.name = "None";
        this.code = "NON";
    }

}

export class ResearchChoice {
    project: ResearchEntry;
    organisation: ResearchEntry;
    cohort: ResearchEntry;
    consent: Boolean;
    constructor() {
        this.project = new ResearchEntry();
        this.organisation = new ResearchEntry();
        this.cohort = new ResearchEntry();
        this.consent = false;
    }
    code = () => {
        return this.project.code + "-" +
            this.organisation.code + "-" +
            this.cohort.code
    }
}


export class ResearchChoices {

    projects:ResearchEntry[];
    organisations:ResearchEntry[];
    cohorts:ResearchEntry[];

    constructor() {
        let projectList = [
            {name: "None", code: "NON"},
            {name: "Transition to Teaching", code: "T2T"},
            {name: "Quotidian Quality", code: "QQA"},
            {name: "inSITE: Inclusive Education", code: "IIE"}
        ];

        let organisationList = [
            {name: "None", code: "NON"},
            {name: "Queensland University of Technology", code: "QUT"},
            {name: "University of Tasmania", code: "UTA"},
            {name: "Macquarie University", code: "MAC"},
            {name: "University of Technology Sydney", code: "UTS"},
            {name: "Christian Heritage College", code: "CHC"},
            {name: "University of New England", code: "UNE"},
            {name: "Central Queensland University", code: "CQU"},
            {name: "Federation University Australia", code: "FUA"},
            {name: "Murdoch University", code: "MUR"},
            //{name: "Curtin University", code: "CUR"},
            {name: "Department of Education, Tasmania", code: "DET"},
            {name: "Department of Education, Queensland", code: "DEQ"},
        ];

        let cohortList = [
            {name: "None", code: "NON"},
            {name: "BEd early years", code: "BEE"},
            {name: "BEd primary", code: "BEP"},
            {name: "BEd secondary", code: "BEC"},
            {name: "Grad Dip early years", code: "GDE"},
            {name: "Grad Dip primary", code: "GDP"},
            {name: "Grad Dip secondary", code: "GDS"},
            {name: "MTeach early years", code: "MTE"},
            {name: "MTeach primary", code: "MTP"},
            {name: "MTeach secondary", code: "MTS"},
            {name: "Early Career Teacher", code: "ECT"},
            {name: "AcademicRfX", code: "ARX"}
        ];

        let projChoices: ResearchEntry[] = [];
        for (let entry of projectList) {
            projChoices.push(entry);
        }

        let orgChoices: ResearchEntry[] = [];
        for (let entry of organisationList) {
            orgChoices.push(entry);
        }
        let cohortChoices: ResearchEntry[] = [];
        for (let entry of cohortList) {
            cohortChoices.push(entry);
        }

        this.projects = projChoices;
        this.organisations = orgChoices;
        this.cohorts = cohortChoices;


    }

}
