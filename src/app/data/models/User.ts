/**
 * Created by andrew on 29/3/17.
 */

export class User {

    id: string;
    isSignedIn: boolean;
    isAuthorised: boolean;
    google_token: string;
    session: string;

    constructor() {
        this.id = "";
        this.isSignedIn = false;
        this.isAuthorised = false;
        this.google_token = "";
        this.session = "";
    }
}

export class UserResponse {
    id: string;
    session: string;
}

class GokId {
    id: string;
}