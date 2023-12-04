<script setup lang="tsx">
import { createSide } from './utils/index'
import { ref, computed } from 'vue'

const side = ref(3)

const aaa = computed(() => {
  return createSide(side.value)
})

console.log(aaa, '我是aaa');

const isTop = ref(true)

setInterval(() => {
  if (isTop.value) {
    side.value++
  } else {
    side.value--
  }
  if (side.value === 10 || side.value === 3) isTop.value = !isTop.value
}, 1000)


</script>

<template>
  <div id="app">
    <component :is="aaa"></component>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
:deep(.sides) {
  width: 100px;
  height: 1px;
  background-color: black;
  transform-origin: 100px 0;
  transition: all .5s;
}
</style>
