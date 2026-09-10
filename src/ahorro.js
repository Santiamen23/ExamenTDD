function calcularMontoTotalAhorrado(detalle) {
  return (
    detalle.montoDescuentoPorcentual +
    detalle.descuentoFijoEspecial +
    detalle.descuentoEnvio
  );
}

export default calcularMontoTotalAhorrado;
