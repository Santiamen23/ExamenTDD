const DESCUENTOS_POR_CATEGORIA = {
  Alimentos: 0.02,
  "Bebidas alcohólicas": 0,
  "Material de escritorio": 0.015,
  Muebles: 0,
  Electrónicos: 0.01,
  Vestimenta: 0,
  Varios: 0,
};

function obtenerDescuentoCategoria(categoria) {
  return DESCUENTOS_POR_CATEGORIA[categoria];
}

export default obtenerDescuentoCategoria;
