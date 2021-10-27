import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  //courses: Course[] = [];
  displayedColumns = ['name', 'category'];
  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    //this.courses = [] // pode ser inicializado pelo construtor
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list();  // material table sabe tratar observables
    //this.coursesService.list().subscribe((courses) => this.courses = courses);
  }

  ngOnInit(): void {}
}
