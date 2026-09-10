import calcularMontoTotalAhorrado from "./ahorro.js";

describe("calcularMontoTotalAhorrado", () => {
  it("devuelve cero cuando no existen descuentos", () => {
    expect(
      calcularMontoTotalAhorrado({
        montoDescuentoPorcentual: 0,
        descuentoFijoEspecial: 0,
        descuentoEnvio: 0,
      })
    ).toBe(0);
  });

  it("suma el descuento porcentual por monto", () => {
    expect(
      calcularMontoTotalAhorrado({
        montoDescuentoPorcentual: 30,
        descuentoFijoEspecial: 0,
        descuentoEnvio: 0,
      })
    ).toBe(30);
  });

  it("suma el descuento porcentual de categoría", () => {
    expect(
      calcularMontoTotalAhorrado({
        montoDescuentoPorcentual: 20,
        descuentoFijoEspecial: 0,
        descuentoEnvio: 0,
      })
    ).toBe(20);
  });

  it("suma el descuento fijo especial", () => {
    expect(
      calcularMontoTotalAhorrado({
        montoDescuentoPorcentual: 0,
        descuentoFijoEspecial: 100,
        descuentoEnvio: 0,
      })
    ).toBe(100);
  });

  it("suma el descuento aplicado al envío", () => {
    expect(
      calcularMontoTotalAhorrado({
        montoDescuentoPorcentual: 0,
        descuentoFijoEspecial: 0,
        descuentoEnvio: 1.5,
      })
    ).toBe(1.5);
  });

  it("combina todos los descuentos", () => {
    expect(
      calcularMontoTotalAhorrado({
        montoDescuentoPorcentual: 100,
        descuentoFijoEspecial: 50,
        descuentoEnvio: 1.5,
      })
    ).toBe(151.5);
  });
});
