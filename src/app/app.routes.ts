
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {HelpComponent} from "./help/help.component";
import { AboutComponent } from './about/about.component';
import { T2tComponent } from './about/t2t/t2t.component';

import { ProfileComponent } from './profile/profile.component';
//import {AppComponent} from "./app.component";

import {PageNotFoundComponent} from "./error/pageNotFound/pageNotFound.component";
import {AuthGuard} from "./services";
//import {LoginComponent} from "./login/login.component";
//

const routes: Routes = [
    //
    //
    { path: 'profile',component: ProfileComponent, canActivate: [AuthGuard] },
    // { path: 'login', component: LoginComponent },
    { path: 'about/t2t', component: T2tComponent },
    { path: 'about', component: AboutComponent},
    { path: 'help', component: HelpComponent },
    { path: '', component: HomeComponent },
    { path: 'errors/404', component: PageNotFoundComponent },
    { path: '**', component: PageNotFoundComponent }
];

// - Updated Export
export const ROUTING = RouterModule.forRoot(routes);
