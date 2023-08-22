<script setup>
import { ref } from 'vue';
import { useMoviesStore } from '../store';

import InputField from '../components/InputField.vue';
const store = useMoviesStore();

const apiKEY = 'ce739ee3';
const search = ref('...');
const movies = ref([]);

// fetch OMDB API with search query
const fetchMovies = async (query) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKEY}&s=${query}`
  );
  const data = await response.json();
  console.log(data);
  movies.value = data.Search;
  console.log('movies', movies.value);

  return data;
};

// add movie to watchlist
const addToWatchlist = (movie) => {
  store.addToWatchlist(movie);
  console.log('add to watch list', movie.Title);
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
      <button @click.prevent="fetchMovies(search)">Search movie</button>
    </div>
    search for : {{ search }}
  </form>
  <div class="results">
    <div v-for="movie in movies" :key="movie.imdbID">
      <h2>{{ movie.Title }}</h2>
      <img :src="movie.Poster" :alt="movie.Title" />
      <button @click.prevent="addToWatchlist(movie)">Add to watchlist</button>
    </div>
  </div>
</template>
