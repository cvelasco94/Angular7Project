import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-newprojectform',
  templateUrl: './newprojectform.component.html',
  styles: []
})

export class NewprojectformComponent implements OnInit {

  @Input() public projects: Project[];
  @Output() public projectEmitter = new EventEmitter<Project>();

  public project: Project;

  constructor() {}

  ngOnInit() {

    this.project = {
      id: this.projects.length,
      name: ''
    };

  }

  public saveProject() {

    this.projectEmitter.emit(this.project);

    this.project = {
      id: this.projects.length,
      name: ''
    };

  }

}
