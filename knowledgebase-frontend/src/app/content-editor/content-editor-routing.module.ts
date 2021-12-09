import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentEditorLoginComponent} from './content-editor-login/content-editor-login.component';
import {WearableCategoryComponent} from './pages/wearable-category/wearable-category.component';
import {EditorHomeComponent} from './pages/editor-home/editor-home.component';
import {WearableComponent} from './pages/wearable/wearable.component';
import {ProcessCategoriesComponent} from './pages/process-categories/process-categories.component';
import {ProcessComponent} from './pages/process/process.component';
import {ActivityComponent} from './pages/activity/activity.component';
import {DataTypeComponent} from './pages/data-type/data-type.component';
import {FeatureComponent} from './pages/feature/feature.component';
import {InterfaceComponent} from './pages/interface/interface.component';

const routes: Routes = [
  {path: '', component: ContentEditorLoginComponent},
  {path: 'home', component: EditorHomeComponent},
  {path: 'wearablecategory', component: WearableCategoryComponent},
  {path: 'wearable', component: WearableComponent},
  {path: 'processcategory', component: ProcessCategoriesComponent},
  {path: 'process', component: ProcessComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'datatype', component: DataTypeComponent},
  {path: 'interface', component: InterfaceComponent},
  {path: 'feature', component: FeatureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentEditorRoutingModule { }
