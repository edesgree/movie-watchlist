import { defineStore } from 'pinia';
export const useMoviesStore = defineStore('movies', {
  state: () => ({
    moviesList: JSON.parse(localStorage.getItem('watchlist')) || []
  }),
  getters: {
    getMoviesList(state) {
      return state.moviesList;
    }
  },
  actions: {
    addToWatchlist(movie) {
      this.moviesList.push(movie);
      // add to local storage
      localStorage.setItem('watchlist', JSON.stringify(this.moviesList));
    },
    removeFromWatchlist(movie) {
      const index = this.moviesList.findIndex((m) => m.id === movie.id);
      this.moviesList.splice(index, 1);
    }
  }
});
