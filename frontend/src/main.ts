import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {routes} from './app/app.routes';
import {provideRouter} from '@angular/router';
import 'hammerjs';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // ✅ Zorg dat de router wordt meegegeven
  ]
}).catch(err => console.error(err));
