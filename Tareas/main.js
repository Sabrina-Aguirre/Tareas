const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
const { 
  CostoComplejidadMinima, 
  CostoComplejidadMedia, 
  CostoComplejidadMaxima 
} = require("./CostoComplejo");

const t1 = new Tarea("1", 3, new CostoComplejidadMinima());
const t2 = new TareaCompuesta("2", 5, [
  new Tarea("2.1", 6, new CostoComplejidadMedia()),
  new TareaCompuesta("2.2", 8, [
    new Tarea("2.2.1", 3, new CostoComplejidadMaxima()),
    new Tarea("2.2.2", 4, new CostoComplejidadMinima()),
  ], new CostoComplejidadMedia()),
], new CostoComplejidadMaxima());

const t3 = new TareaCompuesta("3", 7, [
  new Tarea("3.1", 6, new CostoComplejidadMedia()),
  new Tarea("3.2", 3, new CostoComplejidadMinima()),
  new Tarea("3.3", 5, new CostoComplejidadMaxima()),
  new Tarea("3.4", 4, new CostoComplejidadMinima()) // Más de 3 subtareas => overhead del 4%
], new CostoComplejidadMaxima());

proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);

proyecto.mostrarTareas();
console.log(`Duración Total del Proyecto: ${proyecto.getDuracion()}`);
console.log(`Costo Total del Proyecto: ${proyecto.getCostoTotal().toFixed(2)}`);
