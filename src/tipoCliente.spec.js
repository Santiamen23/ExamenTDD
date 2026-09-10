import {
  TIPOS_CLIENTE,
  TIPO_CLIENTE_POR_DEFECTO,
} from "./tipoCliente.js";

describe("selección de tipo de cliente", () => {
  it("contiene exactamente los tipos disponibles", () => {
    expect(TIPOS_CLIENTE).toEqual([
      "Normal",
      "Recurrente",
      "Antiguo Recurrente",
      "Especial",
    ]);
  });

  it("usa Normal como tipo de cliente por defecto", () => {
    expect(TIPO_CLIENTE_POR_DEFECTO).toBe("Normal");
  });
});
