import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../features/profile/services/user/user.service';
import { CourseService } from '../../features/courses/services/course/course.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UserService, CourseService]
})
export class CoreModule { }
