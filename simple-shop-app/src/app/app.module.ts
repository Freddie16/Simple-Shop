import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // If you're using HttpClient
import { AppComponent } from './app.component';
import { NavbarComponent } from '../shared/navbar/navbar.component'; // Import the NavbarComponent

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, // Declare the NavbarComponent here
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // If you're using HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}