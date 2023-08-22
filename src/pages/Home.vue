<script setup>
import { ref } from 'vue';
import InputField from '../components/InputField.vue';

const apiKEY = 'ce739ee3';
const search = ref('coucou');
// fetch OMDB API with search query
const fetchMovies = async (query) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKEY}&s=${query}`
  );
  const data = await response.json();
  console.log(data);
  return data;
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
      <button @click.prevent="fetchMovies">Search movie</button>
    </div>
    search for : {{ search }}
  </form>
</template>
