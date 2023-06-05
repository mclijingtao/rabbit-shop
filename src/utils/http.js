import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/user";

const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// 添加请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    ElMessage({
      type: "warning",
      message: error.response.data.message,
    });
    return Promise.reject(error);
  }
);

export default httpInstance;
