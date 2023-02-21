import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorrarTareasComponent } from './Components/borrar-tareas/borrar-tareas.component';
import { FinalizarTareaComponent } from './Components/finalizar-tarea/finalizar-tarea.component';
import { HeaderComponent } from './Components/header/header.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { TareaComponent } from './Components/tarea/tarea.component';
import { TareasComponent } from './Components/tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    BorrarTareasComponent,
    FinalizarTareaComponent,
    HeaderComponent,
    InicioComponent,
    TareaComponent,
    TareasComponent
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
