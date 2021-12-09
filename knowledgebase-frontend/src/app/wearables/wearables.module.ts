import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WearablesRoutingModule } from './wearables-routing.module';
import { WearablesComponent } from './wearables.component';
import { WearablesCategoriesComponent } from './wearables-categories/wearables-categories.component';
import {
  FilterOnWearableCategoryPipe,
  WearablesOverviewComponent
} from './wearables-overview/wearables-overview.component';
import { WearablesResultsComponent } from './wearables-results/wearables-results.component';
import {ToastModule} from 'primeng/toast';
import {StepsModule} from 'primeng/steps';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TagModule} from 'primeng/tag';
import {BadgeModule} from 'primeng/badge';
import {PickListModule} from 'primeng/picklist';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {SharedModuleModule} from '../shared-module/shared-module.module';


@NgModule({
  declarations: [WearablesComponent, WearablesCategoriesComponent, WearablesOverviewComponent, WearablesResultsComponent, FilterOnWearableCategoryPipe],
    imports: [
        CommonModule,
        WearablesRoutingModule,
        ToastModule,
        StepsModule,
        PanelModule,
        CardModule,
        ButtonModule,
        PanelModule,
        TagModule,
        BadgeModule,
        PickListModule,
        DataViewModule,
        DropdownModule,
        InputTextModule,
        RatingModule,
        FormsModule,
        SharedModuleModule
    ]
})
export class WearablesModule { }
