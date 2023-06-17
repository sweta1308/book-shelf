import { useBook } from "../context/BookContext";
import "./BookCard.css";

export const BookCard = ({ bookObj }) => {
  const { id, book, author, image, category } = bookObj;
  const { changeCategoryHandler } = useBook();
  return (
    <>
      <div className="book">
        <img src={image} alt="book" />
        <select
          value={category}
          onChange={(e) => changeCategoryHandler(id, e.target.value)}
          style={{ display: "block" }}
        >
          <option disabled>Move to...</option>
          <option value="Currently Reading">Currently reading</option>
          <option value="Already Read">Already Read</option>
          <option value="Want to Read">Want to Read</option>
          <option value="None">None</option>
        </select>
        <h3>{book}</h3>
        <h3 className="author">{author}</h3>
      </div>
    </>
  );
};
