import axiosInstance from "../../utils/axiosInstance";

// const API_BASE_URL = "http://localhost:7000/api/users";
const API_END_POINT = "auth";

// API function to make the login request
export const login = async (credentials, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post(API_END_POINT, credentials);
    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      return rejectWithValue(error.response.data);
    }
  }
};

// API function to make the login request
export const logout = async () => {
  const response = await axiosInstance.get(`${API_END_POINT}/logout`);
  return response.data;
};
