import axiosClient from './axiosClient';

const categoryAPI = {
  getAll(params) {
    const url = '/categories';
    return axiosClient.get(url, {params});
  },
  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    return axiosClient.post('/category', data);
  },
  update(id, data) {
    return axiosClient.put(`/category/${id}`, data);
  },
  delete(id) {
    return axiosClient.delete(`/category/${id}`);
  },
};

export default categoryAPI;
