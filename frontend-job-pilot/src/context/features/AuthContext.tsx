import { createContext, use, useEffect, useState } from "react";

interface AuthContextProps {
  children: React.ReactNode;
}

type userType = {
  id: number;
  email: string;
  name: string;
} | null;

interface AuthContextValue {
  token: string;
  user: userType;
  isLoading: boolean;
  isTogglePin: boolean;
  setIsTogglePin: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<userType>>;
}

const Auth = createContext<AuthContextValue | undefined>(undefined);

export default function AuthContext({ children }: AuthContextProps) {
  const [user, setUser] = useState<userType>(null);
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isTogglePin, setIsTogglePin] = useState(true);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken as string);
    }

    if (localUser) {
      setUser(JSON.parse(localUser as string));
    }
    setIsLoading(false);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("isPin", JSON.stringify(isTogglePin));
  }, [isTogglePin]);

  return (
    <Auth.Provider
      value={{
        user,
        token,
        isLoading,
        isTogglePin,
        setIsTogglePin,
        setToken,
        setUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
}

export function useAuth() {
  const context = use(Auth);
  if (!context) {
    throw new Error("useAuth must be used within a AuthContext");
  }
  return context;
}
