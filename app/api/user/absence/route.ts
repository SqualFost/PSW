const API_URL = "http://127.0.0.1:8000"; // URL de base de l'API

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  // Effectue une requête à l'API avec l'URL complète
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  // Vérifie si la requête a réussi
  if (!res.ok) {
    throw new Error(`Erreur de l'API : ${res.statusText}`);
  }

  return res.json(); // Renvoie la réponse en JSON
}

// Objet pour récupérer les absences
export const absence = {
  getAbsences: () => fetchAPI("/psw/absence/1"), // Appelle l'API pour récupérer les absences
};
