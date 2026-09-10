import calcularPrecioNeto from "./precioNeto.js";
import obtenerTasaDescuento from "./descuento.js";
import obtenerDescuentoCategoria from "./descuentoCategoria.js";
import obtenerDescuentoEspecial from "./beneficioEspecial.js";
import obtenerTasaImpuesto from "./impuesto.js";
import obtenerImpuestoAdicionalCategoria from "./impuestoCategoria.js";
import { calcularCostoEnvio } from "./envio.js";
import { calcularDescuentoEnvio } from "./descuentoEnvio.js";

function calcularPrecioTotal({
  cantidad,
  precioUnitario,
  estado,
  categoria,
  pesoVolumetrico,
  tipoCliente,
}) {
  const precioNeto = calcularPrecioNeto(cantidad, precioUnitario);
  const tasaDescuentoBase = obtenerTasaDescuento(precioNeto);
  const tasaDescuentoCategoria = obtenerDescuentoCategoria(categoria);
  const descuentoPorcentual =
    precioNeto * (tasaDescuentoBase + tasaDescuentoCategoria);
  const precioTrasDescuentos = precioNeto - descuentoPorcentual;
  const descuentoFijoEspecial = obtenerDescuentoEspecial(
    tipoCliente,
    precioNeto,
    categoria
  );
  const baseImponible = precioTrasDescuentos - descuentoFijoEspecial;
  const tasaImpuestoEstado = obtenerTasaImpuesto(estado);
  const tasaImpuestoCategoria =
    obtenerImpuestoAdicionalCategoria(categoria);
  const impuestos =
    baseImponible * (tasaImpuestoEstado + tasaImpuestoCategoria);
  const envioBase = calcularCostoEnvio(cantidad, pesoVolumetrico);
  const descuentoEnvio = calcularDescuentoEnvio(envioBase, tipoCliente);
  const envioFinal = envioBase - descuentoEnvio;

  return baseImponible + impuestos + envioFinal;
}

export default calcularPrecioTotal;
