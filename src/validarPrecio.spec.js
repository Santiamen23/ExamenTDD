import validarPrecio from "./validarPrecio.js";

describe("validarPrecio", () => {
  it.each([
    [0, false],
    [-1, false],
    [-50.25, false],
    ["no numérico", false],
    [0.01, true],
    [10, true],
    [19.99, true],
  ])("para %s devuelve válido igual a %s", (precio, valido) => {
    const valor = precio === "no numérico" ? "abc" : precio;

    expect(validarPrecio(valor)).toBe(valido);
  });
});
