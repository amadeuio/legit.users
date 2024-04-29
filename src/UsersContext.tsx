import {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "./components/UserList/UserItem/UserItem";

type setUsers = Dispatch<SetStateAction<User[]>>;

interface UsersContext {
  users: User[];
  setUsers: setUsers;
}

interface UsersContextProviderProps {
  children: ReactNode;
}

const UsersContext = createContext<UsersContext | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useUsersContext = () => {
  return useContext(UsersContext);
};

export const UsersContextProvider: FC<UsersContextProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  return <UsersContext.Provider value={{ users, setUsers }}>{children}</UsersContext.Provider>;
};
