import calcularPrecioNeto from "./precioNeto.js";

const cantidad = document.querySelector("#cantidad");
const precioUnitario = document.querySelector("#precio-unitario");
const form = document.querySelector("#compra-form");
const resultadoPrecioNeto = document.querySelector("#resultado-precio-neto");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  resultadoPrecioNeto.textContent = calcularPrecioNeto(
    Number(cantidad.value),
    Number(precioUnitario.value)
  );
});
