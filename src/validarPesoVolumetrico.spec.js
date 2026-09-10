import validarPesoVolumetrico from "./validarPesoVolumetrico.js";

describe("validarPesoVolumetrico", () => {
  it.each([
    [0, true],
    [1, true],
    [10, true],
    [15.5, true],
    [-1, false],
    [-10, false],
    ["no numérico", false],
  ])("para %s devuelve válido igual a %s", (peso, valido) => {
    const valor = peso === "no numérico" ? "abc" : peso;

    expect(validarPesoVolumetrico(valor)).toBe(valido);
  });
});
