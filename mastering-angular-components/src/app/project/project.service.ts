import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {Project} from '../model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ProjectService {

  private readonly projects = new BehaviorSubject<Project[]>([]);
  private readonly selectedProjectId = new BehaviorSubject<number>(1);
  private readonly selectedProject: Observable<Project>;

  constructor(private http: HttpClient) {
    this.loadProjects();
    this.selectedProject = combineLatest(this.projects, this.selectedProjectId)
      .pipe(map(([projects, selectedProjectId]) => {
        return projects.find(project => project.id === selectedProjectId);
      }));
  }

  private loadProjects() {
    this.http.get<Project[]>('/api/projects')
      .subscribe(response => this.projects.next(response));
  }

  getProjects(): Observable<Project[]> {
    return this.projects.asObservable();
  }

  updateProject(project: Project) {
    this.http.post(`/api/projects/${project.id}`, project)
      .subscribe(() => this.loadProjects());
  }

}
