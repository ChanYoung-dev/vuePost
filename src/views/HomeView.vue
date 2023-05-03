<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
    <hr class="my-4" />
    <h2>{{ $person.name }}</h2>
    <button class="btn btn-primary" @click="person.say">click person</button>
  </div>
  {{ countState }}
  {{ countState.count }}
</template>
<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  },
};
</script>

<script setup>
import { inject, ref, reactive, toRef } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);

const person = inject('person');
console.log('person.name: ', person.name);
console.log('hello!!');

const count = ref(0);
const countState = reactive({
  count: ref(0), //key value가 서로 같으면 생략가능 = count: count,
});
console.log('countState.count', countState.count);
</script>

<style lang="scss" scoped></style>
