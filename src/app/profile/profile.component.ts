/**
 * Created by andrew on 6/06/2016.
 */

import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {EntryComponent} from './entry/entry.component';
import {ReflectionChartComponent} from './reflectionChart/reflectionChart.component';

import {AppState} from "../store/reducers";

import {User,Reflection, ReflectionEntry, Profile,ResearchChoice,ResearchChoices} from "../data/models";
import {AuthenticationService} from "../services/authentication.service";
import {GetProfile, SaveReflection, SaveResearch} from "../store/actions/profile.actions";




@Component({
    selector: 'profile',
    providers: [EntryComponent,ReflectionChartComponent], //,DropdownModule],
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})

export class ProfileComponent implements AfterViewInit {

    private user: Observable<User>;
    private profile: Observable<Profile>;

    constructor(
        private store: Store<AppState>,
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
        this.store.dispatch(new GetProfile());
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
        this.store.dispatch(new SaveReflection(entry));
    }

    newResearch(rc:ResearchChoice):void {
        //console.log("Notify message: "+JSON.stringify(rc));
        this.store.dispatch(new SaveResearch(rc));
    }
















}
