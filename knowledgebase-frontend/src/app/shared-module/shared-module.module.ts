import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';



@NgModule({
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ]
})
export class SharedModuleModule { }
