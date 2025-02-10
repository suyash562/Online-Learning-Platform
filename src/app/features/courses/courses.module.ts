import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { Router, RouterModule } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseService } from './services/course/course.service';



@NgModule({
  declarations: [
    ListComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'list', component: ListComponent},
      {path: 'list/course/:id', component: CourseComponent}
    ])
  ],
  // providers: [CourseService]
})
export class CoursesModule { }
