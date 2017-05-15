/**
 * Created by andrew on 1/4/17.
 */


import {AuthGuard} from "./authguard.service";
import {ProfileService} from "./profile.service";
import {UserService} from "./user.service";
import {AuthenticationService} from "./authentication.service";

export {
    AuthenticationService,
    AuthGuard,
    UserService,
    ProfileService
}

export default [
    AuthenticationService,
    AuthGuard,
    UserService,
    ProfileService
]