<script setup>
import { useMoviesStore } from '../store';
import MovieCard from '../components/MovieCard.vue';
const store = useMoviesStore();
console.log('myWatchList', store.myWatchList);
</script>
<template>
  <h1>My watch list</h1>
  <ul class="movies-list">
    <li v-for="movie in store.myWatchList" :key="movie.imdbID">
      <movie-card :movie="movie" type="watchlist" />
    </li>
  </ul>
</template>
