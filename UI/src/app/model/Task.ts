import { ProjectModel } from "./Project";
import { UserModel } from "./User";

export interface TaskModel {
    TaskId: number;
    ParentTask?: TaskModel;
    ChildTasks?: TaskModel[];
    ParentTaskId?: number ;
    TaskDescription: string ;
    StartDate?: Date;
    EndDate?: Date;
    Priority: number;
    IsCompleted: boolean;
    IsParentTask: boolean;
    ProjectId: number;
    Project: ProjectModel;
    UserId: number;
    User: UserModel;

    
}
