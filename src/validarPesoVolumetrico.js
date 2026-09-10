function validarPesoVolumetrico(pesoVolumetrico) {
  return (
    typeof pesoVolumetrico === "number" &&
    Number.isFinite(pesoVolumetrico) &&
    pesoVolumetrico >= 0
  );
}

export default validarPesoVolumetrico;
