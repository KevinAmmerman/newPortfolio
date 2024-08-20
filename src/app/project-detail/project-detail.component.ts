import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from '../shared/models/project.model';
import { projects } from '../shared/data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  route = inject(ActivatedRoute);
  projectName: string = '';

  projects: Projects = projects;

  currentProject: any = {};

  ngOnInit(): void {
    const name = this.route.snapshot.params['id'];
    this.projectName = this.transformName(name);
    this.getProjectData(name);
  }

  getProjectData(name: string) {
    this.currentProject = this.projects[name];
  }

  transformName(name: string) {
    switch (name) {
      case 'da-bubble':
        return 'DA-Bubble';
      case 'join':
        return 'JOIN';
      case 'el-pollo-loco':
        return 'El Pollo Loco';
      default:
        return name;
    }
  }
}
