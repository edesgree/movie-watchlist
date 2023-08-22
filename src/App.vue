<script setup>
import { ref } from 'vue';
import iconLogo from './assets/img/icon-movie.svg';

import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
    <header>
      <router-link to="/">
        <div class="logo">
          <img :src="iconLogo" class="logo" alt="movie watchlist" />
          <h1>Movizz</h1>
        </div></router-link
      >
      <router-link to="/watchlist">My watch list</router-link>
    </header>

    <router-view></router-view>
  </div>
</template>
