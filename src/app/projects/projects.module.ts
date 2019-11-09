import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerComponent } from './viewer/viewer.component';
import { NewComponent } from './new/new.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { FilterprojectsformComponent } from './projects/filterprojectsform/filterprojectsform.component';
import { ProjectslistComponent } from './projects/projectslist/projectslist.component';
import { ViewerprojectformComponent } from './viewer/viewerprojectform/viewerprojectform.component';
import { NewprojectformComponent } from './new/newprojectform/newprojectform.component';
import { ProjectsService } from './projects/projects.service';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerComponent,
    NewComponent,
    DashboardComponent,
    FilterprojectsformComponent,
    ProjectslistComponent,
    ViewerprojectformComponent,
    NewprojectformComponent
  ],
  imports: [CommonModule, RouterModule, ProjectsRoutingModule, FormsModule],
  providers: [ProjectsService]
})
export class ProjectsModule {}
