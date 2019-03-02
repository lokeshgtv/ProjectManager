import {
  TaskModel
} from '../model/Task';
import {
  ProjectModel
} from '../model/Project';
//import { ParentTaskModel } from '../model/parent-task-model';
import {
  UserModel
} from '../model/User';
import {
  Observable
} from 'rxjs/internal/Observable';


export abstract class ProjectManagementAbstractService {

  abstract GetUserDetails(): Observable < UserModel[] > ;
  abstract AddUserDetail(user: UserModel);
  abstract UpdateUserDetail(user: UserModel): Observable < any > ;
  abstract DeleteUser(user: UserModel): Observable < any > ;

  abstract GetProjects(): Observable < ProjectModel[] > ;

  abstract AddProject(project: ProjectModel);
  abstract UpdateProject(project: ProjectModel): Observable < any > ;

  abstract GetTasks(): Observable < TaskModel[] > ;
  abstract GetTaskById(id: number): Observable < TaskModel > ;

  abstract GetParentTasks(): Observable < TaskModel[] > ;

  abstract GetAllParentTasksForProject(project: ProjectModel): Observable < TaskModel[] > ;

  abstract GetAllTaskForProject(project: ProjectModel): Observable < TaskModel[] > ;

  abstract AddTask(task: TaskModel);
  abstract UpdateTask(task: TaskModel): Observable < any > ;
  abstract DeleteTask(task: TaskModel): Observable < any > ;
}
