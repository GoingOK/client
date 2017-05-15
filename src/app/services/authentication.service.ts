/**
 * Created by andrew on 31/3/17.
 */

import {ApplicationRef, ChangeDetectorRef, Injectable, NgZone} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../store/reducers";
import {GoogleProfile,User} from "../data/models";
import {GoogleProfileActions,UserActions} from "../store/actions";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {main} from "@angular/compiler-cli/src/main";
import {Profile} from "../data/models/Profile";

declare var gapi: any;

@Injectable()
export class AuthenticationService {

    private gStore: Observable<GoogleProfile> ;
    private uStore: Observable<User>;
    private pStore: Observable<Profile>;

    public authInfo = {
        signedIn: false,
        authorised: false,
        session: "",
        gToken: "",
        gClientId: "1049767681335-rvm76el8aspacomur42uch1v0amgca5s.apps.googleusercontent.com"
    };

    constructor(
        private store: Store<AppState>,
        private gpActions: GoogleProfileActions,
        private uActions:UserActions,
        private router: Router,
        private _ngZone: NgZone
    ) {
        this.gStore = store.select('googleProfile');
        this.uStore = store.select('user');
        this.pStore = store.select('profile');
    }


    private INIT_PARAMS = { client_id: this.authInfo.gClientId };//'1049767681335-rvm76el8aspacomur42uch1v0amgca5s.apps.googleusercontent.com' };
    private SIGNIN_PARAMS = { scope: 'profile email', prompt: 'select_account' };

    private googleAuth;


    public googleInit = () => { //TODO Binding problem here for 'this' - but need to get rid of arrow for AOT compilation
        console.info("Initialising Google API");
        gapi.auth2.init(this.INIT_PARAMS).then(this.setGoogleAuth,this.googleInitError);
    }

    public googleInitError = function(err) { console.error("There was an error initialising Google Signin: "+JSON.stringify(err)); }

    public setGoogleAuth = () => {
        //console.info("Google sign-in successfully initialised");
        this.googleAuth = gapi.auth2.getAuthInstance();
    }


    public googleSignIn = () => {
        //console.info("Attempting user sign-in with Google")
        this.googleAuth
            .signIn(this.SIGNIN_PARAMS)
            .then(this.googleSignInSuccess,this.googleSignInError);
    }

    public googleSignInError = function(err) { console.error("There was a problem signing in the user",err); }

    public googleSignInSuccess = () => {
        let googleAuth = gapi.auth2.getAuthInstance();
        let googleUser = googleAuth.currentUser.get();
        let googleProfile = googleUser.getBasicProfile();
        //console.info("Successfully signed in user:",googleUser.getId());
        //this.logProfileToConsole(googleProfile);
        this.authInfo.gToken = googleUser.getAuthResponse().id_token;
        //console.info("gToken: "+this.authInfo.gToken)
        this.updateGoogleProfile(googleProfile)
        this.authInfo.signedIn = true;
        if (!this.authInfo.authorised || (this.authInfo.session == "")) {
           //console.info("User not authorised or session not set. Authorising with server...")
           this.goingOkAuthorisation()
        }
    }

    public goingOkAuthorisation = () => {
        //console.log("<<<< GOINGOK AUTH >>>>");
        this.store.dispatch(this.uActions.authUser(this.authInfo.gToken));
        this.authInfo.authorised = true;
        //console.debug("Authorised: ",this.authInfo.authorised)
        this.pStore.subscribe(this.changeToProfilePage);

    }

    private changeToProfilePage = () => {
        setTimeout(this.goToProfile, 300);
    }

    private goToProfile = () => {
        //console.info("Navigating to profile page...");
        this._ngZone.run(() => {
            this.router.navigate(["/profile"]);
        });
    }


    public signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut();
        this.authInfo.signedIn = false;
        if(this.authInfo.authorised || !(this.authInfo.session=="")) {
            this.authInfo.session = "";
            this.authInfo.authorised = false;
        }
    }



    updateGoogleProfile(profile) {
        //console.log("... updating Google Profile in store ...");
        let gp = new GoogleProfile();
        gp.id = profile.getId();
        gp.name = profile.getName();
        gp.email = profile.getEmail();
        gp.image_url = profile.getImageUrl();
        this.store.dispatch(this.gpActions.saveProfile(gp));
    }



    logProfileToConsole(profile) {
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
    }

}