import { BookCard } from "../components/bookcard/BookCard";
import { useFilter } from "../components/context/SearchFilterContext";
import "./Pages.css";

export const Search = () => {
  const { filteredBooks } = useFilter();
  return (
    <>
      <div className="book-list">
      {filteredBooks.length > 0 ? filteredBooks.map((book) => (
          <div key={book.id}>
            <BookCard bookObj={book} />
          </div>
        )) : <h1>Enter Book or Author or Category Name...</h1>}
      </div>
    </>
  );
};
