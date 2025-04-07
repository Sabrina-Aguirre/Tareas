class Tarea {
  constructor(codigo, duracion, costoComplejo) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.costoComplejo=costoComplejo;
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }
  getCosto() {
    return this.costoComplejo.calcularCosto(this.duracion);
  }
  
  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, tareas = [],costoComplejo) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.costoComplejo=costoComplejo;
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto() {
    let costoBase = this.costoComplejo.calcularCosto(this.duracion);
    let costoSubtareas = this.tareas.reduce((acum, tarea) => acum + tarea.getCosto(), 0);
    
    let costoFinal = costoBase + costoSubtareas;

    // Aplica 4% extra si tiene más de 3 subtareas directas
    if (this.tareas.length > 3) {
      costoFinal *= 1.04;
    }

    return costoFinal;
  }

 /* mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }*/

  mostrarTarea() {
    console.log(`Código: ${this.codigo} - Duración: ${this.getDuracion()} - Costo: ${this.getCosto().toFixed(2)}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}



module.exports = { Tarea, TareaCompuesta };
