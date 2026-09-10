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

const cantidad = document.querySelector("#cantidad");
const precioUnitario = document.querySelector("#precio-unitario");
const pesoVolumetrico = document.querySelector("#peso-volumetrico");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const tipoCliente = document.querySelector("#tipo-cliente");
const form = document.querySelector("#compra-form");
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

estado.value = ESTADO_POR_DEFECTO;
categoria.value = CATEGORIA_POR_DEFECTO;
tipoCliente.value = TIPO_CLIENTE_POR_DEFECTO;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadIngresada = Number(cantidad.value);
  const pesoIngresado = conservarPesoVolumetrico(
    Number(pesoVolumetrico.value)
  );
  const precioNeto = calcularPrecioNeto(
    cantidadIngresada,
    Number(precioUnitario.value)
  );

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
});
