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
import { Filters } from "../types/Filters";

type setFilters = Dispatch<SetStateAction<Filters>>;

export interface FiltersContext {
  filters: Filters;
  setFilters: setFilters;
}

interface FiltersContextProviderProps {
  children: ReactNode;
}

const FiltersContext = createContext<FiltersContext | null>(null);

export const useFiltersContext = () => useContext(FiltersContext) as FiltersContext;

export const FiltersContextProvider: FC<FiltersContextProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    favorite: false,
    query: "",
  });

  const contextValue = useMemo(() => ({ filters, setFilters }), [filters, setFilters]);

  return <FiltersContext.Provider value={contextValue}>{children}</FiltersContext.Provider>;
};
