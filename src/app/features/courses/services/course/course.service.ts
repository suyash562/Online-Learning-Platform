import { Injectable } from '@angular/core';
import { Course } from '../../model/course';


@Injectable()
export class CourseService {
  private _courses : Course[]= [];
  constructor() {
    this._courses.push({id:1, name:'course 1', duration: 5});
    this._courses.push({id:2, name:'course 2', duration: 8});
    this._courses.push({id:3, name:'course 3', duration: 7});
   }
   get courses(){
    return this._courses;
   }
}
