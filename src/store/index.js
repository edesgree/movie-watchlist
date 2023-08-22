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
      // add only if not already in list
      if (!this.moviesList.find((m) => m.imdbID === movie.imdbID)) {
        this.moviesList.unshift(movie);
        localStorage.setItem('watchlist', JSON.stringify(this.moviesList));
        console.log('movie added');
      } else {
        console.log('movie already in list');
      }
    },
    removeFromWatchlist(movie) {
      const index = this.moviesList.findIndex((m) => m.imdbID === movie.imdbID);
      this.moviesList.splice(index, 1);
      localStorage.setItem('watchlist', JSON.stringify(this.moviesList));
    }
  }
});
