<template>
  <section>
    <Header />
    <div class="p-20px text-center">
      <h1 class="font-bold text-2xl mb-2">
        vite version: {{ devDependencies.vite }}
      </h1>
      <div class="flex-c">
        <Medal />
        <Logo1 />
        <Logo2 />
        <Logo3 />
        <Logo4 />
        <Logo5 />
      </div>
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
  </section>
</template>

<script setup lang="ts">
import Header from './components/Header/index.vue';
import Medal from '@assets/icons/1stPlaceMedal.svg';
import { devDependencies } from '../package.json';
import Logo1 from '@assets/icons/logo-1.svg';
import Logo2 from '@assets/icons/logo-2.svg';
import Logo3 from '@assets/icons/logo-3.svg';
import Logo4 from '@assets/icons/logo-4.svg';
import Logo5 from '@assets/icons/logo-5.svg';
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  > section {
    height: 100%;
    width: 100%;
  }
}
</style>
