import calcularPrecioNeto from "./precioNeto.js";
import obtenerTasaDescuento from "./descuento.js";
import { ESTADO_POR_DEFECTO } from "./estado.js";
import obtenerTasaImpuesto from "./impuesto.js";
import { CATEGORIA_POR_DEFECTO } from "./categoria.js";
import obtenerDescuentoCategoria from "./descuentoCategoria.js";

const cantidad = document.querySelector("#cantidad");
const precioUnitario = document.querySelector("#precio-unitario");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const form = document.querySelector("#compra-form");
const resultadoPrecioNeto = document.querySelector("#resultado-precio-neto");
const resultadoDescuento = document.querySelector("#resultado-descuento");
const resultadoImpuesto = document.querySelector("#resultado-impuesto");
const resultadoDescuentoCategoria = document.querySelector(
  "#resultado-descuento-categoria"
);

estado.value = ESTADO_POR_DEFECTO;
categoria.value = CATEGORIA_POR_DEFECTO;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precioNeto = calcularPrecioNeto(
    Number(cantidad.value),
    Number(precioUnitario.value)
  );

  resultadoPrecioNeto.textContent = precioNeto;
  resultadoDescuento.textContent = obtenerTasaDescuento(precioNeto);
  resultadoImpuesto.textContent = obtenerTasaImpuesto(estado.value);
  resultadoDescuentoCategoria.textContent = obtenerDescuentoCategoria(
    categoria.value
  );
});
