import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/Models/tarea';
import { TareasService } from 'src/app/Services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor(private miServicio:TareasService) { }

  seleccionado:string = "Todas";
  tareas!:Tarea[];
  totales!:any;
  ngOnInit(): void {
    this.tareas = this.miServicio.getTareas();
    this.totales = this.miServicio.getTotales();
    
  }

  filtrarTareas(){
    
    if(this.seleccionado != "Todas"){
      this.tareas = this.miServicio.filtrarTareas(this.seleccionado);  
    }else{
      this.tareas = this.miServicio.getTareas();
    }
    
  }

}
