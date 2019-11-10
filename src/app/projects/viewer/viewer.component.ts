import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { environment } from '../../../environments/environment';
import { ProjectsService } from '../projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styles: []
})
export class ViewerComponent implements OnInit {

  public projectID: number;
  public project$: Observable<Project>;

  constructor(
    activateRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
    this.projectID = parseInt(activateRoute.snapshot.params.id, 10);
    this.project$ = this.projectsService.getProjectData(this.projectID);
  }

  public ngOnInit() {
  }

}
