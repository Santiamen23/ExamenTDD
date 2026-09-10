import obtenerDescuentoCategoria from "./descuentoCategoria.js";

describe("obtenerDescuentoCategoria", () => {
  it.each([
    ["Alimentos", 0.02],
    ["Bebidas alcohólicas", 0],
    ["Material de escritorio", 0.015],
    ["Muebles", 0],
    ["Electrónicos", 0.01],
    ["Vestimenta", 0],
    ["Varios", 0],
  ])(
    "para la categoría %s devuelve un descuento de %s",
    (categoria, descuento) => {
      expect(obtenerDescuentoCategoria(categoria)).toBe(descuento);
    }
  );
});
