import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessesComponent } from './processes.component';
import {ProcessCategoriesComponent} from './process-categories/process-categories.component';
import {ProcessesOverviewComponent} from './processes-overview/processes-overview.component';
import {ProcessesActivitiesComponent} from './processes-activities/processes-activities.component';
import {ProcessesResultsComponent} from './processes-results/processes-results.component';

const routes: Routes = [
  { path: '', component: ProcessesComponent },
  { path: 'categories', component: ProcessCategoriesComponent },
  { path: 'overview', component: ProcessesOverviewComponent },
  { path: 'activities', component: ProcessesActivitiesComponent },
  { path: 'result', component: ProcessesResultsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessesRoutingModule { }
