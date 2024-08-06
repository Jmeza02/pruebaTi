import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { HistorialComponent } from './components/historial/historial.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'home', component: HomeComponent},
    // {path: '**', component: AppComponent},
    {path: 'historial', component: HistorialComponent}
];
