import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  colors = ['primary', 'secondary', 'success', 'danger'];
  projects: any[];

  constructor(private http: HttpClient) {
    this.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  ngOnInit() {
  }


  getProjects (): Observable<any[]> {
    return this.http.get<any[]>('/assets/project-list.json')
      .pipe(
      );
  }


  getRandomBetween(start: number, end: number) {
    return Math.floor(Math.random() * end) + start;
  }
}
