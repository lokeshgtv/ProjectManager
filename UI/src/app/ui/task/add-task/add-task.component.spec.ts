import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from "@angular/core/testing";

import { Router } from "@angular/router";
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

import { AddTaskComponent } from './add-task.component';
import { ProjectManagementServiceBus } from "src/app/service/ProjectManagementServiceBus";
import { AppModuleUnitTestFixture } from "src/app/app.module.unittest.fixture";

describe('AddTaskComponent', () => {

  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  let routerMock: any;
  //let location: Location;
  let routerSpy: Router;
  let service: ProjectManagementAbstractService;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({      
      imports: [
        AppModuleUnitTestFixture,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(RoteConfiguration),
        DatepickerModule,
        BsDatepickerModule,
        ModalModule
      ],
      providers: [{ provide: Router, useValue: routerMock },
        { provide: ProjectManagementAbstractService, useClass: ProjectManagementServiceMock },
        { provide: ProjectManagementServiceBus },        
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    routerMock = { navigate: jasmine.createSpy("navigate") };
    routerSpy = TestBed.get(Router);    
    service = TestBed.get(ProjectManagementAbstractService);
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
     fixture.detectChanges();     
  });
});
