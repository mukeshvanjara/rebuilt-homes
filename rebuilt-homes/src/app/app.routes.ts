import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default -> dashboard
  { path: 'home', component: Dashboard },
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
];
