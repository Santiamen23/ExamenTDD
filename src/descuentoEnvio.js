const TASAS_DESCUENTO_ENVIO = {
  Normal: 0,
  Recurrente: 0.005,
  "Antiguo Recurrente": 0.01,
  Especial: 0.015,
};

function obtenerTasaDescuentoEnvio(tipoCliente) {
  return TASAS_DESCUENTO_ENVIO[tipoCliente];
}

function calcularDescuentoEnvio(envioBase, tipoCliente) {
  return envioBase * obtenerTasaDescuentoEnvio(tipoCliente);
}

function calcularEnvioFinal(envioBase, tipoCliente) {
  return envioBase - calcularDescuentoEnvio(envioBase, tipoCliente);
}

export {
  obtenerTasaDescuentoEnvio,
  calcularDescuentoEnvio,
  calcularEnvioFinal,
};
