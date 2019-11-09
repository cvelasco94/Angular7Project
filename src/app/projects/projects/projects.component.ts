import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Project } from './../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public numProjects: number;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {

    this.projects = environment.projects;
    this.numProjects = this.projects.length;

  }


}

