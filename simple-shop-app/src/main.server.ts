import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { enableProdMode } from '@angular/core';

if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;