import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  imgPath: string;
  stack?: Technology[];
}

interface Projects {
  [key: string]: Project;
}

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

  projects: Projects = {
    'da-bubble': {
      imgPath: 'assets/project_img/da-bubble.png',
      stack: [
        {
          name: 'Angular',
          icon: 'angular.png',
        },
        {
          name: 'TypeScript',
          icon: 'typescript.png',
        },
        {
          name: 'Firebase',
          icon: 'firebase.png',
        },
        {
          name: 'Git',
          icon: 'git.png',
        },
        {
          name: 'Material Design',
          icon: 'material_design.png',
        },
      ],
    },
    join: {
      imgPath: 'assets/project_img/join.jpg',
    },
  };

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
