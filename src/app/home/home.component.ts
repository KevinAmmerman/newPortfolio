import { Component } from '@angular/core';
import { TechStackCarouselComponent } from '../tech-stack-carousel/tech-stack-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TechStackCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  iconsArray = [
    {
      name: 'Angular',
      icon: 'angular.png',
      animation: 'fade-right',
    },
    {
      name: 'TypeScript',
      icon: 'typescript.png',
      animation: 'fade-right',
    },
    {
      name: 'JavaScript',
      icon: 'javascript.png',
      animation: 'fade-right',
    },
    {
      name: 'Html',
      icon: 'html.png',
      animation: 'fade-left',
    },
    {
      name: 'Firebase',
      icon: 'firebase.png',
      animation: 'fade-left',
    },
    {
      name: 'Git',
      icon: 'git.png',
      animation: 'fade-left',
    },
    {
      name: 'CSS',
      icon: 'css.png',
      animation: 'fade-right',
    },
    {
      name: 'Rest-Api',
      icon: 'rest_api.png',
      animation: 'fade-right',
    },
    {
      name: 'Scrum',
      icon: 'scrum.png',
      animation: 'fade-right',
    },
    {
      name: 'Material Design',
      icon: 'material_design.png',
      animation: 'fade-left',
    },
  ];
}
