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

import { AddUserComponent } from './add-user.component';
import { ProjectManagementServiceFake } from "../../../service/ProjectManagementServiceFake";
import { ProjectManagementServiceBus } from "../../../service/ProjectManagementServiceBus";
import { AppModuleUnitTestFixture } from "src/app/app.module.unittest.fixture";

describe('AddUserComponent', () => {
  let routerMock: any;
  let location: Location;
  let routerSpy: Router;
  let service: ProjectManagementAbstractService;
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ProjectManagementAbstractService, useClass: ProjectManagementServiceFake }
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
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;    
    component.ngOnInit();
  });

  it('When User Editor Component Created Injector Injects all required Inputs should create', () => {
    expect(component).toBeTruthy();
  });

  it("When FirstName given then FirstName validator should be pass", () => {
    expect(component).toBeTruthy();
    component.model.FirstName = ProjectManagementServiceMock.User1.FirstName;
    component.UpdateValuesFromModelToFormsControls();
    expect(component.fName.valid).toBe(true);
    expect(component.userForm.valid).toBe(false);
  });

  it("When LastName given then LastName validator should pass", () => {
    expect(component).toBeTruthy();
    component.model.LastName = ProjectManagementServiceMock.User1.LastName;
    component.UpdateValuesFromModelToFormsControls();
    expect(component.lName.valid).toBe(true);
    expect(component.userForm.valid).toBe(false);
  });

  it("When EmployeeId  given then EmployeeId validator should pass", () => {
    expect(component).toBeTruthy();
    component.model.EmployeeId = ProjectManagementServiceMock.User1.EmployeeId;
    component.UpdateValuesFromModelToFormsControls();
    expect(component.EmployeeId.valid).toBe(true);
    expect(component.userForm.valid).toBe(false);
  });

  it("When All Value given then validator should pass", () => {
    expect(component).toBeTruthy();
    component.model.FirstName = ProjectManagementServiceMock.User1.FirstName;
    component.model.LastName = ProjectManagementServiceMock.User1.LastName;
    component.model.EmployeeId = ProjectManagementServiceMock.User1.EmployeeId;
    component.UpdateValuesFromModelToFormsControls();
    expect(component.userForm.valid).toBe(true);
  });

});
