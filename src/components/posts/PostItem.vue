<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ content }}
      </p>
      <a href="#" class="text-muted">{{ createdAt }}</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number],
  },
});
</script>

<style lang="scss" scoped></style>
