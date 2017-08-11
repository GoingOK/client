/**
 * Created by andrew on 3/3/17.
 */

import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {UserResponse} from "../data/models";
import {Gok} from './gok.globals';
import {AuthenticationService} from "./authentication.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    constructor (private http: Http, private authService:AuthenticationService) {}

    authUser(token): Observable<UserResponse> {
        //console.log("Authorising user with token: "+token);
        let headers = new Headers();
        headers.append('Content-Type', 'text/plain');
        let options = new RequestOptions({ headers: headers });
        let response =  this.http.post(Gok.AUTH_URL,token,options);
        return response.map(this.sessionAndUser).catch(this._serverError);
    }

    sessionAndUser = (response:Response): UserResponse => {
        //console.log("Extracting session and user data from response");
        console.warn("SERVER RESPONSE: ",response);
        let headers = response.headers;
        console.warn("Headers: ",headers);
        let ur:UserResponse = response.json();
        console.log("RESPONSE: "+JSON.stringify(ur));
        if (headers.has(Gok.SET_AUTH_HEADER)) {
            let session = headers.get(Gok.SET_AUTH_HEADER);
            //console.info("Session is: " + session);
            this.authService.authInfo.session = session;
            ur.session = session;
         } else {
            console.warn("No Session provided");
        }
        return ur;
    };

    private _serverError = function(err: any) {
        console.error('sever error:', err);  // debug
        alert("There was a problem connected to the server. Your reflections may not save. Reload GoingOK and try again before writing a reflection.");
        if(err instanceof Response) {
            return Observable.throw(err.json().error || 'backend server error');
            // if you're using lite-server, use the following line
            // instead of the line above:
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(err || 'backend server error');
    }

}


