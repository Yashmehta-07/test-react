import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";
import { authAxios, publicAxios } from "../Api/authAxios";
import { IAuthContext, ILogin } from "./type";

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

const initialValues: IAuthContext = {
  login: () => Promise.resolve(null),
  logout: () => Promise.resolve(),
  getUserDetails: () => Promise.resolve(null),
  isLoggedIn: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthContext = createContext(initialValues);

export function AuthProvider() {
  // const chat = useAuth();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  const [userDetails, setUserDetails] = useState();
  const tokenStore = useAuthStore();

  const getUserDetails = useCallback(async () => {
    try {
      const { data } = await authAxios.get("/info");
      setUserDetails(data?.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const login = useCallback(async (payload: ILogin) => {
    const { data } = await publicAxios.post("/login", payload);
    useAuthStore.setState({
      token: data?.token,
      refreshToken: data?.refreshToken,
      isLoggedIn: true,
    });
  }, []);

  const logout = useCallback(async () => {
    tokenStore?.resetToken();
    navigate("/login");
  }, [navigate, tokenStore]);

  const contextValue: IAuthContext = useMemo(
    () => ({
      login,
      logout,
      getUserDetails,
      userDetails,
      isLoggedIn,
    }),
    [login, logout, getUserDetails, userDetails, isLoggedIn]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <Outlet />
    </AuthContext.Provider>
  );
}
