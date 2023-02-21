import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from 'src/app/Models/tarea';
import { TareasService } from 'src/app/Services/tareas.service';
@Component({
  selector: 'app-finalizar-tarea',
  templateUrl: './finalizar-tarea.component.html',
  styleUrls: ['./finalizar-tarea.component.css']
})
export class FinalizarTareaComponent implements OnInit {

  constructor(private miRoute:ActivatedRoute , private miServicio:TareasService, private router:Router) { }

  id:string="";
  tarea!:Tarea;
  ngOnInit(): void {
    this.id = this.miRoute.snapshot.params['id'];
    this.tarea = this.miServicio.getTarea(this.id);
  }

  finalizarTarea(id:string){
    this.miServicio.endTarea(id);
    this.router.navigate(["tareas"]);
  }

}
