import obtenerDescuentoEspecial from "./beneficioEspecial.js";

describe("obtenerDescuentoEspecial", () => {
  it.each([
    ["Recurrente", 3000, "Alimentos", 0],
    ["Recurrente", 3000.01, "Alimentos", 100],
    ["Recurrente", 5000, "Alimentos", 100],
    ["Normal", 5000, "Alimentos", 0],
    ["Especial", 5000, "Alimentos", 0],
    ["Recurrente", 5000, "Electrónicos", 0],
    ["Recurrente", 5000, "Varios", 0],
  ])(
    "para %s, precio %s y categoría %s devuelve %s",
    (tipoCliente, precioNeto, categoria, descuento) => {
      expect(
        obtenerDescuentoEspecial(tipoCliente, precioNeto, categoria)
      ).toBe(descuento);
    }
  );

  it("aplica 200 a Especial con más de 7000 en Electrónicos", () => {
    expect(
      obtenerDescuentoEspecial("Especial", 7000.01, "Electrónicos")
    ).toBe(200);
  });

  it("aplica 200 a Especial con 10000 en Electrónicos", () => {
    expect(
      obtenerDescuentoEspecial("Especial", 10000, "Electrónicos")
    ).toBe(200);
  });

  it("no aplica en el límite de 7000", () => {
    expect(
      obtenerDescuentoEspecial("Especial", 7000, "Electrónicos")
    ).toBe(0);
  });

  it("no aplica a Normal en Electrónicos", () => {
    expect(
      obtenerDescuentoEspecial("Normal", 10000, "Electrónicos")
    ).toBe(0);
  });

  it("no aplica a Recurrente en Electrónicos", () => {
    expect(
      obtenerDescuentoEspecial("Recurrente", 10000, "Electrónicos")
    ).toBe(0);
  });

  it("no aplica a Especial en Alimentos", () => {
    expect(
      obtenerDescuentoEspecial("Especial", 10000, "Alimentos")
    ).toBe(0);
  });

  it("no aplica a Especial en Varios", () => {
    expect(
      obtenerDescuentoEspecial("Especial", 10000, "Varios")
    ).toBe(0);
  });
});
