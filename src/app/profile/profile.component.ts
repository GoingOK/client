/**
 * Created by andrew on 6/06/2016.
 */

import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {BehaviorSubject, Observable} from "rxjs";

import {EntryComponent} from './entry/entry.component';
import {ReflectionChartComponent} from './reflectionChart/reflectionChart.component';

import {AppState} from "../store/reducers";
import {ProfileActions, UserActions} from "../store/actions";

import {User,Reflection, ReflectionEntry, Profile,ResearchChoice,ResearchChoices} from "../data/models";
import {AuthenticationService} from "../services/authentication.service";




@Component({
    selector: 'profile',
    providers: [EntryComponent,ReflectionChartComponent], //,DropdownModule],
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})

export class ProfileComponent implements AfterViewInit {

    private user: Observable<User>;
    private profile: Observable<Profile>;

    public DEVELOPER_MODE = false;

    constructor(
        private store: Store<AppState>,
        private userActions: UserActions,
        private profileActions: ProfileActions,
        private authService: AuthenticationService,
        private cdr: ChangeDetectorRef
    ) {
        this.user = store.select('user');
        this.profile = store.select('profile');
    }

    ngInit() {

    }

    ngAfterViewInit() {
        this.getProfile();
    }

    public getProfile() {
        //console.info("Getting profile...")
        this.store.dispatch(this.profileActions.getProfile());
    }

    public getMessages() {
        return this.profile.map( p => p.messages);
        //return new BehaviorSubject([]);
    }

    public getReflections() {
        return this.profile.map( p => p.reflectionEntries);
        //return new BehaviorSubject([]);
    }

    public getResearchChoice() {
        return this.profile.map(p => {
            //console.log("profile: "+JSON.stringify(p));
            let r = p.research;
            //console.log("getResearchChoice(): "+JSON.stringify(r));
            return r;
        });
        // let rc = new ResearchChoice();
        // console.debug("Research Choice default: "+rc.code())
        // return new BehaviorSubject(rc);
    }




    newReflection(ref:Reflection):void {
        //this.currentReflection = ref;
        let entry = new ReflectionEntry();
        entry.reflection = ref;
        //console.log("Notify message: "+JSON.stringify(entry));
        this.store.dispatch(this.profileActions.saveReflection(entry));
    }

    newResearch(rc:ResearchChoice):void {
        //console.log("Notify message: "+JSON.stringify(rc));
        this.store.dispatch(this.profileActions.saveResearch(rc));
    }









    //-------- DEV_MODE FUNCTIONS -----------//

    public toggleDevMode() {
        this.DEVELOPER_MODE = !this.DEVELOPER_MODE;
        console.warn("DEV_MODE: "+this.DEVELOPER_MODE);
    }

    // public loadDummy() {
    //     this.store.dispatch(this.reflectionsActions.loadDummy());
    //     console.log("DEV_MODE: Loaded dummy data into the store");
    // }

    toggleSignIn() {
        this.authService.authInfo.signedIn = !this.authService.authInfo.signedIn;
        console.warn("DEV_MODE: Toggled authInfo.signIn to "+this.authService.authInfo.signedIn);
    }
    toggleAuthorised() {
        this.authService.authInfo.authorised = !this.authService.authInfo.authorised;
        console.warn("DEV_MODE: Toggled authInfo.authorised to "+this.authService.authInfo.authorised);
    }

    public getAuthInfoAsString():string {
        console.warn("DEV_MODE: authInfo ...");
        return JSON.stringify(this.authService.authInfo);
    }

    public getCurrentEntryAsString():Observable<string> {
        console.warn("DEV_MODE: current entry ...");
        //return this.reflections.map( refs => JSON.stringify(refs.currentEntry));
        //TODO Get Current Entry from profile
        return new BehaviorSubject("nothing here yet")
    }

    public getResearchChoiceAsString():string {
        console.warn("DEV_MODE: selectedResearch ...");
        return "nothing yet";  //JSON.stringify(this.researchChoice);
    }

    public getUserAsString():Observable<string> {
        console.warn("DEV_MODE: this.user ...");
        return this.user.map( usr => JSON.stringify(usr));

    }

    public getReflectionsAsString():Observable<string> {
        console.warn("DEV_MODE: this.reflections ...");
        //return this.reflections.map( refs => JSON.stringify(refs.reflectionEntries));
        //return this.profile.map( prof => JSON.stringify(prof.reflectionEntries));
        return new BehaviorSubject("nothing here yet");
    }

    public getProfileAsString():Observable<string> {
        console.warn("DEV_MODE: this.profile ...");
        return this.profile.map( prof => { return JSON.stringify(prof) });
    }







}
