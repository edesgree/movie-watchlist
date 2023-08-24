<script setup>
import { ref } from 'vue';
import { useMoviesStore } from '../store';
import { fetchMovies, fetchMovieById } from '../api'; // Import the fetchMovies function

import InputField from '../components/InputField.vue';

const store = useMoviesStore();
const search = ref('...');

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
        isWatched: store.myWatchList.some((m) => m.imdbID === movie.imdbID)
      };
    })
  );
  store.moviesResult = detailedMovies;
  console.log('movies', store.moviesResult);
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
</template>
