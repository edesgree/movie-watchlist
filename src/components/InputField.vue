<script setup>
import { ref } from 'vue';

defineProps({
  label: String,
  unique: String
});
const value = ref('');
</script>

<template>
  <div class="input-wrapper">
    <label :for="unique">{{ label }}</label>
    <input
      type="text"
      :id="unique"
      v-model="value"
      v-on:input="$emit('updated', value)"
    />
  </div>
</template>
