import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Project, Tab} from '../../model';
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
  tabs: Tab[] = [
    {id: 'tasks', title: 'Tasks'},
    {id: 'comments', title: 'comments'},
    {id: 'activities', title: 'Activities'}
  ];
  activeTab: Tab = this.tabs[0];

  constructor(private projectService: ProjectService) {
    this.selectedProject = this.projectService.getSelectedProject();
  }

  activateTab(tab: Tab) {
    this.activeTab = tab;
  }

}
