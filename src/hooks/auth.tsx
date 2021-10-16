import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface User {
    id: string;
    usuario: string;
    telefone: string;
    token?: string;
}
interface AuthState {
    token: string;
    user: User;
}

interface SignInCredentials {
    telefone: string;
    senha: string;
}

interface AuthContextData {
    user: User;
    loading: boolean;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@ElzaCast:token',
        '@ElzaCast:user',
      ]);

      if (token[1] && user[1]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        api.defaults.headers.Authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ telefone, senha }) => {
    const response = await api.post('/usuarios/logar', {
      telefone,
      senha,
    });

    const user = response.data;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let { token } = user;
    const resultado = token.split(' ');
    // eslint-disable-next-line prefer-destructuring
    token = resultado[1];

    await AsyncStorage.multiSet([
      ['@ElzaCast:token', token],
      ['@ElzaCast:user', JSON.stringify(user)],
    ]);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    api.defaults.headers.Authorization = `Bearer ${token}`;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@ElzaCast:token', '@ElzaCast:user']);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setData({
        token: data.token,
        user,
      });

      AsyncStorage.setItem('@ElzaCast:user', JSON.stringify(user));
    },

    [data.token],
  );

  return (
    <AuthContext.Provider value={{
      user: data.user, signIn, signOut, updateUser, loading,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
