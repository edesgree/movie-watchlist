import { defineStore } from 'pinia';
export const useMoviesStore = defineStore('movies', {
  state: () => ({ moviesList: [] }),
  getters: {
    getMoviesList(state) {
      return state.moviesList;
    }
  },
  actions: {
    addToWatchlist(movie) {
      this.moviesList.push(movie);
    }
  }
});
