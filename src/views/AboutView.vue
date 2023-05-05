<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="goHomePage">Home으로 이동</button>
    <h2>Store</h2>
    <p>counter: {{ store.counter }}</p>
    <p>counter2: {{ counter }}</p>
    <p>doubleCount: {{ store.doubleCount }}</p>
    <button @click="store.increament()">Click!!</button>
    <p>doubleCountPlusOne: {{ store.doubleCountPlusOne }}</p>
    <button @click="increament()">Click!!</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore(); // reactive 타입
//const { count } = useCounterStore(); // 반응성을 잃는다.
const { counter } = storeToRefs(store);
const { increament } = store; // 반응형이 아니라 함수라 가능

const router = useRouter();
const goHomePage = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped></style>
