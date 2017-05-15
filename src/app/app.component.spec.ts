/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {ROUTING_TEST} from "./app.routes";
import {AppModule} from "./app.module";

describe('App: GoingOK Client', () => {
  beforeEach(() => {
    //TestBed.configureTestingModule({imports: [AppModule]});
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
          AppModule,
          ROUTING_TEST
      ]
    })
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'GoingOK'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('GoingOK');
  }));

});
