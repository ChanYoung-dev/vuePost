import { computed, unref } from 'vue';

export const useNumber = number => {
  const isOdd = computed(() => {
    console.log('변경 감지');
    return unref(number) % 2 === 1;
  });
  const isEven = computed(() => !isOdd.value);

  return {
    isOdd,
    isEven,
  };
};
