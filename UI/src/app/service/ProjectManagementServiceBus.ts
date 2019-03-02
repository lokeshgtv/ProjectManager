import { Injectable } from '@angular/core';
//import { Component, OnInit, ViewChild, Output, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { UserModel } from 'src/app/model/User';
import { ProjectModel } from 'src/app/model/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementServiceBus
{
  UserSearchObservable: Subject<boolean> = new Subject<boolean>();

  UserEditObservable: Subject<UserModel> = new Subject<UserModel>();

  ProjectSearchObservable: Subject<boolean> = new Subject<boolean>();

  ProjectEditObservable: Subject<ProjectModel> = new Subject<ProjectModel>();

  CommonSearchObservable: Subject<any> = new Subject<any>();

}