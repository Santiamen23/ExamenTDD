import validarCantidad from "./validarCantidad.js";

describe("validarCantidad", () => {
  it.each([
    [0, false],
    [-1, false],
    [-10, false],
    ["no numérico", false],
    [1, true],
    [5, true],
  ])("para %s devuelve válido igual a %s", (cantidad, valido) => {
    const valor = cantidad === "no numérico" ? "abc" : cantidad;

    expect(validarCantidad(valor)).toBe(valido);
  });
});
