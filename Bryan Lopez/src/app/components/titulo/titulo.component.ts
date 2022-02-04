import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  //guarda la fecha en formato cadena dd/mm/yyyy 
  fecha:string = "";

  constructor() { }

  ngOnInit(): void {
    this.fecha = this.obtenerFecha();
  }

  //Retorna el numero recibido pero formateado a dos digitos
  aDosDigitos(num:Number) {
    return num.toString().padStart(2, '0');
  }

  //Retorna la fecha como cadena que será utilizada en el parámetro
  obtenerFecha() {
    let date =  new Date();
    return [
      this.aDosDigitos(date.getDate()),
      this.aDosDigitos(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

}
