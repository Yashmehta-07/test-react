import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { initialToken } from "../../utils/constant";

type TAuthStore = {
  isLoggedIn: boolean;
  token: string | null;
  refreshToken: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setToken: (updateValue: any) => void;
  resetToken: () => void;
};

export const useAuthStore = create(
  persist<TAuthStore>(
    (set) => ({
      isLoggedIn: false,
      token: initialToken,
      refreshToken: initialToken,
      setToken: (updateValue) => {
        set({
          ...updateValue,
        });
      },
      resetToken: () => {
        set({
          token: initialToken,
          refreshToken: initialToken,
          isLoggedIn: false,
        });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
