import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProcessesRoutingModule} from './processes-routing.module';
import {ProcessesComponent} from './processes.component';
import {ProcessCategoriesComponent} from './process-categories/process-categories.component';
import {FilterOnCategoryIdPipe, ProcessesOverviewComponent} from './processes-overview/processes-overview.component';
import {
    FilterOnProcessIdPipe,
    ProcessesActivitiesComponent
} from './processes-activities/processes-activities.component';
import {ProcessesResultsComponent} from './processes-results/processes-results.component';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {TagModule} from 'primeng/tag';
import {BadgeModule} from 'primeng/badge';
import {PickListModule} from 'primeng/picklist';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SharedModuleModule} from '../shared-module/shared-module.module';


@NgModule({
    declarations: [ProcessesComponent, ProcessCategoriesComponent, ProcessesOverviewComponent, ProcessesActivitiesComponent, ProcessesResultsComponent, FilterOnCategoryIdPipe, FilterOnProcessIdPipe],
    imports: [
        CommonModule,
        ProcessesRoutingModule,
        StepsModule,
        ToastModule,
        CardModule,
        ButtonModule,
        PanelModule,
        TagModule,
        BadgeModule,
        PickListModule,
        RatingModule,
        FormsModule,
        DataViewModule,
        InputTextModule,
        ProgressSpinnerModule,
        SharedModuleModule
    ]
})
export class ProcessesModule {
}
