import conservarPesoVolumetrico from "./pesoVolumetrico.js";

describe("conservarPesoVolumetrico", () => {
  it("acepta un valor numérico de peso", () => {
    expect(typeof conservarPesoVolumetrico(15)).toBe("number");
  });

  it("conserva el peso recibido", () => {
    expect(conservarPesoVolumetrico(15)).toBe(15);
  });

  it("conserva valores decimales positivos", () => {
    expect(conservarPesoVolumetrico(15.5)).toBe(15.5);
  });
});
