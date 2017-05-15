import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevComponent } from './dev.component';
import {STORE} from "../store/reducers/index";
import {STORE_ACTIONS} from "../store/actions/index";
import {AuthenticationService} from "../services/authentication.service";
import {ROUTING_TEST, ROUTING_TEST_COMPONENTS} from "../app.routes";
import {ProfileComponent} from "../profile/profile.component";
import {T2tComponent} from "../about/t2t/t2t.component";
import {AboutComponent} from "../about/about.component";
import {AppModule} from "../app.module";

describe('DevComponent', () => {
  let component: DevComponent;
  let fixture: ComponentFixture<DevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //declarations: [ DevComponent, ROUTING_TEST_COMPONENTS ],
      imports: [
          AppModule//STORE, ROUTING_TEST
      ],
      providers: [
        STORE_ACTIONS, AuthenticationService
      ]
    })
    //.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
