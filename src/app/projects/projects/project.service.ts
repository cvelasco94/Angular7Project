import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() {}


  public getProjects = environment.projects;

  public getNumProjects = environment.projects.length;

  public getProjectData = (projectID) => this.getProjects[this.getProjects.map(element => element.id).indexOf(projectID)];

  public createProject(project) {

    environment.projects.push(project);
    this.getNumProjects = this.getProjects.length;

  }

}
