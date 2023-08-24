<script setup>
import { useMoviesStore } from '../store';

import MovieCard from '../components/MovieCard.vue';
import iconPlaceholder from '../assets/img/icon-film.svg';

const store = useMoviesStore();
</script>
<template>
  <ul v-if="store.moviesResult" class="movies-list">
    <li v-for="movie in store.moviesResult" :key="movie.imdbID">
      <movie-card :movie="movie" type="search" />
    </li>
  </ul>
</template>
