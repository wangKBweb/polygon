<script setup lang="tsx">
import HelloWorld from './components/HelloWorld.vue'
import { createSide } from './utils/index'
import { ref } from 'vue'

const aaa = ref(createSide(6))
console.log(aaa, '我是aaa');




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
  width: 50px;
  height: 1px;
  background-color: black;
  transform-origin: 50px 0;
}
</style>
