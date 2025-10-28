// src/mock/AsyncService.jsx
// ============================================================
// 📦 Mock asíncrono sin imágenes con 30 productos mágicos.
// Simula una API devolviendo una lista de productos con categorías.
// ============================================================

export const productos = [
  // 🧙 ENTRADAS ------------------------------------------------
  { id: "01", name: "Sopa del Bosque Prohibido", description: "Hongos silvestres y esencia de roble.", stock: 12, price: 6200, category: "entrada" },
  { id: "02", name: "Pan de Calabaza Encantado", description: "Servido con mantequilla encantada y polvo de luna.", stock: 10, price: 4800, category: "entrada" },
  { id: "03", name: "Empanadas del Callejón Diagon", description: "Rellenas de queso de elfo y hierbas lunares.", stock: 15, price: 5600, category: "entrada" },
  { id: "04", name: "Brochetas de Dragón Bebé", description: "Picantes y mágicamente crujientes.", stock: 8, price: 8900, category: "entrada" },

  // 🍽️ PLATOS DE FONDO ----------------------------------------
  { id: "05", name: "Caldero de Estofado de Grifos", description: "Carne tierna con vegetales encantados.", stock: 9, price: 12800, category: "plato_fondo" },
  { id: "06", name: "Filete del Guardabosques", description: "Con salsa de cerveza de mantequilla.", stock: 7, price: 13900, category: "plato_fondo" },
  { id: "07", name: "Ravioles de Calabaza Dorada", description: "Rellenos de crema mágica de Hogwarts.", stock: 12, price: 9900, category: "plato_fondo" },
  { id: "08", name: "Torre de Pollo Hipogrifo", description: "Crujiente, acompañado con papas al hechizo.", stock: 11, price: 9500, category: "plato_fondo" },
  { id: "09", name: "Guiso del Ministerio", description: "Receta secreta, especiada y poderosa.", stock: 13, price: 10200, category: "plato_fondo" },
  { id: "10", name: "Pescado del Lago Negro", description: "A la plancha con hierbas del invernadero.", stock: 10, price: 11400, category: "plato_fondo" },

  // 🥗 VEGANOS -------------------------------------------------
  { id: "11", name: "Poción Verde Vegana", description: "Elixir de espinacas, jengibre y manzana.", stock: 8, price: 6200, category: "vegano" },
  { id: "12", name: "Hamburguesa de Mandrágora", description: "No grita, pero está deliciosa.", stock: 10, price: 8400, category: "vegano" },
  { id: "13", name: "Tarta de Setas Lunares", description: "Del bosque encantado, sin gluten.", stock: 6, price: 7900, category: "vegano" },
  { id: "14", name: "Ensalada Lumos", description: "Brilla levemente en la oscuridad.", stock: 9, price: 7200, category: "vegano" },

  // 🍰 POSTRES -------------------------------------------------
  { id: "15", name: "Pastel de Calabaza Encantado", description: "Suave, especiado y horneado con magia.", stock: 12, price: 5900, category: "postre" },
  { id: "16", name: "Tarta de Melaza de Hogwarts", description: "Clásico dulce británico de los magos.", stock: 14, price: 6000, category: "postre" },
  { id: "17", name: "Cupcakes del Torneo Trimagos", description: "Decorados con fuego azul y runas comestibles.", stock: 9, price: 5600, category: "postre" },
  { id: "18", name: "Brownie del Hechicero Supremo", description: "Oscuro y poderoso, con chispas de magia pura.", stock: 11, price: 6400, category: "postre" },
  { id: "19", name: "Helado de Patronus", description: "Brilla en la oscuridad al conjurarlo.", stock: 15, price: 5200, category: "postre" },
  { id: "20", name: "Chocolate de Ranas", description: "70% cacao, ¡cuidado si saltan!", stock: 20, price: 4900, category: "postre" },

  // 🧃 BEBIDAS -------------------------------------------------
  { id: "21", name: "Butterbeer Helada", description: "Espuma dorada y dulce, bebida icónica.", stock: 25, price: 5500, category: "bebida" },
  { id: "22", name: "Jugo de Calabaza Fría", description: "Favorito del Gran Comedor.", stock: 16, price: 4300, category: "bebida" },
  { id: "23", name: "Agua del Sauce Boxeador", description: "Con toque burbujeante y chispeante.", stock: 22, price: 3900, category: "bebida" },
  { id: "24", name: "Té del Invernadero", description: "Infusión de hierbas mágicas relajantes.", stock: 10, price: 3800, category: "bebida" },
  { id: "25", name: "Cerveza de Dragón", description: "Fuerte y chispeante, solo para adultos magos.", stock: 18, price: 5900, category: "bebida" },
  { id: "26", name: "Limonada Encantada", description: "Brilla al moverla, con azúcar de duende.", stock: 17, price: 4500, category: "bebida" },

  // 🍲 SOPAS / ESPECIALES -------------------------------------
  { id: "27", name: "Crema de Troll", description: "A pesar del nombre, deliciosa.", stock: 6, price: 5800, category: "sopa" },
  { id: "28", name: "Sopa del Invernadero", description: "De calabaza y caléndula.", stock: 8, price: 5200, category: "sopa" },
  { id: "29", name: "Sopa del Bosque Nocturno", description: "Con champiñones encantados.", stock: 9, price: 6300, category: "sopa" },
  { id: "30", name: "Guiso del Castillo", description: "Hecho al fuego de dragón.", stock: 10, price: 7400, category: "sopa" },
];

// ============================================================
// 🕐 Simula una API devolviendo productos con 1 s de demora
// ============================================================
export const getProductos = () =>
  new Promise((resolve) => setTimeout(() => resolve(productos), 1000));
