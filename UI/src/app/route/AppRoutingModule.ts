import { NgModule } from '@angular/core'
import { RouterModule, Route,Routes } from '@angular/router';
import { UserDashboardComponent } from 'src/app/ui/user/user-dashboard/user-dashboard.component';
import { ProjectDashboardComponent } from 'src/app/ui/project/project-dashboard/project-dashboard.component';
import { ViewTaskComponent } from 'src/app/ui/task/view-task/view-task.component';
import { AddTaskComponent } from 'src/app/ui/task/add-task/add-task.component';



export const RoteConfiguration:Routes=[      
    {path:'AddUser',component:UserDashboardComponent},    
    {path:'AddProject',component:ProjectDashboardComponent},    
    {path:'ViewTask',component:ViewTaskComponent},    
    {path:'AddTask',component:AddTaskComponent},
    {path:'EditTask/:id',component:AddTaskComponent},
    {path:'',redirectTo:'/AddTask',pathMatch:'full'},
    {path:'**',redirectTo:'/AddTask',pathMatch:'full'},
];

@NgModule({
    imports:[RouterModule.forRoot(RoteConfiguration)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}