import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen: boolean = false;
  activeSection: string = '';
  router = inject(ActivatedRoute);

  constructor() {
    const test = this.router.url.subscribe((params) => {
      console.log(params[0].path);
    });
  }

  openMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
