import { Routes } from '@angular/router';
import { IncioComponent } from './componentes/incio/incio.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/inicio' },
    { path: 'inicio', component: IncioComponent },
];
