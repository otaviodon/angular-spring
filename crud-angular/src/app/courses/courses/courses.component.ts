import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    //this.courses = [] // pode ser inicializado pelo construtor
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        console.log(error);
        this.onError('Erro ao carregar cursos.');
        return of([]);
      })
    ); // material table sabe tratar observables
    //this.coursesService.list().subscribe((courses) => this.courses = courses);
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {}
}
