import reiniciarCompra from "./limpiarCompra.js";

describe("reiniciarCompra", () => {
  it("restaura los datos y resultados iniciales", () => {
    const estadoModificado = {
      cantidad: 4,
      precioUnitario: 1000,
      pesoVolumetrico: 15,
      estado: "UT",
      categoria: "Electrónicos",
      tipoCliente: "Especial",
      resultados: {
        precioTotal: 8088.32,
        envioFinal: 51.22,
      },
    };

    expect(reiniciarCompra(estadoModificado)).toEqual({
      cantidad: "",
      precioUnitario: "",
      pesoVolumetrico: "",
      estado: "CA",
      categoria: "Varios",
      tipoCliente: "Normal",
      resultados: {},
    });
  });

  it("devuelve un estado inicial nuevo", () => {
    const primerEstado = reiniciarCompra();
    const segundoEstado = reiniciarCompra();

    expect(primerEstado).not.toBe(segundoEstado);
    expect(primerEstado).toEqual(segundoEstado);
  });
});
