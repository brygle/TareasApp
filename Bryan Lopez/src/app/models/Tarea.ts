/* 
    Sirve para modelar una tarea que cuenta con los siguientes atributos
        descripcion: almacena el nombre de la tarea
        completada: indica si la tarea ya fue completada o no
*/
export interface Tarea {
    descripcion: string;
    completada: boolean;
}