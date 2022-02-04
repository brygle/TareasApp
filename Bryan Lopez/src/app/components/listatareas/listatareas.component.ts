import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent implements OnInit {

  /* 
    Recibe la lista de tareas creada en main para poder ser cargada en la lista
    y despues poder completar y borrar cada tarea
  */
  @Input() tareas: Tarea[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  //Se encarga de eliminar una tarea de la lista
  borrarTarea(index: number) {
    this.tareas.splice(index, 1);
    console.log(this.tareas);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  //Se encarga de completar una tarea de la lista
  completarTarea(index: number) {
    let tarea = this.tareas[index];
    if (!tarea.completada) {
      tarea.completada = !tarea.completada;
      this.tareas.splice(index, 1);
      this.tareas.unshift(tarea);
    } else {
      tarea.completada = !tarea.completada;
      this.tareas.splice(index, 1);
      this.tareas.push(tarea);
    }
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    console.log(this.tareas);
  }
}
