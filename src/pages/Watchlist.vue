<script setup>
import { useMoviesStore } from '../store';

const store = useMoviesStore();
console.log('moviesList', store.moviesList);
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
