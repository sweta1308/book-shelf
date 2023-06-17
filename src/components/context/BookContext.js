import { createContext, useContext, useState } from "react";
import { books } from "../../data/data";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState(books);

  const changeCategoryHandler = (bookId, bookCategory) => {
    let updatedData = bookData;
    if (bookCategory === "") {
      updatedData = bookData.filter((book) => book.id !== bookId);
    } else {
      updatedData = bookData.map((book) =>
        book.id === bookId ? { ...book, category: bookCategory } : book
      );
    }
    setBookData(updatedData)
  };

  const currReading = bookData.filter(
    (book) => book.category === "Currently Reading"
  );
  const alreadyRead = bookData.filter((book) => book.category === "Read");
  const wantToRead = bookData.filter(
    (book) => book.category === "Want to Read"
  );

  return (
    <BookContext.Provider
      value={{ currReading, alreadyRead, wantToRead, changeCategoryHandler }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
