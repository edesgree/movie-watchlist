import { defineStore } from 'pinia';
export const useMoviesStore = defineStore('movies', {
  state: () => ({
    myWatchList: JSON.parse(localStorage.getItem('watchlist')) || [],
    moviesResult: []
  }),
  getters: {
    getMyWatchList(state) {
      return state.myWatchList;
    }
  },
  actions: {
    addToWatchlist(movie) {
      // add only if not already in list
      if (!this.myWatchList.find((m) => m.imdbID === movie.imdbID)) {
        this.myWatchList.unshift(movie);
        localStorage.setItem('watchlist', JSON.stringify(this.myWatchList));
        console.log('movie added');
      } else {
        console.log('movie already in list');
      }
    },
    removeFromWatchlist(movie) {
      const index = this.myWatchList.findIndex(
        (m) => m.imdbID === movie.imdbID
      );
      this.myWatchList.splice(index, 1);
      localStorage.setItem('watchlist', JSON.stringify(this.myWatchList));
    }
  }
});
