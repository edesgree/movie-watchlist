<script setup>
import { ref } from 'vue';
import iconLogo from './assets/img/icon-movie.svg';
</script>

<template>
  <main class="container">
    <header>
      <nav>
        <ul>
          <li>
            <router-link to="/">
              <div class="logo">
                <img :src="iconLogo" class="logo" alt="movie watchlist" />

                <hgroup>
                  <h1>Movizz</h1>
                  <h2>A simple way to keep a movie watch list</h2>
                </hgroup>
              </div>
            </router-link>
          </li>
        </ul>
        <ul>
          <li><router-link to="/watchlist">My watch list</router-link></li>
          <li><a href="#">Link</a></li>
          <li><a href="#" role="button">Button</a></li>
        </ul>
      </nav>
    </header>

    <router-view></router-view>
  </main>
</template>
