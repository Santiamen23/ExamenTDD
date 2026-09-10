import formatearMoneda from "./formatearMoneda.js";

describe("formatearMoneda", () => {
  it("formatea cero con dos decimales", () => {
    expect(formatearMoneda(0)).toBe("0.00");
  });

  it("formatea enteros y decimales", () => {
    expect(formatearMoneda(5)).toBe("5.00");
    expect(formatearMoneda(17.5)).toBe("17.50");
  });

  it("redondea valores con más de dos decimales", () => {
    expect(formatearMoneda(99.999)).toBe("100.00");
  });
});
