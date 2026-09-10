import {
  obtenerTasaDescuentoEnvio,
  calcularDescuentoEnvio,
  calcularEnvioFinal,
} from "./descuentoEnvio.js";

describe("obtenerTasaDescuentoEnvio", () => {
  it.each([
    ["Normal", 0],
    ["Recurrente", 0.005],
    ["Antiguo Recurrente", 0.01],
    ["Especial", 0.015],
  ])("para %s devuelve una tasa de %s", (tipoCliente, tasa) => {
    expect(obtenerTasaDescuentoEnvio(tipoCliente)).toBe(tasa);
  });
});

describe("cálculo del descuento y envío final", () => {
  it.each([
    ["Normal", 100, 0, 100],
    ["Recurrente", 100, 0.5, 99.5],
    ["Antiguo Recurrente", 100, 1, 99],
    ["Especial", 100, 1.5, 98.5],
    ["Normal", 250, 0, 250],
    ["Recurrente", 250, 1.25, 248.75],
    ["Antiguo Recurrente", 250, 2.5, 247.5],
    ["Especial", 250, 3.75, 246.25],
  ])(
    "para %s y un envío de %s calcula descuento %s y final %s",
    (tipoCliente, envioBase, descuento, envioFinal) => {
      expect(calcularDescuentoEnvio(envioBase, tipoCliente)).toBe(descuento);
      expect(calcularEnvioFinal(envioBase, tipoCliente)).toBe(envioFinal);
    }
  );
});
