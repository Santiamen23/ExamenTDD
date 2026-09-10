import obtenerImpuestoAdicionalCategoria from "./impuestoCategoria.js";

describe("obtenerImpuestoAdicionalCategoria", () => {
  it.each([
    ["Alimentos", 0],
    ["Bebidas alcohólicas", 0.07],
    ["Material de escritorio", 0],
    ["Muebles", 0.03],
    ["Electrónicos", 0.04],
    ["Vestimenta", 0.02],
    ["Varios", 0],
  ])(
    "para la categoría %s devuelve un impuesto adicional de %s",
    (categoria, tasa) => {
      expect(obtenerImpuestoAdicionalCategoria(categoria)).toBe(tasa);
    }
  );
});
