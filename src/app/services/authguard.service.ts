/**
 * Created by andrew on 29/3/17.
 */

import { Injectable }     from '@angular/core';
import {CanActivate, Router}    from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router:Router, private authService:AuthenticationService) {}

    canActivate() {
        //console.log('AuthGuard#canActivate called');
        if(this.authService.authInfo.signedIn) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    }
}