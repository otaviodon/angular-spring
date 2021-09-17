import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesModule } from './courses/courses.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
