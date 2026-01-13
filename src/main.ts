import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <--- MUSI BYĆ AppComponent i ścieżka do ./app/app

bootstrapApplication(AppComponent, appConfig) // <--- TU TEŻ AppComponent
  .catch((err) => console.error(err));