import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { ListatareasComponent } from './components/listatareas/listatareas.component';
import { FormulariocrearComponent } from './components/formulariocrear/formulariocrear.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    ListatareasComponent,
    FormulariocrearComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
