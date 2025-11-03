// ============================================================
//  API de personajes de Harry Potter
// ------------------------------------------------------------


export async function getRandomWizard() {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const data = await response.json();

    // Filtra solo los que tienen imagen
    const withImages = data.filter((char) => char.image);

    // Selecciona uno aleatorio
    const random = withImages[Math.floor(Math.random() * withImages.length)];

    return random;
  } catch (error) {
    console.error("Error al obtener mago aleatorio:", error);
    return null;
  }
}
