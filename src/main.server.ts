import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // <--- Sprawdź czy jest AppComponent
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) => 
  bootstrapApplication(AppComponent, config, context); // <--- Zmień App na AppComponent

export default bootstrap;