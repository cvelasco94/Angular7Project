import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProjectsService } from '../projects/projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public numProjects: number;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {

    this.numProjects = this.projectsService.getNumProjects;

  }

}
