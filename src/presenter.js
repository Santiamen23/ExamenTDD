import calcularPrecioNeto from "./precioNeto.js";
import obtenerTasaDescuento from "./descuento.js";
import { ESTADO_POR_DEFECTO } from "./estado.js";
import obtenerTasaImpuesto from "./impuesto.js";
import { CATEGORIA_POR_DEFECTO } from "./categoria.js";
import obtenerDescuentoCategoria from "./descuentoCategoria.js";
import obtenerImpuestoAdicionalCategoria from "./impuestoCategoria.js";
import conservarPesoVolumetrico from "./pesoVolumetrico.js";
import { obtenerTarifaEnvio, calcularCostoEnvio } from "./envio.js";
import { TIPO_CLIENTE_POR_DEFECTO } from "./tipoCliente.js";
import {
  calcularDescuentoEnvio,
  calcularEnvioFinal,
} from "./descuentoEnvio.js";
import obtenerDescuentoEspecial from "./beneficioEspecial.js";
import calcularPrecioTotal from "./precioTotal.js";
import crearDetalleVenta from "./detalleVenta.js";
import validarCantidad from "./validarCantidad.js";
import validarPrecio from "./validarPrecio.js";
import validarPesoVolumetrico from "./validarPesoVolumetrico.js";
import validarInformacionRequerida from "./validarInformacionRequerida.js";
import reiniciarCompra from "./limpiarCompra.js";
import calcularMontoTotalAhorrado from "./ahorro.js";

const cantidad = document.querySelector("#cantidad");
const errorCantidad = document.querySelector("#error-cantidad");
const precioUnitario = document.querySelector("#precio-unitario");
const errorPrecio = document.querySelector("#error-precio");
const pesoVolumetrico = document.querySelector("#peso-volumetrico");
const errorPeso = document.querySelector("#error-peso");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const tipoCliente = document.querySelector("#tipo-cliente");
const form = document.querySelector("#compra-form");
const cancelarButton = document.querySelector("#cancelar-button");
const resultadoPrecioNeto = document.querySelector("#resultado-precio-neto");
const resultadoDescuento = document.querySelector("#resultado-descuento");
const resultadoImpuesto = document.querySelector("#resultado-impuesto");
const resultadoDescuentoCategoria = document.querySelector(
  "#resultado-descuento-categoria"
);
const resultadoImpuestoCategoria = document.querySelector(
  "#resultado-impuesto-categoria"
);
const resultadoTarifaEnvio = document.querySelector("#resultado-tarifa-envio");
const resultadoCostoEnvio = document.querySelector("#resultado-costo-envio");
const resultadoDescuentoEnvio = document.querySelector(
  "#resultado-descuento-envio"
);
const resultadoEnvioFinal = document.querySelector("#resultado-envio-final");
const resultadoDescuentoEspecial = document.querySelector(
  "#resultado-descuento-especial"
);
const resultadoPrecioTotal = document.querySelector("#resultado-precio-total");
const resultadoAhorro = document.querySelector("#resultado-ahorro");
const errorInformacion = document.querySelector("#error-informacion");
const detalleCalculo = document.querySelector("#detalle-calculo");

estado.value = ESTADO_POR_DEFECTO;
categoria.value = CATEGORIA_POR_DEFECTO;
tipoCliente.value = TIPO_CLIENTE_POR_DEFECTO;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadIngresada = Number(cantidad.value);
  const precioUnitarioIngresado = Number(precioUnitario.value);
  const pesoIngresado = conservarPesoVolumetrico(
    Number(pesoVolumetrico.value)
  );
  const precioNeto = calcularPrecioNeto(
    cantidadIngresada,
    precioUnitarioIngresado
  );

  errorCantidad.textContent = validarCantidad(cantidadIngresada)
    ? ""
    : "Cantidad inválida";
  errorPrecio.textContent = validarPrecio(precioUnitarioIngresado)
    ? ""
    : "Precio inválido";
  errorPeso.textContent = validarPesoVolumetrico(pesoIngresado)
    ? ""
    : "Peso volumétrico inválido";
  resultadoPrecioNeto.textContent = precioNeto;
  resultadoDescuento.textContent = obtenerTasaDescuento(precioNeto);
  resultadoImpuesto.textContent = obtenerTasaImpuesto(estado.value);
  resultadoDescuentoCategoria.textContent = obtenerDescuentoCategoria(
    categoria.value
  );
  resultadoImpuestoCategoria.textContent =
    obtenerImpuestoAdicionalCategoria(categoria.value);
  resultadoTarifaEnvio.textContent = obtenerTarifaEnvio(pesoIngresado);
  const envioBase = calcularCostoEnvio(
    cantidadIngresada,
    pesoIngresado
  );
  resultadoCostoEnvio.textContent = envioBase;
  resultadoDescuentoEnvio.textContent = calcularDescuentoEnvio(
    envioBase,
    tipoCliente.value
  );
  resultadoEnvioFinal.textContent = calcularEnvioFinal(
    envioBase,
    tipoCliente.value
  );
  resultadoDescuentoEspecial.textContent = obtenerDescuentoEspecial(
    tipoCliente.value,
    precioNeto,
    categoria.value
  );
  const datosVenta = {
    cantidad: cantidadIngresada,
    precioUnitario: precioUnitarioIngresado,
    estado: estado.value,
    categoria: categoria.value,
    pesoVolumetrico: pesoIngresado,
    tipoCliente: tipoCliente.value,
  };
  const validacionInformacion = validarInformacionRequerida(datosVenta);
  errorInformacion.textContent = validacionInformacion.valido
    ? ""
    : `Falta: ${validacionInformacion.faltantes.join(", ")}`;
  resultadoPrecioTotal.textContent = calcularPrecioTotal(datosVenta);
  const detalle = crearDetalleVenta(datosVenta);
  resultadoAhorro.textContent = calcularMontoTotalAhorrado(detalle);
  detalleCalculo.textContent = JSON.stringify(detalle);
});

cancelarButton.addEventListener("click", () => {
  const estadoInicial = reiniciarCompra();

  cantidad.value = estadoInicial.cantidad;
  precioUnitario.value = estadoInicial.precioUnitario;
  pesoVolumetrico.value = estadoInicial.pesoVolumetrico;
  estado.value = estadoInicial.estado;
  categoria.value = estadoInicial.categoria;
  tipoCliente.value = estadoInicial.tipoCliente;

  [
    resultadoPrecioNeto,
    resultadoDescuento,
    resultadoImpuesto,
    resultadoDescuentoCategoria,
    resultadoImpuestoCategoria,
    resultadoTarifaEnvio,
    resultadoCostoEnvio,
    resultadoDescuentoEnvio,
    resultadoEnvioFinal,
    resultadoDescuentoEspecial,
    resultadoPrecioTotal,
    resultadoAhorro,
    errorCantidad,
    errorPrecio,
    errorPeso,
    errorInformacion,
    detalleCalculo,
  ].forEach((elemento) => {
    elemento.textContent = "";
  });
});
