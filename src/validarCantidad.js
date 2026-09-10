function validarCantidad(cantidad) {
  return typeof cantidad === "number" && Number.isFinite(cantidad) && cantidad > 0;
}

export default validarCantidad;
