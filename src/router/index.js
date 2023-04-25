import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/posts',
    component: PostListView,
    name: 'PostList',
  },
  {
    path: '/posts/create',
    component: PostCreateView,
    name: 'PostCreate',
  },
  {
    path: '/posts/:id',
    component: PostDetailView,
    name: 'PostDetail',
    props: true,
    // props: route => ({ id: parseInt(route.params.id) }), 숫자로 한 이유는 우리가 임의로 posts.js json데이터를 만들때 id는 숫자이기때문이다 값을 찾아오려면 숫자로해야한다
    // 하지만 db-json을 사용했을때 문자열도 인식하기때문에 문자로 넣었다.
  },
  {
    path: '/posts/:id/edit',
    component: PostEditView,
    name: 'PostEdit',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/nested',
    name: 'NestedView',
    component: NestedView,
    children: [
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(''),
  routes: routes,
});

export default router;
