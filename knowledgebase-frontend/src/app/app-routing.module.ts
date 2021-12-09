import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'processes', loadChildren: () => import('./processes/processes.module').then(m => m.ProcessesModule) },
  { path: 'wearables', loadChildren: () => import('./wearables/wearables.module').then(m => m.WearablesModule) },
  { path: 'editor', loadChildren: () => import('./content-editor/content-editor.module').then(m => m.ContentEditorModule) },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
