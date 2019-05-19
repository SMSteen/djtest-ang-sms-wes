import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from '../app/task-list/task-list.component';
import { TaskNewComponent } from '../app/task-new/task-new.component';
import { TaskDetailsComponent } from '../app/task-details/task-details.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/tasks'
  },
  {
    path: 'tasks',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: TaskListComponent
      },
      {
        path: 'new',
        pathMatch: 'full',
        component: TaskNewComponent
      },
      {
        path: ':task_id',
        pathMatch: 'full',
        component: TaskDetailsComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
