import { Component, inject } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  router = inject(Router);

  openProject(id: string) {
    this.router.navigateByUrl(`project/${id}`);
  }
}
