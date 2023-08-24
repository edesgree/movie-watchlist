<script setup>
import { ref } from 'vue';
import iconLogo from './assets/img/icon-movie.svg';
import Search from './components/Search.vue';
</script>

<template>
  <main class="container">
    <header>
      <nav class="nav">
        <div class="logo">
          <hgroup>
            <router-link to="/"><h1>🍿 Movizz</h1></router-link>
            <h2>keep a watch list</h2>
          </hgroup>
        </div>

        <ul>
          <li>
            <Search></Search>
          </li>
          <li>
            <router-link to="/watchlist" role="button"
              >❤️ My watch list</router-link
            >
          </li>
        </ul>
      </nav>
    </header>

    <router-view></router-view>
  </main>
</template>
