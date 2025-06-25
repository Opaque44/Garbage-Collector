import axiosInstance from "../utils/axiosInstance";

const baseURL = import.meta.env.VITE_API_BASE_URL + "/users";

const authApi = class {
  async createUser(data) {
    // console.log(baseURL, data);
    return (await axiosInstance.post(baseURL, data)).data;
  }
};

export default new authApi();
