// fetch OMDB API with search query
const apiKEY = 'ce739ee3';

export async function fetchMovies(query) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKEY}&s=${query}`
  );
  const data = await response.json();
  return data.Search || [];
}
