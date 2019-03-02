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

@Component({
  selector: "app-view-user",
  templateUrl: "./view-user.component.html",
  styleUrls: ["./view-user.component.css"]
})
export class ViewUserComponent implements OnInit, AfterViewInit {

  searchForm: FormGroup;
  searchInputControl: FormControl;

  @Input()
  users: UserModel[];

  sortBy: String = "FirstName";

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
    this.loadUserDetails();
    this.serviceBus.UserSearchObservable.subscribe(x => {
      this.loadUserDetails();
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

  loadUserDetails(): void {
    this.service.GetUserDetails().subscribe(x => {
      this.users = x;
    });
  }

  onEditUser(user: UserModel): void {
    this.serviceBus.UserEditObservable.next(user);
  }

  onDeleteUser(user: UserModel): void {
    this.service.DeleteUser(user).subscribe(x => {
      console.log("User Deleted...");      
      this.loadUserDetails();
    });
  }

  onSort(field: string): void {
    this.sortBy = field;
  }
  
}
