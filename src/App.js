import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { NavBar } from "./components/navbar/Nav";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
