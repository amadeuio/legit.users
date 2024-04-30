import {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
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

export const useUsersContext = (): UsersContext | null => {
  return useContext(UsersContext);
};

export const UsersContextProvider: FC<UsersContextProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  return <UsersContext.Provider value={{ users, setUsers }}>{children}</UsersContext.Provider>;
};
