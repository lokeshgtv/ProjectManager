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
import { ViewUserComponent } from "src/app/ui/user/view-user/view-user.component";
import { ProjectManagementServiceFake } from "../../../service/ProjectManagementServiceFake";
import { AppModuleUnitTestFixture } from "src/app/app.module.unittest.fixture";


describe('ViewUserComponent', () => {
  let location: Location;
  let routerSpy: Router;
  let service: ProjectManagementAbstractService;
  let component: ViewUserComponent;
  let fixture: ComponentFixture<ViewUserComponent>;

  beforeEach(async(() => {

    TestBed.overrideComponent(
      ViewUserComponent,
      {set: {providers: [{provide: ProjectManagementAbstractService, useClass: ProjectManagementServiceFake}]}}
  );

    TestBed.configureTestingModule({
      providers: [{ provide: ProjectManagementAbstractService, useClass: ProjectManagementServiceFake }],
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
    service = TestBed.get(ProjectManagementAbstractService);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(ViewUserComponent);
    component = fixture.componentInstance;     
     component.ngOnInit();
  });

  it('When view user Component Created Injector Injects all required Inputs should create', () => {
    expect(component).toBeTruthy();
  });

});
