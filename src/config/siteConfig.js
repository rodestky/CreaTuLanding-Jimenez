// Datos "globales" del sitio para reutilizar en NavBar, Footer, etc.


const SITE = {
  brand: "The Wizard’s Table",
  links: [
    { label: "Inicio", href: "/" },
    { label: "Menú", href: "#menu" },
    { label: "Reservas", href: "#reservas" },
    { label: "Contacto", href: "#contacto" },
  ],
  contact: {
    address: "Callejón Mágico 9¾, Hogwarts Town",
    phone: "+56 9 97873223",
    email: "rodstki@gmail.com",
  },
  messages: {
    comingSoon: "Nuestras especialidades mágicas estarán disponibles muy pronto 🪄",
    greeting: "¡Joven mago! Aquí encontrarás muy pronto las delicias que preparamos en el laboratorio ✨"
  },
};

export { SITE };
