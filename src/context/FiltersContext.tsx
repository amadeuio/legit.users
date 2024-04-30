import {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import { Filters } from "../types/Filters";

const initialFilters: Filters = {
  favorite: false,
  query: "",
};

type setFilters = Dispatch<SetStateAction<Filters>>;

export interface FiltersContext {
  filters: Filters;
  setFilters: setFilters;
}

interface FiltersContextProviderProps {
  children: ReactNode;
}

const FiltersContext = createContext<FiltersContext | null>(null);

export const useFiltersContext = (): FiltersContext | null => {
  return useContext(FiltersContext);
};

export const FiltersContextProvider: FC<FiltersContextProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>{children}</FiltersContext.Provider>
  );
};
