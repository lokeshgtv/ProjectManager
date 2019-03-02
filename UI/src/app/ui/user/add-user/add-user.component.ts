import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";

import { ProjectManagementAbstractService } from "src/app/service/ProjectManagementAbstractService";
import {
  FormArray,
  Form,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl
} from "@angular/forms";

import { Input } from "@angular/core";

import { Router, Route, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, debounceTime, filter } from "rxjs/operators";
import { of, Subject } from "rxjs";
import { BsModalService, ModalDirective } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { isDate } from "util";
import { UserModel } from "src/app/model/User";
import { ValidationHelper } from "src/app/validators/validation-helper";
import { ProjectManagementServiceBus } from "src/app/service/ProjectManagementServiceBus";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  fName: FormControl;
  lName: FormControl;
  EmployeeId: FormControl;
  btnAction = "Add";

  model: UserModel = {
    EmployeeId: null,
    FirstName: "",
    LastName: "",
    UserId: 0,
  };

  @ViewChild("alertModal")
  alertModal: ModalDirective;

  DialogResult: Subject<boolean> = new Subject<boolean>();

  constructor(
    private service: ProjectManagementAbstractService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private modalService: BsModalService,
    private serviceBus: ProjectManagementServiceBus
  ) {
   this.initFormsControl();
  }

  ngOnInit() {
    this.serviceBus.UserEditObservable.subscribe(x => {
      this.btnAction = "Save";
      this.model = x;
      this.UpdateValuesFromModelToFormsControls();
    });    

    this.DialogResult.pipe(filter(x => x)).subscribe(x => {
      this.model.FirstName = this.fName.value;
      this.model.LastName = this.lName.value;
      this.model.EmployeeId = this.EmployeeId.value;

      if (this.btnAction === "Add") {
        this.service.AddUserDetail(this.model).subscribe(x => {
          console.log("User Added...");          
          this.refreshUser();
        });
      } else if (this.btnAction === "Save") {
        this.service.UpdateUserDetail(this.model).subscribe(x => {
          console.log("User Updated...");          
          this.refreshUser();
        });
      }
    });
  }

  UpdateValuesFromModelToFormsControls() {
    this.fName.setValue(this.model.FirstName);
    this.lName.setValue(this.model.LastName);
    this.EmployeeId.setValue(this.model.EmployeeId);
  }

  private initFormsControl() {
    this.fName = new FormControl(this.model.FirstName, Validators.required);
    this.lName = new FormControl(this.model.LastName, Validators.required);

    this.EmployeeId = new FormControl(this.model.EmployeeId, Validators.required);

    this.userForm = new FormGroup({
      fName: this.fName,
      lName: this.lName,
      EmployeeId: this.EmployeeId
    });
  }

  onUserSave() {
    ValidationHelper.Validate(this.userForm);

    if (this.userForm.valid) {
      this.ShowAlterModel();
      return;      
    }
    alert("Please enter valid inputs to proceed further");
  }

  ShowAlterModel() {
    this.alertModal.show();
  }

  confirm(): void {
    this.alertModal.hide();
    this.DialogResult.next(true);
  }

  decline(): void {
    this.alertModal.hide();
    this.DialogResult.next(false);
  }

  refreshUser(): void {    
    this.model.UserId=-1;
    this.btnAction = "Add";
    this.userForm.reset();
    this.serviceBus.UserSearchObservable.next(true);
  }
}
