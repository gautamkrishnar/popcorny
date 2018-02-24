import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutinngModule } from './app-routinng.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {FeedbackModule} from './feedback/feedback.module';
import {AboutModule} from './about/about.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutinngModule,
    HomeModule,
    FeedbackModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
