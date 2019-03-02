import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  ViewChild,
  TemplateRef,
  OnDestroy,
} from "@angular/core";
import {
  FormArray,
  Form,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl
} from "@angular/forms";

import {
  Inject
} from "@angular/core";
import {
  switchMap
} from "rxjs/internal/operators/switchMap";
import {
  mergeMap
} from "rxjs/internal/operators/mergeMap";
import {
  filter
} from "rxjs/internal/operators/filter";
import {
  ProjectManagementAbstractService
} from "src/app/service/ProjectManagementAbstractService";
import {
  UserModel
} from "src/app/model/User";
import {
  ProjectManagementServiceBus
} from "src/app/service/ProjectManagementServiceBus";
import {
  Output
} from "@angular/core";
import { BsModalService, ModalDirective, BsModalRef } from "ngx-bootstrap/modal";
import { ProjectModel } from "src/app/model/Project";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-search-module',
  templateUrl: './search-module.component.html',
  styleUrls: ['./search-module.component.css']
})
export class SearchModuleComponent implements OnInit,OnDestroy
{
    searchForm: FormGroup;
  searchInputControl: FormControl;
  searchInputValue: string = "";

  @Input()
  modalDisplayed: boolean = false;

  @Input()
  inputValue: UserModel[]|ProjectModel[] ;

  @Input()
  columnsDisplay: string[] ;

  @Input()
  searchFields: string[] ;

  @Input()
  fieldType: string ;

  @Output()
  rowSelected = new EventEmitter <[any, boolean,string]> ();

  @ViewChild('searchModel')
  private searchModelTemplate: TemplateRef<any>;

  searchBsModelRef:BsModalRef;

  selectedRow:any;
  searchSubscription$: Subscription;
  
  constructor(
    private service: ProjectManagementAbstractService,
    private serviceBus: ProjectManagementServiceBus,
    private modalService: BsModalService
  ) {
    this.initFormsControl();
  }


  ngOnInit() {

    this.searchSubscription$ = this.serviceBus.CommonSearchObservable.subscribe(x=>{
      this.searchBsModelRef       = this.modalService.show(this.searchModelTemplate, {
        backdrop: true,
        ignoreBackdropClick: false
      });
    });
  }

  ngOnDestroy() {
    if(this.searchSubscription$!=null && this.searchSubscription$!=undefined)
    this.searchSubscription$.unsubscribe();
  }

  private initFormsControl() {
    this.searchInputControl = new FormControl(this.searchInputValue);

    this.searchForm = new FormGroup({
      searchInputControl: this.searchInputControl
    });

    
    this.searchForm.valueChanges.subscribe(x => {
      this.searchInputValue = this.searchInputControl.value;      
      this.SelectRow(null);

    });
  }

  SelectRow(selectedRow: any) {
    this.selectedRow = selectedRow;   
    
  }

  IsRowSelected(row: any): boolean {
    if (row != null && this.selectedRow != null) {
      return this.selectedRow === row;
    }
    return false;
  }

  confirm(): void {    
    this.searchBsModelRef.hide();
    this.rowSelected.next([this.selectedRow,this.selectedRow!=null,this.fieldType])
  }

  decline(): void {
    this.searchBsModelRef.hide();
    this.rowSelected.next([this.selectedRow,false,this.fieldType])
  }
}