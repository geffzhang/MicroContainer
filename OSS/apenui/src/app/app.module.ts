import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZooComponent } from './zoo/zoo.component';
import { AnimalComponent } from './animal/animal.component';

import { AnimalService } from './services/animal.service';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AnimalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
