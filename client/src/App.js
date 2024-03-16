import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateBook from "./components/CreateBook";
import StudentList from "./components/BookList";
import EditBook from "./components/EditBook";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/create-book"} className="nav-link">
             -- MY BOOKS -- 
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/create-book"} className="nav-link">
                  Create Books
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/book-list"} className="nav-link">
                  Books List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/create-book" element={<CreateBook />} />
            <Route exact path="/edit-book/:id" element={<EditBook />} />
            <Route exact path="/book-list" element={<StudentList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
