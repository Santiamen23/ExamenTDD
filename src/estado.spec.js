import { ESTADOS, ESTADO_POR_DEFECTO } from "./estado.js";

describe("selección de estado", () => {
  it("contiene exactamente los estados disponibles", () => {
    expect(ESTADOS).toEqual(["UT", "NV", "TX", "AL", "CA"]);
  });

  it("usa California como estado por defecto", () => {
    expect(ESTADO_POR_DEFECTO).toBe("CA");
  });
});
