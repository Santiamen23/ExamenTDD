import { obtenerTarifaEnvio } from "./envio.js";

describe("tarifa de envío por unidad", () => {
  it.each([
    [8, 0],
    [15, 3.5],
    [30, 5],
    [80, 6],
    [81, 6.5],
    [150, 8],
    [250, 9],
  ])("para un peso de %s devuelve una tarifa de %s", (peso, tarifa) => {
    expect(obtenerTarifaEnvio(peso)).toBe(tarifa);
  });
});
