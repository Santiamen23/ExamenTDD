function obtenerDescuentoEspecial(tipoCliente, precioNeto, categoria) {
  if (
    tipoCliente === "Recurrente" &&
    precioNeto > 3000 &&
    categoria === "Alimentos"
  ) {
    return 100;
  }

  return 0;
}

export default obtenerDescuentoEspecial;
