<script setup lang="tsx">
import HelloWorld from './components/HelloWorld.vue'
import { createSide } from './utils/index'
import { ref, computed } from 'vue'

const side = ref(6)

const aaa = computed(() => {
  return createSide(side.value)
})

const number = ref(1)

console.log(aaa, '我是aaa');


setInterval(() => {
  number.value++
  if (!(number.value % 3)) {
    side.value = 10
  } else if (!(number.value % 2)) {
    side.value = 8
  } else {
    side.value = 6
  }
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
  width: 50px;
  height: 1px;
  background-color: black;
  transform-origin: 50px 0;
  transition: all .5s;
}
</style>
