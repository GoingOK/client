//System level imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Routing and services
import { ROUTING } from './app.routes';
import {AuthenticationService,AuthGuard,UserService,ProfileService} from './services';
//ngrx
import {STORE} from "./store/reducers/";
import {STORE_ACTIONS} from "./store/actions/";
import {STORE_EFFECTS} from "./store/effects/";
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from "./home/home.component";
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { T2tComponent } from "./about/t2t/t2t.component";
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './profile/messages/messages.component';
import { EntryComponent } from './profile/entry/entry.component';
import { SliderComponent } from './profile/entry/slider/slider.component';
import { ReflectionChartComponent } from './profile/reflectionChart/reflectionChart.component';
import { ReflectionsComponent } from './profile/reflections/reflections.component';
import {ResearchComponent} from "./profile/research/research.component";
import {PageNotFoundComponent} from "./error/pageNotFound/pageNotFound.component";
//Bootstrap and UI
import { BsDropdownModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
//DevTools
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, HomeComponent, HelpComponent, AboutComponent, T2tComponent,
    ProfileComponent,MessagesComponent,ReflectionChartComponent, EntryComponent, SliderComponent, ReflectionsComponent,ResearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    ROUTING,
    BrowserModule, FormsModule, HttpModule,
    STORE, STORE_EFFECTS,
    BsDropdownModule.forRoot(), PopoverModule.forRoot()
    // StoreDevtoolsModule.instrumentOnlyWithExtension({
    //   maxAge: 5
    // }),
  ],
  providers: [
      AuthenticationService, AuthGuard, UserService,ProfileService,
      STORE_ACTIONS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
