<template>
  <svg aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'SvgIcon'
};
</script>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: ''
  }
});

const iconName = computed(() => {
  return `#${props.name}`;
});
</script>

<style lang="scss" scoped></style>
