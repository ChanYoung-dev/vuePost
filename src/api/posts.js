import { posts } from '.';

export function getPosts(params) {
  // return axios.get('http://localhost:3001/posts', { params });
  return posts.get('/', { params });
}

export function getPostById(id) {
  // return axios.get(`http://localhost:3001/posts/${id}`);
  //return posts.get(id); // 파라미터가 문자만 들어갈수있다.
  return posts.get(`/${id}`);
}

export function createPost(data) {
  return posts.post('', data);
}

export function updatePost(id, data) {
  return posts.patch(`/${id}`, data);
}

export function deletePost(id) {
  return posts.delete(`/${id}`);
}
