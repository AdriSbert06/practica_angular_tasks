import { bootstrapApplication } from '@angular/platform-browser';
import { ProvaComponent } from './app/app.prova';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
