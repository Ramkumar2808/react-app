import axiosInstance from "../../utils/axiosInstance";

// const API_BASE_URL = "http://localhost:7000/api/users";
const API_END_POINT = "users";

export const fetchUsers = async ({ page, pageSize }) => {
  const response = await axiosInstance.get(
    `${API_END_POINT}?page=${page}&pageSize=${pageSize}`
  );
  console.log(response.data);
  return response.data;
};

export const addUser = async (user) => {
  const response = await axiosInstance.post(API_END_POINT, user);
  return response.data;
};

export const updateUser = async (userId, user) => {
  const response = await axiosInstance.put(`${API_END_POINT}/${userId}`, user);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axiosInstance.delete(`${API_END_POINT}/${userId}`);
  return response.data;
};
