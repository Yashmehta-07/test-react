import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { BASE_URL, initialToken } from "../../utils/constant";

import { useAuthStore } from "../Auth/useAuthStore";

export enum ContentType {
  Html = "text/html",
  TextPlain = "text/plain",
  FormData = "multipart/form-data",
  Json = "application/json",
  Urlencoded = "application/x-www-form-urlencoded",
  Stream = "application/octet-stream",
}

export const publicAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": ContentType.Json,
  },
});

export const authAxios = axios.create({
  baseURL: BASE_URL,
});

export const tokenIntercepetor = (config: InternalAxiosRequestConfig) => {
  const state = useAuthStore.getState();
  if (state.isLoggedIn) {
    config.headers.Authorization = state.token; 
    return config;
  }

  return config;
};

authAxios.interceptors.request.use(tokenIntercepetor);

export const refreshTokenInterceptor = async (
  error: AxiosError<AxiosResponse>
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const originalRequest: any = error.config || {};
  const { refreshToken } = useAuthStore.getState();

  if (
    error.response?.status === 401 &&
    !originalRequest._retry &&
    refreshToken
  ) {
    originalRequest._retry = true;

    try {
      const response = await publicAxios.post("/refresh-auth-token", {
        refreshToken,
      });

      const res = response.data;
      useAuthStore.setState((prevState) => ({
        ...prevState,
        token: res.token,
        refreshToken: res.refreshToken,
      }));

      originalRequest.headers.Authorization = res.token; // removed bearer

      return await authAxios(originalRequest);
    } catch (refreshError) {
      useAuthStore.setState((prev) => ({
        ...prev,
        token: initialToken,
        refreshToken: initialToken,
      }));

      throw refreshError;
    }
  }
  if (error.response?.status === 401) {
    useAuthStore.setState((prev) => ({
      ...prev,
      token: initialToken,
      refreshToken: initialToken,
    }));
  }
  throw error;
};

authAxios.interceptors.response.use(undefined, refreshTokenInterceptor);
