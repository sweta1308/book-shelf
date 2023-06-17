import { useNavigate } from "react-router";
import "./Nav.css";
import { useFilter } from "../context/SearchFilterContext";

export const NavBar = () => {
  const navigate = useNavigate();
  const { inputData, searchHandler } = useFilter();
  return (
    <>
      <div className="navbar">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
        <input
          placeholder="Search for books..."
          className="search"
          onClick={() => navigate("/search")}
          value={inputData}
          onChange={searchHandler}
        />
      </div>
    </>
  );
};
