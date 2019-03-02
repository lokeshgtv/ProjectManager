import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import  { DatepickerModule,BsDatepickerModule,ModalModule} from 'ngx-bootstrap'

import { AppComponent } from './app.component';

import { ProjectManagementAbstractService } from './service/ProjectManagementAbstractService';
import { ProjectManagementService } from './service/ProjectManagementService';
import { UserDashboardComponent } from './ui//user/user-dashboard/user-dashboard.component';
import { ViewUserComponent } from './ui/user/view-user/view-user.component';
import { AddUserComponent } from './ui/user/add-user/add-user.component'
import { AppRoutingModule } from 'src/app/route/AppRoutingModule';
import { SortPipe } from './pipes/SortPipe';
import { FilterPipe } from './pipes/FilterPipe';
import { ProjectDashboardComponent } from './ui/project/project-dashboard/project-dashboard.component';
import { AddProjectComponent } from './ui/project/add-project/add-project.component';
import { ViewProjectComponent } from './ui/project/view-project/view-project.component';
//import { SearchManagerComponent } from './ui/project/search-manager/search-manager.component';
import { ArrayLengthPipe } from './pipes/ArrayLengthPipe';
import { ViewTaskComponent } from './ui/task/view-task/view-task.component';
import { AddTaskComponent } from './ui/task/add-task/add-task.component';
import { SearchModuleComponent } from './ui/search/search-module/search-module.component';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
// import { stompConfig } from 'src/app/message/message.service.config';
// import { MessageService } from 'src/app/message/message.service';


@NgModule({
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
    //SearchManagerComponent,
    ArrayLengthPipe,
    ViewTaskComponent,
    AddTaskComponent,
    SearchModuleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    {provide: ProjectManagementAbstractService,useClass:ProjectManagementService},
    
],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
