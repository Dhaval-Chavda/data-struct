import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetComponent } from './set/set.component';
import { MapComponent } from './map/map.component';
import { ArrayComponent } from './array/array.component';
import { ThreadComponent } from './thread/thread.component';
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [
        AppComponent,
        SetComponent,
        MapComponent,
        ArrayComponent,
        ThreadComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet
    ]
})
export class AppModule { }
