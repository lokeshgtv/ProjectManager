import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import  { DatepickerModule,BsDatepickerModule,ModalModule} from 'ngx-bootstrap'

import { ProjectManagementAbstractService } from './service/ProjectManagementAbstractService';
import { ProjectManagementService } from './service/ProjectManagementService';
import { AppModule } from 'src/app/app.module';
import { AppRoutingModule } from 'src/app/route/AppRoutingModule';
import { ProjectManagementServiceFake } from 'src/app/service/ProjectManagementServiceFake';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AppModule
  ],
  providers: [{provide: ProjectManagementAbstractService,useClass:ProjectManagementServiceFake}],
})
export class AppModuleUnitTestFixture { }
