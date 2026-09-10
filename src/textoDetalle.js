function generarTextoDetalle(detalle) {
  return [
    `Precio neto: ${detalle.precioNeto}`,
    `Descuento porcentual: ${detalle.montoDescuentoPorcentual}`,
    `Descuento fijo: ${detalle.descuentoFijoEspecial}`,
    `Descuento de envío: ${detalle.descuentoEnvio}`,
    `Impuestos: ${detalle.impuestos}`,
    `Envío final: ${detalle.envioFinal}`,
    `Precio total: ${detalle.precioTotal}`,
  ].join("\n");
}

export default generarTextoDetalle;
