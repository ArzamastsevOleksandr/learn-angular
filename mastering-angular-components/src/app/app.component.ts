import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {Project, User} from './model';
import {ProjectService} from './project/project.service';
import {TaskService} from './tasks/task.service';
import {UserService} from './user/user.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'mac-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None // enable global styles
})
export class AppComponent {

  openTasksCount: Observable<number>;
  user: Observable<User>;
  projects: Observable<Project[]>;

  constructor(private projectService: ProjectService,
              private taskService: TaskService,
              private userService: UserService) {

    this.openTasksCount = this.taskService.getTasks()
      .pipe(map(tasks => tasks.filter(task => !task.done).length));

    this.projects = this.projectService.getProjects();
    this.user = this.userService.getCurrentUser();
  }

}
