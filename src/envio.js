import conservarPesoVolumetrico from "./pesoVolumetrico.js";

function obtenerTarifaEnvio(pesoVolumetrico) {
  const peso = conservarPesoVolumetrico(pesoVolumetrico);

  if (peso <= 10) {
    return 0;
  }

  if (peso <= 20) {
    return 3.5;
  }

  if (peso <= 40) {
    return 5;
  }

  if (peso <= 80) {
    return 6;
  }

  if (peso <= 100) {
    return 6.5;
  }

  if (peso <= 200) {
    return 8;
  }

  return 9;
}

function calcularCostoEnvio(cantidad, pesoVolumetrico) {
  return cantidad * obtenerTarifaEnvio(pesoVolumetrico);
}

export { obtenerTarifaEnvio, calcularCostoEnvio };
