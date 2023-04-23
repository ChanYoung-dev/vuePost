import { posts } from '.';

export function getPosts(params) {
  // return axios.get('http://localhost:3001/posts', { params });
  return posts.get('/', { params });
}

export function getPostById(id) {
  // return axios.get(`http://localhost:3001/posts/${id}`);
  return posts.get(id); // id를 문자열로 강제로 변환
}

export function createPost(data) {
  return posts.post('', data);
}

export function updatePost(id, data) {
  return posts.put(id, data);
}

export function deletePost(id) {
  return posts.delete(`/${id}`);
}
