import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: false,
  
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  private _id!: number;
  constructor(private route : ActivatedRoute){
    // this.id = route.snapshot.paramMap.get('id');
    this._id = route.snapshot.params['id'];
  }
  get id(){
    return this._id;
  }
}
