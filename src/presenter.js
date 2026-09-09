import calcularPrecioNeto from "./precioNeto.js";
import obtenerTasaDescuento from "./descuento.js";

const cantidad = document.querySelector("#cantidad");
const precioUnitario = document.querySelector("#precio-unitario");
const form = document.querySelector("#compra-form");
const resultadoPrecioNeto = document.querySelector("#resultado-precio-neto");
const resultadoDescuento = document.querySelector("#resultado-descuento");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precioNeto = calcularPrecioNeto(
    Number(cantidad.value),
    Number(precioUnitario.value)
  );

  resultadoPrecioNeto.textContent = precioNeto;
  resultadoDescuento.textContent = obtenerTasaDescuento(precioNeto);
});
