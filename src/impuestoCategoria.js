const IMPUESTOS_ADICIONALES_POR_CATEGORIA = {
  Alimentos: 0,
  "Bebidas alcohólicas": 0.07,
  "Material de escritorio": 0,
  Muebles: 0.03,
  Electrónicos: 0.04,
  Vestimenta: 0.02,
  Varios: 0,
};

function obtenerImpuestoAdicionalCategoria(categoria) {
  return IMPUESTOS_ADICIONALES_POR_CATEGORIA[categoria];
}

export default obtenerImpuestoAdicionalCategoria;
