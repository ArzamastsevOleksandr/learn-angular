import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Project} from '../../model';
import {Observable} from 'rxjs';
import {ProjectService} from '../../project/project.service';

@Component({
  selector: 'mac-project-container',
  templateUrl: './project-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectContainerComponent {

  selectedProject: Observable<Project>;

  constructor(private projectService: ProjectService) {
    this.selectedProject = this.projectService.getSelectedProject();
  }

}
