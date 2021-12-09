import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentEditorRoutingModule} from './content-editor-routing.module';
import {ContentEditorLoginComponent} from './content-editor-login/content-editor-login.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {SidebarComponent} from './sidebar/sidebar.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TableModule} from 'primeng/table';
import {WearableCategoryComponent} from './pages/wearable-category/wearable-category.component';
import {EditorHomeComponent} from './pages/editor-home/editor-home.component';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import { WearableComponent } from './pages/wearable/wearable.component';
import {HttpClientModule} from '@angular/common/http';
import { ProcessCategoriesComponent } from './pages/process-categories/process-categories.component';
import { ProcessComponent } from './pages/process/process.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { DataTypeComponent } from './pages/data-type/data-type.component';
import {DropdownModule} from 'primeng/dropdown';
import { InterfaceComponent } from './pages/interface/interface.component';
import { FeatureComponent } from './pages/feature/feature.component';


@NgModule({
    declarations: [
        ContentEditorLoginComponent,
        SidebarComponent,
        WearableCategoryComponent,
        EditorHomeComponent,
        WearableComponent,
        ProcessCategoriesComponent,
        ProcessComponent,
        ActivityComponent,
        DataTypeComponent,
        InterfaceComponent,
        FeatureComponent
    ],
    exports: [
        SidebarComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        ContentEditorRoutingModule,
        CardModule,
        InputTextModule,
        ReactiveFormsModule,
        ButtonModule,
        PanelMenuModule,
        TableModule,
        DialogModule,
        FileUploadModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        ConfirmDialogModule,
        FormsModule,
        DropdownModule
    ],
    providers: [ MessageService, ConfirmationService]
})
export class ContentEditorModule {
}
