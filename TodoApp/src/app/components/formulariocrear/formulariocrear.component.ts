import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-formulariocrear',
  templateUrl: './formulariocrear.component.html',
  styleUrls: ['./formulariocrear.component.css']
})
export class FormulariocrearComponent implements OnInit {

  /* 
    Recibe la lista de tareas creada en main para poder agregar mas elementos a la lista
  */
  @Input() tareas:Tarea[] = [];
  constructor() { }
  
  descripcion = "";
  ngOnInit(): void {}

  //Crea una nueva tarea y la agrega a la lista
  crearTarea() {
    let tarea:Tarea = {
      descripcion: this.descripcion,
      completada: false
    };
    this.tareas.push(tarea);
    this.descripcion = "";
    console.log(this.tareas);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

}
