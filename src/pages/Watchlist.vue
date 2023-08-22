<script setup>
import { useMoviesStore } from '../store';
import MovieCard from '../components/MovieCard.vue';
const store = useMoviesStore();
console.log('moviesList', store.moviesList);
</script>
<template>
  Watchlist
  <ul class="movies-list">
    <li v-for="movie in store.moviesList" :key="movie.imdbID">
      <movie-card :movie="movie" type="watchlist" />
    </li>
  </ul>
</template>
