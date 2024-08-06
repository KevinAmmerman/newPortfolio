import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'my-work', component: MyWorkComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
];
