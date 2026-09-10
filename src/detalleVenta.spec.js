import crearDetalleVenta from "./detalleVenta.js";

describe("crearDetalleVenta", () => {
  it("devuelve el detalle completo de una venta", () => {
    const detalle = crearDetalleVenta({
      cantidad: 4,
      precioUnitario: 1000,
      estado: "CA",
      categoria: "Alimentos",
      pesoVolumetrico: 15,
      tipoCliente: "Recurrente",
    });

    expect(detalle).toMatchObject({
      cantidad: 4,
      precioUnitario: 1000,
      precioNeto: 4000,
      tasaDescuentoBase: 0.05,
      tasaDescuentoCategoria: 0.02,
      montoDescuentoPorcentual: 280,
      descuentoFijoEspecial: 100,
      estado: "CA",
      tasaImpuestoEstado: 0.0825,
      categoria: "Alimentos",
      tasaImpuestoCategoria: 0,
      pesoVolumetrico: 15,
      tarifaEnvio: 3.5,
      envioBase: 14,
      tipoCliente: "Recurrente",
      descuentoEnvio: 0.07,
      envioFinal: 13.93,
    });
    expect(detalle.impuestos).toBeCloseTo(298.65, 2);
    expect(detalle.baseImponible).toBe(3620);
    expect(detalle.precioTotal).toBeCloseTo(3932.58, 2);
  });

  it("mantiene los valores de una compra simple", () => {
    const detalle = crearDetalleVenta({
      cantidad: 1,
      precioUnitario: 100,
      estado: "AL",
      categoria: "Varios",
      pesoVolumetrico: 8,
      tipoCliente: "Normal",
    });

    expect(detalle).toMatchObject({
      cantidad: 1,
      precioUnitario: 100,
      precioNeto: 100,
      estado: "AL",
      categoria: "Varios",
      pesoVolumetrico: 8,
      tipoCliente: "Normal",
      envioBase: 0,
      descuentoEnvio: 0,
      envioFinal: 0,
      precioTotal: 104,
    });
  });
});
