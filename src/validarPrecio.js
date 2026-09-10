import { esNumeroPositivo } from "./validarCantidad.js";

function validarPrecio(precio) {
  return esNumeroPositivo(precio);
}

export default validarPrecio;
