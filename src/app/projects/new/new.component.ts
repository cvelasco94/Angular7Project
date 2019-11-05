import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: []
})

export class NewComponent implements OnInit {

  public project: Project;
  public projects: Project[];
  public numProjects: number;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {

    this.projects = this.projectsService.getProjects;
    this.numProjects = this.projectsService.getNumProjects;
    this.project = { id: this.projectsService.getNumProjects, name: '' };

  }

  public createProject() {

    this.projectsService.createProject(this.project);

    this.projects = this.projectsService.getProjects;
    this.numProjects = this.projectsService.getNumProjects;
    this.project = { id: this.projectsService.getNumProjects, name: '' };


  }

}
