import { Routes } from '@angular/router';
import { VistaLibroComponent } from './components/vista-libro/vista-libro.component';

export const routes: Routes = [
    {
        path:"home",
        component: VistaLibroComponent,
        
    },
    {
        path:"",
        redirectTo: "home",
        pathMatch: "full"
    }
];
