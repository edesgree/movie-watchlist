<script setup>
import { ref } from 'vue';
import { useMoviesStore } from '../store';
import { fetchMovies } from '../api'; // Import the fetchMovies function

import InputField from '../components/InputField.vue';
import iconPlaceholder from '../assets/img/icon-film.svg';

const store = useMoviesStore();
const search = ref('...');
const movies = ref([]);

// get API data
const handleSearch = async (searchQuery) => {
  movies.value = await fetchMovies(searchQuery); // call the api service
  // Loop through movies and add isWatched property

  movies.value.forEach((movie) => {
    movie.isWatched = store.moviesList.some((m) => m.imdbID === movie.imdbID);
  });
  console.log('movies', movies.value);
};
</script>
<template>
  Home

  <form method="post" action="#">
    <input-field
      unique="search"
      label="Search"
      v-on:updated="search = $event"
    ></input-field>
    <div class="input-wrapper">
      <button @click.prevent="handleSearch(search)">Search movie</button>
    </div>
    search for : {{ search }}
  </form>
  <div class="results">
    <div v-for="movie in movies" :key="movie.imdbID">
      <h2>{{ movie.Title }}</h2>

      <img
        :src="movie.Poster === 'N/A' ? iconPlaceholder : movie.Poster"
        :alt="movie.Title"
        class="poster"
      />
      <p v-if="movie.isWatched">deja vu !</p>
      <button
        @click.prevent="store.addToWatchlist(movie)"
        :disabled="movie.isWatched"
      >
        Add to watchlist
      </button>
    </div>
  </div>
</template>
