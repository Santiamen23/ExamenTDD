import validarInformacionRequerida from "./validarInformacionRequerida.js";

const datosCompletos = {
  cantidad: 2,
  precioUnitario: 10,
  pesoVolumetrico: 15,
  estado: "CA",
  categoria: "Varios",
  tipoCliente: "Normal",
};

describe("validarInformacionRequerida", () => {
  it("considera válidos los datos completos", () => {
    expect(validarInformacionRequerida(datosCompletos)).toEqual({
      valido: true,
      faltantes: [],
    });
  });

  it("detecta cuando falta la cantidad", () => {
    const resultado = validarInformacionRequerida({
      ...datosCompletos,
      cantidad: undefined,
    });

    expect(resultado.valido).toBe(false);
    expect(resultado.faltantes).toContain("cantidad");
  });

  it("detecta cuando falta el precio", () => {
    const resultado = validarInformacionRequerida({
      ...datosCompletos,
      precioUnitario: undefined,
    });

    expect(resultado.valido).toBe(false);
    expect(resultado.faltantes).toContain("precioUnitario");
  });

  it("detecta cuando falta el peso", () => {
    const resultado = validarInformacionRequerida({
      ...datosCompletos,
      pesoVolumetrico: undefined,
    });

    expect(resultado.valido).toBe(false);
    expect(resultado.faltantes).toContain("pesoVolumetrico");
  });

  it("detecta varios datos faltantes", () => {
    const resultado = validarInformacionRequerida({
      ...datosCompletos,
      cantidad: undefined,
      precioUnitario: "",
      pesoVolumetrico: undefined,
    });

    expect(resultado).toEqual({
      valido: false,
      faltantes: ["cantidad", "precioUnitario", "pesoVolumetrico"],
    });
  });
});
