import { createContext, useContext, useState } from "react";
import { books } from "../../data/data";

const SearchFilterContext = createContext();

export const SearchFilterProvider = ({ children }) => {
  const [inputData, setInputData] = useState("");

  const searchHandler = (e) => setInputData(e.target.value);

  const filteredBooks =
    inputData.length === 0
      ? []
      : books.filter(
          (book) =>
            book.book.toLowerCase().includes(inputData.toLowerCase().trim()) ||
            book.author.toLowerCase().includes(inputData.toLowerCase().trim())
        );

  return (
    <SearchFilterContext.Provider
      value={{ inputData, searchHandler, filteredBooks }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

export const useFilter = () => useContext(SearchFilterContext);
