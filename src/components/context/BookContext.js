import { createContext, useContext } from "react";
import { books } from "../../data/data";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const currReading = books.filter(
    (book) => book.category === "Currently Reading"
  );
  const alreadyRead = books.filter((book) => book.category === "Read");
  const wantToRead = books.filter((book) => book.category === "Want to Read");

  return (
    <BookContext.Provider value={{ currReading, alreadyRead, wantToRead }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
