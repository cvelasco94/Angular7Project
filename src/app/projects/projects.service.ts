import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Project } from './models/project.model';
import { Observable } from 'rxjs';
import { map, share, filter, find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public getProjects: any;

  public getNumProjects: 1;

  public projects$: Observable<Project[]> = null;

  public urlapiprojects = 'https://api-base.herokuapp.com/api/pub/projects';

  public urlapicountprojects = 'https://api-base.herokuapp.com/api/pub/projects/count';

  constructor(private router: Router, private httpClient: HttpClient) {
    this.projects$ = this.getPublicProjects();
  }

  public getProjectData(projectID) {
    return this.projects$.pipe(map(project => project.find(project => project.id === projectID)));
  }

  public createProject(project) {
    environment.projects.push(project);
    this.router.navigateByUrl('projects');
  }

  public getPublicProjects() {
    return this.httpClient
      .get<Project[]>(this.urlapiprojects)
      .pipe(map(this.transformData));
  }

  public createPublicProjects(project) {
    this.httpClient.post(this.urlapiprojects, project).subscribe(response => {
      this.router.navigateByUrl('projects');
    });
  }

  public deleteProjects() {
    return this.httpClient.delete(this.urlapiprojects).subscribe(() => {
      location.reload();
    });
  }

  public transformData(currentProjects) {
    if (currentProjects !== null) {
      return Object.keys(currentProjects).map(key => ({
        id: currentProjects[key].id,
        name: currentProjects[key].name
      }));
    }

  }
}
