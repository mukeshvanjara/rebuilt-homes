import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { ServicesForDeveloper } from './components/Services/services-for-developer/services-for-developer';
import { ServicesForSocieties } from './components/Services/services-for-societies/services-for-societies';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default -> dashboard
  { path: 'home', component: Dashboard },
  { path: 'contact', component: Contact },
  { path: 'about', component: About },
  { path: 'services-for-developer', component: ServicesForDeveloper },
  { path: 'services-for-societies', component: ServicesForSocieties },
];
