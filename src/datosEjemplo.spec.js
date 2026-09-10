import obtenerDatosEjemplo from "./datosEjemplo.js";
import validarCantidad from "./validarCantidad.js";
import validarPrecio from "./validarPrecio.js";
import validarPesoVolumetrico from "./validarPesoVolumetrico.js";
import validarInformacionRequerida from "./validarInformacionRequerida.js";
import calcularPrecioTotal from "./precioTotal.js";

describe("obtenerDatosEjemplo", () => {
  it("devuelve un conjunto de datos de compra", () => {
    expect(obtenerDatosEjemplo()).toEqual({
      cantidad: 2,
      precioUnitario: 150,
      pesoVolumetrico: 15,
      estado: "CA",
      categoria: "Alimentos",
      tipoCliente: "Recurrente",
    });
  });

  it("devuelve datos que pasan validaciones y producen un total", () => {
    const datos = obtenerDatosEjemplo();

    expect(validarCantidad(datos.cantidad)).toBe(true);
    expect(validarPrecio(datos.precioUnitario)).toBe(true);
    expect(validarPesoVolumetrico(datos.pesoVolumetrico)).toBe(true);
    expect(validarInformacionRequerida(datos).valido).toBe(true);
    expect(calcularPrecioTotal(datos)).toBeGreaterThan(0);
  });
});
