import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

export const config = {
  providers: [
    importProvidersFrom(FormsModule),
    provideRouter([
    ]),
  ],
};

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
