import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import {
  FormArray,
  Form,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl
} from "@angular/forms";

import { Inject } from "@angular/core";
import { switchMap } from "rxjs/internal/operators/switchMap";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
import { filter } from "rxjs/internal/operators/filter";
import { ProjectManagementAbstractService } from "src/app/service/ProjectManagementAbstractService";
import { UserModel } from "src/app/model/User";
import { ProjectManagementServiceBus } from "src/app/service/ProjectManagementServiceBus";
import { ProjectModel } from "src/app/model/Project";

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit, AfterViewInit {

  searchForm: FormGroup;
  searchInputControl: FormControl;

  @Input()
  projects: ProjectModel[];

  sortBy: String = "StartDate";

  searchUserInputValue:string="";

  ngAfterViewInit(): void {    
  }

  constructor(
    private service: ProjectManagementAbstractService,
    private serviceBus: ProjectManagementServiceBus
  ) {
    this.initFormsControl();
  }

  ngOnInit() {
    this.loadProjectDetails();
    this.serviceBus.ProjectSearchObservable.subscribe(x => {
      this.loadProjectDetails();
    });
  }

  private initFormsControl() {
    this.searchInputControl = new FormControl(this.searchUserInputValue);
    

    this.searchForm = new FormGroup({
      searchInputControl: this.searchInputControl
    });

    this.searchForm.valueChanges.subscribe(x=>
      {
        this.searchUserInputValue=this.searchInputControl.value;
      });
  }

  loadProjectDetails(): void {
    this.service.GetProjects().subscribe(x => {
      this.projects = x;
    });
  }

  onEditProject(project: ProjectModel): void {
    this.serviceBus.ProjectEditObservable.next(project);
  }

  onSuspendProject(project: ProjectModel): void {
    project.IsActive=!project.IsActive;
    this.service.UpdateProject(project).subscribe(x => {
      console.log("Project Suspended...");      
      this.loadProjectDetails();
    });
  }

  onSort(field: string): void {
    this.sortBy = field;
  }

}
