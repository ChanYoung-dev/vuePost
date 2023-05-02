<template>
  <AppLoading v-if="loading" />

  <AppError v-else-if="error" :message="error.message" />

  <div v-else>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">
      {{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
    </p>
    <hr class="my-4" />
    <AppError v-if="removeError" :message="removeError.message" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button
          class="btn btn-outline-danger"
          @click="remove"
          :disabled="removeLoading"
        >
          <template v-if="removeLoading">
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </template>
          <template v-else> 삭제 </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/hooks/useAxios';

const props = defineProps({
  // id: Number, 숫자로 한 이유는 우리가 임의로 posts.js json데이터를 만들때 id는 숫자이기때문이다 값을 찾아오려면 숫자로해야한다
  id: [String, Number],
});

const router = useRouter();

// const id = route.params.id;
/**
 * ref
 * 장) 객체 할당 가능
 * 단) form.value.title, form.value.content
 * 장) 일관성
 *
 * reactvie
 * 단) 객체 할당 불가능
 * 장) form.title, form.content
 */
// const post = ref({
//   title: null,
//   content: null,
//   createdAt: null,
// });

// const fetchPost = async () => {
//   try {
//     const { data } = await getPostById(props.id);
//     setPost(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// const setPost = ({ title, content, createdAt }) => {
//   post.value.title = title;
//   post.value.content = content;
//   post.value.createdAt = createdAt;
// };
// fetchPost();

const { vAlert, vSuccess } = useAlert();
const { error, loading, data: post } = useAxios(`/posts/${props.id}`);

const {
  error: removeError,
  loading: removeLoading,
  execute,
} = useAxios(
  `/posts/${props.id}`,
  { method: 'delete' },
  {
    immediate: false,
    onSuccess: () => {
      vSuccess('삭제가 완료되었습니다.');
      router.push({ name: 'PostList' });
    },
    onError: err => {
      vAlert(err.message);
    },
  },
);

// const remove = async () => {
//   try {
//     if (confirm('삭제 하시겠습니까?') === false) {
//       return;
//     }
//     await deletePost(props.id);
//     router.push({ name: 'PostList' });
//   } catch (error) {
//     console.error(error);
//   }
// };

const remove = async () => {
  if (confirm('삭제 하시겠습니까?') === false) {
    return;
  }
  execute();
};

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
  router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
