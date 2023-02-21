import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/Models/tarea';
import { TareasService } from 'src/app/Services/tareas.service';

@Component({
  selector: 'app-borrar-tareas',
  templateUrl: './borrar-tareas.component.html',
  styleUrls: ['./borrar-tareas.component.css']
})
export class BorrarTareasComponent implements OnInit {

  constructor(private miServicio:TareasService) { }

  tareas!:Tarea[];
  ngOnInit(): void {
    this.tareas = this.miServicio.getTareas();
  }

  borrarTarea(id:string){
    this.miServicio.deleteTarea(id);
  }
}
