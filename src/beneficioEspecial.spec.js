import obtenerDescuentoEspecial from "./beneficioEspecial.js";

describe("obtenerDescuentoEspecial", () => {
  it.each([
    ["Recurrente", 3000, "Alimentos", 0],
    ["Recurrente", 3000.01, "Alimentos", 100],
    ["Recurrente", 5000, "Alimentos", 100],
    ["Normal", 5000, "Alimentos", 0],
    ["Especial", 5000, "Alimentos", 0],
    ["Recurrente", 5000, "Electrónicos", 0],
    ["Recurrente", 5000, "Varios", 0],
  ])(
    "para %s, precio %s y categoría %s devuelve %s",
    (tipoCliente, precioNeto, categoria, descuento) => {
      expect(
        obtenerDescuentoEspecial(tipoCliente, precioNeto, categoria)
      ).toBe(descuento);
    }
  );
});
