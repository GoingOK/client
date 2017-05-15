/**
 * Created by andrew on 6/06/2016.
 */

import {AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

declare var gapi: any;

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent {


    //private authInfo;


    connectionIssues(): boolean {
        return !navigator.onLine //Detects browser not online
    }

    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) {}

    ngAfterViewInit() {
        gapi.load('auth2', this.authService.googleInit);
    }

    signIn() {
        this.authService.googleSignIn();
        //alert("completed: "+this.isSignedIn());
    }

    isSignedIn() {
        return this.authService.authInfo.signedIn;
    }

    public isNotProfilePage() {
        //console.log("location: "+this.router.url);
        return !(this.router.url =='/profile') && this.isSignedIn();
    }

    public isNotAboutPage() {
        //console.log("location: "+this.router.url);
        return !(this.router.url =='/about');
    }

    public isNotHelpPage() {
        //console.log("location: "+this.router.url);
        return !(this.router.url =='/help');
    }

    public signOut() {
        this.authService.signOut();
        this.router.navigate(['']);
    }

}
