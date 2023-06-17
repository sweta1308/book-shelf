import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useBook } from "./BookContext";

const SearchFilterContext = createContext();

export const SearchFilterProvider = ({ children }) => {
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();
  const { bookData } = useBook();

  const searchHandler = (e) => setInputData(e.target.value);

  const returnHandler = () => {
    navigate("/");
    setInputData("");
  };

  const filteredBooks =
    inputData.length === 0
      ? []
      : bookData.filter(
          (book) =>
            book.book.toLowerCase().includes(inputData.toLowerCase().trim()) ||
            book.author
              .toLowerCase()
              .includes(inputData.toLowerCase().trim()) ||
            book.genre.toLowerCase().includes(inputData.toLowerCase().trim())
        );

  return (
    <SearchFilterContext.Provider
      value={{ inputData, searchHandler, returnHandler, filteredBooks }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

export const useFilter = () => useContext(SearchFilterContext);
