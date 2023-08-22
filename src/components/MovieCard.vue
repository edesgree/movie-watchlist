<script setup>
import { useMoviesStore } from '../store';

defineProps({
  type: String,
  movie: Object
});
const store = useMoviesStore();
</script>

<template>
  <div class="movie">
    <img
      :src="movie.Poster === 'N/A' ? iconPlaceholder : movie.Poster"
      :alt="movie.Title"
      class="poster"
    />
    <div class="movie-details">
      <div class="movie-title">
        <h2 class="movie-title-text">{{ movie.Title }}</h2>
        <div class="movie-title-rating">⭐ <span>8.0</span></div>
      </div>
      <div class="movie-info">
        <span>112min</span>
        <span>2019</span>
        <div v-if="type == 'search'">
          <button
            @click.prevent="store.addToWatchlist(movie)"
            :disabled="movie.isWatched"
          >
            Add to watchlist
          </button>
        </div>
        <div v-else>
          <button @click.prevent="store.removeFromWatchlist(movie)">
            remove
          </button>
        </div>
      </div>
      <div class="movie-desc">{{ movie.Plot }}</div>
      <p v-if="movie.isWatched">deja vu !</p>
      <h1>{{ type }}</h1>
    </div>
  </div>
</template>
