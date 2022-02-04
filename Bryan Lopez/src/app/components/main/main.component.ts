import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tareas:Tarea[] = []
  tarea:Tarea = {
    descripcion: "",
    completada: false
  };

  constructor() { }

  ngOnInit(): void {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
  }

}
