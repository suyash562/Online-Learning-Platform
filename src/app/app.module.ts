import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { ProfileModule } from './features/profile/profile.module';
import { CoursesModule } from './features/courses/courses.module';
import { CoreModule } from './core/core/core.module';
import { ProfileGuard } from './features/profile/guard/profile/profile.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    // ProfileModule,
    // CoursesModule,
    // HomeModule
  ],
  providers: [ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
