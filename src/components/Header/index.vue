<template>
  <div class="header m-16px flex-c flex-col">
    <p :class="styles.header">This is Header</p>
    <img :src="logoSrc" alt="" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'HeaderIndex'
};
</script>

<script setup lang="ts">
import styles from './index.module.scss';
import logoSrc from '@assets/imgs/logo.png';
// import Worker from './example.js?worker';

// const worker = new Worker();
// worker.addEventListener('message', (e) => {
//   console.log(e);
// });
</script>

<style lang="scss" scoped>
.header {
  background: url('@assets/imgs/background.png') no-repeat;
}
</style>
