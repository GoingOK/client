/**
 * Created by andrew on 3/3/17.
 */

import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ReflectionEntry, Profile, ResearchChoice} from "../data/models";
import {Gok} from './gok.globals';
import {AuthenticationService} from "./authentication.service";
import {timeout} from "rxjs/operator/timeout";
import {AppState} from "../store/reducers/index";
import {Store} from "@ngrx/store";
import {User} from "../data/models/User";


@Injectable()
export class ProfileService {

    private uStore: Observable<User>;

    constructor (
        private store: Store<AppState>,
        private http: Http,
        private authService: AuthenticationService) {

        this.uStore = store.select('user');
    }

    saveReflection(entry:ReflectionEntry,token:string) {
        //create an entry package
        console.log("Saving reflection to server");
        //let entryPkg = { token:"", entry:null };
        //entryPkg.token = token;
        //entryPkg.entry = entry;
        let session: string = "";
        this.uStore.take(1).subscribe(us => session = us.session);
        let options = new RequestOptions({ headers: this.authWithSession(session) });
        return this.http.post(Gok.REFLECTION_ENTRY_URL,entry,options)
            .map(res => res.json())
            .catch(this._serverError);
    }

    saveResearch(research:ResearchChoice,token:string) {
        //let entryPkg = { token:"", entry:null };
        //entryPkg.token = token;
        //entryPkg.entry = research;
        console.debug("Saving research: ",research)
        let session: string = "";
        this.uStore.take(1).subscribe(us => session = us.session);
        let options = new RequestOptions({ headers: this.authWithSession(session) });
        return this.http.post(Gok.RESEARCH_ENTRY_URL,research,options)
            .map(res => res.json())
            .catch(this._serverError);
    }

    getProfile(): Observable<Profile> {
        console.debug("Getting reflections from server");
        //timeout(console.debug("Checking console"),300)
        let session: string = "";

        this.uStore.take(1).subscribe(us => session = us.session);
        //console.log("uStore.session: "+session)
        //console.log("authInfo.session: "+this.authService.authInfo.session);
        let options = new RequestOptions({ headers: this.authWithSession(session) });
        let response =  this.http.get(Gok.PROFILE_URL,options) //.catch(this._serverError);

        //console.debug("Got observable, map response to profile")
        let profileObs = response.map(this.extractProfile)
        console.debug("Got profile, return to browser")
        return profileObs
    }

    extractProfile(response:Response): Profile  {
        //console.debug("Extracting profile from response: "+JSON.stringify(response));
        let prof:Profile = response.json();
        //console.debug("Profile: "+JSON.stringify(prof));
        return prof;
    }

    private authWithSession(session:string) {
        let headers = new Headers();
        let authtoken = "Bearer "+session;
        headers.append("Authorization", authtoken);
        console.debug("HEADERS: ",headers);
        return headers;
    }

    private _serverError(err: any) {
        console.error('sever error:', err);  // debug
        alert("There was a problem connecting to the server. Your reflections may not save. Reload GoingOK and try again before writing a reflection.");
        if(err instanceof Response) {
            return Observable.throw(err.json().error || 'backend server error');
            // if you're using lite-server, use the following line
            // instead of the line above:
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(err || 'backend server error');
    }

}


