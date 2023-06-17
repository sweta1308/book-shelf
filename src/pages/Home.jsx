import { BookCard } from "../components/bookcard/BookCard";
import { useBook } from "../context/BookContext";
import "./Pages.css";

export const Home = () => {
  const { currReading, alreadyRead, wantToRead } = useBook();
  return (
    <>
      <h1>Currently Reading</h1>
      <hr />
      <div className="book-list">
        {currReading.map((book) => (
          <div key={book.id}>
            <BookCard bookObj={book} />
          </div>
        ))}
      </div>

      <h1>Want to Read</h1>
      <hr />

      <div className="book-list">
        {wantToRead.map((book) => (
          <div key={book.id}>
            <BookCard bookObj={book} />
          </div>
        ))}
      </div>

      <h1>Already Read</h1>
      <hr />

      <div className="book-list">
        {alreadyRead.map((book) => (
          <div key={book.id}>
            <BookCard bookObj={book} />
          </div>
        ))}
      </div>
    </>
  );
};
