import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/Models/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
@Input() tarea!:Tarea;
@Output() borrarTarea = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  eliminarTarea(id:string){
    this.borrarTarea.emit(id);
  }
}
