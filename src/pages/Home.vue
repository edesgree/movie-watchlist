<script setup>
import { ref } from 'vue';
import { useMoviesStore } from '../store';
import { fetchMovies, fetchMovieById } from '../api'; // Import the fetchMovies function

import InputField from '../components/InputField.vue';
import MovieCard from '../components/MovieCard.vue';
import iconPlaceholder from '../assets/img/icon-film.svg';

const store = useMoviesStore();
const search = ref('...');
const movies = ref([]);

// get API data
const handleSearch = async (searchQuery) => {
  // first API call to get basic movie info
  const basicMovies = await fetchMovies(searchQuery);

  //loop through movies and fetch more detail by using a second API call (fetchMovieById)
  const detailedMovies = await Promise.all(
    basicMovies.map(async (movie) => {
      const details = await fetchMovieById(movie.imdbID);
      //  complete the object with details and isWatched property to each movie object (gets true if matching ids)
      return {
        ...details,
        isWatched: store.moviesList.some((m) => m.imdbID === movie.imdbID)
      };
    })
  );
  movies.value = detailedMovies;
  console.log('movies', movies.value);
};
</script>
<template>
  <form method="post" action="#" class="search-form">
    <input-field
      unique="search"
      label="Search"
      class="search-input"
      v-on:updated="search = $event"
    ></input-field>
    <div class="submit-wrapper">
      <button @click.prevent="handleSearch(search)">Search</button>
    </div>
  </form>
  {{ search }}
  <ul class="movies-list">
    <li v-for="movie in movies" :key="movie.imdbID">
      <movie-card :movie="movie" type="search" />
    </li>
  </ul>
</template>
