import { obtenerTarifaEnvio, calcularCostoEnvio } from "./envio.js";

describe("obtenerTarifaEnvio", () => {
  it.each([
    [0, 0],
    [10, 0],
    [11, 3.5],
    [20, 3.5],
    [21, 5],
    [40, 5],
    [41, 6],
    [80, 6],
    [81, 6.5],
    [100, 6.5],
    [101, 8],
    [200, 8],
    [201, 9],
    [250, 9],
  ])("para un peso de %s devuelve una tarifa de %s", (peso, tarifa) => {
    expect(obtenerTarifaEnvio(peso)).toBe(tarifa);
  });
});

describe("calcularCostoEnvio", () => {
  it.each([
    [5, 15, 17.5],
    [3, 30, 15],
    [4, 80, 24],
    [2, 81, 13],
    [10, 8, 0],
    [2, 250, 18],
  ])(
    "para una cantidad de %s y peso de %s devuelve un costo de %s",
    (cantidad, peso, costo) => {
      expect(calcularCostoEnvio(cantidad, peso)).toBe(costo);
    }
  );
});
