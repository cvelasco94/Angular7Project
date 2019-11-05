import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: []
})

export class NewComponent implements OnInit {

  public projects: Project[];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {

    this.projects = this.projectsService.getProjects;

  }

  public createProject(project: Project) {

    this.projectsService.createProject(project);

  }

}
