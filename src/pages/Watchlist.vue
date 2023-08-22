<script setup>
import { ref } from 'vue';
import { useMoviesStore } from '../store';

//get the watchlist from local storage
// const watchlist = ref(JSON.parse(localStorage.getItem('watchlist')) || []);
const store = useMoviesStore();
//const watchlist = ref(store.moviesList);
console.log('watchlist', store.moviesList);
</script>
<template>
  Watchlist
  <ul>
    <li v-for="movie in store.moviesList">
      <h2>{{ movie.Title }}</h2>
      <img :src="movie.Poster" :alt="movie.Title" />
      <button @click.prevent="store.removeFromWatchlist(movie)">remove</button>
    </li>
  </ul>
</template>
