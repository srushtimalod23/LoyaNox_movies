const BASE_URL = "https://api.imdbapi.dev";

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/titles?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};