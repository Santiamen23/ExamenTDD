import obtenerTasaDescuento from "./descuento.js";

describe("obtenerTasaDescuento", () => {
  it.each([
    [999.99, 0],
    [1000, 0.03],
    [2999.99, 0.03],
    [3000, 0.05],
    [6999.99, 0.05],
    [7000, 0.07],
    [9999.99, 0.07],
    [10000, 0.1],
    [29999.99, 0.1],
    [30000, 0.15],
  ])("para un precio neto de %s devuelve %s", (precioNeto, tasa) => {
    expect(obtenerTasaDescuento(precioNeto)).toBe(tasa);
  });
});
