import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CircleArrowLeft, LucideAngularModule, Play } from 'lucide-angular';
import { PresentsComponent } from './pages/presents/presents.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Play, CircleArrowLeft })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
