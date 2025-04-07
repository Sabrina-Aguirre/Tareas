const COSTO_POR_UNIDAD_DE_TIEMPO = 100; // Valor común para todas las tareas

// Interfaz base para todas las complejidades
class CostoComplejo {
  calcularCosto(duracion) {
    throw new Error("Método calcularCosto debe ser implementado");
  }
}

//  para complejidad mínima (sin extra)
class CostoComplejidadMinima extends CostoComplejo {
  calcularCosto(duracion) {
    return duracion * COSTO_POR_UNIDAD_DE_TIEMPO;
  }
}

//  para complejidad media (+5% extra)
class CostoComplejidadMedia extends CostoComplejo {
  calcularCosto(duracion) {
    return duracion * COSTO_POR_UNIDAD_DE_TIEMPO * 1.05;
  }
}

// para complejidad máxima (7% o más dependiendo de la duración)
class CostoComplejidadMaxima extends CostoComplejo {
    calcularCosto(duracion) {
        let costoBase = duracion * COSTO_POR_UNIDAD_DE_TIEMPO;
        let extra = 0.07; // 7% extra por defecto
    
        if (duracion > 10) {
          let diasExtra = (duracion - 10) / 24; 
    
          // Si tiene parte decimal, redondeamos hacia arriba manualmente
          if (diasExtra % 1 !== 0) {
              diasExtra = parseInt(diasExtra) + 1;
          }
    
          extra += diasExtra * (1000 / costoBase);
        }
    
        return costoBase * (1 + extra);
      }
}


module.exports = {
  CostoComplejidadMinima,
  CostoComplejidadMedia,
  CostoComplejidadMaxima
};
