import { Routes } from '@angular/router';
import { IncioComponent } from './componentes/incio/incio.component';
import { TratamientosComponent } from './componentes/tratamientos/tratamientos.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/inicio' },
    { path: 'inicio', component: IncioComponent },
    { path: 'tratamientos', component: TratamientosComponent },
    { path: 'preguntas', component: PreguntasComponent },
];
