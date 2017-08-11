/**
 * Created by andrew on 3/3/17.
 */

import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {User, UserResponse} from "../data/models";
import {Gok} from './gok.globals';
import {AuthenticationService} from "./authentication.service";
import {ServerInfo} from "../data/models/ServerInfo";


@Injectable()
export class InfoService {

    constructor (private http: Http) {}

    getInfo(): Observable<ServerInfo> {
        //console.debug("Getting info from server");
        return this.http.get(Gok.VERSION_URL)
            .map(this.extractInfo)
            .catch(this._serverError);
    }

    extractInfo(response:Response): ServerInfo  {
        //console.debug("Extracting info from response: "+JSON.stringify(response));
        let info:ServerInfo = response.json();
        //console.debug("Info: "+JSON.stringify(info));
        return info;
    }

    private _serverError = function(err: any) {
        console.error('sever error:', err);  // debug
        alert("There was a problem connected to the server. Could not get info from server.");
        if(err instanceof Response) {
            return Observable.throw(err.json().error || 'backend server error');
        }
        return Observable.throw(err || 'backend server error');
    }

}


