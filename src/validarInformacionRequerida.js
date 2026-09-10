const CAMPOS_REQUERIDOS = [
  "cantidad",
  "precioUnitario",
  "pesoVolumetrico",
  "estado",
  "categoria",
  "tipoCliente",
];

function estaFaltante(valor) {
  return (
    valor === undefined ||
    valor === null ||
    valor === "" ||
    (typeof valor === "number" && Number.isNaN(valor))
  );
}

function validarInformacionRequerida(datos) {
  const faltantes = CAMPOS_REQUERIDOS.filter((campo) =>
    estaFaltante(datos[campo])
  );

  return {
    valido: faltantes.length === 0,
    faltantes,
  };
}

export default validarInformacionRequerida;
