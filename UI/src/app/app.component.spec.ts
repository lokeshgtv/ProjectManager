import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from "@angular/core/testing";

import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { RoteConfiguration } from "src/app/route/AppRoutingModule";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { tick } from "@angular/core/testing";
import { ProjectManagementAbstractService } from "src/app/Service/ProjectManagementAbstractService";
import { ProjectManagementServiceMock } from "src/app/Service/ProjectManagementServiceMock";
//import { TaskrowComponent } from "src/app/taskrow/taskrow.component";
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

import { AppComponent } from "./app.component";
import { UserDashboardComponent } from "src/app/ui/user/user-dashboard/user-dashboard.component";
import { ViewUserComponent } from "src/app/ui/user/view-user/view-user.component";
import { AddUserComponent } from "src/app/ui/user/add-user/add-user.component";
import { SortPipe } from "src/app/pipes/SortPipe";
import { FilterPipe } from "src/app/pipes/FilterPipe";
import { ProjectDashboardComponent } from "src/app/ui/project/project-dashboard/project-dashboard.component";
import { AddProjectComponent } from "src/app/ui/project/add-project/add-project.component";
import { ViewProjectComponent } from "src/app/ui/project/view-project/view-project.component";
import { ArrayLengthPipe } from "src/app/pipes/ArrayLengthPipe";
import { ViewTaskComponent } from "src/app/ui/task/view-task/view-task.component";
import { AddTaskComponent } from "src/app/ui/task/add-task/add-task.component";
import { SearchModuleComponent } from "src/app/ui/search/search-module/search-module.component";
import { AppModuleUnitTestFixture } from "src/app/app.module.unittest.fixture";
import { ProjectManagementServiceFake } from "src/app/service/ProjectManagementServiceFake";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ProjectManagementAbstractService, useClass: ProjectManagementServiceFake }],
      declarations: [
        AppComponent,
        UserDashboardComponent,
        ViewUserComponent,
        AddUserComponent,
        SortPipe,
        FilterPipe,
        ProjectDashboardComponent,
        AddProjectComponent,
        ViewProjectComponent,        
        ArrayLengthPipe,
        ViewTaskComponent,
        AddTaskComponent,
        SearchModuleComponent
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        DatepickerModule,
        BsDatepickerModule,
        ModalModule
      ]
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Project Management Application'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Project Management Application");
  })); 
});
