import { CATEGORIAS, CATEGORIA_POR_DEFECTO } from "./categoria.js";

describe("selección de categoría", () => {
  it("contiene exactamente las categorías disponibles", () => {
    expect(CATEGORIAS).toEqual([
      "Alimentos",
      "Bebidas alcohólicas",
      "Material de escritorio",
      "Muebles",
      "Electrónicos",
      "Vestimenta",
      "Varios",
    ]);
  });

  it("usa Varios como categoría por defecto", () => {
    expect(CATEGORIA_POR_DEFECTO).toBe("Varios");
  });
});
