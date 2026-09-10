const ESTADO_INICIAL_COMPRA = {
  cantidad: "",
  precioUnitario: "",
  pesoVolumetrico: "",
  estado: "CA",
  categoria: "Varios",
  tipoCliente: "Normal",
  resultados: {},
};

function reiniciarCompra() {
  return {
    ...ESTADO_INICIAL_COMPRA,
    resultados: {},
  };
}

export default reiniciarCompra;
