import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { HistorialComponent } from './app/components/historial/historial.component';

bootstrapApplication(HomeComponent, appConfig)
  .catch((err) => console.error(err));
