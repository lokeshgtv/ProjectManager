import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from "@angular/core/testing";

import { Router } from "@angular/router";
import { Location, APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { RoteConfiguration } from "src/app/route/AppRoutingModule";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { tick } from "@angular/core/testing";
import { ProjectManagementAbstractService } from "src/app/Service/ProjectManagementAbstractService";
import { ProjectManagementServiceMock } from "src/app/Service/ProjectManagementServiceMock";
import { AppModule } from "src/app/app.module";
import { inject } from "@angular/core/testing";
import { expand } from "rxjs/internal/operators/expand";
import { fail } from "assert";
import {
  DatepickerModule,
  BsDatepickerModule,
  ModalModule
} from "ngx-bootstrap";
import { priorityMin, priorityMax } from "src/app/Const/const";

import { UserDashboardComponent } from './user-dashboard.component';
import { ProjectManagementServiceBus } from "src/app/service/ProjectManagementServiceBus";
import { AppModuleUnitTestFixture } from "src/app/app.module.unittest.fixture";
import { ProjectManagementServiceFake } from "src/app/service/ProjectManagementServiceFake";

describe('UserDashboardComponent', () => {
  let routerMock: any;
  let location: Location;
  let routerSpy: Router;
  let service: ProjectManagementAbstractService;
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ProjectManagementAbstractService, useClass: ProjectManagementServiceFake },{provide:ProjectManagementServiceBus},{provide:APP_BASE_HREF, useValue:'/'}
       ],      
      imports: [
        AppModuleUnitTestFixture,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,       
        BsDatepickerModule,        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    location = TestBed.get(Location);    
    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;     
     component.ngOnInit();
  });


  it('When User Dashboard  Component Created Injector Injects all required Inputs should create', () => {
    expect(component).toBeTruthy();
  });

});