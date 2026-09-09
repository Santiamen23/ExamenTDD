import obtenerTasaImpuesto from "./impuesto.js";

describe("obtenerTasaImpuesto", () => {
  it.each([
    ["UT", 0.0665],
    ["NV", 0.08],
    ["TX", 0.0625],
    ["AL", 0.04],
    ["CA", 0.0825],
  ])("para el estado %s devuelve una tasa de %s", (estado, tasa) => {
    expect(obtenerTasaImpuesto(estado)).toBe(tasa);
  });
});
