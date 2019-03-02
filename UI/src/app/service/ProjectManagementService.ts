import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from 'url';
import { HttpParams } from '@angular/common/http';
import {environment} from 'src/environments/environment';

import { TaskModel } from '../model/Task';
import { ProjectModel } from '../model/Project';
import { UserModel } from '../model/User';
import { ProjectManagementAbstractService } from './ProjectManagementAbstractService';

@Injectable()
export class ProjectManagementService extends ProjectManagementAbstractService {
    GetAllParentTasksForProject(project: ProjectModel): Observable<TaskModel[]> {
        let header = new HttpHeaders();
        let params=new HttpParams();
        header.append('Contetnt-Type','application/json');

        params=params.set("ProjectId", project.ProjectId.toString());  
        params=params.set("Project",project.Project);
    
        let requestOptions={headers:header,params:params};
        return this.httpService.get<TaskModel[]>(environment.ApiService+"/Task/GetParentTasksForProject",requestOptions);
    }
    GetTaskById(id: number): Observable<TaskModel> {
        return this.httpService.get<TaskModel>( environment.ApiService+"/Task/GetTaskById/"+id);
    }
    GetTasks(): Observable<TaskModel[]> {
        return this.httpService.get<TaskModel[]>( environment.ApiService+"/Task/GetTasks");
    }
    GetParentTasks(): Observable<TaskModel[]> {
        return this.httpService.get<TaskModel[]>( environment.ApiService+"/Task/GetParentTasks");
    }

     GetAllTaskForProject(project: ProjectModel): Observable<TaskModel[]>
     {
        let header = new HttpHeaders();
        let params=new HttpParams();
        header.append('Contetnt-Type','application/json');

        params=params.set("ProjectId", project.ProjectId.toString());  
        params=params.set("Project",project.Project);
    
        //let body=new HttpBody();
    
        let requestOptions={headers:header,params:params};
        return this.httpService.get<TaskModel[]>(environment.ApiService+"/Task/GetAllTaskForProject",requestOptions);
     }

    AddTask(task: TaskModel) {
        return this.httpService.post(environment.ApiService+"/Task/AddTask", task);
    }
    UpdateTask(task: TaskModel): Observable<any> {
        return this.httpService.post(environment.ApiService+"/Task/UpdateTask", task);
    }
    DeleteTask(task: TaskModel): Observable<any> {
        return this.httpService.delete(environment.ApiService+"/Task/DeleteTask/"+task.TaskId);
    }

    constructor(private httpService: HttpClient) { 
        super();
      }

    GetUserDetails(): Observable<UserModel[]> {
        return this.httpService.get<UserModel[]>( environment.ApiService+"/User/GetUsers");
    }
    AddUserDetail(user: UserModel) {
        return this.httpService.post(environment.ApiService+"/User/AddUser", user);
    }
    UpdateUserDetail(user: UserModel): Observable<any> {
        return this.httpService.post(environment.ApiService+"/User/UpdateUser", user);
    }
    DeleteUser(user: UserModel): Observable<any> {
        return this.httpService.delete(environment.ApiService+"/User/DeleteUser/"+user.UserId);
    }

    GetProjects(): Observable<ProjectModel[]> {
        return this.httpService.get<ProjectModel[]>( environment.ApiService+"/Project/GetProjects");
    }

    AddProject(project: ProjectModel) {
        return this.httpService.post(environment.ApiService+"/Project/AddProject", project);
    }
    UpdateProject(project: ProjectModel): Observable<any> {
        return this.httpService.post(environment.ApiService+"/Project/UpdateProject", project);
    }

  }
  