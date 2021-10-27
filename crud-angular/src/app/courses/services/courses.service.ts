import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Course[] = [{ _id: '1', name: 'Angular', category: 'front-end' }];

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      take(1), // ou first()
      delay(1000),
      tap((courses) => console.log(courses))
    );
  }
}
