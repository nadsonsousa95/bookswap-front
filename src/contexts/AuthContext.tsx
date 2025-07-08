import { createContext, useContext, useState } from "react";
import { AuthService } from "../services/AuthService";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch (err) {
      console.error("Erro ao carregar usuário:", err);
      localStorage.removeItem("user");
      return null;
    }
  });

  async function login(email: string, password: string) {
    const user = await AuthService.login(email, password);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
