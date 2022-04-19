<template>
  <Header />
  <div class="p-20px text-center">
    <h1 class="font-bold text-2xl mb-2">
      vite version: {{ devDependencies.vite }}
    </h1>
  </div>
  <button
    bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
    text="sm white"
    font="mono light"
    p="y-2 x-4"
    border="2 rounded blue-200"
  >
    Button
  </button>
</template>

<script setup lang="ts">
import Header from './components/Header/index.vue';
import { devDependencies } from '../package.json';
</script>

<style></style>
