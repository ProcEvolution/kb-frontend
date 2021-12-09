import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {HomeComponent} from './home/home.component';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import {PickListModule} from 'primeng/picklist';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ContentEditorInterceptor} from './interceptor/content-editor.interceptor';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        BadgeModule,
        MenubarModule,
        BrowserAnimationsModule,
        InputTextModule,
        ButtonModule,
        DividerModule,
        CardModule,
        RippleModule,
        PickListModule,
        HttpClientModule,
        ProgressSpinnerModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ContentEditorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
