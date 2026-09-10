import generarTextoDetalle from "./textoDetalle.js";

describe("generarTextoDetalle", () => {
  it("incluye el precio neto y el total", () => {
    const texto = generarTextoDetalle({
      precioNeto: 1000,
      montoDescuentoPorcentual: 30,
      descuentoFijoEspecial: 0,
      descuentoEnvio: 0,
      impuestos: 38.8,
      envioFinal: 0,
      precioTotal: 1008.8,
    });

    expect(texto).toContain("Precio neto: 1000");
    expect(texto).toContain("Precio total: 1008.8");
  });

  it("incluye descuentos, impuestos y envío", () => {
    const texto = generarTextoDetalle({
      precioNeto: 4000,
      montoDescuentoPorcentual: 280,
      descuentoFijoEspecial: 100,
      descuentoEnvio: 0.07,
      impuestos: 298.65,
      envioFinal: 13.93,
      precioTotal: 3932.58,
    });

    expect(texto).toContain("Descuento porcentual: 280");
    expect(texto).toContain("Descuento fijo: 100");
    expect(texto).toContain("Impuestos: 298.65");
    expect(texto).toContain("Envío final: 13.93");
  });
});
