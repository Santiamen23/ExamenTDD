import formatearMoneda from "./formatearMoneda.js";

function formatearTasa(tasa) {
  return `${tasa * 100}%`;
}

function generarTextoDetalle(detalle) {
  return [
    "DETALLE DE LA COMPRA",
    `Cantidad: ${detalle.cantidad}`,
    `Precio por unidad: ${formatearMoneda(detalle.precioUnitario)}`,
    `Estado: ${detalle.estado}`,
    `Categoría: ${detalle.categoria}`,
    `Peso volumétrico por unidad: ${detalle.pesoVolumetrico}`,
    `Tipo de cliente: ${detalle.tipoCliente}`,
    `Precio neto: ${formatearMoneda(detalle.precioNeto)}`,
    `Tasa de descuento por monto: ${formatearTasa(
      detalle.tasaDescuentoBase
    )}`,
    `Tasa de descuento por categoría: ${formatearTasa(
      detalle.tasaDescuentoCategoria
    )}`,
    `Descuento porcentual: ${formatearMoneda(
      detalle.montoDescuentoPorcentual
    )}`,
    `Descuento fijo: ${formatearMoneda(detalle.descuentoFijoEspecial)}`,
    `Base imponible: ${formatearMoneda(detalle.baseImponible)}`,
    `Tasa de impuesto estatal: ${formatearTasa(
      detalle.tasaImpuestoEstado
    )}`,
    `Tasa de impuesto por categoría: ${formatearTasa(
      detalle.tasaImpuestoCategoria
    )}`,
    `Impuestos: ${formatearMoneda(detalle.impuestos)}`,
    `Tarifa de envío por unidad: ${formatearMoneda(detalle.tarifaEnvio)}`,
    `Envío base: ${formatearMoneda(detalle.envioBase)}`,
    `Descuento de envío: ${formatearMoneda(detalle.descuentoEnvio)}`,
    `Envío final: ${formatearMoneda(detalle.envioFinal)}`,
    `Precio total: ${formatearMoneda(detalle.precioTotal)}`,
  ].join("\n");
}

export default generarTextoDetalle;
