const TASAS_IMPUESTO = {
  UT: 0.0665,
  NV: 0.08,
  TX: 0.0625,
  AL: 0.04,
  CA: 0.0825,
};

function obtenerTasaImpuesto(estado) {
  return TASAS_IMPUESTO[estado];
}

export default obtenerTasaImpuesto;
