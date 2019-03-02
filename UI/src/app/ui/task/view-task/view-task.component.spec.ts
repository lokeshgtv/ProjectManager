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
import { ViewTaskComponent } from './view-task.component';
import { ProjectManagementServiceBus } from "src/app/service/ProjectManagementServiceBus";
import { AppModuleUnitTestFixture } from "src/app/app.module.unittest.fixture";

describe('ViewTaskComponent', () => {
  let location: Location;
  let routerSpy: Router;
  let service: ProjectManagementAbstractService;
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ProjectManagementAbstractService, useClass: ProjectManagementServiceMock },
        { provide: ProjectManagementServiceBus },
        {provide:APP_BASE_HREF, useValue:'/'}
      ],      
      imports: [
        AppModuleUnitTestFixture,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(RoteConfiguration),
        DatepickerModule,
        BsDatepickerModule,
        ModalModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    service = TestBed.get(ProjectManagementAbstractService);
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
     component.ngOnInit();
  });
});
