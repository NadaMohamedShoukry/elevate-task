import { api } from "./api";

export const getPosts = async () => {
  const { data } = await api.get("posts");
  return data;
};
export const getPost = async (id) => {
  const { data } = await api.get(`posts/${id}`);
  return data;
};

export const addPost = async (body) => {
  const { data } = await api.post(`posts`, body);
  return data;
};
