import http from "./HttpCommon";

const findAll = (url) => {
  return http.get(url);
};

const findById = (url, id) => {
  return http.get(`/${url}/${id}`);
};

const save = (url, data) => {
  return http.post(url, data);
};

const update = (url, id, data) => {
  url = `/${url}/${id}`;
  return http.put(url, data);
};

const remove = (url, id) => {
  return http.delete(`/${url}/${id}`);
};

export default {
  findAll,
  findById,
  save,
  update,
  remove,
};
