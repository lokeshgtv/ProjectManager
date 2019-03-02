import { Injectable } from '@angular/core';
import { ProjectModel } from 'src/app/model/Project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { TaskModel  } from 'src/app/model/Task';
import { of } from 'rxjs';
import { UserModel } from 'src/app/model/User';
import { HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from 'url';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { ProjectManagementAbstractService } from '../service/ProjectManagementAbstractService';


export class ProjectManagementServiceMock {

    public static User1: UserModel={
        UserId : 1,
        FirstName : "FName1",
        LastName : "LName1",
        EmployeeId : 1,
        //Task:null
    };

    public static User2: UserModel={
        UserId : 2,
        FirstName : "FName2",
        LastName : "LName2",
        EmployeeId : 2,
        //Task:null
    };

    public static Users: UserModel[] = [
        ProjectManagementServiceMock.User1, ProjectManagementServiceMock.User2
    ];
    
    private static Project1: ProjectModel={
        ProjectId : 1,
        Project : "Project1",
        StartDate : new Date(2018, 9, 1),
        EndDate : new Date(2018,9,30),
        IsActive : true,
        Priority : 10,
        ProjectManager : ProjectManagementServiceMock.User1,
        ProjectManagerId : ProjectManagementServiceMock.User1.UserId,
        Tasks:null,
        NoOfCompletedTasks:0
    };

    private static Project2: ProjectModel={
        ProjectId : 2,
        Project : "Project2",
        StartDate : new Date(2018, 10, 1),
        EndDate : new Date(2018, 10, 31),
        IsActive : true,
        Priority : 20,
        ProjectManager : ProjectManagementServiceMock.User2,
        ProjectManagerId : ProjectManagementServiceMock.User2.UserId,
        Tasks:null,
        NoOfCompletedTasks:0
    };

    // // public static Projects: ProjectModel[] = [
    // //     ProjectManagementServiceMock.Project1, ProjectManagementServiceMock.Project2
    // // ];

    private static Project1_ParentTask1: TaskModel={
        TaskId : 1,
        TaskDescription : "ParentTask1",
        IsParentTask : true,
        IsCompleted : false,
        User : null,
        UserId : null,
        ParentTask : null,
        ParentTaskId : null,
        ProjectId : ProjectManagementServiceMock.Project1.ProjectId,
        //ChildTasks :[ProjectManagementServiceMock.Project1_ParentTask1_ChildTask1],
        ChildTasks:null,
        StartDate:null,
        EndDate:null,
        Priority:0,
        Project:ProjectManagementServiceMock.Project1
    };

    public static Project1_ParentTask1_ChildTask1: TaskModel={
        TaskId : 2,
        TaskDescription : "Project1_ParentTask1_ChildTask1",
        IsParentTask : false,
        IsCompleted : false,
        User : null,
        UserId : null,
        ParentTask : null,
        ParentTaskId : null,
        ProjectId : ProjectManagementServiceMock.Project1.ProjectId,
        ChildTasks :null,
        StartDate:null,
        EndDate:null,
        Priority:0,
        Project:ProjectManagementServiceMock.Project1
    };

    public static Project1_ParentTask1_ChildTask2: TaskModel={
        TaskId : 2,
        TaskDescription : "Project1_ParentTask1_ChildTask2",
        IsParentTask : false,
        IsCompleted : false,
        User : null,
        UserId : null,
        ParentTask : null,
        ParentTaskId : null,
        ProjectId : ProjectManagementServiceMock.Project1.ProjectId,
        ChildTasks :null,
        StartDate:null,
        EndDate:null,
        Priority:0,
        Project:ProjectManagementServiceMock.Project1
    };

    public static Project1_ParentTask1_WithChildTasks():TaskModel
    {
        var task=ProjectManagementServiceMock.Project1_ParentTask1;
        task.ChildTasks=[ProjectManagementServiceMock.Project1_ParentTask1_ChildTask1];
        return  task;
    }

    // public static Tasks: TaskModel[] = [
    //     ProjectManagementServiceMock.Project1_ParentTask1_WithChildTasks(), ProjectManagementServiceMock.Project1_ParentTask1_ChildTask1,ProjectManagementServiceMock.Project1_ParentTask1_ChildTask2
    // ];

    public static Tasks: TaskModel[] = [
        ProjectManagementServiceMock.Project1_ParentTask1_WithChildTasks(), ProjectManagementServiceMock.Project1_ParentTask1_ChildTask1,ProjectManagementServiceMock.Project1_ParentTask1_ChildTask2
    ];

    public static Project1_WithAll():ProjectModel
    {
        var project=ProjectManagementServiceMock.Project1;
        project.Tasks=ProjectManagementServiceMock.Tasks;
        return project;
    }

    public static Projects: ProjectModel[] = [
        ProjectManagementServiceMock.Project1_WithAll(), ProjectManagementServiceMock.Project2
    ];
    
}