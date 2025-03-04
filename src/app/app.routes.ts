import { Routes } from '@angular/router';
import { IncioComponent } from './componentes/incio/incio.component';
import { TratamientosComponent } from './componentes/tratamientos/tratamientos.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';
import { TerapiasComponent } from './componentes/terapias/terapias.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PoliticaCookiesComponent } from './politica-cookies/politica-cookies.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/inicio' },
    { path: 'inicio', component: IncioComponent },
    { path: 'tratamientos', component: TratamientosComponent },
    { path: 'preguntas', component: PreguntasComponent },
    { path: 'terapias', component: TerapiasComponent },
    { path: 'politica-cookies', component: PoliticaCookiesComponent },
];
