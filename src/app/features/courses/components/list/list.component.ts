import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  courses : Course[]= [];
  constructor(private courseService : CourseService){
    this.courses = courseService.courses;
  }
}
