import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projectslist',
  templateUrl: './projectslist.component.html',
  styles: []
})
export class ProjectslistComponent implements OnInit {
  @Input() public projects: Project[];
  @Output() public projectEmitter = new EventEmitter<Project>();

  public numProjects: number;

  constructor() {}

  ngOnInit() {
    if (this.projects === null) {
      this.projects = [];
    }
  }

  public deleteProject() {
    this.projectEmitter.emit();
  }
}
