import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store/reducers/";
import {Observable,BehaviorSubject} from "rxjs";
import {User,Profile} from "../data/models/";
import {UserActions,ProfileActions} from "../store/actions/";
import {AuthenticationService} from "../services/";


@Component({
  selector: 'dev-info',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  public DEVELOPER_MODE = false;

  private user: Observable<User>;
  private profile: Observable<Profile>;

  constructor(
      private store: Store<AppState>,
      //private userActions: UserActions,
      //private profileActions: ProfileActions,
      private authService: AuthenticationService,
      //private cdr: ChangeDetectorRef
  ) {
    this.user = store.select('user');
    this.profile = store.select('profile');
  }

  ngOnInit() {
  }



  //-------- DEV_MODE FUNCTIONS -----------//

  public toggleDevMode() {
    this.DEVELOPER_MODE = !this.DEVELOPER_MODE;
    console.warn("DEV_MODE: "+this.DEVELOPER_MODE);
  }

  // public loadDummy() {
  //     this.store.dispatch(this.reflectionsActions.loadDummy());
  //     console.log("DEV_MODE: Loaded dummy data into the store");
  // }

  toggleSignIn() {
    this.authService.authInfo.signedIn = !this.authService.authInfo.signedIn;
    console.warn("DEV_MODE: Toggled authInfo.signIn to "+this.authService.authInfo.signedIn);
  }
  toggleAuthorised() {
    this.authService.authInfo.authorised = !this.authService.authInfo.authorised;
    console.warn("DEV_MODE: Toggled authInfo.authorised to "+this.authService.authInfo.authorised);
  }

  public getAuthInfoAsString():string {
    console.warn("DEV_MODE: authInfo ...");
    return JSON.stringify(this.authService.authInfo);
  }

  public getCurrentEntryAsString():Observable<string> {
    console.warn("DEV_MODE: current entry ...");
    //return this.reflections.map( refs => JSON.stringify(refs.currentEntry));
    //TODO Get Current Entry from profile
    return new BehaviorSubject("nothing here yet")
  }

  public getResearchChoiceAsString():string {
    console.warn("DEV_MODE: selectedResearch ...");
    return "nothing yet";  //JSON.stringify(this.researchChoice);
  }

  public getUserAsString():Observable<string> {
    console.warn("DEV_MODE: this.user ...");
    return this.user.map( usr => JSON.stringify(usr));

  }

  public getReflectionsAsString():Observable<string> {
    console.warn("DEV_MODE: this.reflections ...");
    //return this.reflections.map( refs => JSON.stringify(refs.reflectionEntries));
    //return this.profile.map( prof => JSON.stringify(prof.reflectionEntries));
    return new BehaviorSubject("nothing here yet");
  }

  public getProfileAsString():Observable<string> {
    console.warn("DEV_MODE: this.profile ...");
    return this.profile.map( prof => { return JSON.stringify(prof) });
  }


}
