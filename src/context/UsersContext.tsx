import {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";
import { User } from "../types/User";

type setUsers = Dispatch<SetStateAction<User[]>>;

export interface UsersContext {
  users: User[];
  setUsers: setUsers;
}

interface UsersContextProviderProps {
  children: ReactNode;
}

const UsersContext = createContext<UsersContext | null>(null);

export const useUsersContext = () => useContext(UsersContext) as UsersContext;

export const UsersContextProvider: FC<UsersContextProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const contextValue = useMemo(() => ({ users, setUsers }), [users, setUsers]);

  return <UsersContext.Provider value={contextValue}>{children}</UsersContext.Provider>;
};
