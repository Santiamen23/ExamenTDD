function esNumeroPositivo(cantidad) {
  return typeof cantidad === "number" && Number.isFinite(cantidad) && cantidad > 0;
}

function validarCantidad(cantidad) {
  return esNumeroPositivo(cantidad);
}

export { esNumeroPositivo };
export default validarCantidad;
