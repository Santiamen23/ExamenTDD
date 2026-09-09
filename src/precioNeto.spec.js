import calcularPrecioNeto from "./precioNeto.js";

describe("calcularPrecioNeto", () => {
  it("calcula el precio neto para una cantidad y precio unitario", () => {
    expect(calcularPrecioNeto(5, 100)).toBe(500);
  });

  it("calcula el precio neto con precios decimales", () => {
    expect(calcularPrecioNeto(3, 19.99)).toBeCloseTo(59.97, 2);
  });
});
