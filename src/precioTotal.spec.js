import calcularPrecioTotal from "./precioTotal.js";

describe("calcularPrecioTotal", () => {
  it("calcula una compra simple sin descuentos ni envío", () => {
    expect(
      calcularPrecioTotal({
        cantidad: 1,
        precioUnitario: 100,
        estado: "AL",
        categoria: "Varios",
        pesoVolumetrico: 8,
        tipoCliente: "Normal",
      })
    ).toBe(104);
  });

  it("integra un descuento por monto", () => {
    expect(
      calcularPrecioTotal({
        cantidad: 10,
        precioUnitario: 100,
        estado: "AL",
        categoria: "Varios",
        pesoVolumetrico: 8,
        tipoCliente: "Normal",
      })
    ).toBe(1008.8);
  });

  it("integra el descuento de categoría", () => {
    expect(
      calcularPrecioTotal({
        cantidad: 1,
        precioUnitario: 1000,
        estado: "AL",
        categoria: "Alimentos",
        pesoVolumetrico: 15,
        tipoCliente: "Normal",
      })
    ).toBe(991.5);
  });

  it("integra el beneficio de Recurrente en Alimentos", () => {
    expect(
      calcularPrecioTotal({
        cantidad: 4,
        precioUnitario: 1000,
        estado: "CA",
        categoria: "Alimentos",
        pesoVolumetrico: 15,
        tipoCliente: "Recurrente",
      })
    ).toBe(3932.58);
  });

  it("integra el beneficio de Especial en Electrónicos", () => {
    expect(
      calcularPrecioTotal({
        cantidad: 8,
        precioUnitario: 1000,
        estado: "CA",
        categoria: "Electrónicos",
        pesoVolumetrico: 81,
        tipoCliente: "Especial",
      })
    ).toBeCloseTo(8088.32, 2);
  });
});
