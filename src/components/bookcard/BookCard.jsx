import "./BookCard.css";

export const BookCard = ({ bookObj }) => {
  const { book, author, image } = bookObj;
  return (
    <>
      <div className="book">
        <img src={image} alt="book" />
        <i className="fa-solid fa-caret-down arrow-down"></i>
        <h3>{book}</h3>
        <h3 className="author">{author}</h3>
      </div>
    </>
  );
};
