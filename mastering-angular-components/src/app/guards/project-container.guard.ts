import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ProjectService} from '../project/project.service';
import {map} from 'rxjs/operators';

@Injectable()
export class ProjectContainerGuard implements CanActivate {

  constructor(private projectService: ProjectService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.projectService.getProjects()
      .pipe(map(projects => {
        const project = projects.find(proj => proj.id === +route.params.projectId);
        if (project) {
          return true;
        } else {
          this.router.navigate(['/projects', projects[0].id]);
        }
      }));
  }

}
