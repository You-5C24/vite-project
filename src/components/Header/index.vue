<template>
  <div class="flex-c">
    <p :class="styles.header">This is Header</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeaderIndex",
};
</script>

<script setup lang="ts">
import styles from "./index.module.scss";
</script>

<style lang="scss" scoped></style>
