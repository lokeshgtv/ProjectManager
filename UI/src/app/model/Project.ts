import { UserModel } from "./User";
import { TaskModel } from "./Task";

export interface ProjectModel {
    ProjectId: number;
    ProjectManager: UserModel;
    ProjectManagerId?: number ;
    Project: string ;
    StartDate?: Date;
    EndDate?: Date;
    Priority: number;
    Tasks: TaskModel[];
    NoOfCompletedTasks: number;
    IsActive: boolean;
}
