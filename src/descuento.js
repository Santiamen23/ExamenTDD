function obtenerTasaDescuento(precioNeto) {
  if (precioNeto >= 30000) {
    return 0.15;
  }

  if (precioNeto >= 10000) {
    return 0.1;
  }

  if (precioNeto >= 7000) {
    return 0.07;
  }

  if (precioNeto >= 3000) {
    return 0.05;
  }

  if (precioNeto >= 1000) {
    return 0.03;
  }

  return 0;
}

export default obtenerTasaDescuento;
