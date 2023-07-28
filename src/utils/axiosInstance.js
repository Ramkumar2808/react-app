import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  //   baseURL: 'http://example.com/api', // Your API base URL
  withCredentials: true, // Send cookies with each request
});

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Return the response data if it's successful
    return response;
  },
  (error) => {
    // Handle errors here
    // You can also throw an error to propagate it to the calling code
    console.log(error);
    toast.error(
      error.response.data.message ? error.response.data.message : error.message
    );
    throw error;
  }
);

export default instance;
