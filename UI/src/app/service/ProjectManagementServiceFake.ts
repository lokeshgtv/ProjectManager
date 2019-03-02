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
import { ProjectManagementServiceMock } from './ProjectManagementServiceMock';



@Injectable()
export class ProjectManagementServiceFake extends ProjectManagementAbstractService {
    GetAllParentTasksForProject(project: ProjectModel): Observable<TaskModel[]> {
        throw new Error("Method not implemented.");
    }
    GetUserDetails(): Observable<UserModel[]> {
        return of(ProjectManagementServiceMock.Users);
    }
    AddUserDetail(user: UserModel) {
        throw new Error("Method not implemented.");
    }
    UpdateUserDetail(user: UserModel): Observable<any> {
        throw new Error("Method not implemented.");
    }
    DeleteUser(user: UserModel): Observable<any> {
        throw new Error("Method not implemented.");
    }
    GetProjects(): Observable<ProjectModel[]> {
            return of(ProjectManagementServiceMock.Projects);
    }
    
    AddProject(project: ProjectModel) {
        throw new Error("Method not implemented.");
    }
    UpdateProject(project: ProjectModel): Observable<any> {
        throw new Error("Method not implemented.");
    }
    GetTasks(): Observable<TaskModel[]> {
        return of(ProjectManagementServiceMock.Tasks);
    }
    GetTaskById(id: number): Observable<TaskModel> {
        throw new Error("Method not implemented.");
    }
    GetParentTasks(): Observable<TaskModel[]> {
        throw new Error("Method not implemented.");
    }
    GetAllTaskForProject(project: ProjectModel): Observable<TaskModel[]> {
        throw new Error("Method not implemented.");
    }
    AddTask(task: TaskModel) {
        throw new Error("Method not implemented.");
    }
    UpdateTask(task: TaskModel): Observable<any> {
        throw new Error("Method not implemented.");
    }
    DeleteTask(task: TaskModel): Observable<any> {
        throw new Error("Method not implemented.");
    }
}